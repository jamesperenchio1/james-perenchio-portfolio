# James Perenchio: Personal Portfolio

A content-driven portfolio site built with Next.js 15, React 19, MDX, and Tailwind CSS.

## Adding a project

1. Copy an existing file in `content/projects/` (for example `lekha.mdx`).
2. Rename it to `<your-project-slug>.mdx`.
3. Update the frontmatter: `slug`, `name`, `kind`, `tagline`, `contribution`, `order`, `stack`, `links`, and `theme`.
   - `order` controls where the card appears on the home page. New projects go after the last one.
   - `theme` sets the page's colors and fonts. Give each project its own palette.
   - Theme fonts use the CSS variables defined in `app/layout.tsx`, for example
     `display: "var(--font-fraunces), serif"`. To use a new font, add it there first.
4. Write the MDX body below the frontmatter. You can use these custom components:
   - `<Diagram>`: wraps an inline SVG, such as the zero-trust architecture diagram.
   - `<Highlights items={[...]} />`: highlight cards.
   - `<Callout type="info|warning|success">`: callout boxes.
   - `<VideoEmbed src="..." title="..." />`: YouTube embeds.
   - `<Figure caption="...">`: image figures.
5. Run `npm run build` to check it, then deploy.

The home page grid and the themed project page are generated automatically. No component changes are needed.

## Environment variables

- `GEMINI_API_KEY` powers the "Ask about my work" assistant. It's only used server-side.
  - Get a free key at [aistudio.google.com](https://aistudio.google.com) (Get API key, then Create API key).
  - Add it in Vercel under Project, Settings, Environment Variables as `GEMINI_API_KEY`.
  - The site builds and runs without it. The assistant just replies that it isn't set up.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

This is a standard Next.js app. It's hosted on Vercel:

```bash
npx vercel --prod
```

It doesn't use any Vercel-specific APIs, so it can also run on Netlify, Cloudflare Pages, or any other host that supports Next.js.

## Notes

- The résumé lives at `public/James_Perenchio_CV.pdf`.
- Project pages use their own palette from frontmatter and ignore the global light/dark toggle.
- The site respects `prefers-reduced-motion`.
