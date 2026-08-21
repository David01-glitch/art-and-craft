# Senior Pet Companions — U.S. Art & Crafts

A short, fast, trustworthy U.S. art & crafts publication. Built with React + Vite +
Tailwind + React Router, **prerendered to static HTML** so every route is fully crawlable,
and served by a small Express server with gzip compression.

> Note: the brand name is *Senior Pet Companions*, but this website is exclusively about
> **art and crafts in the USA**. There is no pet-related content.

## Tech

- React 18 + Vite 5 + Tailwind CSS 3
- React Router DOM 6 (real routes, no hash navigation)
- react-helmet-async for per-route SEO
- Express + compression (production server)
- Post-build prerendering (Playwright) → static HTML per route

## Requirements

- **Node 20.x**

## Setup

```bash
npm install
npx playwright install chromium   # needed once, for prerendering
cp .env.example .env               # then set VITE_SITE_URL to your real domain
```

## Scripts

```bash
npm run dev      # Vite dev server
npm run build    # vite build + prerender all routes + sitemap/robots/icon
npm start        # serve the built site with Express (uses PORT, default 8080)
```

## Environment

Set your **real production domain** — it is used for canonical URLs, Open Graph URLs,
`sitemap.xml`, and `robots.txt`:

```
VITE_SITE_URL=https://www.your-real-domain.com
```

## Routes

`/` · `/about` · `/crafts` · `/painting` · `/diy` · `/community` · `/blog` ·
`/contact` · `/privacy` · `/terms` · `/refund` · 404

## Contact (used verbatim across the site)

- Email: seniorpetcompanions@gmail.com
- Phone: (813) 564-2401
- Address: 628 Bayshore Lane, Tampa, FL 33609, USA

## Analytics & consent

- Google Analytics 4 (`G-4J046JXWVC`) with IP anonymization
- Google Consent Mode v2 — all storage **denied by default**; enabled only after the
  visitor accepts via the cookie banner (choice persisted in `localStorage`)
- No PII is sent to analytics

## Images

All photographs are **real, licensed, downloaded locally, and bundled at build time**
(no runtime hotlinks). Sources and licenses are documented in
`src/assets/images/IMAGE-SOURCES.md`. To refresh them:

```bash
node scripts/fetch-images.mjs
```

## Deployment

Includes `Procfile` and `app.json` for Node hosts (Railway, Heroku-style, Render, etc.).
The host should run `npm install && npm run build`, then `npm start`.
Remember to set `VITE_SITE_URL`.
