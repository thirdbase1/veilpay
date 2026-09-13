# Public Reads (checkout page + merchant dashboard)

Reading invoice status requires **no seed, no session, no signing** — it is
the public ledger state. Anyone with the contract address can read it. Your
site should expose it through one thin server route so the browser stays free
of chain dependencies.

## The canonical read (verified in `scripts/verify-v2-live.mjs`)

```ts
import { setNetworkId } from '@midnight-ntwrk/midnight-js-network-id';
import { indexerPublicDataProvider } from '@midnight-ntwrk/midnight-js-indexer-public-data-provider';
import { ledger, IntentStatus } from '@veilpay/contract/managed/veilpay2/contract/index.js';

setNetworkId('preprod');
const INDEXER = 'https://api-preprod.1am.xyz/api/v4/graphql';
const WS      = 'wss://api-preprod.1am.xyz/api/v4/graphql/ws';
const ADDRESS = '85a0f911bb554bf4b7e9a69bb2ee2c20a03b823b20274eade45c6b18f53583a7';

const provider = indexerPublicDataProvider(INDEXER, WS);
const state = await provider.queryContractState(ADDRESS);
if (!state) throw new Error('contract state not found');
const L = ledger(state.data);

export function readInvoice(id: bigint) {
  if (!L.intents.member(id)) return null;
  const it = L.intents.lookup(id);
  return {
    id: id.toString(),
    status: IntentStatus[it.status],          // "ACTIVE" | "PAID" | "REFUNDED" | "CANCELLED"
    amount: it.amount.toString(),
    paidAmount: it.paidAmount.toString(),
    refundedAmount: it.refundedAmount.toString(),
    tokenColor: Buffer.from(it.tokenColor).toString('hex'),
    merchantCoinPk: Buffer.from(it.merchantCoinPk).toString('hex'),
    hasReceipt: L.receipts.member(id),
    expiresAt: it.expiresAt.toString(),
    sequenceNow: L.sequence.toString(),
  };
}
```

Notes:

- The SDK provider needs a global `WebSocket`. On Node, set
  `(globalThis as any).WebSocket = (await import('ws')).WebSocket;` before
  calling it (the scripts already do). `queryContractState` itself resolves
  over HTTP; the WS argument is only used for subscriptions.
- Preprod indexer reads lag inclusion by a block or two. A freshly-created
  invoice may return `null` for a few seconds — **poll with backoff** (the
  verify script retries 5x / 3s; copy that).
- If the indexer answers but has no deploy-for-address entry yet, fall back
  to polling by transaction hash (see `TX_BY_HASH_QUERY` in
  `cli/src/gateway-stack.ts`).
- Keep the 1AM gateway's authenticated relay as a *deploy/writing* path; the
  app runtime reads the endpoints above (see docs, migration commit 06c9afb).

## Status route shape (contract for your frontend)

`GET /api/invoice/[id]` returns exactly:

```json
{
  "id": "1",
  "status": "ACTIVE",
  "amount": "2500",
  "paidAmount": "0",
  "refundedAmount": "0",
  "tokenColor": "0000000000000000000000000000000000000000000000000000000000000000",
  "merchantCoinPk": "0ed55a43a47503ba...",
  "hasReceipt": false,
  "expiresAt": "1001",
  "sequenceNow": "1"
}
```

`404` + `{ "error": "not_found" }` when `member(id)` is false or `id` is not
a positive integer.

## Checkout page state machine (what your UI renders)

```text
ACTIVE     -> show amount, token badge, "Pay" button, countdown vs sequenceNow
PAID       -> green "Paid", show receipt indicator
REFUNDED   -> neutral "Refunded", show refundedAmount
CANCELLED  -> muted "Cancelled"
null       -> "This invoice does not exist (yet)"
```

Poll every 5s while `ACTIVE`. Stop polling on any terminal status.

## Merchant dashboard

Use `api.state$` (rxjs Observable over `VeilPay2API`) server-side for the
full list with `isMine` filtering, or the plain ledger scan in
`scripts/verify-v2-live.mjs` as the read model. `state$` already maps every
intent 1..sequence and flags ownership by `merchantId`.
