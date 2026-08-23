# Personal website — Jakub Pieczonka

Collaborative design-and-build project run in PHASES via a Discord thread with
the owner (arkantanti / Jakub Pieczonka). READ THIS FILE AND `DECISIONS.md` AT
THE START OF EVERY SESSION. Update both at the end of every phase and whenever
a decision or token changes. If either file conflicts with what the owner says,
ask which wins.

## Process rules (do not violate)
- Work phase by phase; NEVER skip ahead. At the end of each phase: summarize
  decisions, update this file + DECISIONS.md, then STOP and wait for "go".
- Reprint the DECISIONS LOG at the top of each phase.
- Ask when a choice is unclear; don't assume.
- No page markup or component code before Phase 3.
- Design tokens (Phase 2) are the ONLY tuning surface. All visual tuning =
  editing tokens. Never hardcode visual values in components.
- Tuning protocol: owner says e.g. "token: accent → warmer" → change only
  that token, confirm, update CLAUDE.md. Never touch component code for tuning.

## Current status
- Phase 0 (discovery): COMPLETE.
- Phase 1 (reference intake & synthesis): COMPLETE.
- Phase 2 (design tokens + styleguide): COMPLETE (owner sign-off
  2026-08-07 "phase over").
- Phase 3 (build, page by page): ALL PAGES BUILT — global layout ✓, Home ✓,
  Blog ✓ (+ tables/images/captions/LaTeX pipeline), Projects ✓ (one spine,
  optional status, links field), /now + archive ✓ (in review). Content =
  Markdown collections in src/content/{blog,projects,now}; Home tiles show
  live data. Projects: `archived` is the highlight switch — non-archived =
  "featured" (Home tile shows "{N} featured", gold nodes); archived fold
  behind the "all projects (N)" expander with muted nodes (renamed from
  "ongoing" 2026-08-23). Outstanding before launch: owner's real bio/resume.pdf/links,
  prune placeholders, Phase 4 (a11y, SEO/meta, RSS, favicon, 404).
- Tech note: Astro 5 scaffolded (plain CSS tokens; Tailwind deferred to
  Phase 3 if still wanted — tokens.css is the contract either way).

