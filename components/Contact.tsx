"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { SectionReveal } from "./SectionReveal";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [subject, setSubject] = useState("Hello from your portfolio");
  const [body, setBody] = useState("");

  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <SectionReveal>
      <section id="contact" className="mx-auto max-w-[1040px] px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="text-accent" size={24} />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              Have a security or infrastructure challenge in mind? I’m open to roles where reliability, access control, and risk management overlap.
            </p>
            <p className="text-muted">
              Reach me directly at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-medium text-accent underline underline-offset-4"
              >
                {site.email}
              </a>
            </p>
          </div>

          <form
            className="rounded-2xl border border-border bg-surface p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
          >
            <label className="mb-2 block text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mb-4 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              required
            />

            <label className="mb-2 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              className="mb-4 w-full resize-none rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              placeholder="Tell me what you're working on..."
              required
            />

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition hover:opacity-90"
            >
              <Send size={16} />
              Send email
            </button>
          </form>
        </div>
      </section>
    </SectionReveal>
  );
}
