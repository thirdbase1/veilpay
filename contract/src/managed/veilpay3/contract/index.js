import * as __compactRuntime from '@midnight-ntwrk/compact-runtime';
__compactRuntime.checkRuntimeVersion('0.16.0');

export var InvoiceType;
(function (InvoiceType) {
  InvoiceType[InvoiceType['STANDARD'] = 0] = 'STANDARD';
  InvoiceType[InvoiceType['MULTI_PAY'] = 1] = 'MULTI_PAY';
  InvoiceType[InvoiceType['DONATION'] = 2] = 'DONATION';
})(InvoiceType || (InvoiceType = {}));

export var InvoiceStatus;
(function (InvoiceStatus) {
  InvoiceStatus[InvoiceStatus['ACTIVE'] = 0] = 'ACTIVE';
  InvoiceStatus[InvoiceStatus['PAID'] = 1] = 'PAID';
  InvoiceStatus[InvoiceStatus['SETTLED'] = 2] = 'SETTLED';
  InvoiceStatus[InvoiceStatus['CANCELLED'] = 3] = 'CANCELLED';
  InvoiceStatus[InvoiceStatus['REFUNDED'] = 4] = 'REFUNDED';
})(InvoiceStatus || (InvoiceStatus = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeEnum(2, 1);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

const _descriptor_3 = new __compactRuntime.CompactTypeEnum(4, 1);

class _InvoiceState_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())))));
  }
  fromValue(value_0) {
    return {
      invoiceCommitment: _descriptor_0.fromValue(value_0),
      merchantAuthCommitment: _descriptor_0.fromValue(value_0),
      invoiceType: _descriptor_1.fromValue(value_0),
      expiresAt: _descriptor_2.fromValue(value_0),
      version: _descriptor_2.fromValue(value_0),
      status: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.invoiceCommitment).concat(_descriptor_0.toValue(value_0.merchantAuthCommitment).concat(_descriptor_1.toValue(value_0.invoiceType).concat(_descriptor_2.toValue(value_0.expiresAt).concat(_descriptor_2.toValue(value_0.version).concat(_descriptor_3.toValue(value_0.status))))));
  }
}

const _descriptor_4 = new _InvoiceState_0();

const _descriptor_5 = __compactRuntime.CompactTypeBoolean;

const _descriptor_6 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

const _descriptor_7 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class _QualifiedShieldedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_7.alignment().concat(_descriptor_2.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_7.fromValue(value_0),
      mt_index: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_7.toValue(value_0.value).concat(_descriptor_2.toValue(value_0.mt_index))));
  }
}

const _descriptor_8 = new _QualifiedShieldedCoinInfo_0();

class _InvoiceOpening_0 {
  alignment() {
    return _descriptor_7.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment())))));
  }
  fromValue(value_0) {
    return {
      amount: _descriptor_7.fromValue(value_0),
      tokenColor: _descriptor_0.fromValue(value_0),
      merchantCoinPk: _descriptor_0.fromValue(value_0),
      invoiceType: _descriptor_1.fromValue(value_0),
      paymentSecret: _descriptor_0.fromValue(value_0),
      salt: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_7.toValue(value_0.amount).concat(_descriptor_0.toValue(value_0.tokenColor).concat(_descriptor_0.toValue(value_0.merchantCoinPk).concat(_descriptor_1.toValue(value_0.invoiceType).concat(_descriptor_0.toValue(value_0.paymentSecret).concat(_descriptor_0.toValue(value_0.salt))))));
  }
}

const _descriptor_9 = new _InvoiceOpening_0();

class _ShieldedCoinInfo_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_7.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_0.fromValue(value_0),
      color: _descriptor_0.fromValue(value_0),
      value: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.nonce).concat(_descriptor_0.toValue(value_0.color).concat(_descriptor_7.toValue(value_0.value)));
  }
}

const _descriptor_10 = new _ShieldedCoinInfo_0();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_11 = new _ZswapCoinPublicKey_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_12 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_11.alignment().concat(_descriptor_12.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_11.fromValue(value_0),
      right: _descriptor_12.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_11.toValue(value_0.left).concat(_descriptor_12.toValue(value_0.right)));
  }
}

const _descriptor_13 = new _Either_0();

const _descriptor_14 = __compactRuntime.CompactTypeField;

const _descriptor_15 = new __compactRuntime.CompactTypeBytes(21);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_15.alignment().concat(_descriptor_10.alignment().concat(_descriptor_5.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return {
      domain_sep: _descriptor_15.fromValue(value_0),
      info: _descriptor_10.fromValue(value_0),
      dataType: _descriptor_5.fromValue(value_0),
      data: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_15.toValue(value_0.domain_sep).concat(_descriptor_10.toValue(value_0.info).concat(_descriptor_5.toValue(value_0.dataType).concat(_descriptor_0.toValue(value_0.data))));
  }
}

const _descriptor_16 = new _CoinPreimage_0();

const _descriptor_17 = new __compactRuntime.CompactTypeVector(5, _descriptor_0);

const _descriptor_18 = new __compactRuntime.CompactTypeVector(3, _descriptor_0);

const _descriptor_19 = new __compactRuntime.CompactTypeVector(6, _descriptor_0);

const _descriptor_20 = new __compactRuntime.CompactTypeVector(2, _descriptor_14);

class _Maybe_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_5.fromValue(value_0),
      value: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_some).concat(_descriptor_10.toValue(value_0.value));
  }
}

const _descriptor_21 = new _Maybe_0();

class _ShieldedSendResult_0 {
  alignment() {
    return _descriptor_21.alignment().concat(_descriptor_10.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_21.fromValue(value_0),
      sent: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_21.toValue(value_0.change).concat(_descriptor_10.toValue(value_0.sent));
  }
}

const _descriptor_22 = new _ShieldedSendResult_0();

class _Either_1 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_0.fromValue(value_0),
      right: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_0.toValue(value_0.left).concat(_descriptor_0.toValue(value_0.right)));
  }
}

const _descriptor_23 = new _Either_1();

const _descriptor_24 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

