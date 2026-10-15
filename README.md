# Sergii Kryvenko — CV

Personal CV site of a frontend-first Senior Product Engineer.

**Live:** [kryvenkosergiy.github.io/cv](https://kryvenkosergiy.github.io/cv/)

## Pages

- **Home** — positioning, "Bring me in to" card, featured work, how I work, now
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
- simple-icons (logos on the Skills globe)
- Vitest

## How it works

**One data file.** All CV content lives in [cv.ts](src/shared/data/cv.ts): roles, skills, contacts, featured work. The site and the PDF both render from it, so they never drift apart.

**Content is tested.** [cv.test.ts](src/shared/data/cv.test.ts) checks that the timeline is sorted, years of experience match the dates, `index.html` matches the title, and every referenced role or skill exists. Snapshots of experience and skills text make wording changes there show up as a reviewable diff.

**Canvas animation.** The hero has a graph with pulses; below it, particles reshape for each home section. Experience has a timeline in the margin, Skills a globe of tech logos, About a sphere that forms the initials. All plain Canvas 2D, and still under `prefers-reduced-motion`.

**Feature-based structure.** Each page lives in `src/features/`; shared UI, data and utilities in `src/shared/`.

**Deploy.** Every push to `main` runs lint, tests and the build in GitHub Actions, then publishes `dist` to GitHub Pages. No `gh-pages` branch.

## Docs

Developer docs: [docs/](docs/README.md). Agent rules: [AGENTS.md](AGENTS.md).
