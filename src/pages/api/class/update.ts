import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const class_code = String(body?.class_code || "").trim().toUpperCase();
  const teacher_secret = String(body?.teacher_secret || "").trim();
  const config = body?.config;

  if (!class_code || !teacher_secret || !config || typeof config !== "object") {
    return res.status(400).json({ error: "Missing class_code / teacher_secret / config" });
  }

  const { data, error } = await supabase.rpc("teacher_update_config", {
    p_class_code: class_code,
    p_teacher_secret: teacher_secret,
    p_config: config,
  });

  if (error) return res.status(500).json({ error: error.message });

  // Your RPC returns boolean "found" style (true/false)
  if (!data) return res.status(403).json({ error: "Invalid code/secret or session expired" });

  return res.status(200).json({ ok: true });
}
