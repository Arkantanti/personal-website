# DECISIONS.md — phase-by-phase log

Living summary of decisions + rationale (not a transcript). Companion to
CLAUDE.md (which holds the durable contract). Update at end of every phase and
whenever a decision changes.

## Phase 0 — Discovery (2026-08-07) — COMPLETE

### DECISIONS LOG
- **Purpose (priority order):** (1) identification page — contact, ongoing
  projects, resume; (2) blog. Friends are occasional visitors.
- **Audience:** researchers Jakub reaches out to (he links the site),
  researchers who find his work, friends following blog + /now.
- **Guiding idea:** simple, not overwhelming — fewer pages rather than more.
- **Pages:** Home (about + contact folded in) · Projects · Blog · /now ·
  /now archive. No separate About or Contact page.
- **Resume:** downloadable PDF (already exists). Rationale: Projects page is
  the living HTML version of his work, so no HTML CV needed.
- **Content:** realistic placeholders for projects/posts to preview layout —
  never shipped. First real blog post ~2026-08-14.
- **Stack:** Astro + Tailwind, static, Markdown/MDX. Owner writes Markdown.
  Blog posts must render in the site's own typography (tokens), not plain md.
- **Deployment:** deferred until after build. Build on devbox at
  `~/projects/personal-site`. Owner buys domain + picks hosting later.
- **Substack:** possible blog connection — decision deferred; cross-posting
  ease is NOT a constraint on the stack.
- **Aesthetic adjectives:** original, dark, innovative, mostly warm (could be
  cold), precise, organized, straight to the point.
- **Avoid:** overwhelming, playful, template-y, cute.
- **Color/type:** no instincts yet — decide in Phases 1–2.
- **Name on site:** Jakub Pieczonka.

### Open questions
- Warm vs cold palette — owner said "mostly warm but could also be cold";
  resolve during reference synthesis / token tuning.
- Blog ↔ Substack relationship — deferred.
- Domain name + hosting — deferred until after build.

## Phase 1 — Reference intake & synthesis — COMPLETE (2026-08-07)

### SYNTHESIS (full art direction lives in CLAUDE.md — durable contract)
- Vibe: "a dim, warm room where the work speaks" — espresso-black ground,
  cream text, one warm accent, tile-board Home, display-serif titles, mono
  machinery, timeline spines, near-still motion, low density.
- Signature moves (originality budget): ① tile-board home ② huge
  display-serif titles ③ timeline + mono date rails. Nothing else gets to
  be original.
- Owner said "synthesize" after 5 refs; approved direction implicitly —
  formal review at Phase 2 styleguide where everything is tunable.
- **Site defaults to DARK theme** (owner, 2026-08-07). Light mode still
  required and fully designed per hard constraints.
- **Research area: AI** — placeholder content should sound plausible for an
  AI researcher.
### Reference 1 — samuelratnam.xyz (owner likes: simplicity, immediate focus
on what matters, original aesthetic; explicitly do NOT steal its dark-hacker
theme)
- BORROW: content-centered layout w/ nav in a thin fixed side rail; /now as
  2:1 grid (entry + quiet archive sidebar); low density, tiny mono metadata;
  originality via ONE committed signature move (theirs: ASCII ocean +
  page-dot minimap — ours must differ); mono-for-UI vs serif-for-prose type
  contrast as the hierarchy mechanism; near-zero motion (200–300ms hovers).
- NOT COPY: the hacker costume (cold navy #0a0a18, ASCII art, terminal vibe —
  owner vetoed + palette should be warm); rotated vertical nav text
  (legibility tax); low-contrast gray links (~50% opacity, fails AA); minimap
  of every URL; sprawling /chaos energy.
- Distilled: radical focus + one signature move + mono/serif contrast on a
  dark ground, re-skinned warm and non-hacker.

