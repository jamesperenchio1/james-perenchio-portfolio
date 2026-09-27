import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { getAllProjects } from "@/lib/mdx";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = "gemini-2.0-flash-latest";

function buildSystemPrompt(): string {
  const projects = getAllProjects();
  return [
    `You are a helpful, concise assistant on the portfolio site of ${site.name}.`,
    `Answer ONLY about James, his projects, his skills, his background, and how to contact him.`,
    `If asked something off-topic, politely deflect and suggest browsing the projects or using the contact form at ${site.email}.`,
    `Do not invent facts. If you don't know, say so and point to the contact form.`,
    `Tone: friendly, direct, and brief (1-3 short paragraphs). Write plainly, the way a person would in a chat.`,
    `Never use em dashes or en dashes; use commas, periods, or parentheses instead. No bullet-point lists unless asked.`,
    ``,
    `About James:`,
    `- Role: ${site.role}`,
    `- Location: ${site.location}`,
    `- ${site.hero.subline}`,
    `- ${site.about}`,
    ...site.experience.map((j) => `- ${j.title}, ${j.company} (${j.period})`),
    `- GitHub: ${site.github}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Email: ${site.email}`,
    ``,
    `Projects:`,
    ...projects.map((p) =>
      [
        `- ${p.name} (${p.kind})`,
        `  Tagline: ${p.tagline}`,
        `  Stack: ${p.stack.join(", ")}`,
        `  James's part: ${p.contribution}`,
      ].join("\n")
    ),
  ].join("\n");
}

export async function POST(request: Request) {
  if (!API_KEY) {
    return NextResponse.json({
      reply:
        "The assistant isn't set up right now. You can still browse the projects above or get in touch through the contact form.",
    });
  }

  try {
    const { messages } = (await request.json()) as {
      messages: { role: "user" | "model"; text: string }[];
    };

    const contents = messages.map((m) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.text }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          systemInstruction: {
            parts: [{ text: buildSystemPrompt() }],
          },
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 512,
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Gemini error:", err);
      return NextResponse.json({
        reply:
          "I couldn't get an answer just now. Try again in a moment, or browse the projects for details.",
      });
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    return NextResponse.json({
      reply: reply || "I'm not sure how to answer that. Try asking about James's projects or his security background.",
    });
  } catch (err) {
    console.error("Assistant route error:", err);
    return NextResponse.json({
      reply:
        "Something went wrong. You can still explore the projects or send James a message through the contact form.",
    });
  }
}
