"use client";

import { site } from "@/content/site";
import { SectionReveal } from "./SectionReveal";
import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Certs() {
  return (
    <SectionReveal>
      <section className="mx-auto max-w-[1040px] px-6 py-20">
        <div className="mb-10 flex items-center gap-3">
          <Award className="text-accent" size={24} />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Certifications & learning
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {site.certs.map((cert) => (
            <div
              key={cert.name}
              className="rounded-xl border border-border bg-surface p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                {cert.name}
              </h3>
              <p className="text-sm text-muted">{cert.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-surface p-6 shadow-sm">
          <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
            Hack The Box
          </h3>
          <p className="mb-4 text-sm text-muted">
            Ongoing offensive and defensive security practice on the HTB platform.
          </p>
          <Link
            href={site.hackthebox.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-text transition hover:opacity-90"
          >
            View HTB profile
            <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </SectionReveal>
  );
}
