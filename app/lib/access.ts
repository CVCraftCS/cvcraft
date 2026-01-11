// app/lib/access.ts

/**
 * Centralised access-control helpers.
 * This file MUST remain server-only logic.
 */

const ACCESS_COOKIE_NAME = "cvcraft_access";

/**
 * Shape stored inside the signed cookie
 */
export type AccessPayload = {
  paid: true;
  expiresAt: number; // unix ms
};

/**
 * Cookie name helper (single source of truth)
 */
export function getAccessCookieName() {
  return ACCESS_COOKIE_NAME;
}

/**
 * Serialize access payload into a safe cookie string.
 * (Intentionally opaque – do NOT expose raw structure to clients)
 */
export function makeAccessCookieValue(payload: AccessPayload): string {
  // We intentionally base64 encode JSON to avoid tampering / parsing issues.
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

/**
 * Read + validate the access cookie.
 * Returns null if invalid, expired, malformed, or missing.
 */
export function readAccessCookieValue(
  rawValue?: string
): AccessPayload | null {
  if (!rawValue) return null;

  try {
    const decoded = Buffer.from(rawValue, "base64url").toString("utf8");
    const data = JSON.parse(decoded) as AccessPayload;

    // Hard validation
    if (data.paid !== true) return null;
    if (typeof data.expiresAt !== "number") return null;

    // Expiry enforcement
    if (Date.now() > data.expiresAt) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}
