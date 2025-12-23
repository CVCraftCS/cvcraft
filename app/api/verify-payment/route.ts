import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ valid: false }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      return NextResponse.json({
        valid: true,
        expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days
      });
    }

    return NextResponse.json({ valid: false });
  } catch (err) {
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
