"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/mdx";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const theme = project.theme;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block h-full focus:outline-none">
        <article
          className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
          style={
            {
              "--card-accent": theme.accent,
              "--card-surface": theme.surface,
              "--card-border": theme.border,
            } as React.CSSProperties
          }
        >
          <div
            className="h-1.5 w-full"
            style={{ backgroundColor: theme.accent }}
          />
          <div className="flex flex-1 flex-col p-6">
            <span
              className="mb-3 w-fit rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider"
              style={{
                backgroundColor: theme.accent,
                color: theme.accentText,
                fontFamily: theme.mono,
              }}
            >
              {project.kind}
            </span>
            <h3
              className="mb-2 font-display text-2xl font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              {project.name}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border px-2 py-1 text-xs"
                  style={{
                    borderColor: theme.border,
                    color: "var(--muted)",
                    fontFamily: theme.mono,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              boxShadow: `inset 0 0 0 1px ${theme.accent}40`,
            }}
          />
        </article>
      </Link>
    </motion.div>
  );
}
