# Setup

- Node 22 (what CI uses; there is no `.nvmrc`).
- `npm ci` first; the dev URL has the `/cv/` base path.
- Accept snapshots with `npm test -- -u`, not `npx vitest -u` (that starts watch mode).
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters`, `verbatimModuleSyntax` (use `import type`) and `erasableSyntaxOnly` (no enums, no parameter properties).
- The build warns about a >500 kB chunk: that's `@react-pdf/renderer`, loaded only when the PDF is downloaded. Expected.
