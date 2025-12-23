// src/pages/api/school/verify.js

import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // Ensure JSON body
  if (!req.headers["content-type"]?.includes("application/json")) {
    return res.status(400).json({ ok: false, error: "Invalid content type" });
  }

  const expected = (process.env.SCHOOL_ACCESS_CODE || "").trim();

  // Misconfiguration safety
  if (!expected) {
    return res.status(500).json({
      ok: false,
      error: "Server not configured (SCHOOL_ACCESS_CODE missing).",
    });
  }

  const { code } = req.body || {};
  const incoming = String(code || "").trim();

  if (!incoming) {
    return res.status(401).json({ ok: false, error: "Invalid code" });
  }

  const a = Buffer.from(incoming, "utf8");
  const b = Buffer.from(expected, "utf8");

  // Must be same length for timingSafeEqual
  if (a.length !== b.length) {
    return res.status(401).json({ ok: false, error: "Invalid code" });
  }

  // Constant-time comparison
  const match = crypto.timingSafeEqual(a, b);

  if (!match) {
    return res.status(401).json({ ok: false, error: "Invalid code" });
  }

  return res.status(200).json({ ok: true });
}
