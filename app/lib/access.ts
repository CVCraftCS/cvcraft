// app/lib/access.ts
import crypto from "crypto";

export type AccessPayload = {
  paid: true;
  expiresAt: number; // epoch ms
};

const COOKIE_NAME = "cvcraft_access";

// You MUST set this in Vercel env vars (Production + Preview):
// ACCESS_COOKIE_SECRET="some-long-random-string"
function getSecret() {
  const s = process.env.ACCESS_COOKIE_SECRET;
  if (!s) throw new Error("Missing ACCESS_COOKIE_SECRET env var");
  return s;
}

function b64urlEncode(input: Buffer | string) {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input, "utf8");
  return b.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function b64urlDecode(input: string) {
  input = input.replace(/-/g, "+").replace(/_/g, "/");
  while (input.length % 4) input += "=";
  return Buffer.from(input, "base64").toString("utf8");
}

function sign(data: string) {
  return b64urlEncode(crypto.createHmac("sha256", getSecret()).update(data).digest());
}

export function makeAccessCookieValue(payload: AccessPayload) {
  const json = JSON.stringify(payload);
  const encoded = b64urlEncode(json);
  const sig = sign(encoded);
  return `${encoded}.${sig}`;
}

export function readAccessCookieValue(value: string | undefined | null): AccessPayload | null {
  if (!value) return null;
  const parts = value.split(".");
  if (parts.length !== 2) return null;

  const [encoded, sig] = parts;
  const expected = sign(encoded);
  // timing-safe compare
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  if (!crypto.timingSafeEqual(a, b)) return null;

  try {
    const json = b64urlDecode(encoded);
    const payload = JSON.parse(json) as AccessPayload;
    if (!payload?.paid || typeof payload.expiresAt !== "number") return null;
    if (Date.now() >= payload.expiresAt) return null;
    return payload;
  } catch {
    return null;
  }
}

export function getAccessCookieName() {
  return COOKIE_NAME;
}
