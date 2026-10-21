# Deploy

Live at https://kryvenkosergiy.github.io/cv/ (GitHub Pages, repo `KryvenkoSergiy/cv`). No custom domain, no `gh-pages` branch.

## How it ships
[.github/workflows/deploy.yml](../.github/workflows/deploy.yml) runs on every push to `main` (or manually via *Run workflow*):

1. `npm ci` → `npm run lint` → `npm test` → `npm run build`. **Any failure stops the deploy**; the live site keeps the previous version.
2. `cp dist/index.html dist/404.html`. Pages has no SPA rewrites; serving the app as the 404 page makes unknown paths reach the router's Not found page. Real routes also get a copy each (`experience.html`, …): Pages serves `/cv/experience` from it with HTTP 200, where the 404 fallback would keep the page out of search results. **Adding a route? Add it to that loop.**
3. SEO lives in static `index.html` (description, Open Graph, JSON-LD); `public/og.png` is the link-preview image (1200×630). `PageHeader` sets each inner page's tab title.
4. A newer push cancels a running deploy (`concurrency: pages`).

Roll back by reverting the commit and pushing.

## The `/cv/` base path
It must agree everywhere, or assets 404 and routes break:
- `base: "/cv/"` in [vite.config.ts](../vite.config.ts)
- `basename: "/cv"` in [src/router.tsx](../src/router.tsx)
- `personalInfo.portfolio` and `portfolioDisplay` in [cv.ts](../src/shared/data/cv.ts). The PDF links to `<portfolio>experience#earlier-work`, so keep `id="earlier-work"` in `EarlierWork.tsx`.

The years-of-experience test fails once a year and blocks deploys until bumped, see [testing.md](testing.md).