### Reference 2 — CV-timeline screenshot (owner likes the timeline style,
wants it for Projects and possibly the /now archive)
- BORROW: two-rail timeline anatomy (mono dates + node markers in a left
  gutter on a thin line, content right); nested sub-entries under a parent;
  a distilled one-line "status →"/"Bottom Line" closing each entry;
  progressive disclosure (older items behind an expander, not endless
  scroll); hierarchy via size/weight/muting + whitespace, no boxes/cards;
  3-line compressed intro statement above the timeline.
- NOT COPY: pale ice-blue corporate palette (but hint: LIGHT theme = tinted
  paper, not pure white); CPO-brag tone (entries should state what a thing
  is + where it stands); fading old entries to ~40% opacity (fails AA — use
  the explicit expander instead).
- Plan: timeline is the organizing spine for anything chronological
  (Projects page, /now archive).

### Reference 3 — bento-grid personal site screenshot (owner: take ONLY the
grid idea — huge grid tiles acting as tabs/nav on the main page for now,
blog, contact, projects; "way too many colors here")
- TAKE: Home = bento of large tiles as THE navigation (Projects · Blog ·
  /now · Resume PDF · Contact) with name + compressed intro; tiles may show
  live previews (latest post title, first line of current /now); candidate
  for the site's "one signature move".
- REFUSE: multicolor cards (one accent only; tiles differ by size/type/
  content, not hue); 3D avatar/memoji; glossy screenshot cards; glow
  gradients — all template-y.
- OPEN (asked owner): (a) tiles navigate to real pages (recommended) vs
  (b) in-place tab switching on Home; and confirm grid replaces Ref 1's
  side-rail nav (inner pages get a quiet one-line mono text nav).

### Reference 4 — dimden.dev screenshot (owner: take ONLY "unique font for
large titles" = soul; must be a DIFFERENT font than that pixel one)
- TAKE: characterful display type for big titles as a personality signal.
- REFUSE: everything else (pixel/retro clutter, sidebar link pile, glow,
  widgets) — matches owner's avoid-list.
- TENSION (asked owner): 3 type jobs (display titles, prose serif, mono UI)
  vs max-2-typefaces constraint. Options: (a) RECOMMENDED variable serif w/
  optical-size axis (Fraunces/Newsreader-like) covering display+prose, plus
  mono; (b) display+serif, drop mono; (c) owner amends constraint to 3.

