import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum InvoiceType { STANDARD = 0, MULTI_PAY = 1, DONATION = 2 }

export enum InvoiceStatus { ACTIVE = 0,
                            PAID = 1,
                            SETTLED = 2,
                            CANCELLED = 3,
                            REFUNDED = 4
}

export type InvoiceOpening = { amount: bigint;
                               tokenColor: Uint8Array;
                               merchantCoinPk: Uint8Array;
                               invoiceType: InvoiceType;
                               paymentSecret: Uint8Array;
                               salt: Uint8Array
                             };

export type InvoiceState = { invoiceCommitment: Uint8Array;
                             merchantAuthCommitment: Uint8Array;
                             invoiceType: InvoiceType;
                             expiresAt: bigint;
                             version: bigint;
                             status: InvoiceStatus
                           };

export type ShieldedCoinInfo = { nonce: Uint8Array;
                                 color: Uint8Array;
                                 value: bigint
                               };

export type QualifiedShieldedCoinInfo = { nonce: Uint8Array;
                                          color: Uint8Array;
                                          value: bigint;
                                          mt_index: bigint
                                        };

export type ShieldedSendResult = { change: { is_some: boolean,
                                             value: ShieldedCoinInfo
                                           };
                                   sent: ShieldedCoinInfo
                                 };

export type Witnesses<PS> = {
  merchantSecretKey(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  invoiceOpening(context: __compactRuntime.WitnessContext<Ledger, PS>,
                 invoiceId_0: Uint8Array): [PS, InvoiceOpening];
  receiptSecret(context: __compactRuntime.WitnessContext<Ledger, PS>): [PS, Uint8Array];
  paymentNonce(context: __compactRuntime.WitnessContext<Ledger, PS>,
               invoiceId_0: Uint8Array): [PS, Uint8Array];
}

export type ImpureCircuits<PS> = {
  issueInvoice(context: __compactRuntime.CircuitContext<PS>,
               invoiceId_0: Uint8Array,
               invoiceType_0: InvoiceType,
               expiresAt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleStandard(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  settleMultiPayment(context: __compactRuntime.CircuitContext<PS>,
                     invoiceId_0: Uint8Array,
                     coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  acceptDonation(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo,
                 amount_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleMulti(context: __compactRuntime.CircuitContext<PS>,
              invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  cancelInvoice(context: __compactRuntime.CircuitContext<PS>,
                invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  isSettled(context: __compactRuntime.CircuitContext<PS>,
            invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
}

export type ProvableCircuits<PS> = {
  issueInvoice(context: __compactRuntime.CircuitContext<PS>,
               invoiceId_0: Uint8Array,
               invoiceType_0: InvoiceType,
               expiresAt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleStandard(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  settleMultiPayment(context: __compactRuntime.CircuitContext<PS>,
                     invoiceId_0: Uint8Array,
                     coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  acceptDonation(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo,
                 amount_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleMulti(context: __compactRuntime.CircuitContext<PS>,
              invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  cancelInvoice(context: __compactRuntime.CircuitContext<PS>,
                invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  isSettled(context: __compactRuntime.CircuitContext<PS>,
            invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
}

export type PureCircuits = {
  merchantAuthCommitment(invoiceId_0: Uint8Array, secret_0: Uint8Array): Uint8Array;
  invoiceCommitment(opening_0: InvoiceOpening): Uint8Array;
  paymentNullifier(invoiceId_0: Uint8Array,
                   opening_0: InvoiceOpening,
                   nonce_0: Uint8Array): Uint8Array;
  merchantReceiptCommitment(invoiceId_0: Uint8Array,
                            opening_0: InvoiceOpening,
                            nonce_0: Uint8Array): Uint8Array;
  isZero(a_0: Uint8Array): boolean;
  isOpenTokenColor(a_0: Uint8Array): boolean;
  assertInvoiceOpening(state_0: InvoiceState, opening_0: InvoiceOpening): [];
}

export type Circuits<PS> = {
  merchantAuthCommitment(context: __compactRuntime.CircuitContext<PS>,
                         invoiceId_0: Uint8Array,
                         secret_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  invoiceCommitment(context: __compactRuntime.CircuitContext<PS>,
                    opening_0: InvoiceOpening): __compactRuntime.CircuitResults<PS, Uint8Array>;
  paymentNullifier(context: __compactRuntime.CircuitContext<PS>,
                   invoiceId_0: Uint8Array,
                   opening_0: InvoiceOpening,
                   nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  merchantReceiptCommitment(context: __compactRuntime.CircuitContext<PS>,
                            invoiceId_0: Uint8Array,
                            opening_0: InvoiceOpening,
                            nonce_0: Uint8Array): __compactRuntime.CircuitResults<PS, Uint8Array>;
  isZero(context: __compactRuntime.CircuitContext<PS>, a_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  isOpenTokenColor(context: __compactRuntime.CircuitContext<PS>, a_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
  assertInvoiceOpening(context: __compactRuntime.CircuitContext<PS>,
                       state_0: InvoiceState,
                       opening_0: InvoiceOpening): __compactRuntime.CircuitResults<PS, []>;
  issueInvoice(context: __compactRuntime.CircuitContext<PS>,
               invoiceId_0: Uint8Array,
               invoiceType_0: InvoiceType,
               expiresAt_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleStandard(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  settleMultiPayment(context: __compactRuntime.CircuitContext<PS>,
                     invoiceId_0: Uint8Array,
                     coin_0: QualifiedShieldedCoinInfo): __compactRuntime.CircuitResults<PS, []>;
  acceptDonation(context: __compactRuntime.CircuitContext<PS>,
                 invoiceId_0: Uint8Array,
                 coin_0: QualifiedShieldedCoinInfo,
                 amount_0: bigint): __compactRuntime.CircuitResults<PS, []>;
  settleMulti(context: __compactRuntime.CircuitContext<PS>,
              invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  cancelInvoice(context: __compactRuntime.CircuitContext<PS>,
                invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, []>;
  isSettled(context: __compactRuntime.CircuitContext<PS>,
            invoiceId_0: Uint8Array): __compactRuntime.CircuitResults<PS, boolean>;
}

export type Ledger = {
  readonly sequence: bigint;
  invoices: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): InvoiceState;
    [Symbol.iterator](): Iterator<[Uint8Array, InvoiceState]>
  };
  usedNullifiers: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
  receiptCommitments: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: Uint8Array): boolean;
    [Symbol.iterator](): Iterator<Uint8Array>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<PS = any, W extends Witnesses<PS> = Witnesses<PS>> {
  witnesses: W;
  circuits: Circuits<PS>;
  impureCircuits: ImpureCircuits<PS>;
  provableCircuits: ProvableCircuits<PS>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<PS>): __compactRuntime.ConstructorResult<PS>;
}

export declare function ledger(state: __compactRuntime.StateValue | __compactRuntime.ChargedState): Ledger;
export declare const pureCircuits: PureCircuits;
