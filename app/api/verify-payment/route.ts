// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-12-15.clover",
});

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json(
        { ok: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const paid = session.payment_status === "paid";
    const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000; // example: 30 days

    return NextResponse.json({
      ok: true,
      paid,
      customer_email: session.customer_details?.email || null,
      expiresAt,
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message || "Verification failed" },
      { status: 500 }
    );
  }
}
