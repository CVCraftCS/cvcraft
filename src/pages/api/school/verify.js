// src/pages/api/school/verify.js
import crypto from "crypto";

function normalize(v) {
  // Keep it forgiving: trim + remove all whitespace
  return String(v || "")
    .trim()
    .replace(/\s+/g, "");
}

function sha256Hex(str) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const expectedRaw = (process.env.SCHOOL_ACCESS_CODE || "").trim();

  // Misconfiguration safety
  if (!expectedRaw) {
    return res.status(500).json({
      ok: false,
      error: "Server not configured (SCHOOL_ACCESS_CODE missing).",
    });
  }

  // Accept multiple payload shapes (keeps old + new clients working)
  const body = req.body || {};
  const incomingRaw = body.code ?? body.password ?? body.pin ?? "";

  const expected = normalize(expectedRaw);
  const incoming = normalize(incomingRaw);

  if (!incoming) {
    return res.status(401).json({ ok: false, valid: false, error: "Invalid code" });
  }

  // ✅ Constant-time compare without length constraints:
  // compare fixed-length SHA256 hex strings
  const expectedHash = Buffer.from(sha256Hex(expected), "utf8");
  const incomingHash = Buffer.from(sha256Hex(incoming), "utf8");

  const match = crypto.timingSafeEqual(incomingHash, expectedHash);

  if (!match) {
    return res.status(401).json({ ok: false, valid: false, error: "Invalid code" });
  }

  return res.status(200).json({ ok: true, valid: true });
}
