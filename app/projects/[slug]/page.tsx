import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/mdx";
import { site } from "@/content/site";
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
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
      style={{
        borderColor: "var(--border)",
        color: "var(--text)",
        backgroundColor: "var(--surface)",
      }}
    >
      <Icon size={16} />
      {label}
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
      <div className="mx-auto max-w-[1040px] px-6 pb-24 pt-16">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        <header className="mb-12">
          <span
            className="mb-4 inline-block rounded px-2.5 py-1 text-[11px] font-medium uppercase tracking-widest"
            style={{
              backgroundColor: t.accent,
              color: t.accentText,
              fontFamily: t.mono,
            }}
          >
            {project.kind}
          </span>
          <h1
            className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl"
            style={{ fontFamily: t.display, color: "var(--text)" }}
          >
            {project.name}
          </h1>
          <p
            className="mb-6 max-w-2xl text-xl leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {project.tagline}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border px-2.5 py-1 text-xs"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--muted)",
                  fontFamily: t.mono,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links && (
            <div className="flex flex-wrap gap-3">
              <ProjectLink href={project.links.live} icon={ExternalLink} label="Live site" />
              <ProjectLink href={project.links.code} icon={Github} label="Code" />
              <ProjectLink href={project.links.demo} icon={Play} label="Demo" />
            </div>
          )}
        </header>

        <article
          className="prose prose-lg max-w-none rounded-2xl border p-6 md:p-10"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
            color: "var(--text)",
            fontFamily: "var(--font-body)",
          }}
        >
          <MDXContent />
        </article>

        <div className="mt-16 text-center">
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
