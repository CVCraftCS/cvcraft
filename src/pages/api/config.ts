// src/pages/api/class/config.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const code = String(req.query.code || "").trim().toUpperCase();
  if (!code) return res.status(400).json({ error: "Missing code" });

  const { data, error } = await supabaseAdmin
    .from("class_sessions")
    .select("config, expires_at")
    .eq("class_code", code)
    .maybeSingle();

  if (error || !data) return res.status(404).json({ error: "Class not found" });

  // basic expiry check
  if (data.expires_at && new Date(data.expires_at).getTime() < Date.now()) {
    return res.status(410).json({ error: "Class expired" });
  }

  return res.status(200).json({ config: data.config });
}
