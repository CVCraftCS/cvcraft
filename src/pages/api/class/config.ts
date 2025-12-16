import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabaseClient";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const code = String(req.query.code || "").trim().toUpperCase();
  if (!code) return res.status(400).json({ error: "Missing code" });

  const { data, error } = await supabase
    .from("class_sessions")
    .select("class_code, config, updated_at, expires_at")
    .eq("class_code", code)
    .maybeSingle();

  if (error) return res.status(500).json({ error: error.message });
  if (!data) return res.status(404).json({ error: "Class not found" });

  return res.status(200).json({
    class_code: data.class_code,
    config: data.config,
    updated_at: data.updated_at,
    expires_at: data.expires_at,
  });
}
