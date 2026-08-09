import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts: Markdown files in src/content/blog/. Owner writes Markdown;
// the site renders it in its own typography (.prose in global.css).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    // Placeholder content renders with a visible "never ships" banner.
    placeholder: z.boolean().default(false),
  }),
});

// Projects: one Markdown file per project. Body = the description shown
// inline on the timeline. Archived projects collapse behind an expander.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    period: z.string(), // shown on the rail, e.g. "2026–now"
    date: z.coerce.date(), // sort key (start of project)
    // Optional distilled state line — use only when it says something the
    // dates/description don't (e.g. "writeup pending", "seeking collaborators").
    status: z.string().optional(),
    milestones: z
      .array(z.object({ period: z.string(), title: z.string() }))
      .default([]),
    // Destinations (github, arxiv, demo…) — full URLs or site-relative
    // paths to files in public/ ("/handout.pdf"). First link also makes
    // the project title clickable.
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    archived: z.boolean().default(false),
    placeholder: z.boolean().default(false),
  }),
});

// /now entries: one Markdown file per update, named by date (2026-08-07.md).
// Body = free Markdown; the convention is h2 sections (currently /
// finished / reading), styled as quiet mono labels on the page.
const now = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/now' }),
  schema: z.object({
    date: z.coerce.date(),
    // One line for the Home tile preview; falls back to the date if absent.
    tagline: z.string().optional(),
    // Optional italic sign-off line, a sentence for future-you.
    signoff: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog, projects, now };
