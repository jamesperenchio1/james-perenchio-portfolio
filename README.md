# James Perenchio — Personal Portfolio

A content-driven portfolio site built with Next.js 15, React 19, MDX, and Tailwind CSS.

## How to add a new project

1. Copy an existing file in `content/projects/` (e.g. `lekha.mdx`).
2. Rename it to `<your-project-slug>.mdx`.
3. Update the frontmatter: `slug`, `name`, `kind`, `tagline`, `order`, `stack`, `links`, and `theme`.
4. Write the MDX body below the frontmatter. You can use the custom MDX components:
   - `<Diagram>` — wrap an inline SVG, e.g. the zero-trust architecture diagram.
   - `<Highlights items={[...]} />` — styled highlight cards.
   - `<Callout type="info|warning|success">` — callout boxes.
   - `<VideoEmbed src="..." title="..." />` — YouTube embeds.
   - `<Figure caption="...">` — image figures.
5. Run `npm run build` to verify, then deploy.

That's it — the home gallery and the themed project page are generated automatically. No component edits needed.

## Environment variables

- `GEMINI_API_KEY` — powers the "Ask about my work" assistant. Server-side only.
  - Get a free key at [aistudio.google.com](https://aistudio.google.com) → Get API key → Create API key.
  - Add it to Vercel: Project → Settings → Environment Variables → `GEMINI_API_KEY`.
  - The site builds and runs fine without it; the assistant will degrade gracefully.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This is a standard Next.js app. The recommended host is Vercel:

```bash
npx vercel --prod
```

The app uses no Vercel-proprietary APIs, so it can also run on Netlify, Cloudflare Pages, or any other Next.js-compatible host.

## Notes

- Replace `public/James_Perenchio_CV.pdf` with the real résumé PDF.
- Project pages use their own palette from frontmatter and ignore the global light/dark toggle while you're on them.
- The site respects `prefers-reduced-motion` while keeping the default experience lively.
