# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Clone of the Zeitlabs Laboratory landing page (https://www.lab.zeitlabs.com/) — an Open edX online learning platform marketing site. The goal is pixel-perfect reproduction of the original.

## Commands

- `npm run dev` — Start dev server (Next.js on localhost:3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript check (`tsc --noEmit`)

## Tech Stack

- **Next.js 15** (App Router) with **React 19**, **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin (CSS-first config with `@import "tailwindcss"` + `@config` directive in `globals.css`)
- **Framer Motion** for animations
- **Poppins** (display/headings) and **Inter** (body text) via `next/font/google`, exposed as CSS variables `--font-poppins` and `--font-inter`

## Responsive Breakpoints

The project uses 3 named breakpoints for all responsive work:

- **Mobile**: 390px – 809px
- **Tablet**: 810px – 1199px
- **Desktop**: 1200px and above ////////// foooooooooooter 

Use arbitrary Tailwind values when the default scale doesn't line up: `min-[810px]:` for tablet+, `min-[1200px]:` for desktop+. Prefer these over `md:`/`lg:`/`xl:`, which do NOT match the project's mobile/tablet/desktop split. For mobile-only styling, use `max-[809px]:` or unprefixed classes overridden at `min-[810px]:`.

## Architecture

### Routing

Uses Next.js App Router with a `(marketing)` route group for content pages. Root layout (`app/layout.tsx`) renders `<Navbar />` and `<Footer />` on every page. The marketing layout is a passthrough.

**Pages:** `/` (home), `/courses`, `/courses/[slug]`, `/reviews`, `/contact-us`, `/open-edx-engineer`, `/open-edx-instructor`, `/open-edx-project-manager`

### Design System

- **`tailwind.config.ts`** — custom color tokens (`primary`, `accent`, `muted`, `border`, `surface`, `background`, `foreground`), typography scale (`h1`–`h4`, `body`, `body-sm`), font families, and a custom `tablet: 805px` breakpoint.
- **`lib/design-tokens.ts`** — JS-side mirror of the color/typography tokens for use in inline styles or logic.
- **`lib/utils.ts`** — `cn()` helper (`clsx` + `tailwind-merge`).
- **`globals.css`** — Base typography styles, custom animations (`orbit` blobs, `blur-in`, `fade-in`, `marquee`), and custom button classes (`btn-register`, `btn-start`, `btn-view-courses`).

### Component Organization

- `components/sections/` — Full-width page sections (Hero, BenefitsSection, FeaturedCourses, CommunitySection, TopicsSection, etc.)
- `components/cards/` — Card variants (CourseCard, BenefitCard, ReviewCard, InstructorProfile, etc.)
- `components/ui/` — Primitives (Button, Badge, SectionLabel, StarRating, Logo, Shimmer, etc.)
- `components/nav/` — Navbar, NavLink, MenuIcon
- `components/layout/` — Footer
- `components/faq/` — FAQ accordion
- `components/modules/` — Course module components

### Styling Conventions

- Tailwind utility classes are the primary styling method. Inline `style={{}}` is used for complex gradients, shadows, and animation delays that Tailwind can't express.
- All components accept an optional `className` prop merged via `cn()`.
- Font classes: `font-display` (Poppins) for headings, `font-inter` (Inter) for body text. Many components apply font classes directly rather than relying solely on base styles.
- The Hero section uses a Spline 3D iframe embed with separate desktop/mobile layouts.

## Visual QA Workflow

For pixel-perfect comparison against the original site, see the workflow below.

### Breakpoints to test
Test within each project range — e.g., 390px and 809px (mobile bounds), 810px and 1199px (tablet bounds), 1200px and 1440px (desktop).

### URLs
- **Original:** https://www.lab.zeitlabs.com/
- **Clone:** http://localhost:3000

### Tools
`npm install -D playwright pixelmatch pngjs sharp`

### Process
1. **Screenshot** both URLs at each breakpoint using headless Chromium (Playwright). Save to `screenshots/[breakpoint]/original.png` and `clone.png`.
2. **Diff** with Pixelmatch → `screenshots/[breakpoint]/diff.png`. Record mismatch %.
3. **Diagnose** the diff: spacing, font-size, color, missing elements, flex/grid issues, image sizing.
4. **Fix** with targeted, surgical CSS/HTML changes to the clone only.
5. **Re-screenshot** affected breakpoints to verify.
6. **Loop** until all breakpoints pass (<0.1% pixel difference).
7. **Report** → `report.md` with fixes, before/after diff scores, pass/fail per breakpoint.

### Rules
- Never edit the original site.
- Fix one issue at a time and verify.
- If a fix breaks another breakpoint, revert and use a media-query-scoped solution.
- Prioritize by pixel area (largest diff region first).