## Purpose & audience
1. Identification page: contact, ongoing projects, resume (priority #1).
2. Blog (secondary; maybe Substack-connected — deferred decision).
Audience: researchers Jakub contacts or who find his work; friends follow
blog + /now. Keep it simple — visitors must not feel overwhelmed.

## Final page list (lean by design)
- **Home** — small; about-me folded in (no separate About page).
- **Contact** — small page (owner reversed the fold-into-Home decision
  2026-08-07): one sentence + mono channel links (email/github/scholar).
  Layout: bento grid of large tiles that ARE the navigation (doors to real
  pages, not in-place tabs), + name and 2–3-line intro. Tiles may preview
  live content. Inner pages get a quiet one-line mono text nav (no rail).
- **Projects & /now archive** use the timeline pattern: mono date rail +
  node markers left, content right, one-line "status →" closers, older
  entries behind an expander.
- **Projects** — the living HTML version of his work.
- **Blog** — Markdown/MDX posts, styled with site typography (not plain md).
- **/now** — current status page; archive = sidebar mini-spine on the same
  page (separate archive page deleted by owner at 3 entries — maybe
  resurrect at dozens). Past entries keep individual /now/[date]/ pages.
- **Resume** — downloadable PDF (exists already), linked from site. No HTML CV.

## Content
- Research area: **AI** (context for placeholder content).
- Exists: resume PDF. First real blog post arrives ~2026-08-14.
- Few projects, no descriptions yet.
- Use realistic placeholders (in Jakub's voice) for layout preview ONLY —
  placeholders are never shipped.

## Tech decisions
- **Astro + Tailwind**, static output, Markdown/MDX content.
- Requirements: static, fast, responsive, light + dark mode, WCAG AA.
- Owner writes Markdown comfortably.
- Substack cross-posting ease: NOT a constraint.
- Lives at `~/projects/personal-site` on the devbox. Deployment/domain/hosting
  deferred until after the build (owner will buy a domain later).

## Aesthetic direction (adjectives from owner)
- Feel: **original, dark, innovative, mostly warm (could be cold), precise,
  organized, straight to the point**.
- Avoid: **overwhelming, playful, template-y, cute**.
- **Site DEFAULTS to dark theme** (light mode still required + fully designed).

### Art direction (synthesized Phase 1, from 5 owner references)
**Vibe paragraph:** A dim, warm room where the work speaks for itself. The
site opens not with a menu but with a quiet board of doors — a dark bento
grid of large tiles (Projects · Blog · /now · Resume · Contact) on an
espresso-black ground, each tile a real link and quietly alive with its
latest content. Titles are set huge in a soulful, warm, slightly retro
serif; everything operational — nav, dates, statuses — whispers in small,
precise monospace. Chronology is the organizing spine: projects and past
/nows hang off thin timelines with mono date rails. Nothing moves unless
touched, nothing decorates unless it informs. The originality comes from
structure and warmth — the tile-board home, the display serif, the espresso
dark — never from ornament or costume.

**Concrete calls:**
- **Typography (settled at styleguide, 2026-08-07):** Young Serif for big
  titles (chunky, soft, bookish-warm), Source Serif 4 for prose
  (~17–18px, line-height ~1.65), IBM Plex Mono for nav/dates/labels/
  statuses (small, letterspaced, lowercase). Hierarchy = which-font +
  size + muting; never decoration or heavy bolding.
- **Color:** dark theme (default) = warm-tinted near-black (espresso
  brown-black, NOT pure black, NOT cool navy); cream (not white) text;
  surfaces = slightly lighter warm darks (tiles, cards); exactly ONE warm
  accent used stingily (primary action / active state / one heading —
  candidates in Phase 2: ember orange, rust/oxblood, old gold, warm coral).
  Light theme = warm tinted paper (not pure white), same accent logic.
  Every pair passes AA.
- **Spacing:** generous; reading column 65–72ch; separation by whitespace,
  not boxes/borders, wherever possible; big gaps between timeline entries.
- **Motion:** near-still. 150–250ms opacity/color eases on hover; tiles may
  lift subtly; no entrance/scroll animations; respects reduced motion.
- **Density:** low. Home = one glance. Inner pages = single focus column
  (+ quiet sidebar only where earned, e.g. /now archive). Old content goes
  behind progressive-disclosure expanders, never endless scroll.
- **Signature moves (the originality budget, spent here and nowhere else):**
  ① the tile-board home ② huge display-serif titles ③ timeline spines with
  mono date rails ④ the HORIZON: full-bleed layered flat ridges closing
  the page bottom (Firewatch-school, kept abstract — no sun/trees/cabin;
  shades = color-mix(bg→text, 5% steps), auto-adapts to theme). Status:
  IN, provisional ("looks okay, may change later"). This consumed the
  hand-drawn-garnish slot; no other decoration allowed.

## Design-token contract (Phase 2 — FINAL, owner signed off 2026-08-07)
Single source of truth: `src/styles/tokens.css`. Styleguide (control panel):
`src/pages/styleguide.astro` → `/styleguide`.
Preview URL (PUBLIC, temporary until real deployment):
https://app2.167-233-160-246.sslip.io/styleguide/
Served by systemd unit `personal-site-preview.service` (python http.server
on 127.0.0.1:3001 over ./dist, proxied by the pre-wired app2 Caddy route).
Rebuild after token edits (server picks up dist automatically):
`cd ~/projects/personal-site && npm run build`

- **Fonts (3 typefaces — owner amended the max-2 constraint 2026-08-07):**
  `--font-display` = **Young Serif** (titles; single weight 400 via
  `--display-weight`); `--font-serif` = **Source Serif 4** (prose;
  replaced Fraunces entirely — owner disliked its f/j letterforms even
  at text sizes); `--font-mono` = IBM Plex Mono (owner tried Courier
  Prime, reverted — Plex is final). Fraunces is fully purged.
- **Type scale:** `--step--2…--step-6`, ratio 1.25 (major third), fluid
  clamp; `--step-0` body = 17→18px. `--leading-tight/snug/body` =
  1.1/1.35/1.65. `--measure` = 68ch. `--tracking-mono` = 0.08em.
- **Color (dark, default):** bg #181210 espresso · surface #221a15 ·
  surface-2 #2c221b · text #f0e7da cream · muted #a99a87 · border #3a2e24 ·
  accent **#d9a441 old gold** (8.3:1 on bg) · accent-hover #c08e2f ·
  accent-ink #1c130b. All pairs AA (muted 6.8:1 on bg).
- **Color (light):** bg #f5eee3 warm paper · surface #fbf6ec · surface-2
  #efe5d5 · text #2b211a · muted #6d5c4c · border #d9cbb8 · accent #7d5d0e
  (5.3:1) · accent-hover #6b4f0b. Theme via `data-theme`, dark default.
- **Accent = OLD GOLD (owner-chosen).** Ember + rust remain preview-only
  candidates in the styleguide switcher.
- **Interaction rules (owner-tuned):** text links = accent gold WITH
  underline at rest; on hover NO background effect — the whole link (text
  + underline) dims to --color-accent-hover, 150ms. Same token dims the
  primary button hover, so links and buttons dim in sync. Buttons dim their background on hover (primary → accent-hover;
  ghost → surface mixed 15% toward bg). Composite links (tiles) keep their
  own treatment — the fill hover is scoped to prose contexts.
- **Spacing:** `--space-3xs…3xl` = 4/8/12/16/24/32/48/64/96px.
- **Radius:** sm 6 / md 12 / lg 20 / full. **Shadows:** warm-tinted sm/md/lg.
- **Motion:** `--dur-fast/base/slow` 150/200/250ms, `--ease-out/in-out`;
  all collapse to 1ms under prefers-reduced-motion.

## Hard constraints (whole project)
- Max 3 typefaces (owner amended from 2 on 2026-08-07: display + text +
  mono, each doing exactly one job); exactly 1 accent color, used sparingly.
- Generous whitespace; dark mode is a real design, not an invert.
- All color pairs pass WCAG AA.
- Motion subtle (150–250ms), respects prefers-reduced-motion.
- Every visual value comes from a token.
