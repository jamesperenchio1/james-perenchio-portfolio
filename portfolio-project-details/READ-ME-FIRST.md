# For the coding agent — project detail content

The project pages are currently rendering stub content. This folder contains the **full,
detailed writeups** for all six projects. Do this:

1. **Replace** the body of each existing project with the matching file in
   `projects/<slug>.mdx`. The slugs match the current live routes:
   `lekha`, `home-security-lab`, `gingerbros`, `passclass`, `amber-energy-hackathon`,
   `vr-helicopter-simulator`.

2. Each file has YAML **frontmatter** (theme, links, stack, tagline) + a rich MDX **body**
   with multiple `##` sections. If your project pages already have working frontmatter/theme
   wiring, you may keep your frontmatter and swap in **just the body** — but the frontmatter
   here is correct and drop-in safe if you prefer to replace the whole file.

3. **Render every section in full.** Headings (`##`, `###`), paragraphs, and bulleted lists
   must all display, styled to match each project's theme. Do **not** truncate, summarize, or
   collapse these — the whole complaint is that the pages were too thin, so length here is
   intentional.

4. On **Home Security Lab**, the body includes a `<Diagram />` component tag where the
   zero-trust architecture SVG should render (the SVG is in the original build prompt,
   Appendix A). Wire `<Diagram />` to output that inline SVG, themed to the page. If you
   haven't built that component yet, add it.

5. Style the writeup typography properly: comfortable measure (~65–75ch), clear heading
   hierarchy, readable line-height, and lists that breathe. These are the substance of each
   project page — they should look like considered case studies, not a wall of text.

Nothing in these files is invented; it's all accurate to the projects. If a detail is ever
unclear, leave it as-is rather than paraphrasing it into something different.
