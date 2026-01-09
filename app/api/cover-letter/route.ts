import { NextResponse } from "next/server";

type Tone = "professional" | "friendly" | "confident";

function clean(s: unknown, max = 120) {
  const v = typeof s === "string" ? s.trim() : "";
  return v.length > max ? v.slice(0, max).trim() : v;
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    const jobTitle = clean(body?.jobTitle, 120);
    const companyName = clean(body?.companyName, 120);
    const tone = (clean(body?.tone, 30) as Tone) || "professional";

    if (!jobTitle || !companyName) {
      return NextResponse.json(
        { error: "Please provide a job title and company name." },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Server is missing OPENAI_API_KEY." },
        { status: 500 }
      );
    }

    // Keep it short + usable. No weird formatting. UK-friendly spelling by default.
    const toneLine =
      tone === "friendly"
        ? "Warm, friendly, and human — but still professional."
        : tone === "confident"
        ? "Confident and results-focused, without sounding arrogant."
        : "Professional, clear, and straightforward.";

    const prompt = `
Write a one-page cover letter for this role:

Job title: ${jobTitle}
Company: ${companyName}

Tone: ${toneLine}

Requirements:
- UK English
- 220–320 words
- Simple structure: greeting, why I'm applying, why I'd be good, closing
- No placeholders like [Your Name] or [Company Address]
- No bullet points
- Do not mention "AI" or "ChatGPT"
- End with: "Kind regards," followed by a blank line (no name).
`.trim();

    const r = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        input: prompt,
        temperature: 0.7,
      }),
    });

    const data = await r.json();

    if (!r.ok) {
      return NextResponse.json(
        { error: data?.error?.message || "OpenAI request failed." },
        { status: 500 }
      );
    }

    // Responses API can return output in different shapes; this is a robust extractor.
    let text = "";
    try {
      const out = data?.output || [];
      for (const item of out) {
        const content = item?.content || [];
        for (const c of content) {
          if (c?.type === "output_text" && typeof c?.text === "string") {
            text += c.text;
          }
        }
      }
    } catch {
      // fallback
      text = "";
    }

    text = (text || "").trim();

    if (!text) {
      return NextResponse.json(
        { error: "No cover letter text returned." },
        { status: 500 }
      );
    }

    return NextResponse.json({ coverLetter: text });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
