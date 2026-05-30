---
applyTo: "src/**/*.{astro,ts,tsx,js,jsx,css}"
description: "Use when editing the A&B Construction Astro marketing site, React components, Tailwind styling, SEO metadata, navigation, portfolio pages, or contact flows."
---

# A&B Astro Site Instructions

Use the existing visual language: forest green (`#2D6A4F`) CTAs, walnut brown (`#74502A`) headers, warm amber (`#E9B84A`) accents, Space Grotesk display headings, Inter body text, and Framer Motion scroll animations.

Before editing app code, confirm the repo is on a feature branch. Do not edit `src`, `public`, deployment config, or package files directly on `main`, `master`, `production`, or release branches. If the current branch is protected, stop and ask to create or switch to a feature branch first.

## Brand Colors (`tailwind.config.js` → `construction.*`)

- `construction-primary` `#2D6A4F` — forest green; trust, nature, community
- `construction-secondary` `#74502A` — walnut brown; craftsmanship, warmth, wood
- `construction-accent` `#E9B84A` — warm amber/gold; quality highlights, CTAs
- `construction-dark` `#1C1F1A` — near-black with warm undertone; text, dark sections
- `construction-light` `#F7F3EC` — warm linen/cream; page backgrounds
- `construction-stone` `#5C6047` — warm olive-gray; secondary text, muted elements

## Contrast Rules

- On white/light: `text-gray-700` or `text-construction-dark`
- On dark backgrounds: `text-white` for headings, `text-gray-300` for body
- Never use `text-gray-400` or `text-gray-500` — insufficient contrast

## When editing pages

- Keep `Layout.astro` (or equivalent) metadata accurate for the page purpose.
- Import and use `Navbar`, `Footer`, and `FadeInSection` consistently with nearby pages.
- Prefer compact, confident copy over generic marketing filler.
- For project cards, include a clear title, location, category, image, and useful alt text.
- Check mobile spacing and avoid oversized text that can overflow narrow screens.

## When editing components

- Keep React components small and purpose-specific.
- Wrap Framer Motion animations in a `useReducedMotion` check so they respect `prefers-reduced-motion`.
- Preserve accessibility states such as `aria-label`, focus behavior, and keyboard-friendly controls.
- Avoid introducing browser-only code outside client-loaded React components (`client:load`, `client:idle`, etc.).

## Before finishing

- Run `npm run build` when the change touches source files.
- Summarize what changed in plain language a business owner can understand.
