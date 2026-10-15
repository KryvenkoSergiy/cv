# Design system

Dark only. Tokens live in `@theme static` in [src/index.css](../src/index.css); Tailwind v4 derives utilities from them (`--color-surface-1` → `bg-surface-1`, `--radius-card` → `rounded-card`).

## Tokens
- **Surfaces:** `canvas` (page) → `surface-1` (cards) → `surface-2` (chips, hover) → `surface-3`. Borders: `border-soft`, `border`, `border-strong`.
- **Text:** `fg`, `fg-muted`, `fg-dim`. `fg-dim` is the contrast floor (≥5:1); never go dimmer.
- **Accent:** one hue, emerald `accent` (`accent-hover` on buttons). Text on an accent fill uses `accent-ink`; accent-coloured text uses `accent-fg`; `accent-soft` is the opaque tint behind accent chips and icon tiles. `live` (amber) means only "currently here".
- **Type:** Inter + JetBrains Mono, self-hosted variable fonts from `@fontsource-variable` (imported in `main.tsx`; no Google Fonts request). Sizes `display`, `h1`–`h3`, `body-lg`, `body`, `small`, `label` (pair with `font-mono uppercase`), `code`.
- **Radii / spacing:** `chip`, `control`, `card`; `gutter`, `section`.
- **Motion:** `--ease-editorial`; durations as `duration-[var(--dur-fast)]` / `--dur-base` (Tailwind v4 has no duration namespace).

## Shared UI
- `Card`: the card surface. No backdrop-filter. `interactive` hover changes colour only, never a transform; the one card that moves is `BringMeInCard` (tilt and spotlight with a fine pointer only, off under reduced motion; `.border-run`). `accentEdge` marks the current item.
- `Eyebrow`: mono uppercase label, optional accent hairline; the main hierarchy marker instead of coloured badges.
- Icons: `shared/components/icons.tsx` (stroke icons, `aria-hidden`).

## Utility classes
`.stagger` (entrance cascade; the delay stops growing at the 9th child), `.link-underline`, `.border-run` (running border light). Global `prefers-reduced-motion` rules zero CSS animations, transitions and smooth scroll.
