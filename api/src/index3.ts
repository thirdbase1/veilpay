/**
 * VeilPay v3 API: private invoices with atomic shielded settlement.
 *
 * v2 (index2.ts) keeps the amount, token color, and merchant coin key in
 * public ledger state. v3 stores only the invoice commitment and lifecycle
 * metadata publicly; amount, token color, recipient coin key, invoice type,
 * payment secret, and salt travel through private witnesses.
 *
 * @packageDocumentation
 */

import * as VeilPay3Generated from '../../contract/src/managed/veilpay3/contract/index.js';
import { CompiledContract } from '@midnight-ntwrk/midnight-js-protocol/compact-js';
import * as witnesses3Module from '../../contract/src/witnesses3.js';

import { type ContractAddress } from '@midnight-ntwrk/midnight-js-protocol/compact-runtime';
import { type Logger } from 'pino';
import {
  type VeilPay3Providers,
  type Invoice3View,
  veilPay3PrivateStateKey,
} from './common-types.js';
import * as utils from './utils/index.js';
import {
  deployContract,
  findDeployedContract,
  type FoundContract,
} from '@midnight-ntwrk/midnight-js-contracts';
import { combineLatest, map, tap, from, type Observable } from 'rxjs';
import { toHex } from '@midnight-ntwrk/midnight-js-utils';
import {
  type VeilPay3PrivateState,
  createVeilPay3PrivateState,
  withInvoiceOpening3,
  withPaymentNonce3,
} from '../../contract/src/witnesses3.js';

/** A shielded coin ready to be spent in a v3 settlement circuit (zswap UTXO). */
export type SpendableCoin = {
  readonly nonce: Uint8Array;
  readonly color: Uint8Array;
  readonly value: bigint;
  readonly mtIndex: bigint;
};

type VeilPay3ContractType = VeilPay3Generated.Contract<VeilPay3PrivateState>;
export type DeployedVeilPay3Contract = FoundContract<VeilPay3ContractType>;

export const CompiledVeilPay3ContractContract = CompiledContract.make(
  'VeilPay3',
  VeilPay3Generated.Contract<VeilPay3PrivateState>,
).pipe(CompiledContract.withWitnesses(witnesses3Module.witnesses3));

export type InvoiceOpeningValue = VeilPay3Generated.InvoiceOpening;
export type InvoiceTypeName = 'standard' | 'multipay' | 'donation';

const INVOICE_TYPE_CODES: Record<InvoiceTypeName, VeilPay3Generated.InvoiceType> = {
  standard: VeilPay3Generated.InvoiceType.STANDARD,
  multipay: VeilPay3Generated.InvoiceType.MULTI_PAY,
  donation: VeilPay3Generated.InvoiceType.DONATION,
};

const toQualified = (coin: SpendableCoin) => ({
  nonce: coin.nonce,
  color: coin.color,
  value: coin.value,
  mt_index: coin.mtIndex,
});

const hexToBytes = (value: string): Uint8Array =>
  new Uint8Array(Buffer.from(value.replace(/^0x/, ''), 'hex'));

const bytesToHex = (value: Uint8Array): string => toHex(value);

/**
 * An API for a deployed VeilPay v3 contract.
 *
 * @remarks
 * Private state holds the invoice openings the participant is allowed to see.
 * The merchant holds the openings for invoices it issued; the payer holds the
 * opening it decrypted from the checkout link. `settle*` methods stage a fresh
 * payment nonce so multi-pay and donation payments each get a unique nullifier.
 */
export class VeilPay3API {
  private constructor(
    public readonly deployedContract: DeployedVeilPay3Contract,
    private readonly providers: VeilPay3Providers,
    private readonly logger?: Logger,
  ) {
    this.deployedContractAddress = deployedContract.deployTxData.public.contractAddress;
    providers.privateStateProvider.setContractAddress(this.deployedContractAddress);
    this.state$ = combineLatest(
      [
        providers.publicDataProvider
          .contractStateObservable(this.deployedContractAddress, { type: 'latest' })
          .pipe(
            map((contractState) => VeilPay3Generated.ledger(contractState.data)),
            tap((ledgerState) => logger?.trace({ ledgerSequence: ledgerState.sequence.toString() })),
          ),
        from(providers.privateStateProvider.get(veilPay3PrivateStateKey) as Promise<VeilPay3PrivateState>),
      ],
      (l, privateState) => {
        const openings = privateState?.invoiceOpenings ?? {};
        return Object.keys(openings).map((invoiceId) => {
          const state = l.invoices.member(hexToBytes(invoiceId))
            ? l.invoices.lookup(hexToBytes(invoiceId))
            : null;
          return {
            invoiceId,
            opening: openings[invoiceId],
            status: state?.status ?? null,
            version: state?.version ?? 0n,
            expiresAt: state?.expiresAt ?? 0n,
            hasReceipt: false,
          };
        });
      },
    );
  }

