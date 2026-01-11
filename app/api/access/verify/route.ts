// app/api/access/verify/route.ts
import { NextRequest } from "next/server";
import Stripe from "stripe";

// ✅ IMPORTANT: Do NOT use "@/..." aliases in server routes (Vercel build can fail).
// From app/api/access/verify/route.ts -> app/lib/access.ts is "../../../lib/access"
import { makeAccessCookieValue, getAccessCookieName } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ✅ Create Stripe client (avoid hardcoding apiVersion to prevent TS mismatch errors)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

type Body = { session_id?: string };

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json({ ok: false, error: "Missing STRIPE_SECRET_KEY" }, { status: 500 });
    }

    const body = (await req.json()) as Body;
    const sessionId = body.session_id?.trim();

    if (!sessionId) {
      return Response.json({ ok: false, error: "Missing session_id" }, { status: 400 });
    }

    // Verify checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Must be fully paid
    if (session.payment_status !== "paid") {
      return Response.json(
        {
          ok: false,
          error: "Payment not completed",
          payment_status: session.payment_status,
        },
        { status: 403 }
      );
    }

    // (Optional) extra safety: ensure the session is actually complete
    if (session.status && session.status !== "complete") {
      return Response.json(
        {
          ok: false,
          error: "Checkout session not complete",
          status: session.status,
        },
        { status: 403 }
      );
    }

    // 30-day access window
    const maxAgeSeconds = 30 * 24 * 60 * 60;
    const expiresAt = Date.now() + maxAgeSeconds * 1000;

    const cookieValue = makeAccessCookieValue({ paid: true, expiresAt });

    return new Response(JSON.stringify({ ok: true, expiresAt }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // ✅ Signed/HttpOnly cookie prevents JS/localStorage/back-button bypass
        "Set-Cookie": `${getAccessCookieName()}=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAgeSeconds}`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("Access verify failed:", err);
    return Response.json(
      {
        ok: false,
        error: "Access verify failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
