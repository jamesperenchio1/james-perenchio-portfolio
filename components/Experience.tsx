"use client";

import { site } from "@/content/site";
import { SectionReveal } from "./SectionReveal";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 mx-auto max-w-[1040px] px-6 py-20">
      <SectionReveal>
        <div className="mb-10 flex items-center gap-3">
          <Briefcase className="text-accent" size={24} />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {site.experience.map((job, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {job.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {job.company}
                    {job.industry && (
                      <span className="ml-1 font-normal text-muted">· {job.industry}</span>
                    )}
                  </p>
                  <p className="text-sm text-muted">{job.location}</p>
                </div>
                <span className="mt-1 shrink-0 font-mono text-xs text-muted sm:mt-0">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="mt-16 mb-10 flex items-center gap-3">
          <GraduationCap className="text-accent" size={24} />
          <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {site.education.map((edu, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="mb-1 font-display text-base font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-accent">{edu.institution}</p>
              {edu.note && <p className="text-sm text-muted">{edu.note}</p>}
              <p className="mt-2 font-mono text-xs text-muted">{edu.period}</p>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
