// src/pages/api/class/update.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { classCode, teacherSecret, config } = req.body || {};
  if (!classCode || !teacherSecret || !config) {
    return res.status(400).json({ error: "Missing classCode, teacherSecret, or config" });
  }

  const { data, error } = await supabaseAdmin.rpc("teacher_update_config", {
    p_class_code: String(classCode).trim().toUpperCase(),
    p_teacher_secret: String(teacherSecret).trim(),
    p_config: config,
  });

  if (error) return res.status(400).json({ error: error.message });

  // data is boolean "found" from your function
  if (!data) return res.status(401).json({ error: "Invalid code/secret or class expired" });

  return res.status(200).json({ ok: true });
}
