import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function GET(request: Request) {
  const { origin } = new URL(request.url);

  const priceId = process.env.STRIPE_SCHOOL_PRICE_ID;

  if (!priceId) {
    return NextResponse.json(
      { error: "Missing STRIPE_SCHOOL_PRICE_ID" },
      { status: 500 }
    );
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/schools/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/schools?cancelled=1`,
      allow_promotion_codes: true,
      metadata: {
        product: "school_licence",
      },
    });

    return NextResponse.redirect(session.url as string);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  }
}
