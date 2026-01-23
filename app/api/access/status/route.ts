// app/api/access/status/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// From app/api/access/status/route.ts -> app/lib/access.ts
import { getAccessFromRequest } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("missing_stripe_secret_key");
  return new Stripe(key);
}

function isNotRefundedFromSession(session: any): boolean {
  // We prefer to check the PaymentIntent charge state (refund-safe)
  // but keep it robust across Stripe variations.
  const pi = session?.payment_intent;

  // If we don't have a PI expanded, we can't reliably verify refunds here.
  // In that case, fail closed (treat as not active).
  if (!pi) return false;

  // payment_intent has:
  // - amount_refunded
  // - charges.data[].refunded
  const amountRefunded = Number(pi?.amount_refunded || 0);
  if (amountRefunded > 0) return false;

  const charges = pi?.charges?.data || [];
  for (const c of charges) {
    if (c?.refunded) return false;
    const ar = Number(c?.amount_refunded || 0);
    if (ar > 0) return false;
  }

  return true;
}

export async function GET(req: NextRequest) {
  try {
    const access = getAccessFromRequest(req);

    const paid = !!access?.paid;
    const expiresAt =
      typeof access?.expiresAt === "number" ? access.expiresAt : null;

    // If cookie isn't present/valid, no need to hit Stripe
    if (!paid || !expiresAt || expiresAt <= Date.now()) {
      const res = NextResponse.json({ ok: false, expiresAt }, { status: 200 });
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    // ✅ Refund-safe: validate against Stripe
    // getAccessFromRequest should expose the stored Checkout Session ID (sessionId)
    const sessionId =
      typeof access?.sessionId === "string" ? access.sessionId : "";

    // If we can't verify, fail closed.
    if (!sessionId || !sessionId.startsWith("cs_")) {
      const res = NextResponse.json({ ok: false, expiresAt }, { status: 200 });
      res.headers.set("Cache-Control", "no-store");
      return res;
    }

    const stripe = stripeClient();
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["payment_intent", "payment_intent.charges"],
    });

    const paymentStatus = String(session?.payment_status || "");
    const isPaid = paymentStatus === "paid";

    // Fail closed if not paid or refunded
    const notRefunded = isNotRefundedFromSession(session);
    const ok = isPaid && notRefunded && expiresAt > Date.now();

    const res = NextResponse.json({ ok, expiresAt }, { status: 200 });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (e) {
    const res = NextResponse.json(
      { ok: false, expiresAt: null, error: "status_failed" },
      { status: 200 }
    );
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
}
