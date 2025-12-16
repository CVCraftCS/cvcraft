import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { role, experience, skills } = req.body;

  try {
    const prompt = `
You are a professional UK CV writer.

Create:
1. A concise professional summary
2. 4–6 bullet points of key experience
3. A cleaned, professional skills list

Target role: ${role}

Experience:
${experience}

Skills:
${skills.join(", ")}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4,
    });

    res.status(200).json({
      result: completion.choices[0].message.content,
    });
  } catch (error) {
    res.status(500).json({ error: "AI generation failed" });
  }
}
