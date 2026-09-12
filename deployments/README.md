# VeilPay Contract Artifacts

This directory is the source of truth for **where VeilPay lives** and **what it
can do**, so any agent or website can plug into the deployed contract without
rebuilding it.

## Files

| File | What it is |
|---|---|
| `preprod.json` | Deployment artifact: live contract address, deploy tx, block, network endpoints, compiler versions, source hash, and how it was deployed. |
| `veilpay-contract-info.json` | Compiler-generated circuit/state schema (circuits, witnesses, ledger shape). Read this to know the exact entry-point argument types. |

## Live contract (v1 oracle)

- Address: `0x304666ce3bb47edab2267a88eb650330042e1d6b1bea347d8f391b3fd09d719f`
- Network: Midnight **Preprod**
- Explorer: https://preprod.midnightexplorer.com/contracts/0x304666ce3bb47edab2267a88eb650330042e1d6b1bea347d8f391b3fd09d719f
- Indexer: `https://api-preprod.1am.xyz/api/v4/graphql` (WS: `/ws`)
- RPC: `wss://rpc.preprod.midnight.network`

## What v1 does / does not do

v1 is a **private payment-intent oracle**: merchants create intents, payers
prove knowledge of a 32-byte payment secret through a ZK circuit, and the
contract records the attestation. It **does not custody or move tokens**.
The NullPay-parity plan (real shielded token transfers, receipts) is in
[../docs/NULLPAY-V2-SPEC.md](../docs/NULLPAY-V2-SPEC.md).

## Circuit entry points (from contract-info.json)

- `createIntent(amount: Uint<128>, expiresAt: Uint<64>) -> Uint<64>` (proof)
- `pay(intentId: Uint<64>)` (proof; witness: `paymentSecret(intentId)`)
- `refund(intentId: Uint<64>, refundAmount: Uint<128>)` (proof)
- `cancel(intentId: Uint<64>)` (proof)
- `isPaid(intentId: Uint<64>) -> Boolean` (proof)
- Public reads: `sequence` (Counter), `intents` (Map<Uint<64>, Intent>)

## Rebuilding the managed artifacts

`contract/src/managed/` is gitignored (prover keys are multi-MB). Two ways to
regenerate:

1. CI: push to `main`; the workflow compiles and uploads a `veilpay-managed`
   artifact. Download and unzip into `contract/src/managed/veilpay/`.
2. Local: `cd contract && npm ci && npm run build` with the Midnight toolchain.

Website integration lives in [../docs/WEBSITE-INTEGRATION.md](../docs/WEBSITE-INTEGRATION.md);
the deploy runbook in [../docs/DEPLOYMENT.md](../docs/DEPLOYMENT.md).
