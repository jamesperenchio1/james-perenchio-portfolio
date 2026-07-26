import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");
const projectsDir = path.join(contentDir, "projects");

export type ProjectTheme = {
  bg: string;
  surface: string;
  border: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  display: string;
  mono: string;
};

export type ProjectFrontmatter = {
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  order: number;
  featured?: boolean;
  stack: string[];
  links?: {
    live?: string;
    code?: string;
    demo?: string;
  };
  theme: ProjectTheme;
};

export type Project = ProjectFrontmatter & {
  content: string;
};

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const fullPath = path.join(projectsDir, file);
      const source = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(source);
      return {
        ...(data as ProjectFrontmatter),
        content,
      };
    })
    .sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(projectsDir, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const source = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(source);
  return {
    ...(data as ProjectFrontmatter),
    content,
  };
}

export function getAllSlugs(): string[] {
  return getAllProjects().map((p) => p.slug);
}