### Reference 5 — jazz/vinyl app concept, sleek.design (owner: "extremely
good reference of the vibe"; don't steal colors per se; orange tradeable;
gentle drawish/cartoonish tone liked but may be dropped — needs care)
- VIBE FORMULA (hue-independent): warm-tinted near-black ground (espresso,
  not #000/navy) = dim room not terminal; cream (not white) foreground;
  ONE ember-ish accent used stingily (primary action only, rest tonal);
  soft geometry (rounded corners, deep soft shadows). Accent hue swappable —
  propose 2–3 candidates in Phase 2 (ember orange, rust/oxblood, old gold,
  warm coral…).
- Drawish/cartoonish tone: parked as OPTIONAL garnish — at most one
  hand-drawn element, prototyped in Phase 3, default off (risk: tips into
  "cute").
- NOT COPY: literal palette, music-app chrome, pill sprawl, retro pastiche.
- Owner addendum: the display font in this image ("Groove"/"Midnight
  Groove" lettering — warm soft-contrast retro-soul serif) is "quite
  fitting" — keep in mind. Converges with type option (a); Phase 2
  shortlist should have this flavor (Fraunces + alternatives).

- All ingredients now present (focus/R1, timeline/R2, grid-nav/R3, display
  titles/R4, warm-dark vibe/R5).
- **DECIDED: Home tiles = doors (option a)** — real multi-page navigation,
  not in-place tab switching (owner, 2026-08-07).
- **DECIDED (marked UNCERTAIN, may be revisited): type option (a)** — one
  variable serif family with display + text optical cuts (Fraunces-flavor,
  warm retro-soul per Ref 5) covering titles + prose, plus a mono for
  UI/nav/dates. Stays within max-2-typefaces. Fallback if display cut
  disappoints at Phase 2 styleguide review: options (b)/(c) still on the
  table.
- Awaiting owner: more refs or "synthesize".
## Phase 2 — Design tokens + style guide — COMPLETE (2026-08-07,
owner sign-off: "okay phase over")

### FINAL STATE after 10 tuning rounds
- Accent: OLD GOLD (#d9a441 dark / #7d5d0e light) + --color-accent-hover.
- Type: Young Serif (display) / Fraunces text (prose) / IBM Plex Mono
  (machinery) — 3 typefaces, constraint amended.
- Links: gold + underline; hover = dim to accent-hover, no bg effect.
- Buttons: hover dims background. Tiles: cream text, gold on hovered meta.
- Horizon: IN (provisional) — full-bleed abstract ridges at page bottom,
  no sun, token-derived shades.
- Token contract recorded in CLAUDE.md; source: src/styles/tokens.css.
- Styleguide control panel at /styleguide with theme toggle + accent
  candidate switcher (ember default / rust / old gold) + live hex readout.
- Astro 5 scaffolded, plain-CSS tokens (Tailwind deferred to Phase 3 —
  decide then whether it's still wanted; tokens stay the contract).
- Preview served from harness pages dir (basic-auth). Real deploy later.
- AA verified by computation for text/muted/accent on both grounds.
- Tuning round 1 (owner, 2026-08-07): accent → OLD GOLD (#d9a441 dark /
  #7d5d0e light; ember/rust stay as switcher candidates); display WONK
  1 → 0 ("j too squiggly"); mono IBM Plex Mono → Courier Prime (more
  typewriter); links always accent + hover bg-fill-to-accent w/ ink flip;
  button hovers dim their background (added --color-accent-hover token).
- Tuning rounds 2–4 (links, settled): REST = accent gold + underline;
  HOVER = no background effect, whole link dims to --color-accent-hover
  (6.3:1 dark / 6.6:1 light — AA ok). Same token as button hover dim.
- Mono saga, SETTLED: Courier Prime experiment reverted — mono machinery
  stays and it's **IBM Plex Mono** (take-1 original). (Along the way owner
  floated LessWrong's body font, which is Warnock Pro, a proportional
  serif — clarified in-thread.)
- Tuning round 5 (owner: tiles section "too old gold, everything one
  color"): root cause = tiles are <a> and inherited the always-gold link
  color. Fixed: .tile explicitly cream (composite links ≠ text links —
  gold only on hovered meta line); styleguide section headers muted.
  Principle: accent only where it means something.
- Tuning round 6 (owner: "squiggly J and F" in main font, WONK already 0):
  cause = Fraunces auto optical sizing hitting opsz 144 (swashy terminals).
  Added token --serif-opsz-display: 40 (range 9–144) — display uses a
  calmer bookish cut. Owner: no visible difference (J tail is baked into
  Fraunces at all opsz) → plan B executed.
- Tuning round 7: display-font AUDITION section added to styleguide
  (temporary, delete after choice): DM Serif Display / Young Serif /
  Instrument Serif / Playfair Display vs current Fraunces, each with
  name + Ff/Jj test line. My ranking: DM ≥ Young > Instrument > Playfair.
  NOTE: choosing any = 3 typefaces (display + Fraunces text + Plex) =
  owner's option (c). Flagged in-thread.
- Tuning round 8: owner shortlisted Young Serif + Instrument Serif, wants
  both in context → added "titles" switcher to styleguide top bar
  (fraunces/young/instrument re-render every title on the page).
  Young = warmth dial up; Instrument = precision dial up.
- **Tuning round 9 — TYPE SETTLED: Young Serif locked in** as
  --font-display (weight 400, its only weight). Fraunces stays for prose
  (text cut), Plex Mono for machinery. 3 typefaces = owner's option (c);
  max-2 hard constraint amended to 3. Audition section + switcher deleted;
  Fraunces' display-axis tokens (SOFT/WONK/opsz-display) removed.
  The earlier "option (a), uncertain" decision is superseded.
- Tuning round 10 (owner ref: Firewatch-style layered flat landscape —
  "each object one color, many shades"; asks if it could be a background):
  PROTOTYPED "horizon" section on styleguide — page-bottom SVG of layered
  ridges, shades = color-mix(bg → text, 5% steps), sun = accent token;
  auto-adapts to theme/palette. Recommended: page-bottom only (Home ±
  slim footer version elsewhere), never behind text; keep abstract (no
  pines/cabin — Firewatch pastiche risk). Fills the parked "garnish" slot
  from Ref 5. Owner iteration: NO sun, full-bleed at the true bottom of
  the page (not in a container) — applied to styleguide.
  Awaiting owner: in / out / tweak.
- Awaiting further tuning or "go" for Phase 3.
## Phase 3 — Build, page by page — IN PROGRESS (started 2026-08-07)
### Step 1 — global layout: DELIVERED, awaiting review
- src/layouts/Base.astro (fonts, meta, pre-paint theme init from
  localStorage, default dark), src/components/SiteNav.astro (quiet mono
  one-line nav, inner pages only — Home passes showNav={false}),
  ThemeToggle.astro (persists choice), SiteFooter.astro (footer line +
  horizon SVG on every page), src/styles/global.css (element styles from
  tokens only).
- Owner approved step 1 ("seems good").

### Step 2 — HOME: DELIVERED, awaiting review
- index.astro = real Home: toggle-only header (no nav — tiles are the
  nav), name in Young Serif, small bio + "say hello → email · github"
  contact line above the tiles (owner requested bio outside tiles;
  placeholder text marked "[never ships]" — needs owner's real bio +
  email/github links), bento board: projects (wide) / now / blog /
  resume / contact. Tile previews are placeholders → become live data
  once blog/projects content exists.
- Base.astro gained showNav={false} mode (toggle-only header).
- Owner: deleted the "say hello → email · github" line under the bio —
  redundant with the contact tile. Contact = tile only.
- Owner approved Home ("sure go").

### Step 4 — PROJECTS: DELIVERED, awaiting review
- Content collection src/content/projects/ {title, period, date(sort),
  status, milestones[], archived?, placeholder?}; body = inline
  description on the timeline.
- /projects/ = ONE timeline spine w/ nested milestones + gold "status →"
  closers. Owner removed the "older projects" expander — archived
  entries sit on the same spine (muted node + status tells the story).
- Owner: projects clickable → `links: [{label,url}]` frontmatter; mono
  "github ↗ · arxiv ↗" row; first link makes the title clickable (w/ ↗).
  3 marked placeholders (1 archived).
- Status line: OPTIONAL (owner, after weighing dropping it) — omit the
  frontmatter field and it doesn't render; use only when it says
  something dates/description don't ("writeup pending", "seeking
  collaborators"). Demo: "This website" has none.
- Home projects tile LIVE: featured count (= non-archived projects).
  Renamed from "ongoing count" 2026-08-23 — `archived` is the highlight
  switch, "featured" = non-archived. Projects-page expander summary is
  "all projects (N)".

### Step 6 — CONTACT PAGE (owner changed Phase-0 decision 2026-08-07)
- Contact is now a real page /contact/ (was: folded into Home only).
  Minimal: one sentence + channels on a left-rail grid. Contact tile
  → /contact/; "contact" added to inner-page nav.
- CONTACT IS REAL (2026-08-07): owner hand-edited in their real email +
  github (dropped scholar); placeholder marker removed; Home tile label
  updated to "email · github →". First fully-real page.

- BODY FONT REPLACED (2026-08-07): Fraunces → **Source Serif 4** (owner
  still saw annoying f/j in body text; Fraunces purged entirely, incl.
  SOFT/WONK axis tokens). Final stack: Young Serif / Source Serif 4 /
  IBM Plex Mono.
- Home tiles: "latest: …" preview lines removed from projects + blog
  tiles (owner) — board is uniform: big word + mono meta only.
- RESUME: real PDF copied from ~/projects/arkantanti-profile/resume/
  cv-llt.pdf → public/resume.pdf (owner directed). Flagged: PDF contains
  phone number, site is public. Offered to wire real email/github into
  contact page.

### Step 5 — /NOW + ARCHIVE: DELIVERED, awaiting review
- Collection src/content/now/ (files named by date) {date, tagline?,
  signoff?, placeholder?}; body = free Markdown, convention: h2 sections
  currently/finished/reading (owner's structure) rendered as gold mono
  labels.
- /now/ = 2:1 layout (current entry + sidebar archive links); honest age
  stamp computed client-side ("updated N days ago"); optional italic
  sign-off ("a sentence for future-you").
- /now/archive/ DELETED (owner: two-tier archive = overcomplicated at 3
  entries; may resurrect when entries number in the dozens). Sidebar is
  now a miniature spine: rail + nodes (muted, gold on hover) + mono date
  + italic tagline. /now/[date]/ snapshot pages remain (sidebar links).
- Owner: NO titles/taglines for /now entries — the date IS the id.
  Tagline display removed from sidebar + Home tile (field ignored if
  present in frontmatter; signoff still supported).
- /now section headers, SETTLED: Young Serif (display face), GOLD accent
  color, case preserved as written (owner requests; was lowercase mono).
- FUTURE THRESHOLD (agreed with owner): when sidebar reaches ~20 entries
  and outgrows the current entry, collapse older years to one expandable
  rail node each ("↓ 2025 (14)"). Do nothing until then.
- Home /now tile LIVE: current tagline + updated month.
- 3 placeholder entries (2026-04/06/08). PAGE LIST NOW COMPLETE.

### Step 3 — BLOG: DELIVERED, awaiting review
- Content collection (src/content.config.ts): blog = Markdown in
  src/content/blog/, frontmatter {title, description, date, draft?,
  placeholder?}. placeholder:true renders a visible "never ships" banner.
- /blog/ index = timeline spine (date rail + nodes + titles + descriptions);
  /blog/[slug]/ post template = Young Serif title, mono date, .prose body
  (prose typography now in global.css, shared with future pages).
- One placeholder post exercising h2/list/blockquote/code/link.
- Home blog tile is now LIVE data: latest post title + real count.
- Owner approved blog ("really cool, nothing to change") + asked about
  markdown shipping/tables/images → pipeline upgraded: GFM on by default;
  .prose table styles (mono lowercase headers, hairline rows); images
  next-to-post → sharp-optimized WebP, lazy, explicit dims, rounded +
  hairline border; Shiki dual-theme (github-light/dark, switches with
  data-theme). Demo table + generated figure added to placeholder post.
- LaTeX: DONE (owner yes) — remark-math + rehype-katex + katex CSS in
  Base.astro; build-time rendering, no client JS; .katex-display scrolls.
  Demo (inline + ECE display eq) in placeholder post. Mermaid still
  possible later if wanted.
- Spine demo: 6 stub posts were added on request, then PRUNED (owner ok,
  2026-08-07). Blog back to the single full demo post.
- Image captions: custom rehypeFigureCaptions plugin (astro.config.mjs) —
  ![alt](./img "caption") → <figure><img/><figcaption>. Alt stays a11y-
  only; no title = no caption. Styled Fraunces italic, --step--1, muted
  (owner: serif not mono, still small).
- Nav links 404 until those pages exist; resume.pdf needs owner's file.
   (order: global layout w/ nav+footer+theme toggle → Home → Blog index +
   one post from template → Projects grid + one case study → /now → /now
   archive; adjusted from original order since About/Contact are folded into
   Home. One page per turn, stop for review after each.)
## Phase 4 — Polish (a11y, SEO/meta, RSS, 404) — NOT STARTED
