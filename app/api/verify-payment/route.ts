// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");

    if (!session_id) {
      return NextResponse.json(
        { valid: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { valid: false, error: "Server misconfigured (STRIPE_SECRET_KEY missing)" },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(session_id);

    const paid = session.payment_status === "paid";
    if (!paid) {
      return NextResponse.json({ valid: false }, { status: 401 });
    }

    // Option A: grant access for 30 days from now (you can change this later)
    const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;

    return NextResponse.json({ valid: true, expiresAt }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { valid: false, error: err?.message || "Verification failed" },
      { status: 500 }
    );
  }
}
