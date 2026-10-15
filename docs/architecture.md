# Architecture

A static SPA, no backend.

## Layout of `src/`
- `features/<page>/`: one folder per page (`home`, `experience`, `skills`, `about`, `work`, `not-found`) plus `pdf`. Page entry is `index.tsx`; page-only pieces sit next to it.
- `shared/components/`: app shell (`Layout`, `Navigation`, `MobileMenu`, `Footer`, `PageTransition`), `icons.tsx`, and the canvas scenes `PageParticles` (Experience) and `HeaderScene` (Skills, About).
- `shared/components/ui/`: primitives (`Card`, `Eyebrow`, `PageHeader`, `JokeBanner`).
- `shared/data/cv.ts`: all CV content ([content.md](content.md)). `shared/utils/duration.ts`: parses "Mon YYYY" / "Present".

## Shell and routing
- `main.tsx` → `App.tsx` → [router.tsx](../src/router.tsx): one `Layout` route with `/`, `/experience`, `/skills`, `/about`, `/work` (portfolio list) and `*` (NotFound). Imports are eager; `basename` is `/cv` ([deploy.md](deploy.md)).
- **New page:** a route in `router.tsx` and an entry in `navLinks` in `Navigation.tsx` (the mobile menu reads the same list).
- `PageTransition` animates `transform`; see [animations.md](animations.md) for why that forces fixed canvases into a portal.
- `/experience#<role-id>` links (Featured Work) land on the card; cards use `scroll-mt-24` to clear the fixed nav.

## Data
Pages import what they need from `cv.ts` directly. Derived exports (`skillCategories`, `pdfSkillCategories`, `recentExperiences`, `earlierExperiences`) are computed there; never edit them by hand.
