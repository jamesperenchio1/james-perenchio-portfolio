import { site } from "@/content/site";
import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionReveal } from "@/components/SectionReveal";
import { Certs } from "@/components/Certs";
import { Contact } from "@/components/Contact";
import { Assistant } from "@/components/Assistant";
import { AnimatedHero, AnimatedText } from "@/components/AnimatedHero";
import { Github, FileText } from "lucide-react";

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <section className="relative mx-auto max-w-[1040px] px-6 pb-16 pt-20 md:pt-28">
        <AnimatedHero>
          <p className="mb-4 font-mono text-sm font-medium uppercase tracking-widest text-muted">
            {site.role}
          </p>
          <h1 className="mb-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            <AnimatedText text={site.hero.headline} />
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {site.hero.subline}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-text transition hover:opacity-90"
            >
              Get in touch
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-background"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-background"
            >
              <FileText size={16} />
              Download résumé
            </a>
          </div>
        </AnimatedHero>

        <SectionReveal delay={0.2}>
          <div className="mt-16 rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Approach
            </h2>
            <p className="leading-relaxed text-muted">{site.about}</p>
          </div>
        </SectionReveal>
      </section>

      <section id="work" className="scroll-mt-24 bg-surface py-20 transition-colors">
        <div className="mx-auto max-w-[1040px] px-6">
          <SectionReveal>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-muted">
                  Selected work
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Projects
                </h2>
              </div>
            </div>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Certs />
      <Contact />
      <Assistant />
    </>
  );
}
