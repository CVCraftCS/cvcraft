// app/api/access/verify/route.ts
import { NextRequest } from "next/server";
import Stripe from "stripe";
import { makeAccessCookieValue, getAccessCookieName } from "@/app/lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ⚠️ IMPORTANT:
// Do NOT hardcode apiVersion – Stripe SDK typings must match
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

type Body = { session_id?: string };

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json(
        { ok: false, error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const body = (await req.json()) as Body;
    const sessionId = body.session_id?.trim();

    if (!sessionId) {
      return Response.json(
        { ok: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

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

    // 30-day access window
    const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;

    const cookieValue = makeAccessCookieValue({
      paid: true,
      expiresAt,
    });

    return new Response(JSON.stringify({ ok: true, expiresAt }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": `${getAccessCookieName()}=${cookieValue}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${
          30 * 24 * 60 * 60
        }`,
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
