# Sergii Kryvenko — CV

Personal CV site of a Senior Frontend Engineer focused on design systems and web performance.

**Live:** [kryvenkosergiy.github.io/cv](https://kryvenkosergiy.github.io/cv/)

## Pages

- **Home** — positioning, core stack, companies worked with, featured work
- **Experience** — career timeline, with pre-2020 roles grouped under Earlier work
- **Skills** — skills in four tiers: core stack, specialization, delivery, also worked with
- **About** — profile, education, languages
- **PDF CV** — generated in the browser from the same data

## Stack

- React 19, TypeScript
- Vite
- Tailwind CSS v4 with design tokens in `@theme`
- React Router v7
- @react-pdf/renderer
- Vitest

## How it works

**One data file.** All content lives in [cv.ts](src/shared/data/cv.ts): roles, skills, contacts, featured work. The site and the PDF both render from it, so they never drift apart.

**Content is tested.** [cv.test.ts](src/shared/data/cv.test.ts) checks that the timeline is sorted, years of experience match the dates, `index.html` matches the title, and every referenced role or skill exists. Text snapshots make any wording change show up as a reviewable diff.

**Light animation.** The hero background is a Canvas 2D graph with pulses running along its edges. It pauses off screen and stays still under `prefers-reduced-motion`.

**Feature-based structure.** Each page lives in `src/features/`; shared UI, data and utilities in `src/shared/`.

**Deploy.** Every push to `main` runs lint, tests and the build in GitHub Actions, then publishes `dist` to GitHub Pages. No `gh-pages` branch.
