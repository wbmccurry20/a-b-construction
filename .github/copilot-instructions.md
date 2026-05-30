# A&B Construction Site — Copilot Instructions

This repository is the public marketing website for A&B Construction. Treat all changes as client-facing production work.

## Project Context

- Framework: Astro 5 with React islands.
- Styling: Tailwind CSS v4 — tokens defined in `src/styles/global.css`; extended theme in `tailwind.config.js`.
- Animations: Framer Motion (used in React island components).
- Components live in `src/components/`; pages live in `src/pages/`.
- Deployment target: Vercel.
- Verification command: `npm run build`.

## Brand & Design System

### Colors (defined in `tailwind.config.js` under `construction.*`)
- `construction-primary` `#2D6A4F` — forest green; trust, nature, community
- `construction-secondary` `#74502A` — walnut brown; craftsmanship, warmth, wood
- `construction-accent` `#E9B84A` — warm amber/gold; quality highlights, CTAs
- `construction-dark` `#1C1F1A` — near-black with warm undertone; text, dark sections
- `construction-light` `#F7F3EC` — warm linen/cream; page backgrounds
- `construction-stone` `#5C6047` — warm olive-gray; secondary text, muted elements

### Typography
- Body: `font-sans` → Inter
- Display headings: `font-display` → Space Grotesk

### Contrast Rules
- On white/light: `text-gray-700` or `text-construction-dark`
- On dark backgrounds: `text-white` for headings, `text-gray-300` for body
- Never use `text-gray-400` or `text-gray-500` (insufficient contrast)

### Section Patterns
- Hero: `bg-gradient-to-br from-construction-secondary via-construction-dark to-black`
- Content sections alternate `bg-white` → `bg-construction-light` → `bg-white`
- CTA sections: dark gradient background with white text and orange/yellow buttons
- Section badges: `bg-construction-primary/10 text-construction-primary rounded-full`
- Feature cards: `bg-white border-l-4 border-construction-primary shadow-md`

## Components

| File | Purpose |
|---|---|
| `Navbar.tsx` | Site navigation |
| `Footer.tsx` | Site footer |
| `ContactForm.tsx` | Contact/inquiry form |
| `QuickContact.tsx` | Inline quick-contact widget |
| `StickyContact.tsx` | Sticky floating contact CTA |
| `TrustBadges.tsx` | Trust/credential badges |
| `FadeInSection.tsx` | Scroll-triggered fade-in wrapper |
| `ProjectShowcase.tsx` | Portfolio project browser |
| `BeforeAfterSlider.tsx` | Drag-to-compare before/after image slider |
| `QuoteCalculator.tsx` | 4-step interactive cost calculator |

## Pages

| File | Route |
|---|---|
| `index.astro` | `/` — Homepage |
| `about.astro` | `/about` |
| `services.astro` | `/services` |
| `portfolio.astro` | `/portfolio` |
| `blog.astro` | `/blog` |
| `contact.astro` | `/contact` |

## Working Style

- Before editing production code, confirm the active branch.
- Never make source, asset, config, or deployment changes directly on `main`, `master`, `production`, or release branches.
- If the current branch is protected, stop and ask to create or switch to a feature branch before editing.
- Use feature branch names like `feature/ab-hero-update` or `feature/ab-portfolio-gallery`.
- Keep edits focused on the requested page, component, or feature.
- Reuse existing components, colors, spacing, and layout patterns before introducing new ones.
- Preserve the A&B brand voice: dependable, hardworking, community-focused, and professional.
- Use real project imagery from `public/` when available.
- Avoid unrelated refactors or dependency additions.

## Frontend Expectations

- Keep pages responsive across mobile, tablet, and desktop.
- Maintain strong contrast on dark hero sections and image overlays.
- Use semantic headings, descriptive alt text, and accessible interactive controls.
- Keep navigation, calls to action, SEO metadata, and contact paths consistent across pages.
- Framer Motion animations should respect `prefers-reduced-motion`.

## Safety Checks

- Confirm the active branch is a feature branch before editing production code.
- Do not expose secrets or API keys in source files.
- Do not edit deployment or environment files (`vercel.json`, `.vercel/`) unless explicitly requested.
- Run `npm run build` after code changes when feasible and report the result.