export class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    if (typeof(witnesses_0.merchantSecretKey) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named merchantSecretKey');
    }
    if (typeof(witnesses_0.invoiceOpening) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named invoiceOpening');
    }
    if (typeof(witnesses_0.receiptSecret) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named receiptSecret');
    }
    if (typeof(witnesses_0.paymentNonce) !== 'function') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named paymentNonce');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      merchantAuthCommitment(context, ...args_1) {
        return { result: pureCircuits.merchantAuthCommitment(...args_1), context };
      },
      invoiceCommitment(context, ...args_1) {
        return { result: pureCircuits.invoiceCommitment(...args_1), context };
      },
      paymentNullifier(context, ...args_1) {
        return { result: pureCircuits.paymentNullifier(...args_1), context };
      },
      merchantReceiptCommitment(context, ...args_1) {
        return { result: pureCircuits.merchantReceiptCommitment(...args_1), context };
      },
      isZero(context, ...args_1) {
        return { result: pureCircuits.isZero(...args_1), context };
      },
      isOpenTokenColor(context, ...args_1) {
        return { result: pureCircuits.isOpenTokenColor(...args_1), context };
      },
      assertInvoiceOpening(context, ...args_1) {
        return { result: pureCircuits.assertInvoiceOpening(...args_1), context };
      },
      issueInvoice: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`issueInvoice: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        const invoiceType_0 = args_1[2];
        const expiresAt_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('issueInvoice',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 136 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('issueInvoice',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 136 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        if (!(typeof(invoiceType_0) === 'number' && invoiceType_0 >= 0 && invoiceType_0 <= 2)) {
          __compactRuntime.typeError('issueInvoice',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'veilpay3.compact line 136 char 1',
                                     'Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>',
                                     invoiceType_0)
        }
        if (!(typeof(expiresAt_0) === 'bigint' && expiresAt_0 >= 0n && expiresAt_0 <= 18446744073709551615n)) {
          __compactRuntime.typeError('issueInvoice',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'veilpay3.compact line 136 char 1',
                                     'Uint<0..18446744073709551616>',
                                     expiresAt_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0).concat(_descriptor_1.toValue(invoiceType_0).concat(_descriptor_2.toValue(expiresAt_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._issueInvoice_0(context,
                                              partialProofData,
                                              invoiceId_0,
                                              invoiceType_0,
                                              expiresAt_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      settleStandard: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`settleStandard: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        const coin_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('settleStandard',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 160 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('settleStandard',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 160 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n && typeof(coin_0.mt_index) === 'bigint' && coin_0.mt_index >= 0n && coin_0.mt_index <= 18446744073709551615n)) {
          __compactRuntime.typeError('settleStandard',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'veilpay3.compact line 160 char 1',
                                     'struct QualifiedShieldedCoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211456>, mt_index: Uint<0..18446744073709551616>>',
                                     coin_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0).concat(_descriptor_8.toValue(coin_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._settleStandard_0(context,
                                                partialProofData,
                                                invoiceId_0,
                                                coin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      settleMultiPayment: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`settleMultiPayment: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        const coin_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('settleMultiPayment',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 204 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('settleMultiPayment',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 204 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n && typeof(coin_0.mt_index) === 'bigint' && coin_0.mt_index >= 0n && coin_0.mt_index <= 18446744073709551615n)) {
          __compactRuntime.typeError('settleMultiPayment',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'veilpay3.compact line 204 char 1',
                                     'struct QualifiedShieldedCoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211456>, mt_index: Uint<0..18446744073709551616>>',
                                     coin_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0).concat(_descriptor_8.toValue(coin_0)),
            alignment: _descriptor_0.alignment().concat(_descriptor_8.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._settleMultiPayment_0(context,
                                                    partialProofData,
                                                    invoiceId_0,
                                                    coin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      acceptDonation: (...args_1) => {
        if (args_1.length !== 4) {
          throw new __compactRuntime.CompactError(`acceptDonation: expected 4 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        const coin_0 = args_1[2];
        const amount_0 = args_1[3];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('acceptDonation',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 239 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('acceptDonation',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 239 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0n && coin_0.value <= 340282366920938463463374607431768211455n && typeof(coin_0.mt_index) === 'bigint' && coin_0.mt_index >= 0n && coin_0.mt_index <= 18446744073709551615n)) {
          __compactRuntime.typeError('acceptDonation',
                                     'argument 2 (argument 3 as invoked from Typescript)',
                                     'veilpay3.compact line 239 char 1',
                                     'struct QualifiedShieldedCoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211456>, mt_index: Uint<0..18446744073709551616>>',
                                     coin_0)
        }
        if (!(typeof(amount_0) === 'bigint' && amount_0 >= 0n && amount_0 <= 340282366920938463463374607431768211455n)) {
          __compactRuntime.typeError('acceptDonation',
                                     'argument 3 (argument 4 as invoked from Typescript)',
                                     'veilpay3.compact line 239 char 1',
                                     'Uint<0..340282366920938463463374607431768211456>',
                                     amount_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0).concat(_descriptor_8.toValue(coin_0).concat(_descriptor_7.toValue(amount_0))),
            alignment: _descriptor_0.alignment().concat(_descriptor_8.alignment().concat(_descriptor_7.alignment()))
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._acceptDonation_0(context,
                                                partialProofData,
                                                invoiceId_0,
                                                coin_0,
                                                amount_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      settleMulti: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`settleMulti: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('settleMulti',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 276 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('settleMulti',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 276 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._settleMulti_0(context,
                                             partialProofData,
                                             invoiceId_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      cancelInvoice: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`cancelInvoice: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('cancelInvoice',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 294 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('cancelInvoice',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 294 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._cancelInvoice_0(context,
                                               partialProofData,
                                               invoiceId_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      },
      isSettled: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`isSettled: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const invoiceId_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.currentQueryContext != undefined)) {
          __compactRuntime.typeError('isSettled',
                                     'argument 1 (as invoked from Typescript)',
                                     'veilpay3.compact line 311 char 1',
                                     'CircuitContext',
                                     contextOrig_0)
        }
        if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
          __compactRuntime.typeError('isSettled',
                                     'argument 1 (argument 2 as invoked from Typescript)',
                                     'veilpay3.compact line 311 char 1',
                                     'Bytes<32>',
                                     invoiceId_0)
        }
        const context = { ...contextOrig_0, gasCost: __compactRuntime.emptyRunningCost() };
        const partialProofData = {
          input: {
            value: _descriptor_0.toValue(invoiceId_0),
            alignment: _descriptor_0.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._isSettled_0(context,
                                           partialProofData,
                                           invoiceId_0);
        partialProofData.output = { value: _descriptor_5.toValue(result_0), alignment: _descriptor_5.alignment() };
        return { result: result_0, context: context, proofData: partialProofData, gasCost: context.gasCost };
      }
    };
    this.impureCircuits = {
      issueInvoice: this.circuits.issueInvoice,
      settleStandard: this.circuits.settleStandard,
      settleMultiPayment: this.circuits.settleMultiPayment,
      acceptDonation: this.circuits.acceptDonation,
      settleMulti: this.circuits.settleMulti,
      cancelInvoice: this.circuits.cancelInvoice,
      isSettled: this.circuits.isSettled
    };
    this.provableCircuits = {
      issueInvoice: this.circuits.issueInvoice,
      settleStandard: this.circuits.settleStandard,
      settleMultiPayment: this.circuits.settleMultiPayment,
      acceptDonation: this.circuits.acceptDonation,
      settleMulti: this.circuits.settleMulti,
      cancelInvoice: this.circuits.cancelInvoice,
      isSettled: this.circuits.isSettled
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = new __compactRuntime.ChargedState(stateValue_0);
    state_0.setOperation('issueInvoice', new __compactRuntime.ContractOperation());
    state_0.setOperation('settleStandard', new __compactRuntime.ContractOperation());
    state_0.setOperation('settleMultiPayment', new __compactRuntime.ContractOperation());
    state_0.setOperation('acceptDonation', new __compactRuntime.ContractOperation());
    state_0.setOperation('settleMulti', new __compactRuntime.ContractOperation());
    state_0.setOperation('cancelInvoice', new __compactRuntime.ContractOperation());
    state_0.setOperation('isSettled', new __compactRuntime.ContractOperation());
    const context = __compactRuntime.createCircuitContext(__compactRuntime.dummyContractAddress(), constructorContext_0.initialZswapLocalState.coinPublicKey, state_0.data, constructorContext_0.initialPrivateState);
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(0n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(1n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(2n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_24.toValue(3n),
                                                                                              alignment: _descriptor_24.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newMap(
                                                          new __compactRuntime.StateMap()
                                                        ).encode() } },
                                       { ins: { cached: false, n: 1 } }]);
    state_0.data = new __compactRuntime.ChargedState(context.currentQueryContext.state.state);
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _some_0(value_0) { return { is_some: true, value: value_0 }; }
  _none_0() {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  _left_0(value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  _right_0(value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  _sendShielded_0(context, partialProofData, input_0, recipient_0, value_0) {
    const selfAddr_0 = _descriptor_12.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                  partialProofData,
                                                                                  [
                                                                                   { dup: { n: 2 } },
                                                                                   { idx: { cached: true,
                                                                                            pushPath: false,
                                                                                            path: [
                                                                                                   { tag: 'value',
                                                                                                     value: { value: _descriptor_24.toValue(0n),
                                                                                                              alignment: _descriptor_24.alignment() } }] } },
                                                                                   { popeq: { cached: true,
                                                                                              result: undefined } }]).value);
    this._createZswapInput_0(context, partialProofData, input_0);
    const tmp_0 = this._coinNullifier_0(this._downcastQualifiedCoin_0(input_0),
                                        selfAddr_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { swap: { n: 0 } },
                                       { idx: { cached: true,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: true, n: 2 } },
                                       { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(t_0 >= value_0,
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convertBytesToField(28,
                                                                                                                  new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101]),
                                                                                                                  '<standard library>'),
                                                                             this._degradeToTransient_0(input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this._createZswapOutput_0(context, partialProofData, output_0, recipient_0);
    const tmp_1 = this._coinCommitment_0(output_0, recipient_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { swap: { n: 0 } },
                                       { idx: { cached: true,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: true, n: 2 } },
                                       { swap: { n: 0 } }]);
    if (!recipient_0.is_left
        &&
        this._equal_0(recipient_0.right.bytes, selfAddr_0.bytes))
    {
      const tmp_2 = this._coinCommitment_0(output_0, recipient_0);
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { swap: { n: 0 } },
                                         { idx: { cached: true,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(1n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_2),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newNull().encode() } },
                                         { ins: { cached: true, n: 2 } },
                                         { swap: { n: 0 } }]);
    }
    if (this._equal_1(change_0, 0n)) {
      return { change: this._none_0(), sent: output_0 };
    } else {
      const changeCoin_0 = { nonce:
                               this._upgradeFromTransient_0(this._transientHash_0([__compactRuntime.convertBytesToField(30,
                                                                                                                        new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50]),
                                                                                                                        '<standard library>'),
                                                                                   this._degradeToTransient_0(input_0.nonce)])),
                             color: input_0.color,
                             value: change_0 };
      this._createZswapOutput_0(context,
                                partialProofData,
                                changeCoin_0,
                                this._right_0(selfAddr_0));
      const cm_0 = this._coinCommitment_0(changeCoin_0,
                                          this._right_0(selfAddr_0));
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { swap: { n: 0 } },
                                         { idx: { cached: true,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(2n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newNull().encode() } },
                                         { ins: { cached: true, n: 2 } },
                                         { swap: { n: 0 } }]);
      __compactRuntime.queryLedgerState(context,
                                        partialProofData,
                                        [
                                         { swap: { n: 0 } },
                                         { idx: { cached: true,
                                                  pushPath: true,
                                                  path: [
                                                         { tag: 'value',
                                                           value: { value: _descriptor_24.toValue(1n),
                                                                    alignment: _descriptor_24.alignment() } }] } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(cm_0),
                                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                                         { push: { storage: false,
                                                   value: __compactRuntime.StateValue.newNull().encode() } },
                                         { ins: { cached: true, n: 2 } },
                                         { swap: { n: 0 } }]);
      return { change: this._some_0(changeCoin_0), sent: output_0 };
    }
  }
  _sendImmediateShielded_0(context, partialProofData, input_0, target_0, value_0)
  {
    return this._sendShielded_0(context,
                                partialProofData,
                                this._upcastQualifiedCoin_0(input_0),
                                target_0,
                                value_0);
  }
  _downcastQualifiedCoin_0(coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  _upcastQualifiedCoin_0(coin_0) {
    return { nonce: coin_0.nonce,
             color: coin_0.color,
             value: coin_0.value,
             mt_index: 0n };
  }
  _coinCommitment_0(coin_0, recipient_0) {
    return this._persistentHash_2({ domain_sep:
                                      new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 122, 115, 119, 97, 112, 45, 99, 99, 91, 118, 49, 93]),
                                    info: coin_0,
                                    dataType: recipient_0.is_left,
                                    data:
                                      recipient_0.is_left ?
                                      recipient_0.left.bytes :
                                      recipient_0.right.bytes });
  }
  _coinNullifier_0(coin_0, addr_0) {
    return this._persistentHash_2({ domain_sep:
                                      new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 122, 115, 119, 97, 112, 45, 99, 110, 91, 118, 49, 93]),
                                    info: coin_0,
                                    dataType: false,
                                    data: addr_0.bytes });
  }
  _transientHash_0(value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_20, value_0);
    return result_0;
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_18, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_19, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_16, value_0);
    return result_0;
  }
  _persistentHash_3(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_17, value_0);
    return result_0;
  }
  _degradeToTransient_0(x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  _upgradeFromTransient_0(x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  _ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_11.toValue(result_0),
      alignment: _descriptor_11.alignment()
    });
    return result_0;
  }
  _createZswapInput_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _createZswapOutput_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  _merchantSecretKey_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.merchantSecretKey(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('merchantSecretKey',
                                 'return value',
                                 'veilpay3.compact line 50 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _invoiceOpening_0(context, partialProofData, invoiceId_0) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.invoiceOpening(witnessContext_0,
                                                                         invoiceId_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(typeof(result_0) === 'object' && typeof(result_0.amount) === 'bigint' && result_0.amount >= 0n && result_0.amount <= 340282366920938463463374607431768211455n && result_0.tokenColor.buffer instanceof ArrayBuffer && result_0.tokenColor.BYTES_PER_ELEMENT === 1 && result_0.tokenColor.length === 32 && result_0.merchantCoinPk.buffer instanceof ArrayBuffer && result_0.merchantCoinPk.BYTES_PER_ELEMENT === 1 && result_0.merchantCoinPk.length === 32 && typeof(result_0.invoiceType) === 'number' && result_0.invoiceType >= 0 && result_0.invoiceType <= 2 && result_0.paymentSecret.buffer instanceof ArrayBuffer && result_0.paymentSecret.BYTES_PER_ELEMENT === 1 && result_0.paymentSecret.length === 32 && result_0.salt.buffer instanceof ArrayBuffer && result_0.salt.BYTES_PER_ELEMENT === 1 && result_0.salt.length === 32)) {
      __compactRuntime.typeError('invoiceOpening',
                                 'return value',
                                 'veilpay3.compact line 51 char 1',
                                 'struct InvoiceOpening<amount: Uint<0..340282366920938463463374607431768211456>, tokenColor: Bytes<32>, merchantCoinPk: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, paymentSecret: Bytes<32>, salt: Bytes<32>>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_9.toValue(result_0),
      alignment: _descriptor_9.alignment()
    });
    return result_0;
  }
  _receiptSecret_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.receiptSecret(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('receiptSecret',
                                 'return value',
                                 'veilpay3.compact line 52 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _paymentNonce_0(context, partialProofData, invoiceId_0) {
    const witnessContext_0 = __compactRuntime.createWitnessContext(ledger(context.currentQueryContext.state), context.currentPrivateState, context.currentQueryContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.paymentNonce(witnessContext_0,
                                                                       invoiceId_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32)) {
      __compactRuntime.typeError('paymentNonce',
                                 'return value',
                                 'veilpay3.compact line 53 char 1',
                                 'Bytes<32>',
                                 result_0)
    }
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_0.toValue(result_0),
      alignment: _descriptor_0.alignment()
    });
    return result_0;
  }
  _merchantAuthCommitment_0(invoiceId_0, secret_0) {
    return this._persistentHash_0([new Uint8Array([118, 101, 105, 108, 112, 97, 121, 58, 118, 51, 58, 109, 101, 114, 99, 104, 97, 110, 116, 45, 97, 117, 116, 104, 58, 0, 0, 0, 0, 0, 0, 0]),
                                   invoiceId_0,
                                   secret_0]);
  }
  _invoiceCommitment_0(opening_0) {
    return this._persistentHash_1([new Uint8Array([118, 101, 105, 108, 112, 97, 121, 58, 118, 51, 58, 105, 110, 118, 111, 105, 99, 101, 58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                   __compactRuntime.convertFieldToBytes(32,
                                                                        opening_0.amount,
                                                                        'veilpay3.compact line 68 char 5'),
                                   opening_0.tokenColor,
                                   opening_0.merchantCoinPk,
                                   opening_0.paymentSecret,
                                   opening_0.salt]);
  }
  _paymentNullifier_0(invoiceId_0, opening_0, nonce_0) {
    return this._persistentHash_3([new Uint8Array([118, 101, 105, 108, 112, 97, 121, 58, 118, 51, 58, 112, 97, 121, 109, 101, 110, 116, 45, 110, 117, 108, 108, 105, 102, 105, 101, 114, 58, 0, 0, 0]),
                                   invoiceId_0,
                                   this._invoiceCommitment_0(opening_0),
                                   opening_0.paymentSecret,
                                   nonce_0]);
  }
  _payerReceiptCommitment_0(context,
                            partialProofData,
                            invoiceId_0,
                            opening_0,
                            nonce_0)
  {
    return this._persistentHash_3([new Uint8Array([118, 101, 105, 108, 112, 97, 121, 58, 118, 51, 58, 112, 97, 121, 101, 114, 45, 114, 101, 99, 101, 105, 112, 116, 58, 0, 0, 0, 0, 0, 0, 0]),
                                   invoiceId_0,
                                   this._invoiceCommitment_0(opening_0),
                                   nonce_0,
                                   this._receiptSecret_0(context,
                                                         partialProofData)]);
  }
  _merchantReceiptCommitment_0(invoiceId_0, opening_0, nonce_0) {
    return this._persistentHash_3([new Uint8Array([118, 101, 105, 108, 112, 97, 121, 58, 118, 51, 58, 109, 101, 114, 99, 104, 97, 110, 116, 45, 114, 101, 99, 101, 105, 112, 116, 58, 0, 0, 0, 0]),
                                   invoiceId_0,
                                   this._invoiceCommitment_0(opening_0),
                                   nonce_0,
                                   opening_0.merchantCoinPk]);
  }
  _isZero_0(a_0) {
    return this._equal_2(a_0,
                         new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }
  _isOpenTokenColor_0(a_0) { return this._isZero_0(a_0); }
  _assertInvoiceOpening_0(state_0, opening_0) {
    __compactRuntime.assert(this._equal_3(this._invoiceCommitment_0(opening_0),
                                          state_0.invoiceCommitment),
                            'invalid invoice opening');
    __compactRuntime.assert(opening_0.invoiceType === state_0.invoiceType,
                            'invoice type mismatch');
    __compactRuntime.assert(!this._equal_4(opening_0.merchantCoinPk,
                                           new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                            'merchant recipient missing');
    let t_0;
    __compactRuntime.assert(opening_0.invoiceType === 2
                            ||
                            (t_0 = opening_0.amount, t_0 > 0n),
                            'invoice amount invalid');
    return [];
  }
  _issueInvoice_0(context,
                  partialProofData,
                  invoiceId_0,
                  invoiceType_0,
                  expiresAt_0)
  {
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(1n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'invoice already exists');
    __compactRuntime.assert(expiresAt_0
                            >
                            _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(0n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice deadline invalid');
    const opening_0 = this._invoiceOpening_0(context,
                                             partialProofData,
                                             invoiceId_0);
    __compactRuntime.assert(this._equal_5(this._invoiceCommitment_0(opening_0),
                                          invoiceId_0),
                            'invalid invoice opening');
    __compactRuntime.assert(opening_0.invoiceType === invoiceType_0,
                            'invoice type mismatch');
    const merchantAuth_0 = this._merchantAuthCommitment_0(invoiceId_0,
                                                          this._merchantSecretKey_0(context,
                                                                                    partialProofData));
    const tmp_0 = { invoiceCommitment: invoiceId_0,
                    merchantAuthCommitment: merchantAuth_0,
                    invoiceType: invoiceType_0,
                    expiresAt: expiresAt_0,
                    version: 0n,
                    status: 0 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(1n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(tmp_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_1),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _settleStandard_0(context, partialProofData, invoiceId_0, coin_0) {
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(1n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice not found');
    const state_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_24.toValue(1n),
                                                                                                          alignment: _descriptor_24.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(state_0.status === 0, 'invoice not active');
    __compactRuntime.assert(state_0.invoiceType === 0, 'invoice type invalid');
    let t_0;
    __compactRuntime.assert((t_0 = _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                             partialProofData,
                                                                                             [
                                                                                              { dup: { n: 0 } },
                                                                                              { idx: { cached: false,
                                                                                                       pushPath: false,
                                                                                                       path: [
                                                                                                              { tag: 'value',
                                                                                                                value: { value: _descriptor_24.toValue(0n),
                                                                                                                         alignment: _descriptor_24.alignment() } }] } },
                                                                                              { popeq: { cached: true,
                                                                                                         result: undefined } }]).value),
                             t_0 <= state_0.expiresAt),
                            'invoice expired');
    const opening_0 = this._invoiceOpening_0(context,
                                             partialProofData,
                                             invoiceId_0);
    this._assertInvoiceOpening_0(state_0, opening_0);
    let t_1;
    __compactRuntime.assert((t_1 = coin_0.value, t_1 >= opening_0.amount),
                            'coin cannot cover invoice');
    if (!this._isOpenTokenColor_0(opening_0.tokenColor)) {
      __compactRuntime.assert(this._equal_6(coin_0.color, opening_0.tokenColor),
                              'wrong token color');
    }
    const merchant_0 = this._left_0({ bytes: opening_0.merchantCoinPk });
    const result_0 = this._sendShielded_0(context,
                                          partialProofData,
                                          coin_0,
                                          merchant_0,
                                          opening_0.amount);
    if (result_0.change.is_some) {
      const caller_0 = this._left_0(this._ownPublicKey_0(context,
                                                         partialProofData));
      this._sendImmediateShielded_0(context,
                                    partialProofData,
                                    result_0.change.value,
                                    caller_0,
                                    result_0.change.value.value);
    }
    const nonce_0 = this._paymentNonce_0(context, partialProofData, invoiceId_0);
    const nullifier_0 = this._paymentNullifier_0(invoiceId_0, opening_0, nonce_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(2n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'payment already used');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = this._payerReceiptCommitment_0(context,
                                                 partialProofData,
                                                 invoiceId_0,
                                                 opening_0,
                                                 nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = this._merchantReceiptCommitment_0(invoiceId_0,
                                                    opening_0,
                                                    nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_2 = { invoiceCommitment: state_0.invoiceCommitment,
                    merchantAuthCommitment: state_0.merchantAuthCommitment,
                    invoiceType: state_0.invoiceType,
                    expiresAt: state_0.expiresAt,
                    version:
                      ((t1) => {
                        if (t1 > 18446744073709551615n) {
                          throw new __compactRuntime.CompactError('veilpay3.compact line 198 char 14: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 18446744073709551615');
                        }
                        return t1;
                      })(state_0.version + 1n),
                    status: 1 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(1n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(tmp_2),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_3 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_3),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _settleMultiPayment_0(context, partialProofData, invoiceId_0, coin_0) {
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(1n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice not found');
    const state_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_24.toValue(1n),
                                                                                                          alignment: _descriptor_24.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(state_0.status === 0, 'invoice not active');
    __compactRuntime.assert(state_0.invoiceType === 1, 'invoice type invalid');
    let t_0;
    __compactRuntime.assert((t_0 = _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                             partialProofData,
                                                                                             [
                                                                                              { dup: { n: 0 } },
                                                                                              { idx: { cached: false,
                                                                                                       pushPath: false,
                                                                                                       path: [
                                                                                                              { tag: 'value',
                                                                                                                value: { value: _descriptor_24.toValue(0n),
                                                                                                                         alignment: _descriptor_24.alignment() } }] } },
                                                                                              { popeq: { cached: true,
                                                                                                         result: undefined } }]).value),
                             t_0 <= state_0.expiresAt),
                            'invoice expired');
    const opening_0 = this._invoiceOpening_0(context,
                                             partialProofData,
                                             invoiceId_0);
    this._assertInvoiceOpening_0(state_0, opening_0);
    let t_1;
    __compactRuntime.assert((t_1 = coin_0.value, t_1 >= opening_0.amount),
                            'coin cannot cover invoice');
    if (!this._isOpenTokenColor_0(opening_0.tokenColor)) {
      __compactRuntime.assert(this._equal_7(coin_0.color, opening_0.tokenColor),
                              'wrong token color');
    }
    const merchant_0 = this._left_0({ bytes: opening_0.merchantCoinPk });
    const result_0 = this._sendShielded_0(context,
                                          partialProofData,
                                          coin_0,
                                          merchant_0,
                                          opening_0.amount);
    if (result_0.change.is_some) {
      const caller_0 = this._left_0(this._ownPublicKey_0(context,
                                                         partialProofData));
      this._sendImmediateShielded_0(context,
                                    partialProofData,
                                    result_0.change.value,
                                    caller_0,
                                    result_0.change.value.value);
    }
    const nonce_0 = this._paymentNonce_0(context, partialProofData, invoiceId_0);
    const nullifier_0 = this._paymentNullifier_0(invoiceId_0, opening_0, nonce_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(2n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'payment already used');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = this._payerReceiptCommitment_0(context,
                                                 partialProofData,
                                                 invoiceId_0,
                                                 opening_0,
                                                 nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = this._merchantReceiptCommitment_0(invoiceId_0,
                                                    opening_0,
                                                    nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_2 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_2),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _acceptDonation_0(context, partialProofData, invoiceId_0, coin_0, amount_0) {
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(1n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice not found');
    const state_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_24.toValue(1n),
                                                                                                          alignment: _descriptor_24.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(state_0.status === 0, 'invoice not active');
    __compactRuntime.assert(state_0.invoiceType === 2, 'invoice type invalid');
    let t_0;
    __compactRuntime.assert((t_0 = _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                             partialProofData,
                                                                                             [
                                                                                              { dup: { n: 0 } },
                                                                                              { idx: { cached: false,
                                                                                                       pushPath: false,
                                                                                                       path: [
                                                                                                              { tag: 'value',
                                                                                                                value: { value: _descriptor_24.toValue(0n),
                                                                                                                         alignment: _descriptor_24.alignment() } }] } },
                                                                                              { popeq: { cached: true,
                                                                                                         result: undefined } }]).value),
                             t_0 <= state_0.expiresAt),
                            'invoice expired');
    const opening_0 = this._invoiceOpening_0(context,
                                             partialProofData,
                                             invoiceId_0);
    this._assertInvoiceOpening_0(state_0, opening_0);
    __compactRuntime.assert(amount_0 > 0n, 'donation must be positive');
    let t_1;
    __compactRuntime.assert((t_1 = coin_0.value, t_1 >= amount_0),
                            'coin cannot cover donation');
    if (!this._isOpenTokenColor_0(opening_0.tokenColor)) {
      __compactRuntime.assert(this._equal_8(coin_0.color, opening_0.tokenColor),
                              'wrong token color');
    }
    const merchant_0 = this._left_0({ bytes: opening_0.merchantCoinPk });
    const result_0 = this._sendShielded_0(context,
                                          partialProofData,
                                          coin_0,
                                          merchant_0,
                                          amount_0);
    if (result_0.change.is_some) {
      const caller_0 = this._left_0(this._ownPublicKey_0(context,
                                                         partialProofData));
      this._sendImmediateShielded_0(context,
                                    partialProofData,
                                    result_0.change.value,
                                    caller_0,
                                    result_0.change.value.value);
    }
    const nonce_0 = this._paymentNonce_0(context, partialProofData, invoiceId_0);
    const nullifier_0 = this._paymentNullifier_0(invoiceId_0, opening_0, nonce_0);
    __compactRuntime.assert(!_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                       partialProofData,
                                                                                       [
                                                                                        { dup: { n: 0 } },
                                                                                        { idx: { cached: false,
                                                                                                 pushPath: false,
                                                                                                 path: [
                                                                                                        { tag: 'value',
                                                                                                          value: { value: _descriptor_24.toValue(2n),
                                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                                        { push: { storage: false,
                                                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                                                                               alignment: _descriptor_0.alignment() }).encode() } },
                                                                                        'member',
                                                                                        { popeq: { cached: true,
                                                                                                   result: undefined } }]).value),
                            'payment already used');
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(2n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(nullifier_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_0 = this._payerReceiptCommitment_0(context,
                                                 partialProofData,
                                                 invoiceId_0,
                                                 opening_0,
                                                 nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = this._merchantReceiptCommitment_0(invoiceId_0,
                                                    opening_0,
                                                    nonce_0);
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(3n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newNull().encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_2 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_2),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _settleMulti_0(context, partialProofData, invoiceId_0) {
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(1n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice not found');
    const state_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_24.toValue(1n),
                                                                                                          alignment: _descriptor_24.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(state_0.status === 0, 'invoice not active');
    __compactRuntime.assert(state_0.invoiceType === 1, 'invoice type invalid');
    __compactRuntime.assert(this._equal_9(state_0.merchantAuthCommitment,
                                          this._merchantAuthCommitment_0(invoiceId_0,
                                                                         this._merchantSecretKey_0(context,
                                                                                                   partialProofData))),
                            'not the invoice merchant');
    const tmp_0 = { invoiceCommitment: state_0.invoiceCommitment,
                    merchantAuthCommitment: state_0.merchantAuthCommitment,
                    invoiceType: state_0.invoiceType,
                    expiresAt: state_0.expiresAt,
                    version:
                      ((t1) => {
                        if (t1 > 18446744073709551615n) {
                          throw new __compactRuntime.CompactError('veilpay3.compact line 288 char 14: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 18446744073709551615');
                        }
                        return t1;
                      })(state_0.version + 1n),
                    status: 2 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(1n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(tmp_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_1),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _cancelInvoice_0(context, partialProofData, invoiceId_0) {
    __compactRuntime.assert(_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                      partialProofData,
                                                                                      [
                                                                                       { dup: { n: 0 } },
                                                                                       { idx: { cached: false,
                                                                                                pushPath: false,
                                                                                                path: [
                                                                                                       { tag: 'value',
                                                                                                         value: { value: _descriptor_24.toValue(1n),
                                                                                                                  alignment: _descriptor_24.alignment() } }] } },
                                                                                       { push: { storage: false,
                                                                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                                                                       'member',
                                                                                       { popeq: { cached: true,
                                                                                                  result: undefined } }]).value),
                            'invoice not found');
    const state_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                              partialProofData,
                                                                              [
                                                                               { dup: { n: 0 } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_24.toValue(1n),
                                                                                                          alignment: _descriptor_24.alignment() } }] } },
                                                                               { idx: { cached: false,
                                                                                        pushPath: false,
                                                                                        path: [
                                                                                               { tag: 'value',
                                                                                                 value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                          alignment: _descriptor_0.alignment() } }] } },
                                                                               { popeq: { cached: false,
                                                                                          result: undefined } }]).value);
    __compactRuntime.assert(state_0.status === 0, 'invoice not active');
    __compactRuntime.assert(this._equal_10(state_0.merchantAuthCommitment,
                                           this._merchantAuthCommitment_0(invoiceId_0,
                                                                          this._merchantSecretKey_0(context,
                                                                                                    partialProofData))),
                            'not the invoice merchant');
    const tmp_0 = { invoiceCommitment: state_0.invoiceCommitment,
                    merchantAuthCommitment: state_0.merchantAuthCommitment,
                    invoiceType: state_0.invoiceType,
                    expiresAt: state_0.expiresAt,
                    version:
                      ((t1) => {
                        if (t1 > 18446744073709551615n) {
                          throw new __compactRuntime.CompactError('veilpay3.compact line 305 char 14: cast from Field or Uint value to smaller Uint value failed: ' + t1 + ' is greater than 18446744073709551615');
                        }
                        return t1;
                      })(state_0.version + 1n),
                    status: 3 };
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(1n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { push: { storage: false,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                              alignment: _descriptor_0.alignment() }).encode() } },
                                       { push: { storage: true,
                                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue(tmp_0),
                                                                                              alignment: _descriptor_4.alignment() }).encode() } },
                                       { ins: { cached: false, n: 1 } },
                                       { ins: { cached: true, n: 1 } }]);
    const tmp_1 = 1n;
    __compactRuntime.queryLedgerState(context,
                                      partialProofData,
                                      [
                                       { idx: { cached: false,
                                                pushPath: true,
                                                path: [
                                                       { tag: 'value',
                                                         value: { value: _descriptor_24.toValue(0n),
                                                                  alignment: _descriptor_24.alignment() } }] } },
                                       { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                                              { value: _descriptor_6.toValue(tmp_1),
                                                                alignment: _descriptor_6.alignment() }
                                                                .value
                                                            )) } },
                                       { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _isSettled_0(context, partialProofData, invoiceId_0) {
    if (_descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                  partialProofData,
                                                                  [
                                                                   { dup: { n: 0 } },
                                                                   { idx: { cached: false,
                                                                            pushPath: false,
                                                                            path: [
                                                                                   { tag: 'value',
                                                                                     value: { value: _descriptor_24.toValue(1n),
                                                                                              alignment: _descriptor_24.alignment() } }] } },
                                                                   { push: { storage: false,
                                                                             value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(invoiceId_0),
                                                                                                                          alignment: _descriptor_0.alignment() }).encode() } },
                                                                   'member',
                                                                   { popeq: { cached: true,
                                                                              result: undefined } }]).value))
    {
      const status_0 = _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                                 partialProofData,
                                                                                 [
                                                                                  { dup: { n: 0 } },
                                                                                  { idx: { cached: false,
                                                                                           pushPath: false,
                                                                                           path: [
                                                                                                  { tag: 'value',
                                                                                                    value: { value: _descriptor_24.toValue(1n),
                                                                                                             alignment: _descriptor_24.alignment() } }] } },
                                                                                  { idx: { cached: false,
                                                                                           pushPath: false,
                                                                                           path: [
                                                                                                  { tag: 'value',
                                                                                                    value: { value: _descriptor_0.toValue(invoiceId_0),
                                                                                                             alignment: _descriptor_0.alignment() } }] } },
                                                                                  { popeq: { cached: false,
                                                                                             result: undefined } }]).value).status;
      return status_0 === 1 || status_0 === 2 || status_0 === 4;
    } else {
      return false;
    }
  }
  _equal_0(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_1(x0, y0) {
    if (x0 !== y0) { return false; }
    return true;
  }
  _equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_3(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_4(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_5(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_6(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_7(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_8(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_9(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
  _equal_10(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) { return false; }
    return true;
  }
}
export function ledger(stateOrChargedState) {
  const state = stateOrChargedState instanceof __compactRuntime.StateValue ? stateOrChargedState : stateOrChargedState.state;
  const chargedState = stateOrChargedState instanceof __compactRuntime.StateValue ? new __compactRuntime.ChargedState(stateOrChargedState) : stateOrChargedState;
  const context = {
    currentQueryContext: new __compactRuntime.QueryContext(chargedState, __compactRuntime.dummyContractAddress()),
    costModel: __compactRuntime.CostModel.initialCostModel()
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get sequence() {
      return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                       partialProofData,
                                                                       [
                                                                        { dup: { n: 0 } },
                                                                        { idx: { cached: false,
                                                                                 pushPath: false,
                                                                                 path: [
                                                                                        { tag: 'value',
                                                                                          value: { value: _descriptor_24.toValue(0n),
                                                                                                   alignment: _descriptor_24.alignment() } }] } },
                                                                        { popeq: { cached: true,
                                                                                   result: undefined } }]).value);
    },
    invoices: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                                                 alignment: _descriptor_2.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'veilpay3.compact line 46 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(key_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32)) {
          __compactRuntime.typeError('lookup',
                                     'argument 1',
                                     'veilpay3.compact line 46 char 1',
                                     'Bytes<32>',
                                     key_0)
        }
        return _descriptor_4.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(1n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_0.toValue(key_0),
                                                                                                     alignment: _descriptor_0.alignment() } }] } },
                                                                          { popeq: { cached: false,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[1];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_0.fromValue(key.value),      _descriptor_4.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    usedNullifiers: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                                                 alignment: _descriptor_2.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'veilpay3.compact line 47 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(2n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[2];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    receiptCommitments: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(3n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(0n),
                                                                                                                                 alignment: _descriptor_2.alignment() }).encode() } },
                                                                          'eq',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_2.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(3n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          'size',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(elem_0.buffer instanceof ArrayBuffer && elem_0.BYTES_PER_ELEMENT === 1 && elem_0.length === 32)) {
          __compactRuntime.typeError('member',
                                     'argument 1',
                                     'veilpay3.compact line 48 char 1',
                                     'Bytes<32>',
                                     elem_0)
        }
        return _descriptor_5.fromValue(__compactRuntime.queryLedgerState(context,
                                                                         partialProofData,
                                                                         [
                                                                          { dup: { n: 0 } },
                                                                          { idx: { cached: false,
                                                                                   pushPath: false,
                                                                                   path: [
                                                                                          { tag: 'value',
                                                                                            value: { value: _descriptor_24.toValue(3n),
                                                                                                     alignment: _descriptor_24.alignment() } }] } },
                                                                          { push: { storage: false,
                                                                                    value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(elem_0),
                                                                                                                                 alignment: _descriptor_0.alignment() }).encode() } },
                                                                          'member',
                                                                          { popeq: { cached: true,
                                                                                     result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[3];
        return self_0.asMap().keys().map((elem) => _descriptor_0.fromValue(elem.value))[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  currentQueryContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  merchantSecretKey: (...args) => undefined,
  invoiceOpening: (...args) => undefined,
  receiptSecret: (...args) => undefined,
  paymentNonce: (...args) => undefined
});
export const pureCircuits = {
  merchantAuthCommitment: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`merchantAuthCommitment: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const invoiceId_0 = args_0[0];
    const secret_0 = args_0[1];
    if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
      __compactRuntime.typeError('merchantAuthCommitment',
                                 'argument 1',
                                 'veilpay3.compact line 55 char 1',
                                 'Bytes<32>',
                                 invoiceId_0)
    }
    if (!(secret_0.buffer instanceof ArrayBuffer && secret_0.BYTES_PER_ELEMENT === 1 && secret_0.length === 32)) {
      __compactRuntime.typeError('merchantAuthCommitment',
                                 'argument 2',
                                 'veilpay3.compact line 55 char 1',
                                 'Bytes<32>',
                                 secret_0)
    }
    return _dummyContract._merchantAuthCommitment_0(invoiceId_0, secret_0);
  },
  invoiceCommitment: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`invoiceCommitment: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const opening_0 = args_0[0];
    if (!(typeof(opening_0) === 'object' && typeof(opening_0.amount) === 'bigint' && opening_0.amount >= 0n && opening_0.amount <= 340282366920938463463374607431768211455n && opening_0.tokenColor.buffer instanceof ArrayBuffer && opening_0.tokenColor.BYTES_PER_ELEMENT === 1 && opening_0.tokenColor.length === 32 && opening_0.merchantCoinPk.buffer instanceof ArrayBuffer && opening_0.merchantCoinPk.BYTES_PER_ELEMENT === 1 && opening_0.merchantCoinPk.length === 32 && typeof(opening_0.invoiceType) === 'number' && opening_0.invoiceType >= 0 && opening_0.invoiceType <= 2 && opening_0.paymentSecret.buffer instanceof ArrayBuffer && opening_0.paymentSecret.BYTES_PER_ELEMENT === 1 && opening_0.paymentSecret.length === 32 && opening_0.salt.buffer instanceof ArrayBuffer && opening_0.salt.BYTES_PER_ELEMENT === 1 && opening_0.salt.length === 32)) {
      __compactRuntime.typeError('invoiceCommitment',
                                 'argument 1',
                                 'veilpay3.compact line 65 char 1',
                                 'struct InvoiceOpening<amount: Uint<0..340282366920938463463374607431768211456>, tokenColor: Bytes<32>, merchantCoinPk: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, paymentSecret: Bytes<32>, salt: Bytes<32>>',
                                 opening_0)
    }
    return _dummyContract._invoiceCommitment_0(opening_0);
  },
  paymentNullifier: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`paymentNullifier: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const invoiceId_0 = args_0[0];
    const opening_0 = args_0[1];
    const nonce_0 = args_0[2];
    if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
      __compactRuntime.typeError('paymentNullifier',
                                 'argument 1',
                                 'veilpay3.compact line 76 char 1',
                                 'Bytes<32>',
                                 invoiceId_0)
    }
    if (!(typeof(opening_0) === 'object' && typeof(opening_0.amount) === 'bigint' && opening_0.amount >= 0n && opening_0.amount <= 340282366920938463463374607431768211455n && opening_0.tokenColor.buffer instanceof ArrayBuffer && opening_0.tokenColor.BYTES_PER_ELEMENT === 1 && opening_0.tokenColor.length === 32 && opening_0.merchantCoinPk.buffer instanceof ArrayBuffer && opening_0.merchantCoinPk.BYTES_PER_ELEMENT === 1 && opening_0.merchantCoinPk.length === 32 && typeof(opening_0.invoiceType) === 'number' && opening_0.invoiceType >= 0 && opening_0.invoiceType <= 2 && opening_0.paymentSecret.buffer instanceof ArrayBuffer && opening_0.paymentSecret.BYTES_PER_ELEMENT === 1 && opening_0.paymentSecret.length === 32 && opening_0.salt.buffer instanceof ArrayBuffer && opening_0.salt.BYTES_PER_ELEMENT === 1 && opening_0.salt.length === 32)) {
      __compactRuntime.typeError('paymentNullifier',
                                 'argument 2',
                                 'veilpay3.compact line 76 char 1',
                                 'struct InvoiceOpening<amount: Uint<0..340282366920938463463374607431768211456>, tokenColor: Bytes<32>, merchantCoinPk: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, paymentSecret: Bytes<32>, salt: Bytes<32>>',
                                 opening_0)
    }
    if (!(nonce_0.buffer instanceof ArrayBuffer && nonce_0.BYTES_PER_ELEMENT === 1 && nonce_0.length === 32)) {
      __compactRuntime.typeError('paymentNullifier',
                                 'argument 3',
                                 'veilpay3.compact line 76 char 1',
                                 'Bytes<32>',
                                 nonce_0)
    }
    return _dummyContract._paymentNullifier_0(invoiceId_0, opening_0, nonce_0);
  },
  merchantReceiptCommitment: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`merchantReceiptCommitment: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const invoiceId_0 = args_0[0];
    const opening_0 = args_0[1];
    const nonce_0 = args_0[2];
    if (!(invoiceId_0.buffer instanceof ArrayBuffer && invoiceId_0.BYTES_PER_ELEMENT === 1 && invoiceId_0.length === 32)) {
      __compactRuntime.typeError('merchantReceiptCommitment',
                                 'argument 1',
                                 'veilpay3.compact line 104 char 1',
                                 'Bytes<32>',
                                 invoiceId_0)
    }
    if (!(typeof(opening_0) === 'object' && typeof(opening_0.amount) === 'bigint' && opening_0.amount >= 0n && opening_0.amount <= 340282366920938463463374607431768211455n && opening_0.tokenColor.buffer instanceof ArrayBuffer && opening_0.tokenColor.BYTES_PER_ELEMENT === 1 && opening_0.tokenColor.length === 32 && opening_0.merchantCoinPk.buffer instanceof ArrayBuffer && opening_0.merchantCoinPk.BYTES_PER_ELEMENT === 1 && opening_0.merchantCoinPk.length === 32 && typeof(opening_0.invoiceType) === 'number' && opening_0.invoiceType >= 0 && opening_0.invoiceType <= 2 && opening_0.paymentSecret.buffer instanceof ArrayBuffer && opening_0.paymentSecret.BYTES_PER_ELEMENT === 1 && opening_0.paymentSecret.length === 32 && opening_0.salt.buffer instanceof ArrayBuffer && opening_0.salt.BYTES_PER_ELEMENT === 1 && opening_0.salt.length === 32)) {
      __compactRuntime.typeError('merchantReceiptCommitment',
                                 'argument 2',
                                 'veilpay3.compact line 104 char 1',
                                 'struct InvoiceOpening<amount: Uint<0..340282366920938463463374607431768211456>, tokenColor: Bytes<32>, merchantCoinPk: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, paymentSecret: Bytes<32>, salt: Bytes<32>>',
                                 opening_0)
    }
    if (!(nonce_0.buffer instanceof ArrayBuffer && nonce_0.BYTES_PER_ELEMENT === 1 && nonce_0.length === 32)) {
      __compactRuntime.typeError('merchantReceiptCommitment',
                                 'argument 3',
                                 'veilpay3.compact line 104 char 1',
                                 'Bytes<32>',
                                 nonce_0)
    }
    return _dummyContract._merchantReceiptCommitment_0(invoiceId_0,
                                                       opening_0,
                                                       nonce_0);
  },
  isZero: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`isZero: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const a_0 = args_0[0];
    if (!(a_0.buffer instanceof ArrayBuffer && a_0.BYTES_PER_ELEMENT === 1 && a_0.length === 32)) {
      __compactRuntime.typeError('isZero',
                                 'argument 1',
                                 'veilpay3.compact line 118 char 1',
                                 'Bytes<32>',
                                 a_0)
    }
    return _dummyContract._isZero_0(a_0);
  },
  isOpenTokenColor: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`isOpenTokenColor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const a_0 = args_0[0];
    if (!(a_0.buffer instanceof ArrayBuffer && a_0.BYTES_PER_ELEMENT === 1 && a_0.length === 32)) {
      __compactRuntime.typeError('isOpenTokenColor',
                                 'argument 1',
                                 'veilpay3.compact line 122 char 1',
                                 'Bytes<32>',
                                 a_0)
    }
    return _dummyContract._isOpenTokenColor_0(a_0);
  },
  assertInvoiceOpening: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`assertInvoiceOpening: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const state_0 = args_0[0];
    const opening_0 = args_0[1];
    if (!(typeof(state_0) === 'object' && state_0.invoiceCommitment.buffer instanceof ArrayBuffer && state_0.invoiceCommitment.BYTES_PER_ELEMENT === 1 && state_0.invoiceCommitment.length === 32 && state_0.merchantAuthCommitment.buffer instanceof ArrayBuffer && state_0.merchantAuthCommitment.BYTES_PER_ELEMENT === 1 && state_0.merchantAuthCommitment.length === 32 && typeof(state_0.invoiceType) === 'number' && state_0.invoiceType >= 0 && state_0.invoiceType <= 2 && typeof(state_0.expiresAt) === 'bigint' && state_0.expiresAt >= 0n && state_0.expiresAt <= 18446744073709551615n && typeof(state_0.version) === 'bigint' && state_0.version >= 0n && state_0.version <= 18446744073709551615n && typeof(state_0.status) === 'number' && state_0.status >= 0 && state_0.status <= 4)) {
      __compactRuntime.typeError('assertInvoiceOpening',
                                 'argument 1',
                                 'veilpay3.compact line 126 char 1',
                                 'struct InvoiceState<invoiceCommitment: Bytes<32>, merchantAuthCommitment: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, expiresAt: Uint<0..18446744073709551616>, version: Uint<0..18446744073709551616>, status: Enum<InvoiceStatus, ACTIVE, PAID, SETTLED, CANCELLED, REFUNDED>>',
                                 state_0)
    }
    if (!(typeof(opening_0) === 'object' && typeof(opening_0.amount) === 'bigint' && opening_0.amount >= 0n && opening_0.amount <= 340282366920938463463374607431768211455n && opening_0.tokenColor.buffer instanceof ArrayBuffer && opening_0.tokenColor.BYTES_PER_ELEMENT === 1 && opening_0.tokenColor.length === 32 && opening_0.merchantCoinPk.buffer instanceof ArrayBuffer && opening_0.merchantCoinPk.BYTES_PER_ELEMENT === 1 && opening_0.merchantCoinPk.length === 32 && typeof(opening_0.invoiceType) === 'number' && opening_0.invoiceType >= 0 && opening_0.invoiceType <= 2 && opening_0.paymentSecret.buffer instanceof ArrayBuffer && opening_0.paymentSecret.BYTES_PER_ELEMENT === 1 && opening_0.paymentSecret.length === 32 && opening_0.salt.buffer instanceof ArrayBuffer && opening_0.salt.BYTES_PER_ELEMENT === 1 && opening_0.salt.length === 32)) {
      __compactRuntime.typeError('assertInvoiceOpening',
                                 'argument 2',
                                 'veilpay3.compact line 126 char 1',
                                 'struct InvoiceOpening<amount: Uint<0..340282366920938463463374607431768211456>, tokenColor: Bytes<32>, merchantCoinPk: Bytes<32>, invoiceType: Enum<InvoiceType, STANDARD, MULTI_PAY, DONATION>, paymentSecret: Bytes<32>, salt: Bytes<32>>',
                                 opening_0)
    }
    return _dummyContract._assertInvoiceOpening_0(state_0, opening_0);
  }
};
export const contractReferenceLocations =
  { tag: 'publicLedgerArray', indices: { } };
//# sourceMappingURL=index.js.map
