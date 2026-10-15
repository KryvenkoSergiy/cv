# Testing

`npm test` (Vitest, node environment).

## What [cv.test.ts](../src/shared/data/cv.test.ts) enforces
- `featuredWork` ids and `lastFullExperienceId` exist in `experiences`.
- `experiences` is sorted by `endDate`, newest first.
- `personalInfo.yearsOfExperience` = whole years since the earliest `startDate`.
- `index.html` `<title>` is exactly `` `${name} — ${title}` `` (em dash); the meta description contains it and `"<years> years"`.
- No `url` for `google-stadia` (product shut down); every other `url` is https.
- Skill names are unique across tiers; every `keySkills` entry exists; no category is named just "Languages"; an "AI & LLM" category exists and the bullets mention OpenAI GPT and Google Gemini.
- `about` says "4-8 engineers" and never "4-14".
- **Snapshots** of experience bullets, skills, technologies and role/company/client/dates. Nothing else in `cv.ts` is snapshotted: review it in the git diff.

## Snapshot workflow
A wording change in snapshotted text fails on purpose. Run `npm test`, read the diff, and if it's what you meant: `npm test -- -u`. Never accept blindly.

## Yearly failure
The years test fails on each anniversary of the first role (around 1 September). Fix: bump `yearsOfExperience` in `cv.ts` and the "N years" in `index.html`'s description.

## Other tests
- [CvDocument.test.tsx](../src/features/pdf/CvDocument.test.tsx): renders the PDF and asserts exactly **2 pages**.
