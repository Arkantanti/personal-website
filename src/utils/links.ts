// Shared rule for "does this link leave the site?" — used by the .astro
// components (ProjectEntry, contact) and mirrored by the rehypeExternalLinks
// plugin in astro.config.mjs for links inside Markdown content.
//
// A link opens in a NEW TAB when it points to ANOTHER site — i.e. an
// absolute URL starting with http:// or https://. Everything else stays in
// the SAME tab because it's "within the website": relative paths
// ("/projects", "/resume.pdf"), in-page anchors ("#top"), and mailto:/tel:.
export function isExternal(href?: string): boolean {
  if (!href) return false;
  return /^https?:\/\//i.test(href);
}

// Spread onto an <a> tag: `<a href={url} {...externalAttrs(url)}>`.
// rel="noopener noreferrer" is the security best-practice companion to
// target="_blank" (prevents the new page from touching window.opener).
export function externalAttrs(href?: string) {
  return isExternal(href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};
}
