// app/api/access/revoke/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ IMPORTANT: Do NOT use "@/..." aliases in server routes (Vercel build can fail).
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

function clearCookie(res: NextResponse) {
  const cookieName = getAccessCookieName();
  const isProd = process.env.NODE_ENV === "production";

  // NextResponse.cookies is the cleanest way
  res.cookies.set({
    name: cookieName,
    value: "",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: isProd,
    maxAge: 0,
  });

  return res;
}

export async function POST(req: NextRequest) {
  try {
    const adminToken = (process.env.ADMIN_REVOKE_TOKEN || "").trim();
    if (!adminToken) {
      return NextResponse.json(
        { ok: false, error: "Missing ADMIN_REVOKE_TOKEN on server" },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as Body;

    const provided =
      (body.token || "").trim() ||
      getBearerToken(req) ||
      "";

    if (!provided || provided !== adminToken) {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
    }

    const sessionId = (body.session_id || "").trim();
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: "Missing session_id" }, { status: 400 });
    }

    const secretKey = (process.env.STRIPE_SECRET_KEY || "").trim();
    if (!secretKey) {
      return NextResponse.json(
        { ok: false, error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secretKey);

    // Mark session as revoked (server-truth)
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const merged = { ...(session.metadata || {}), cvcraft_revoked: "1" };

    await stripe.checkout.sessions.update(sessionId, { metadata: merged });

    let res = NextResponse.json({ ok: true, revoked: true, session_id: sessionId }, { status: 200 });
    res.headers.set("Cache-Control", "no-store");
    res = clearCookie(res);

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
