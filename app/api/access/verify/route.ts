// app/api/access/verify/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ IMPORTANT: Do NOT use "@/..." aliases in server routes (Vercel build can fail).
// From app/api/access/verify/route.ts -> app/lib/access.ts is "../../../lib/access"
import { makeAccessCookieValue, getAccessCookieName } from "../../../lib/access";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { session_id?: string; product?: string };

const SUPPORT_EMAIL = "cvcraftcs@outlook.com";

function formatDateTime(tsMs: number) {
  try {
    return new Date(tsMs).toLocaleString("en-GB", {
      timeZone: "Europe/London",
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return new Date(tsMs).toISOString();
  }
}

function baseUrl() {
  // Prefer explicit base URLs first (predictable in prod + dev)
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.BASE_URL ||
    process.env.NEXTAUTH_URL ||
    process.env.VERCEL_URL ||
    "";

  if (!raw) return "http://localhost:3000";
  if (raw.startsWith("http://") || raw.startsWith("https://")) return raw;
  return `https://${raw}`;
}

function productDisplayName(product: string) {
  if (product === "extension") return "Extension";
  if (product === "second_role") return "Second Role CV Copy";
  return "30-Day Access Pass";
}

function getSessionIdFromUrl(req: NextRequest) {
  const url = new URL(req.url);
  // Support both session_id and session.id (just in case anything sends the dotted variant)
  const sid =
    url.searchParams.get("session_id")?.trim() ||
    url.searchParams.get("session.id")?.trim() ||
    "";
  return sid || null;
}

function getCookieDomainForHost(host: string, isProd: boolean) {
  if (!isProd) return undefined;

  // Optional override if you ever need it:
  // ACCESS_COOKIE_DOMAIN=.cvcraftclassroom.com
  const envDomain = (process.env.ACCESS_COOKIE_DOMAIN || "").trim();
  if (envDomain) return envDomain;

  // Fix www/root mismatch: allow cookie to be valid for both
  // www.cvcraftclassroom.com + cvcraftclassroom.com
  const h = (host || "").toLowerCase();

  if (h === "cvcraftclassroom.com" || h === "www.cvcraftclassroom.com") {
    return ".cvcraftclassroom.com";
  }
  if (h.endsWith(".cvcraftclassroom.com")) {
    return ".cvcraftclassroom.com";
  }

  // Otherwise leave undefined so the browser scopes it to the current host
  return undefined;
}

async function sendReceiptEmail(args: {
  to: string;
  product: string;
  expiresAtMs: number;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false as const,
      skipped: true as const,
      reason: "missing_resend_api_key",
    };
  }

  // ✅ With your verified domain, set this in .env.local / Vercel env vars:
  // RESEND_FROM="CVCraft <no-reply@cvcraftclassroom.com>"
  const from = process.env.RESEND_FROM || "CVCraft <onboarding@resend.dev>";
  const replyTo = process.env.RESEND_REPLY_TO || SUPPORT_EMAIL;

  const accessUntil = formatDateTime(args.expiresAtMs);
  const productName = productDisplayName(args.product);

  const site = baseUrl();
  const manageUrl = `${site}/cv`;

  // ✅ Less "spammy" subject (better deliverability)
  const subject = "CVCraft — Payment received. Your access is now active";

  // ✅ Plain text (deliverability + accessibility)
  const text = `Hi,

Thanks for your purchase — your CVCraft access is now active.

What you purchased:
${productName}

Access valid until:
${accessUntil}

Return to your CV:
${manageUrl}

This email confirms your payment. Stripe will also send a separate receipt for your records.

If anything doesn’t look right, just reply to this email and we’ll help.

— The CVCraft Team
${SUPPORT_EMAIL}`;

  // ✅ Clean, professional HTML (email-safe)
  const html = `
<div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height: 1.5; color: #0f172a; background: #ffffff; padding: 0; margin: 0;">
  <div style="max-width: 560px; margin: 0 auto; padding: 24px;">

    <h2 style="margin: 0 0 12px; font-size: 20px; font-weight: 600;">
      Payment received
    </h2>

    <p style="margin: 0 0 16px; font-size: 14px;">
      Thanks for your purchase — your <strong>CVCraft access is now active</strong>.
    </p>

    <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin: 16px 0; background: #f9fafb;">
      <p style="margin: 0 0 6px; font-size: 14px;">
        <strong>What you purchased:</strong> ${productName}
      </p>
      <p style="margin: 0; font-size: 14px;">
        <strong>Access valid until:</strong> ${accessUntil}
      </p>
    </div>

    <p style="margin: 0 0 16px; font-size: 14px;">
      You can return to your CV at any time during this period to download or print your PDF.
    </p>

    <div style="margin: 20px 0;">
      <a href="${manageUrl}"
         style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 10px 16px; border-radius: 10px; font-size: 14px; font-weight: 600;">
        Return to your CV
      </a>
    </div>

    <p style="margin: 0 0 12px; font-size: 13px; color: #374151;">
      This email confirms your payment. Stripe will also send a separate receipt for your records.
    </p>

    <p style="margin: 0 0 16px; font-size: 13px; color: #374151;">
      If anything doesn’t look right, simply reply to this email and we’ll help.
    </p>

    <p style="margin: 24px 0 0; font-size: 13px; color: #6b7280;">
      — The CVCraft Team<br />
      <a href="mailto:${SUPPORT_EMAIL}" style="color: #6b7280; text-decoration: none;">
        ${SUPPORT_EMAIL}
      </a>
    </p>

  </div>
</div>`;

  const resp = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [args.to],
      subject,
      text,
      html,
      reply_to: replyTo,
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => "");
    return {
      ok: false as const,
      skipped: false as const,
      reason: "resend_failed",
      detail: errText,
    };
  }

  return { ok: true as const, skipped: false as const };
}

