# Content

Everything below is edited in [src/shared/data/cv.ts](../src/shared/data/cv.ts).

## Common edits
- **New role:** insert it in `experiences` where its `endDate` sorts it (newest first; "Present" counts as now). Unique `id`. Only one role has `current: true`; when a new current role starts, give the old one an `endDate` and drop its `current`. `current` drives the "Now" badge, the accent edge and the PDF highlight.
- **Featured on home:** add `{ id, title }` to `featuredWork` (outcome-first title; the card shows the role's first bullet).
- **Older roles** after `lastFullExperienceId` collapse into "Earlier work" on the site and one line in the PDF.
- **Skills:** edit `skillTiers` (and `keySkills` for the highlighted ones). The Skills globe logos are a separate list (`globeIcons` in `features/skills/index.tsx`).
- **Summary:** `about` (About page + PDF), `heroDescription` and `bringMeInTo` (home hero), `skillsSubtitle`, `personalInfo.openTo` (footer).
- **How I work / Now:** `howIWork`, `now`. Bump `now.updated` whenever `now.items` changes.
- **Name, title, years:** `personalInfo`. `index.html` can't import `cv.ts`; update its `<title>` and meta description by hand (a test checks name, title and years).

After text edits run `npm test`: snapshots and the 2-page PDF check ([testing.md](testing.md), [pdf.md](pdf.md)).
