// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

const PRODUCTS = ["access_pass", "extension", "second_role"] as const;
type ProductKey = (typeof PRODUCTS)[number];

function safePath(path: unknown, fallback: string) {
  if (typeof path !== "string") return fallback;
  if (!path.startsWith("/")) return fallback;
  if (path.startsWith("//")) return fallback; // prevent open-redirects
  return path;
}

function baseUrl() {
  // Prefer explicit base URLs first (local dev + predictable prod)
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.BASE_URL ||
    process.env.NEXTAUTH_URL ||
    process.env.VERCEL_URL ||
    "";

  if (!raw) return "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;

  // VERCEL_URL is usually like "myapp.vercel.app" (no protocol)
  return `https://${raw}`;
}

function requireEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name} in environment (.env.local / Vercel env vars)`);
  return v;
}

export async function POST(req: Request) {
  try {
    // Guard: return a clear error if Stripe isn't configured
    requireEnv("STRIPE_SECRET_KEY");

    const body = await req.json().catch(() => ({}));

    const maybeProduct = body?.product;
    const product: ProductKey = PRODUCTS.includes(maybeProduct)
      ? maybeProduct
      : "access_pass";

    // Accept BOTH: { return } and { returnTo }
    const rawReturn = body?.return ?? body?.returnTo;
    const rawCancel = body?.cancel;

    const returnTo = safePath(rawReturn, "/cv");
    const cancelTo = safePath(rawCancel, "/pricing");

    const siteUrl = baseUrl();

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

    /**
     * IMPORTANT (Stripe placeholder):
     * We MUST keep `{CHECKOUT_SESSION_ID}` literally in the URL string.
     * Using URLSearchParams encodes braces to %7B/%7D which prevents Stripe substitution.
     */

    const successUrl =
      `${siteUrl}/checkout/success` +
      `?session_id={CHECKOUT_SESSION_ID}` +
      `&return=${encodeURIComponent(returnTo)}` +
      `&product=${encodeURIComponent(product)}`;

    const cancelUrl =
      `${siteUrl}${cancelTo}` +
      `?return=${encodeURIComponent(returnTo)}`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: successUrl,
      cancel_url: cancelUrl,

      // Optional: helps trace sessions to your app/users later
      client_reference_id: `cvcraft:${product}`,

      metadata: {
        app: "cvcraft",
        product,
        returnTo,
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);

    const message =
      typeof err?.message === "string"
        ? err.message
        : "Unable to create checkout session";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
