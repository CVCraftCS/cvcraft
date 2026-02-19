// src/pages/api/school/verify.js
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

// ✅ Server-only Supabase client (service role key). NEVER expose this to the browser.
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function normalize(v) {
  // forgiving: trim + remove all whitespace + uppercase
  return String(v || "")
    .trim()
    .replace(/\s+/g, "")
    .toUpperCase();
}

function sha256Hex(str) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // Misconfiguration safety
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({
      ok: false,
      error: "Server not configured (SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY missing).",
    });
  }

  // Accept multiple payload shapes (keeps old + new clients working)
  const body = req.body || {};
  const incomingRaw = body.code ?? body.password ?? body.pin ?? "";

  const incoming = normalize(incomingRaw);

  if (!incoming) {
    return res.status(401).json({ ok: false, valid: false, error: "Invalid code" });
  }

  try {
    const code_hash = sha256Hex(incoming);

    const { data, error } = await supabase
      .from("school_licences")
      .select("status, expires_at")
      .eq("code_hash", code_hash)
      .maybeSingle();

    if (error) {
      return res.status(500).json({ ok: false, error: error.message });
    }

    if (!data) {
      return res.status(401).json({ ok: false, valid: false, error: "Invalid code" });
    }

    const status = String(data.status || "").toLowerCase();
    const expiresAt = data.expires_at ? new Date(data.expires_at) : null;
    const now = new Date();

    const active = status === "active" && expiresAt && expiresAt > now;

    if (!active) {
      return res.status(401).json({
        ok: false,
        valid: false,
        error: "Code is not active (expired or revoked).",
        expiresAt: data.expires_at || null,
      });
    }

    return res.status(200).json({
      ok: true,
      valid: true,
      expiresAt: data.expires_at || null,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "Unknown error" });
  }
}
