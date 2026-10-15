# Animations

All canvas scenes are plain Canvas 2D with a hand-rolled 3D projection: no WebGL, no 3D library.

| Scene | Where | What |
|---|---|---|
| [HeroBackdrop](../src/features/home/HeroBackdrop.tsx) | home hero | graph with pulses, drawn once to an offscreen layer |
| [StoryParticlesScene](../src/features/home/StoryParticlesScene.tsx) | home, fixed behind the page after the hero | particles form project cards → a 5-step pipeline → an AI core, one formation per `data-scene` section |
| [PageParticles](../src/shared/components/PageParticles.tsx) | Experience, right margin | winding timeline, one ring per full role, lit as you scroll |
| [HeaderScene](../src/shared/components/HeaderScene.tsx) | Skills / About title, via `PageHeader aside` | `skills`: globe of tech logos with arcs and sparks; `about`: sphere ↔ initials |

## Rules every scene follows
- **Portal fixed canvases to `<body>`** (`createPortal`): `PageTransition`'s transform turns `position: fixed` into "scrolls with the page".
- **Reduced motion:** check `matchMedia("(prefers-reduced-motion: reduce)")` in JS; no rAF loop, draw a still frame (redrawn on scroll where the frame depends on scroll).
- **Cost:** HeroBackdrop and HeaderScene stop rAF off screen (IntersectionObserver); the fixed scenes keep rAF but skip drawing until visible. DPR capped at 2.
- **Inner pages:** desktop only and never behind the text. `PageParticles` draws only in the right margin and hides under `MIN_GUTTER` (180 px); `PageHeader`'s aside is `hidden lg:block`. Only the home page's scenes show on mobile.

## Gotchas
- `StoryParticlesScene` maps formations to `[data-scene]` sections **in DOM order** (Featured Work, How I work, Now). Adding, removing or reordering those sections changes the mapping.
- Formations hardcode 3 cards and `STEPS = 5` to match `featuredWork` and `howIWork`; change them together.
- The skills globe imports `simple-icons` logos one by one (`siReact`, …) so only those reach the bundle; never import the whole package.
