// src/pages/api/schools/provision.js
import crypto from "crypto";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function normalize(v) {
  return String(v || "")
    .trim()
    .replace(/\s+/g, "")
    .toUpperCase();
}

function sha256Hex(str) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}

function makeCode() {
  // readable, teacher-friendly
  // e.g. CV-8K3D-P7Q2
  const bytes = crypto.randomBytes(5).toString("base64url").toUpperCase();
  const cleaned = bytes.replace(/[^A-Z0-9]/g, "").slice(0, 8);
  return `CV-${cleaned.slice(0, 4)}-${cleaned.slice(4, 8)}`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ ok: false, error: "Missing STRIPE_SECRET_KEY" });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({
      ok: false,
      error: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY",
    });
  }

  const { session_id, school_name } = req.body || {};
  const sessionId = String(session_id || "").trim();

  if (!sessionId) {
    return res.status(400).json({ ok: false, error: "Missing session_id" });
  }

  try {
    // 1) Verify checkout session is real + paid
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items", "subscription"],
    });

    if (!session) {
      return res.status(404).json({ ok: false, error: "Session not found" });
    }

    const product = session.metadata?.product;
    if (product !== "school_licence") {
      return res.status(400).json({ ok: false, error: "Not a school licence session" });
    }

    // For subscriptions, Stripe marks payment_status = 'paid' for the first invoice when successful
    if (session.payment_status !== "paid") {
      return res.status(402).json({ ok: false, error: "Payment not completed" });
    }

    // 2) Idempotency: if we already provisioned for this session, return ok
    const { data: existing, error: existingErr } = await supabase
      .from("school_licences")
      .select("stripe_session_id, expires_at, status")
      .eq("stripe_session_id", sessionId)
      .maybeSingle();

    if (existingErr) {
      return res.status(500).json({ ok: false, error: existingErr.message });
    }

    if (existing) {
      return res.status(200).json({
        ok: true,
        alreadyProvisioned: true,
        expiresAt: existing.expires_at,
        status: existing.status,
      });
    }

    // 3) Generate code + store hash only
    const code = makeCode();
    const code_hash = sha256Hex(normalize(code));

    // 4) Expiry = now + 1 year (365 days)
    const expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString();

    const name =
      String(school_name || session.metadata?.school_name || "")
        .trim()
        .slice(0, 120) || null;

    const { error: insertErr } = await supabase.from("school_licences").insert({
      code_hash,
      school_name: name,
      stripe_session_id: sessionId,
      status: "active",
      expires_at: expiresAt,
    });

    if (insertErr) {
      return res.status(500).json({ ok: false, error: insertErr.message });
    }

    // ✅ Return code ONCE so the success page can show it.
    // Store only the hash in DB.
    return res.status(200).json({
      ok: true,
      code,
      expiresAt,
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "Provision error" });
  }
}
