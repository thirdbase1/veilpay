import {
  type CircuitContext,
  CostModel,
  QueryContext,
  sampleContractAddress,
  createConstructorContext,
} from "@midnight-ntwrk/compact-runtime";
import {
  Contract,
  InvoiceType,
  pureCircuits,
  type InvoiceOpening,
  type Ledger,
  ledger,
} from "../managed/veilpay3/contract/index.js";
import {
  type VeilPay3PrivateState,
  createVeilPay3PrivateState,
  withInvoiceOpening3,
  withPaymentNonce3,
} from "../witnesses3.js";
import { witnesses3 } from "../witnesses3.js";

/*
 * In-memory testbed for the v3 (private invoice) contract.
 *
 * Coins are consumed locally the way the official Midnight token-transfers
 * example tests do it: a ShieldedCoinInfo is constructed by hand and
 * "qualified" with an mt_index, which is sufficient for circuit execution
 * (Merkle proof checking happens at proof time on-chain, not in the simulator).
 */

export type EncodedCoinInfo = {
  nonce: Uint8Array;
  color: Uint8Array;
  value: bigint;
};

export type EncodedQualifiedCoin = EncodedCoinInfo & { mt_index: bigint };

export type EncodedSendResult = {
  sent: EncodedCoinInfo;
  change: { is_some: boolean; value?: EncodedCoinInfo };
};

export const qualifiedCoin = (
  value: bigint,
  color: Uint8Array,
  nonce: Uint8Array,
  mtIndex = 0n,
): EncodedQualifiedCoin => ({ nonce, color, value, mt_index: mtIndex });

const invoiceTypeCode = (value: "standard" | "multipay" | "donation"): InvoiceType =>
  value === "standard"
    ? InvoiceType.STANDARD
    : value === "multipay"
      ? InvoiceType.MULTI_PAY
      : InvoiceType.DONATION;

export class VeilPay3Simulator {
  readonly contract: Contract<VeilPay3PrivateState>;
  circuitContext: CircuitContext<VeilPay3PrivateState>;

  constructor(privateState: VeilPay3PrivateState) {
    this.contract = new Contract<VeilPay3PrivateState>(witnesses3);
    const { currentPrivateState, currentContractState, currentZswapLocalState } =
      this.contract.initialState(
        createConstructorContext(privateState, "0".repeat(64)),
      );
    this.circuitContext = {
      currentPrivateState,
      currentZswapLocalState,
      costModel: CostModel.initialCostModel(),
      currentQueryContext: new QueryContext(
        currentContractState.data,
        sampleContractAddress(),
      ),
    };
  }

  static deploy(
    merchantSecretKey: Uint8Array,
    receiptSecret: Uint8Array,
  ): VeilPay3Simulator {
    return new VeilPay3Simulator(
      createVeilPay3PrivateState(merchantSecretKey, receiptSecret),
    );
  }

  /** The zswap key that ownPublicKey() will see inside circuits (the payer). */
  setPayerCoinPublicKey(pk: Uint8Array): void {
    this.circuitContext.currentZswapLocalState = {
      ...this.circuitContext.currentZswapLocalState,
      coinPublicKey: { bytes: pk },
    };
  }

  getLedger(): Ledger {
    return ledger(this.circuitContext.currentQueryContext.state);
  }

  getZswapOutputs(): { coinInfo: EncodedCoinInfo; recipient: unknown }[] {
    return this.circuitContext.currentZswapLocalState
      .outputs as unknown as { coinInfo: EncodedCoinInfo; recipient: unknown }[];
  }

  getPrivateState(): VeilPay3PrivateState {
    return this.circuitContext.currentPrivateState;
  }

  setPrivateState(state: VeilPay3PrivateState): void {
    this.circuitContext.currentPrivateState = state;
  }

  buildOpening(args: {
    amount: bigint;
    tokenColor: Uint8Array;
    merchantCoinPk: Uint8Array;
    invoiceType: "standard" | "multipay" | "donation";
    paymentSecret: Uint8Array;
    salt: Uint8Array;
  }): { opening: InvoiceOpening; invoiceId: Uint8Array } {
    const opening: InvoiceOpening = {
      amount: args.amount,
      tokenColor: args.tokenColor,
      merchantCoinPk: args.merchantCoinPk,
      invoiceType: invoiceTypeCode(args.invoiceType),
      paymentSecret: args.paymentSecret,
      salt: args.salt,
    };
    return { opening, invoiceId: pureCircuits.invoiceCommitment(opening) };
  }

