# Agent rules

Personal CV site (React 19, Vite, Tailwind v4, GitHub Pages). Details per area in [docs/](docs/README.md); read the matching doc before changing that area.

## Commands
`npm run dev` (http://localhost:5173/cv/) · `npm test` · `npm test -- -u` (accept snapshots) · `npm run lint` · `npm run build`

## Must hold
- **All CV content lives in `src/shared/data/cv.ts`.** Components hold only UI labels. CV text is English.
- **Tests pin CV text** ([docs/testing.md](docs/testing.md)): read the snapshot diff before `npm test -- -u`; never accept blindly.
- **PDF stays exactly 2 pages** (tested). Long new text usually needs trimming elsewhere ([docs/pdf.md](docs/pdf.md)).
- **`index.html` mirrors `personalInfo`** (name, title, years) by hand; a test checks it.
- **Base path `/cv/`** lives in several places; see [docs/deploy.md](docs/deploy.md).
- **Push to `main` deploys.** Commit or push only when asked.
- **Never invent CV metrics.** If the user asks for placeholder numbers, list them back so they get replaced.

## Animations ([docs/animations.md](docs/animations.md))
- Fixed canvases are portalled to `<body>`; every scene handles reduced motion.
- Inner pages: desktop only, never behind the content column. Only the home page's scenes show on mobile.
- The Claude preview pane pauses rAF and smooth scrolling while hidden; check still frames by emulating reduced motion, and don't trust scroll tests there.

## Working style
- Run `npm run lint && npm test && npm run build` once when a batch of changes is done, not after every edit.
- If a request would make the CV or site worse, say why and suggest an alternative before doing it.
- Talk to the user in their language (Ukrainian); code, comments and docs in English.
- Comments only for a non-obvious *why* (a constraint, a gotcha). No history ("used to…"), no restating the code, no section banners.
- New dependencies: only when a few lines won't do; pin the exact version, at least two weeks old.
- Keep `docs/` current when behaviour it describes changes.