  readonly deployedContractAddress: ContractAddress;
  readonly state$: Observable<Invoice3View[]>;

  private async privateState(): Promise<VeilPay3PrivateState> {
    const existing = (await this.providers.privateStateProvider.get(
      veilPay3PrivateStateKey,
    )) as VeilPay3PrivateState | undefined;
    return (
      existing ??
      createVeilPay3PrivateState(utils.randomBytes(32), utils.randomBytes(32))
    );
  }

  /** Build the opening and its commitment without touching the chain. */
  buildOpening(args: {
    amount: bigint;
    tokenColor: Uint8Array;
    merchantCoinPk: Uint8Array;
    invoiceType: InvoiceTypeName;
    paymentSecret?: Uint8Array;
    salt?: Uint8Array;
  }): { opening: InvoiceOpeningValue; invoiceId: Uint8Array; paymentSecret: Uint8Array; salt: Uint8Array } {
    const paymentSecret = args.paymentSecret ?? utils.randomBytes(32);
    const salt = args.salt ?? utils.randomBytes(32);
    const opening: InvoiceOpeningValue = {
      amount: args.amount,
      tokenColor: args.tokenColor,
      merchantCoinPk: args.merchantCoinPk,
      invoiceType: INVOICE_TYPE_CODES[args.invoiceType],
      paymentSecret,
      salt,
    };
    const invoiceId = VeilPay3.pureCircuits.invoiceCommitment(opening);
    return { opening, invoiceId, paymentSecret, salt };
  }

  /** Merchant issues a private invoice; only the commitment reaches the ledger. */
  async issueInvoice(args: {
    amount: bigint;
    tokenColor: Uint8Array;
    merchantCoinPk: Uint8Array;
    invoiceType: InvoiceTypeName;
    expiresAt: bigint;
    paymentSecret?: Uint8Array;
    salt?: Uint8Array;
  }): Promise<{
    invoiceId: string;
    paymentSecret: string;
    salt: string;
    merchantCoinPk: string;
    tokenColor: string;
    expiresAt: string;
    invoiceType: InvoiceTypeName;
  }> {
    const { opening, invoiceId, paymentSecret, salt } = this.buildOpening(args);
    const invoiceIdHex = bytesToHex(invoiceId);
    this.logger?.info(`issuing v3 invoice ${invoiceIdHex}`);

    const state = await this.privateState();
    await this.providers.privateStateProvider.set(
      veilPay3PrivateStateKey,
      withInvoiceOpening3(state, invoiceIdHex, opening),
    );

    await this.deployedContract.callTx.issueInvoice(
      invoiceId,
      INVOICE_TYPE_CODES[args.invoiceType],
      args.expiresAt,
    );

    return {
      invoiceId: invoiceIdHex,
      paymentSecret: bytesToHex(paymentSecret),
      salt: bytesToHex(salt),
      merchantCoinPk: bytesToHex(opening.merchantCoinPk),
      tokenColor: bytesToHex(opening.tokenColor),
      expiresAt: args.expiresAt.toString(),
      invoiceType: args.invoiceType,
    };
  }

  private async stageSettlement(
    invoiceIdHex: string,
    opening: InvoiceOpeningValue,
  ): Promise<{ invoiceId: Uint8Array; state: VeilPay3PrivateState }> {
    const invoiceId = hexToBytes(invoiceIdHex);
    const state = withPaymentNonce3(
      withInvoiceOpening3(await this.privateState(), invoiceIdHex, opening),
      invoiceIdHex,
      utils.randomBytes(32),
    );
    await this.providers.privateStateProvider.set(veilPay3PrivateStateKey, state);
    return { invoiceId, state };
  }

