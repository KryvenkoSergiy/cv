# Sergii Kryvenko — Personal CV

A personal portfolio and CV built as a React app. Not a template, not a PDF — actual living code that reflects the work.

## What it is

A single-page app with four sections: Home, About, Experience, and Skills. All content lives in a single typed data file ([cv.ts](src/shared/data/cv.ts)), making updates a one-liner rather than a redesign.

## Stack

- **React 19** + **TypeScript** — strict mode, no shortcuts
- **Vite** — sub-second HMR
- **Tailwind CSS v4** — utility-first, no custom design system overhead
- **React Router v7** — client-side routing with animated page transitions
- **Framer Motion** — subtle ambient animations on the hero, smooth route transitions

## Interesting details

**Portfolio-as-data** — the entire career history, skills, and metadata are structured TypeScript objects. Changing a job title or adding a skill requires touching exactly one file.

**Graphics & animation depth** — the skills section surfaces WebGL, Canvas, React Three Fiber, GSAP, and Framer Motion. Unusual for a frontend CV; reflects a decade of work on dashboards, interactive widgets, and a cloud gaming platform (Google Stadia era).

**Feature-based architecture** — pages live under `src/features/`, each self-contained with its own components. Shared utilities (layout, hooks, icons) are isolated in `src/shared/`. Scales cleanly without a monorepo.

**Career breadth on display** — 10+ years covering crypto DEX platforms, medical EdTech, African B2C startups, and currently a lead role at Opinion Stage building embeddable widget products. Progression from engineer → lead → tech lead is visible in the experience timeline.

## Run locally

```bash
npm install
npm run dev
```
