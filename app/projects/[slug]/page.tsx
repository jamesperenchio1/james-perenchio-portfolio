import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { site } from "@/content/site";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArrowLeft, ExternalLink, Github, Play } from "lucide-react";

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${site.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — ${site.name}`,
      description: project.tagline,
    },
  };
}

function ProjectLink({
  href,
  icon: Icon,
  label,
}: {
  href?: string;
  icon: React.ElementType;
  label: string;
}) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-medium transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
      style={{
        borderColor: "var(--border)",
        color: "var(--text)",
        backgroundColor: "var(--surface)",
      }}
    >
      <Icon size={16} />
      <span>{label}</span>
      <ExternalLink
        size={12}
        className="ml-auto opacity-0 transition-opacity group-hover:opacity-60"
      />
    </a>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const MDXContent = (
    await import(`@/content/projects/${slug}.mdx`)
  ).default as React.ComponentType;

  const t = project.theme;

  const style = {
    "--bg": t.bg,
    "--surface": t.surface,
    "--border": t.border,
    "--text": t.text,
    "--muted": t.muted,
    "--accent": t.accent,
    "--accent-text": t.accentText,
    "--font-display": t.display,
    "--font-mono": t.mono,
  } as React.CSSProperties;

  return (
    <div className="project-theme min-h-screen" style={style}>
      <ScrollProgress color={t.accent} />

      <div className="mx-auto max-w-[1180px] px-6 pb-24 pt-12 md:pt-20">
        <Link
          href="/#work"
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium transition hover:text-[var(--accent)]"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to work
        </Link>

        {/* Hero */}
        <header className="mb-16 border-b pb-10" style={{ borderColor: "var(--border)" }}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wider">
            <span
              className="rounded px-2.5 py-1"
              style={{
                backgroundColor: t.accent,
                color: t.accentText,
                fontFamily: t.mono,
              }}
            >
              {project.kind}
            </span>
            <span style={{ color: "var(--muted)" }}>Case study</span>
          </div>

          <h1
            className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
            style={{ fontFamily: t.display, color: "var(--text)" }}
          >
            {project.name}
          </h1>
          <p
            className="mt-4 max-w-3xl text-xl leading-relaxed md:text-2xl"
            style={{ color: "var(--muted)" }}
          >
            {project.tagline}
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          {/* Main content */}
          <article
            className="prose prose-lg max-w-none"
            style={{
              color: "var(--text)",
              fontFamily: "var(--font-body)",
            }}
          >
            <MDXContent />
          </article>

          {/* Sticky sidebar */}
          <aside
            className="rounded-2xl border p-6 lg:sticky lg:top-24"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
            }}
          >
            <h2
              className="mb-5 text-sm font-semibold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              At a glance
            </h2>

            <div className="mb-6">
              <h3
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2 py-1 text-xs"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text)",
                      fontFamily: t.mono,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.links && (
              <div className="mb-6">
                <h3
                  className="mb-2 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--muted)" }}
                >
                  Links
                </h3>
                <div className="flex flex-col gap-2">
                  <ProjectLink href={project.links.live} icon={ExternalLink} label="Live site" />
                  <ProjectLink href={project.links.code} icon={Github} label="Code" />
                  <ProjectLink href={project.links.demo} icon={Play} label="Demo" />
                </div>
              </div>
            )}

            <div>
              <h3
                className="mb-2 text-xs font-semibold uppercase tracking-wider"
                style={{ color: "var(--muted)" }}
              >
                My contribution
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {project.contribution}
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-20 border-t pt-12 text-center"
          style={{ borderColor: "var(--border)" }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            style={{ backgroundColor: t.accent, color: t.accentText }}
          >
            <ArrowLeft size={16} />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
