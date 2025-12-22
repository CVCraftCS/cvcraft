import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PRODUCTS = ["access_pass", "extension", "second_role"] as const;
type ProductKey = (typeof PRODUCTS)[number];

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const maybeProduct = body?.product;

    const product: ProductKey = PRODUCTS.includes(maybeProduct)
      ? maybeProduct
      : "access_pass";

    const siteUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const priceMap: Record<ProductKey, string | undefined> = {
      access_pass: process.env.STRIPE_PRICE_ACCESS_PASS,
      extension: process.env.STRIPE_PRICE_EXTENSION,
      second_role: process.env.STRIPE_PRICE_SECOND_ROLE,
    };

    const priceId = priceMap[product];
    if (!priceId) {
      return NextResponse.json(
        { error: `Missing Stripe price env for: ${product}` },
        { status: 500 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing`,
      metadata: { app: "cvcraft", product },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "Unable to create checkout session" },
      { status: 500 }
    );
  }
}
