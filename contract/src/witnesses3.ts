import { type WitnessContext } from "@midnight-ntwrk/midnight-js-protocol/compact-runtime";

/*
 * Structural mirror of the generated `InvoiceOpening` struct. Keeping it local
 * (instead of importing managed/veilpay3) lets the host build run before the
 * pinned Compact 0.31.1 compiler emits the module in CI or a Linux/Docker env.
 */
export type InvoiceOpening = {
  readonly amount: bigint;
  readonly tokenColor: Uint8Array;
  readonly merchantCoinPk: Uint8Array;
  readonly invoiceType: number;
  readonly paymentSecret: Uint8Array;
  readonly salt: Uint8Array;
};

/*
 * Private state for a VeilPay v3 participant.
 *
 * The invoice opening never touches public ledger state: the contract stores
 * only its commitment. `invoiceOpenings` maps invoice-id hex -> opening so the
 * merchant can issue and the payer can settle without revealing amount, token
 * color, recipient coin key, invoice type, or the payment secret.
 *
 * `paymentNonces` supplies a fresh nonce per settlement so nullifiers differ
 * across multi-pay and donation payments on the same invoice.
 */

export type VeilPay3PrivateState = {
  readonly merchantSecretKey: Uint8Array;
  readonly receiptSecret: Uint8Array;
  readonly invoiceOpenings: Readonly<Record<string, InvoiceOpening>>;
  readonly paymentNonces: Readonly<Record<string, Uint8Array>>;
};

export const createVeilPay3PrivateState = (
  merchantSecretKey: Uint8Array,
  receiptSecret: Uint8Array,
  invoiceOpenings: Record<string, InvoiceOpening> = {},
  paymentNonces: Record<string, Uint8Array> = {},
): VeilPay3PrivateState => ({ merchantSecretKey, receiptSecret, invoiceOpenings, paymentNonces });

export const withInvoiceOpening3 = (
  state: VeilPay3PrivateState,
  invoiceId: string,
  opening: InvoiceOpening,
): VeilPay3PrivateState => ({
  ...state,
  invoiceOpenings: { ...state.invoiceOpenings, [invoiceId]: opening },
});

export const withPaymentNonce3 = (
  state: VeilPay3PrivateState,
  invoiceId: string,
  nonce: Uint8Array,
): VeilPay3PrivateState => ({
  ...state,
  paymentNonces: { ...state.paymentNonces, [invoiceId]: nonce },
});

export const witnesses3 = {
  merchantSecretKey: ({
    privateState,
  }: WitnessContext<unknown, VeilPay3PrivateState>): [VeilPay3PrivateState, Uint8Array] => [
    privateState,
    privateState.merchantSecretKey,
  ],

  receiptSecret: ({
    privateState,
  }: WitnessContext<unknown, VeilPay3PrivateState>): [VeilPay3PrivateState, Uint8Array] => [
    privateState,
    privateState.receiptSecret,
  ],

  invoiceOpening: (
    { privateState }: WitnessContext<unknown, VeilPay3PrivateState>,
    invoiceId: Uint8Array,
  ): [VeilPay3PrivateState, InvoiceOpening] => {
    const key = Buffer.from(invoiceId).toString("hex");
    const opening = privateState.invoiceOpenings[key];
    if (opening === undefined) {
      throw new Error(`No invoice opening known for invoice ${key}`);
    }
    return [privateState, opening];
  },

  paymentNonce: (
    { privateState }: WitnessContext<unknown, VeilPay3PrivateState>,
    invoiceId: Uint8Array,
  ): [VeilPay3PrivateState, Uint8Array] => {
    const key = Buffer.from(invoiceId).toString("hex");
    const nonce = privateState.paymentNonces[key];
    if (nonce === undefined) {
      throw new Error(`No payment nonce staged for invoice ${key}`);
    }
    return [privateState, nonce];
  },
};
