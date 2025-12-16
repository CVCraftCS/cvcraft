import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../../supabaseClient";

function randomCode(len = 6) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // avoid confusing chars
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

function randomSecret(len = 24) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // You can pass an initial config from the teacher panel if you want
  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  const initialConfig = body?.config && typeof body.config === "object" ? body.config : {};

  // Try a few times in case of code collision
  for (let attempt = 0; attempt < 5; attempt++) {
    const class_code = randomCode(6);
    const teacher_secret = randomSecret(28);

    const expires_at = new Date(Date.now() + 1000 * 60 * 60 * 6).toISOString(); // 6 hours

    const { error } = await supabase.from("class_sessions").insert({
      class_code,
      teacher_secret,
      config: initialConfig,
      expires_at,
    });

    if (!error) {
      return res.status(200).json({ class_code, teacher_secret, expires_at });
    }
  }

  return res.status(500).json({ error: "Failed to create class session" });
}
