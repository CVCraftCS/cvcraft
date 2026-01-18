// app/api/access/revoke/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getAccessCookieName } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  session_id?: string;
  token?: string;
};

function getBearerToken(req: NextRequest) {
  const h = req.headers.get("authorization") || "";
  const m = h.match(/^Bearer\s+(.+)$/i);
  return m?.[1]?.trim() || "";
}

export async function POST(req: NextRequest) {
  try {
    const adminToken = (process.env.ADMIN_REVOKE_TOKEN || "").trim();
    if (!adminToken) {
      return NextResponse.json(
        { ok: false, error: "Missing ADMIN_REVOKE_TOKEN" },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as Body;

    const provided =
      (body.token || "").trim() ||
      getBearerToken(req) ||
      "";

    if (!provided || provided !== adminToken) {
      return NextResponse.json(
        { ok: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const sessionId = (body.session_id || "").trim();
    if (!sessionId) {
      return NextResponse.json(
        { ok: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const stripeKey = (process.env.STRIPE_SECRET_KEY || "").trim();
    if (!stripeKey) {
      return NextResponse.json(
        { ok: false, error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(stripeKey);

    // Mark session as revoked in Stripe metadata
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    await stripe.checkout.sessions.update(sessionId, {
      metadata: {
        ...(session.metadata || {}),
        cvcraft_revoked: "1",
      },
    });

    const res = NextResponse.json(
      { ok: true, revoked: true, session_id: sessionId },
      { status: 200 }
    );

    // Clear access cookie
    res.cookies.set({
      name: getAccessCookieName(),
      value: "",
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
    });

    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (err) {
    console.error("Revoke failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Revoke failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
