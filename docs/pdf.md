# PDF CV

Generated in the browser with `@react-pdf/renderer` from the same `cv.ts` data. Code: [src/features/pdf](../src/features/pdf).

- [DownloadCvButton.tsx](../src/features/pdf/DownloadCvButton.tsx): `loadPdfDeps` dynamically imports both the renderer and `CvDocument`, prefetched on hover/focus. **Never import either statically from site code**, or the ~1.4 MB renderer lands in the entry chunk.
- [CvDocument.tsx](../src/features/pdf/CvDocument.tsx): the layout, with its own colours for white paper (accent `#047857` for contrast).

## The 2-page limit
A test fails if the PDF isn't exactly 2 pages ([testing.md](testing.md)). Each recent role is `wrap={false}`, so one role that no longer fits moves whole to the next page and can push Contact onto page 3. Levers, in order:
1. Tighten long bullets, especially ones whose last line holds one or two words.
2. Print fewer skill tiers: `pdfSkillCategories` is `skillTiers.slice(0, 2)`; the rest stay on the site.
3. Roles after `lastFullExperienceId` print as one "Earlier roles" line; moving that cut to a newer role frees the most space.

Check the result by downloading it from `npm run dev`.
