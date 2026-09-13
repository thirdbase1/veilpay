# VeilPay v2 contract

Address 0x85a0f911bb554bf4b7e9a69bb2ee2c20a03b823b20274eade45c6b18f53583a7 block 2521381 compiler 0.31.1 pragma 0.23 source contract/src/veilpay2.compact
Ledger sequence Counter intents Map receipts Map Intent fields merchantId merchantCoinPk tokenColor amount expiresAt status secretCommitment paidAmount refundedAmount
tokenColor zero = open invoice any token. createIntent needs merchantCoinPk non-zero (coin pk not mn_addr). pay takes QualifiedShieldedCoinInfo via sendShielded change via sendImmediateShielded
