# VeilPay v2 - Agent Start Here

Copy src/ into your Next.js app. Live v2 0x85a0f911...583a7 block 2521381 preprod compiler 0.31.1 pragma 0.23 source contract/src/veilpay2.compact.

What changed v1->v2: createIntent gained tokenColor merchantCoinPk pay takes QualifiedShieldedCoinInfo new map receipts. See docs/V1-VS-V2.md.
Gateway https://api-preprod.1am.xyz is deploy-only with Schnorr session in cli never in app. App uses public indexer https://indexer.preprod.midnight.network/api/v3/graphql + wss://rpc.preprod.midnight.network + wallet extension Lace/1AM dapp-connector-api 4.x
