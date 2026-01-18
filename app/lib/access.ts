// app/lib/access.ts
import crypto from "crypto";

const COOKIE_NAME = "cvcraft_access";
const DEV_FALLBACK_SECRET = "cvcraft_dev_secret";

// Use a real secret in production.
// In dev, fall back to a stable default to avoid crashes.
const SECRET =
  (process.env.ACCESS_COOKIE_SECRET || "").trim() ||
  (process.env.NODE_ENV === "production" ? "" : DEV_FALLBACK_SECRET);

if (process.env.NODE_ENV === "production" && !SECRET) {
  throw new Error("Missing ACCESS_COOKIE_SECRET in production environment.");
}

/**
 * Name of the HttpOnly access cookie
 */
export function getAccessCookieName() {
  return COOKIE_NAME;
}

/**
 * Payload stored inside the signed cookie.
 * NOTE: sessionId enables Stripe re-checks (refund revocation).
 */
export type AccessPayload = {
  paid: boolean;
  expiresAt: number;

  // Added for refund-safe gating (optional for backwards compatibility)
  sessionId?: string;
};

function hmacSha256Hex(input: string) {
  return crypto.createHmac("sha256", SECRET).update(input).digest("hex");
}

/**
 * Base64URL encode (cookie-safe).
 */
function toBase64Url(str: string) {
  return Buffer.from(str, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

/**
 * Decode either Base64URL or classic Base64.
 * (Backwards compatible with older cookies you may have already set.)
 */
function fromBase64UrlOrBase64(input: string) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padLen = (4 - (base64.length % 4)) % 4;
  const padded = base64 + "=".repeat(padLen);
  return Buffer.from(padded, "base64").toString("utf8");
}

/**
 * Create a signed cookie value (HMAC-SHA256)
 * Stored as: base64url( `${json}.${sig}` )
 */
export function makeAccessCookieValue(payload: AccessPayload) {
  const json = JSON.stringify(payload);
  const sig = hmacSha256Hex(json);
  return toBase64Url(`${json}.${sig}`);
}

/**
 * Read & verify signed cookie value
 */
export function readAccessCookieValue(cookie?: string): AccessPayload | null {
  if (!cookie) return null;

  try {
    const decoded = fromBase64UrlOrBase64(cookie);

    const dot = decoded.lastIndexOf(".");
    if (dot <= 0) return null;

    const json = decoded.slice(0, dot);
    const sig = decoded.slice(dot + 1);

    if (!json || !sig) return null;

    const expectedSig = hmacSha256Hex(json);

    // timing-safe compare
    const a = Buffer.from(sig, "utf8");
    const b = Buffer.from(expectedSig, "utf8");
    if (a.length !== b.length) return null;
    if (!crypto.timingSafeEqual(a, b)) return null;

    const payload = JSON.parse(json) as AccessPayload;

    if (!payload?.paid) return null;
    if (typeof payload.expiresAt !== "number") return null;
    if (Date.now() > payload.expiresAt) return null;

    // sessionId optional (older cookies won’t have it)
    if (payload.sessionId != null && typeof payload.sessionId !== "string") return null;

    return payload;
  } catch {
    return null;
  }
}

/**
 * Convenience helper for API routes:
 * Reads the access cookie from either a NextRequest-style object
 * or a standard Request (by parsing the Cookie header).
 */
export function getAccessFromRequest(req: any): AccessPayload | null {
  try {
    // NextRequest has req.cookies.get(name)?.value
    const direct =
      req?.cookies?.get?.(COOKIE_NAME)?.value ?? req?.cookies?.get?.(COOKIE_NAME);

    if (typeof direct === "string" && direct) {
      return readAccessCookieValue(direct);
    }

    // Fallback: parse Cookie header (Request-compatible)
    const cookieHeader =
      req?.headers?.get?.("cookie") ?? req?.headers?.cookie ?? req?.headers?.Cookie;

    if (!cookieHeader || typeof cookieHeader !== "string") return null;

    const parts = cookieHeader.split(";").map((p: string) => p.trim());
    const match = parts.find((p: string) => p.startsWith(`${COOKIE_NAME}=`));
    if (!match) return null;

    const value = match.slice(COOKIE_NAME.length + 1);
    return readAccessCookieValue(value);
  } catch {
    return null;
  }
}
