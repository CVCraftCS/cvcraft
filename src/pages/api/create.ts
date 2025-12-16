// src/pages/api/class/create.ts
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

function makeCode(len = 6) {
  // readable uppercase code
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
  return out;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // default classroom config (you can expand later)
  const config = req.body?.config ?? {
    teacherMode: true,
    studentSafeMode: true,
    sectionConfig: { summary: true, employment: true, qualifications: true, skills: true, references: false },
    sectionOrder: ["summary", "employment", "qualifications", "skills", "references"],
    template: "classic",
    region: "UK",
  };

  // 7 day expiry (adjust later)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  // try a few times in case code collision
  for (let attempt = 0; attempt < 8; attempt++) {
    const classCode = makeCode(6);
    const teacherSecret = crypto.randomBytes(24).toString("hex");

    const { error } = await supabaseAdmin.from("class_sessions").insert({
      class_code: classCode,
      teacher_secret: teacherSecret,
      config,
      expires_at: expiresAt,
    });

    if (!error) {
      return res.status(200).json({ classCode, teacherSecret, config, expiresAt });
    }
  }

  return res.status(500).json({ error: "Failed to create class session" });
}
