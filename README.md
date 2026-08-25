# Wiesmann Software Engineering — Website

Business website of **Wiesmann Software Engineering** (one-person software studio).
Bilingual (EN/DE), statically exported, deployable to any static host.

## Tech stack

- **Next.js 16** (App Router, `output: 'export'`) + TypeScript
- **Tailwind CSS v4** (CSS-first config via `@theme` in `src/app/globals.css`)
- **next-intl** — locales `en` (`/en`) and `de` (`/de`), root `/` meta-refreshes to `/en/`
- **Framer Motion** — scroll/hover animations
- **lucide-react** — icons

## Commands

```bash
npm run dev     # local dev server
npm run build   # static export into out/ (incl. root-index fix)
npm start       # serve out/ statically (for hosts that require npm start)
npm run lint    # eslint
```

## Where to edit content

| What | Where |
| --- | --- |
| Contact details, domain, socials, solution slugs | `src/config/site.ts` |
| All page copy (EN) | `messages/en.json` |
| All page copy (DE) | `messages/de.json` |
| Theme colors / fonts / animations | `src/app/globals.css` (`@theme`) |
| Contact form endpoint | `formEndpoint` in `src/config/site.ts` (empty = mailto fallback) |

## Structure

```
src/
  app/
    route.ts                # / -> /en/ meta-refresh (static HTML)
    [locale]/               # all pages, once per locale
      page.tsx              # landing
      company/page.tsx
      contact/page.tsx
      solutions/[slug]/page.tsx
      privacy/page.tsx
      terms/page.tsx
    sitemap.ts robots.ts manifest.ts
  components/               # ui / layout / sections / svg / motion
  config/site.ts            # single source of truth for details
  i18n/                     # next-intl routing + request config
messages/                   # en.json, de.json
```

## Deployment

`npm run build` produces a fully static `out/` folder. Two ways to host it:

1. **Static hosting (recommended):** point the host at the `out/` folder — no
   Node server needed (nginx, Apache, Netlify, GitHub Pages, …). Routes use
   trailing slashes, so a plain file server works out of the box.
2. **Node host that runs `npm start`:** works too — the start script runs
   `scripts/static-server.mjs`, a tiny dependency-free static server for `out/`
   that respects the `PORT` env var. Just make sure `npm run build` runs first
   (set it as the host's build command).

Note: `next start` does **not** work with `output: 'export'` — that's why the
custom start script exists.

> The privacy policy and terms are placeholder texts — have them reviewed
> before going live.
