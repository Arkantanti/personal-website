import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// PREVIEW_BASE is only used while the site is previewed from the harness
// pages server; unset it for the real deployment later.
const base = process.env.PREVIEW_BASE || '/';

// Markdown images written as ![alt](./img.png "Caption") get a visible
// <figcaption> under them (the quoted title). Alt stays screen-reader-only.
function rehypeFigureCaptions() {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.map((child) => {
      if (
        child.tagName === 'p' &&
        child.children?.filter((c) => c.type !== 'text' || c.value.trim()).length === 1 &&
        child.children.find((c) => c.tagName === 'img')?.properties?.title
      ) {
        const img = child.children.find((c) => c.tagName === 'img');
        const caption = img.properties.title;
        delete img.properties.title;
        return {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children: [
            img,
            {
              type: 'element',
              tagName: 'figcaption',
              properties: {},
              children: [{ type: 'text', value: caption }],
            },
          ],
        };
      }
      walk(child);
      return child;
    });
  };
  return (tree) => walk(tree);
}

// Links inside Markdown content that leave the site open in a new tab.
// Mirrors src/utils/links.ts (isExternal): absolute http(s) URLs get
// target="_blank" + rel="noopener noreferrer"; relative links, in-page
// anchors and local files are left alone (normal site navigation).
function rehypeExternalLinks() {
  const isExternal = (href) => !!href && /^https?:\/\//i.test(href);
  const walk = (node) => {
    if (!node.children) return;
    for (const child of node.children) {
      if (child.tagName === 'a' && isExternal(child.properties?.href)) {
        child.properties.target = '_blank';
        child.properties.rel = ['noopener', 'noreferrer'];
      }
      walk(child);
    }
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  // Canonical origin for sitemap/RSS/OpenGraph URLs. Currently the public
  // preview; swap for the real domain when it exists (one line).
  site: 'https://app2.167-233-160-246.sslip.io',
  base,
  output: 'static',
  integrations: [
    sitemap({
      // The styleguide is a working tool, not content — keep it out of
      // search engines' view.
      filter: (page) => !page.includes('/styleguide'),
    }),
  ],
  markdown: {
    // Dual-theme code highlighting; global.css switches on data-theme so
    // code blocks follow the site's light/dark toggle.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeFigureCaptions, rehypeExternalLinks, rehypeKatex],
  },
});
