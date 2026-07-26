"use client";

import Link from "next/link";
import { site } from "@/content/site";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-10 transition-colors">
      <div className="mx-auto flex max-w-[1040px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-foreground">
            {site.name}
          </p>
          <p className="text-xs text-muted">{site.location}</p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${site.email}`}
            className="text-muted hover:text-foreground transition"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
        </div>

        <p className="text-xs text-muted">© {year} James Perenchio</p>
      </div>
    </footer>
  );
}
