"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { FileText, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
  { label: "GitHub", href: site.github, external: true },
  { label: "LinkedIn", href: site.linkedin, external: true },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-[1040px] items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground hover:text-accent transition"
        >
          {site.name}
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground transition"
              >
                <FileText size={14} />
                Résumé
              </a>
            </li>
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resume}
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
              >
                <FileText size={14} />
                Résumé
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