async function verifyAndRespond(opts: {
  req: NextRequest;
  sessionId: string;
  productHint?: string | null;
}) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { ok: false, error: "Missing STRIPE_SECRET_KEY" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey);

  // Verify checkout session
  const session = await stripe.checkout.sessions.retrieve(opts.sessionId);

  // Must be fully paid
  if (session.payment_status !== "paid") {
    return NextResponse.json(
      {
        ok: false,
        error: "Payment not completed",
        payment_status: session.payment_status,
      },
      { status: 403 }
    );
  }

  // Extra safety
  if (session.status && session.status !== "complete") {
    return NextResponse.json(
      { ok: false, error: "Checkout session not complete", status: session.status },
      { status: 403 }
    );
  }

  // 30-day access window
  const maxAgeSeconds = 30 * 24 * 60 * 60;
  const expiresAt = Date.now() + maxAgeSeconds * 1000;

  const cookieName = getAccessCookieName();
  const cookieValue = makeAccessCookieValue({ paid: true, expiresAt });
  const isProd = process.env.NODE_ENV === "production";

  // ---- Email confirmation (idempotent) ----
  const customerEmail = session.customer_details?.email || null;

  // Determine product (prefer server-truth: session metadata; fallback to hint)
  const product =
    (session.metadata?.product as string) ||
    (opts.productHint as string) ||
    "access_pass";

  // Prevent duplicate sends using Stripe session metadata
  const alreadySent = session.metadata?.cvcraft_email_sent === "1";

  let emailResult:
    | { ok: true; skipped: false }
    | { ok: false; skipped: true; reason: string }
    | { ok: false; skipped: false; reason: string; detail?: string }
    | null = null;

  if (customerEmail && !alreadySent) {
    emailResult = await sendReceiptEmail({
      to: customerEmail,
      product,
      expiresAtMs: expiresAt,
    });

    // Mark as sent in Stripe metadata so we never resend (even if verify is hit again)
    if (emailResult.ok) {
      try {
        const merged = { ...(session.metadata || {}), cvcraft_email_sent: "1" };
        await stripe.checkout.sessions.update(opts.sessionId, { metadata: merged });
      } catch (e) {
        // Not fatal — access cookie is priority
        console.warn("Failed to mark email as sent in Stripe metadata:", e);
      }
    }
  }

  const res = NextResponse.json(
    {
      ok: true,
      expiresAt,
      customerEmail,
      email:
        emailResult
          ? emailResult.ok
            ? "sent"
            : emailResult.skipped
            ? `skipped:${emailResult.reason}`
            : `failed:${emailResult.reason}`
          : alreadySent
          ? "already_sent"
          : customerEmail
          ? "not_sent"
          : "no_email",
    },
    { status: 200 }
  );

  // ✅ Reliable cookie set (Next.js App Router) + ✅ domain fix for www/root
  const host = opts.req.headers.get("host") || "";
  const cookieDomain = getCookieDomainForHost(host, isProd);

  res.cookies.set({
    name: cookieName,
    value: cookieValue,
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: maxAgeSeconds,
    secure: isProd, // don't set Secure on localhost
    ...(cookieDomain ? { domain: cookieDomain } : {}),
  });

  res.headers.set("Cache-Control", "no-store");
  return res;
}

// ✅ Allow browser GET for debugging + success redirects that hit verify with query params
export async function GET(req: NextRequest) {
  try {
    const sessionId = getSessionIdFromUrl(req);
    if (!sessionId) {
      return NextResponse.json(
        { ok: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const url = new URL(req.url);
    const productHint = url.searchParams.get("product")?.trim() || null;

    return await verifyAndRespond({ req, sessionId, productHint });
  } catch (err) {
    console.error("Access verify (GET) failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Access verify failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => ({}))) as Body;

    const sessionId = body.session_id?.trim();
    if (!sessionId) {
      return NextResponse.json(
        { ok: false, error: "Missing session_id" },
        { status: 400 }
      );
    }

    const productHint = body.product?.trim() || null;

    return await verifyAndRespond({ req, sessionId, productHint });
  } catch (err) {
    console.error("Access verify (POST) failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Access verify failed",
        message: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}
