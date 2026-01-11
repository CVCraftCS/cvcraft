// app/lib/access.ts
import crypto from "crypto";

const COOKIE_NAME = "cvcraft_access";
const SECRET = process.env.ACCESS_COOKIE_SECRET || "cvcraft_dev_secret";

/**
 * Name of the HttpOnly access cookie
 */
export function getAccessCookieName() {
  return COOKIE_NAME;
}

type AccessPayload = {
  paid: boolean;
  expiresAt: number;
};

/**
 * Create a signed cookie value (HMAC-SHA256)
 */
export function makeAccessCookieValue(payload: AccessPayload) {
  const json = JSON.stringify(payload);
  const sig = crypto
    .createHmac("sha256", SECRET)
    .update(json)
    .digest("hex");

  return Buffer.from(`${json}.${sig}`).toString("base64");
}

/**
 * Read & verify signed cookie value
 */
export function readAccessCookieValue(cookie?: string): AccessPayload | null {
  if (!cookie) return null;

  try {
    const decoded = Buffer.from(cookie, "base64").toString("utf8");
    const [json, sig] = decoded.split(".");

    if (!json || !sig) return null;

    const expectedSig = crypto
      .createHmac("sha256", SECRET)
      .update(json)
      .digest("hex");

    if (sig !== expectedSig) return null;

    const payload = JSON.parse(json) as AccessPayload;

    if (!payload.paid) return null;
    if (Date.now() > payload.expiresAt) return null;

    return payload;
  } catch {
    return null;
  }
}