  issueInvoice(args: {
    amount: bigint;
    tokenColor: Uint8Array;
    merchantCoinPk: Uint8Array;
    invoiceType: "standard" | "multipay" | "donation";
    paymentSecret: Uint8Array;
    salt: Uint8Array;
    expiresAt: bigint;
  }): { ledger: Ledger; invoiceId: Uint8Array; opening: InvoiceOpening } {
    const { opening, invoiceId } = this.buildOpening(args);
    const invoiceIdHex = Buffer.from(invoiceId).toString("hex");
    this.circuitContext.currentPrivateState = withInvoiceOpening3(
      this.circuitContext.currentPrivateState,
      invoiceIdHex,
      opening,
    );
    const { context } = this.contract.impureCircuits.issueInvoice(
      this.circuitContext,
      invoiceId,
      invoiceTypeCode(args.invoiceType),
      args.expiresAt,
    );
    this.circuitContext = context;
    return {
      ledger: ledger(this.circuitContext.currentQueryContext.state),
      invoiceId,
      opening,
    };
  }

  private stagePayment(invoiceIdHex: string, opening: InvoiceOpening): Uint8Array {
    const invoiceId = new Uint8Array(Buffer.from(invoiceIdHex, "hex"));
    this.circuitContext.currentPrivateState = withPaymentNonce3(
      withInvoiceOpening3(this.circuitContext.currentPrivateState, invoiceIdHex, opening),
      invoiceIdHex,
      globalThis.crypto.getRandomValues(new Uint8Array(32)),
    );
    return invoiceId;
  }

  settleStandard(
    invoiceIdHex: string,
    opening: InvoiceOpening,
    coin: EncodedQualifiedCoin,
  ): { ledger: Ledger; result: EncodedSendResult } {
    const invoiceId = this.stagePayment(invoiceIdHex, opening);
    const { context, result } = this.contract.impureCircuits.settleStandard(
      this.circuitContext,
      invoiceId,
      coin as never,
    );
    this.circuitContext = context;
    return {
      ledger: ledger(this.circuitContext.currentQueryContext.state),
      result: result as unknown as EncodedSendResult,
    };
  }

  settleMultiPayment(
    invoiceIdHex: string,
    opening: InvoiceOpening,
    coin: EncodedQualifiedCoin,
  ): { ledger: Ledger; result: EncodedSendResult } {
    const invoiceId = this.stagePayment(invoiceIdHex, opening);
    const { context, result } = this.contract.impureCircuits.settleMultiPayment(
      this.circuitContext,
      invoiceId,
      coin as never,
    );
    this.circuitContext = context;
    return {
      ledger: ledger(this.circuitContext.currentQueryContext.state),
      result: result as unknown as EncodedSendResult,
    };
  }

  acceptDonation(
    invoiceIdHex: string,
    opening: InvoiceOpening,
    coin: EncodedQualifiedCoin,
    amount: bigint,
  ): { ledger: Ledger; result: EncodedSendResult } {
    const invoiceId = this.stagePayment(invoiceIdHex, opening);
    const { context, result } = this.contract.impureCircuits.acceptDonation(
      this.circuitContext,
      invoiceId,
      coin as never,
      amount,
    );
    this.circuitContext = context;
    return {
      ledger: ledger(this.circuitContext.currentQueryContext.state),
      result: result as unknown as EncodedSendResult,
    };
  }

  settleMulti(invoiceIdHex: string): Ledger {
    const invoiceId = new Uint8Array(Buffer.from(invoiceIdHex, "hex"));
    this.circuitContext = this.contract.impureCircuits.settleMulti(
      this.circuitContext,
      invoiceId,
    ).context;
    return ledger(this.circuitContext.currentQueryContext.state);
  }

  cancelInvoice(invoiceIdHex: string): Ledger {
    const invoiceId = new Uint8Array(Buffer.from(invoiceIdHex, "hex"));
    this.circuitContext = this.contract.impureCircuits.cancelInvoice(
      this.circuitContext,
      invoiceId,
    ).context;
    return ledger(this.circuitContext.currentQueryContext.state);
  }
}
