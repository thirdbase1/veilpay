import { VeilPay3Simulator, qualifiedCoin } from "./veilpay3-simulator.js";
import { InvoiceStatus, InvoiceType } from "../managed/veilpay3/contract/index.js";
import { setNetworkId } from "@midnight-ntwrk/midnight-js-network-id";
import { describe, it, expect } from "vitest";
import { randomBytes } from "./utils.js";

setNetworkId("undeployed");

const AMOUNT = 1000n;
const FAR_FUTURE = 1_000_000n;
const ANY_TOKEN = new Uint8Array(32);
const merchantPk = () => randomBytes(32);

const invoiceIdHex = (id: Uint8Array) => Buffer.from(id).toString("hex");

describe("VeilPay v3 contract (private invoices)", () => {
  it("issues a standard invoice storing only commitments", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const paymentSecret = randomBytes(32);
    const { ledger, invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret,
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const state = ledger.invoices.lookup(invoiceId);
    expect(state.status).toEqual(InvoiceStatus.ACTIVE);
    expect(state.invoiceType).toEqual(InvoiceType.STANDARD);
    expect(state.version).toEqual(0n);
    expect(state.invoiceCommitment).toEqual(invoiceId);
    expect(ledger.sequence).toEqual(1n);
    expect(opening.paymentSecret).toEqual(paymentSecret);
  });

  it("settles a standard invoice and moves the requested amount", () => {
    const merchantKey = randomBytes(32);
    const sim = VeilPay3Simulator.deploy(merchantKey, randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const coin = qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32));
    const { ledger, result } = sim.settleStandard(invoiceIdHex(invoiceId), opening, coin);

    expect(ledger.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.PAID);
    expect(result.sent.value).toEqual(AMOUNT);
    expect(result.change.is_some).toEqual(false);
    expect(ledger.usedNullifiers.size()).toEqual(1n);
    expect(ledger.receiptCommitments.size()).toEqual(2n);
  });

  it("returns change to the payer when the coin exceeds the amount", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const { result } = sim.settleStandard(
      invoiceIdHex(invoiceId),
      opening,
      qualifiedCoin(AMOUNT + 400n, randomBytes(32), randomBytes(32)),
    );

    expect(result.sent.value).toEqual(AMOUNT);
    expect(result.change.is_some).toEqual(true);
    expect(result.change.value?.value).toEqual(400n);
  });

  it("rejects a second settlement of the same standard invoice", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    sim.settleStandard(
      invoiceIdHex(invoiceId),
      opening,
      qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
    );

    expect(() =>
      sim.settleStandard(
        invoiceIdHex(invoiceId),
        opening,
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("invoice not active");
  });

  it("rejects a coin that cannot cover the invoice", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    expect(() =>
      sim.settleStandard(
        invoiceIdHex(invoiceId),
        opening,
        qualifiedCoin(AMOUNT - 1n, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("coin cannot cover invoice");
  });

  it("rejects the wrong token color when the invoice pins one", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const tokenColor = randomBytes(32);
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    expect(() =>
      sim.settleStandard(
        invoiceIdHex(invoiceId),
        opening,
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("wrong token color");
  });

  it("rejects a settlement whose opening does not match the commitment", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    expect(() =>
      sim.settleStandard(
        invoiceIdHex(invoiceId),
        { ...opening, amount: AMOUNT + 1n },
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("invalid invoice opening");
  });

  it("accepts repeated multi-pay settlements until the merchant settles", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "multipay",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const id = invoiceIdHex(invoiceId);
    const first = sim.settleMultiPayment(id, opening, qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)));
    expect(first.ledger.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.ACTIVE);

    const second = sim.settleMultiPayment(id, opening, qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)));
    expect(second.ledger.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.ACTIVE);
    expect(second.ledger.usedNullifiers.size()).toEqual(2n);

    const settled = sim.settleMulti(id);
    expect(settled.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.SETTLED);
  });

  it("accepts variable donation amounts and returns change", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: 0n,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "donation",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const id = invoiceIdHex(invoiceId);
    const { result } = sim.acceptDonation(id, opening, qualifiedCoin(5000n, randomBytes(32), randomBytes(32)), 200n);
    expect(result.sent.value).toEqual(200n);
    expect(result.change.is_some).toEqual(true);
    expect(result.change.value?.value).toEqual(4800n);

    const again = sim.acceptDonation(id, opening, qualifiedCoin(75n, randomBytes(32), randomBytes(32)), 75n);
    expect(again.ledger.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.ACTIVE);
    expect(again.ledger.usedNullifiers.size()).toEqual(2n);
  });

  it("rejects a zero or uncovered donation", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: 0n,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "donation",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const id = invoiceIdHex(invoiceId);
    expect(() => sim.acceptDonation(id, opening, qualifiedCoin(100n, randomBytes(32), randomBytes(32)), 0n)).toThrow(
      "donation must be positive",
    );
    expect(() =>
      sim.acceptDonation(id, opening, qualifiedCoin(100n, randomBytes(32), randomBytes(32)), 101n),
    ).toThrow("coin cannot cover donation");
  });

  it("rejects settlement after the deadline", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const expiring = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: 1n,
    });
    sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    expect(() =>
      sim.settleStandard(
        invoiceIdHex(expiring.invoiceId),
        expiring.opening,
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("invoice expired");
  });

  it("cancels an unpaid invoice and blocks later settlement", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    const ledgerAfterCancel = sim.cancelInvoice(invoiceIdHex(invoiceId));
    expect(ledgerAfterCancel.invoices.lookup(invoiceId).status).toEqual(InvoiceStatus.CANCELLED);
    expect(() =>
      sim.settleStandard(
        invoiceIdHex(invoiceId),
        opening,
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("invoice not active");
  });

  it("rejects a mismatched invoice type at settlement", () => {
    const sim = VeilPay3Simulator.deploy(randomBytes(32), randomBytes(32));
    const { invoiceId, opening } = sim.issueInvoice({
      amount: AMOUNT,
      tokenColor: ANY_TOKEN,
      merchantCoinPk: merchantPk(),
      invoiceType: "standard",
      paymentSecret: randomBytes(32),
      salt: randomBytes(32),
      expiresAt: FAR_FUTURE,
    });

    expect(() =>
      sim.settleMultiPayment(
        invoiceIdHex(invoiceId),
        opening,
        qualifiedCoin(AMOUNT, randomBytes(32), randomBytes(32)),
      ),
    ).toThrow("invoice type invalid");
  });
});
