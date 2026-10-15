# Deploy

Live at https://kryvenkosergiy.github.io/cv/ (GitHub Pages, repo `KryvenkoSergiy/cv`). No custom domain, no `gh-pages` branch.

## How it ships
[.github/workflows/deploy.yml](../.github/workflows/deploy.yml) runs on every push to `main` (or manually via *Run workflow*):

1. `npm ci` → `npm run lint` → `npm test` → `npm run build`. **Any failure stops the deploy**; the live site keeps the previous version.
2. `cp dist/index.html dist/404.html`. Pages has no SPA rewrites; serving the app as the 404 page makes deep links like `/cv/experience` work on reload.
3. A newer push cancels a running deploy (`concurrency: pages`).

Roll back by reverting the commit and pushing.

## The `/cv/` base path
It must agree everywhere, or assets 404 and routes break:
- `base: "/cv/"` in [vite.config.ts](../vite.config.ts)
- `basename: "/cv"` in [src/router.tsx](../src/router.tsx)
- `personalInfo.portfolio` and `portfolioDisplay` in [cv.ts](../src/shared/data/cv.ts). The PDF links to `<portfolio>experience#earlier-work`, so keep `id="earlier-work"` in `EarlierWork.tsx`.

The years-of-experience test fails once a year and blocks deploys until bumped, see [testing.md](testing.md).