  /** Payer settles a standard invoice and moves shielded value atomically. */
  async settleStandard(invoiceIdHex: string, opening: InvoiceOpeningValue, coin: SpendableCoin): Promise<void> {
    const { invoiceId } = await this.stageSettlement(invoiceIdHex, opening);
    await this.deployedContract.callTx.settleStandard(invoiceId, toQualified(coin));
  }

  /** Payer contributes to a Multi Pay campaign; the invoice stays open. */
  async settleMultiPayment(
    invoiceIdHex: string,
    opening: InvoiceOpeningValue,
    coin: SpendableCoin,
  ): Promise<void> {
    const { invoiceId } = await this.stageSettlement(invoiceIdHex, opening);
    await this.deployedContract.callTx.settleMultiPayment(invoiceId, toQualified(coin));
  }

  /** Payer donates a chosen amount; change returns to the payer and the invoice stays open. */
  async acceptDonation(
    invoiceIdHex: string,
    opening: InvoiceOpeningValue,
    coin: SpendableCoin,
    amount: bigint,
  ): Promise<void> {
    const { invoiceId } = await this.stageSettlement(invoiceIdHex, opening);
    await this.deployedContract.callTx.acceptDonation(invoiceId, toQualified(coin), amount);
  }

  /** Merchant closes a Multi Pay campaign. */
  async settleMulti(invoiceIdHex: string): Promise<void> {
    this.logger?.info(`settling v3 multi-pay invoice ${invoiceIdHex}`);
    await this.deployedContract.callTx.settleMulti(hexToBytes(invoiceIdHex));
  }

  /** Merchant cancels an unpaid invoice. */
  async cancelInvoice(invoiceIdHex: string): Promise<void> {
    this.logger?.info(`cancelling v3 invoice ${invoiceIdHex}`);
    await this.deployedContract.callTx.cancelInvoice(hexToBytes(invoiceIdHex));
  }

  /** Public verification: is this invoice settled (paid or closed)? */
  async isSettled(invoiceIdHex: string): Promise<boolean> {
    const contractState = await this.providers.publicDataProvider.queryContractState(
      this.deployedContractAddress,
    );
    if (!contractState) return false;
    const l = VeilPay3Generated.ledger(contractState.data);
    const invoiceId = hexToBytes(invoiceIdHex);
    if (!l.invoices.member(invoiceId)) return false;
    const status = l.invoices.lookup(invoiceId).status;
    return (
      status === VeilPay3Generated.InvoiceStatus.PAID ||
      status === VeilPay3Generated.InvoiceStatus.SETTLED
    );
  }

  /** Deploy a fresh v3 contract. */
  static async deploy(providers: VeilPay3Providers, logger?: Logger): Promise<VeilPay3API> {
    logger?.info('deployContract v3');
    const deployed = await deployContract(providers, {
      compiledContract: CompiledVeilPay3ContractContract,
      privateStateId: veilPay3PrivateStateKey,
      initialPrivateState: createVeilPay3PrivateState(utils.randomBytes(32), utils.randomBytes(32)),
    });
    return new VeilPay3API(deployed, providers, logger);
  }

  /** Join an already-deployed v3 contract by address. */
  static async join(
    providers: VeilPay3Providers,
    contractAddress: ContractAddress,
    logger?: Logger,
  ): Promise<VeilPay3API> {
    logger?.info({ joinContract: { contractAddress } });
    const deployed = await findDeployedContract<VeilPay3ContractType>(providers, {
      contractAddress,
      compiledContract: CompiledVeilPay3ContractContract,
      privateStateId: veilPay3PrivateStateKey,
      initialPrivateState: await VeilPay3API.getPrivateState(providers, contractAddress),
    });
    return new VeilPay3API(deployed, providers, logger);
  }

  private static async getPrivateState(
    providers: VeilPay3Providers,
    contractAddress: ContractAddress,
  ): Promise<VeilPay3PrivateState> {
    providers.privateStateProvider.setContractAddress(contractAddress);
    const existing = (await providers.privateStateProvider.get(
      veilPay3PrivateStateKey,
    )) as VeilPay3PrivateState | undefined;
    return existing ?? createVeilPay3PrivateState(utils.randomBytes(32), utils.randomBytes(32));
  }
}
