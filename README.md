# personal-site

A personal website — home, projects, `/now`, blog, and a contact page — built with
[Astro](https://astro.build/). Static output, light/dark theme, math + code rendering,
and an RSS feed. Content is authored in Markdown; the site renders it in its own
typography.

## Tech stack

- **[Astro 5](https://astro.build/)** — static site generator (`output: 'static'`)
- **Markdown content collections** — typed frontmatter via Zod (`src/content.config.ts`)
- **[KaTeX](https://katex.org/)** math — `remark-math` + `rehype-katex` (write `$…$` / `$$…$$`)
- **[Shiki](https://shiki.style/)** code highlighting — dual light/dark themes that follow the toggle
- **`@astrojs/sitemap`** + **`@astrojs/rss`** — `sitemap-index.xml` and `/rss.xml`
- Custom rehype plugin that turns `![alt](img "Caption")` into a `<figure>` with a `<figcaption>`

## Project structure

```
src/
  pages/            route files (index, projects, now, blog, contact, 404, styleguide, rss.xml.js)
  layouts/          Base.astro — shared HTML shell
  components/       SiteNav, SiteFooter, ThemeToggle, ProjectEntry
  content/          Markdown content (see below)
    blog/           blog posts
    projects/       one file per project
    now/            one file per /now update, named by date
  styles/           tokens.css (design tokens) + global.css
  utils/            links.ts — external-link detection, shared with the rehype plugin
  content.config.ts collection schemas
public/             static assets served as-is (favicon, PDFs, robots.txt)
astro.config.mjs    site config (canonical origin, integrations, markdown)
```

## Content model

All content is Markdown with typed frontmatter (validated at build time).

**Blog** — `src/content/blog/*.md`
```yaml
title: string
description: string
date: 2026-08-09
draft: false        # optional
```

**Projects** — `src/content/projects/*.md` (body = the description shown on the timeline)
```yaml
title: string
period: "2026–now"  # shown on the rail
date: 2026-08-09    # sort key
status: string      # optional distilled state line
milestones: [{ period, title }]   # optional
links: [{ label, url }]           # optional; url can be a full URL or "/file.pdf" in public/
archived: false     # optional — archived projects collapse behind an expander
```

**/now** — `src/content/now/YYYY-MM-DD.md` (body = free Markdown, convention is h2 sections)
```yaml
date: 2026-08-09
tagline: string     # optional — one-line preview on the Home tile
signoff: string     # optional — italic sign-off line
```

## Local development

```bash
npm install
npm run dev        # dev server with hot reload
npm run build      # clears .astro, then production build → dist/
npm run preview    # preview the built site locally
```

## Deployment

Static build, so it deploys to any static host. The intended path is a git-connected
host (e.g. **Cloudflare Pages**):

- **Build command:** `astro build`
- **Output directory:** `dist`
- Every push to `main` triggers a rebuild and deploy.

The canonical origin in `astro.config.mjs` (the `site:` field) is currently set to
`https://jakubpieczonka.pages.dev` — it feeds the sitemap, RSS, and OpenGraph URLs;
swap it for a custom domain here when you add one. The `PREVIEW_BASE` env var is only
for the harness preview server and should stay unset in production.

## Notes

See `CLAUDE.md` and `DECISIONS.md` for the design rationale and working conventions.
