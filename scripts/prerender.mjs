// Post-build static generation:
//  1. Serve the built SPA locally.
//  2. Load each route in headless Chromium, let it render + set <head>.
//  3. Save the fully-rendered HTML to dist/<route>/index.html.
//  4. Generate sitemap.xml, robots.txt, and the apple-touch-icon.png.
import { chromium } from 'playwright'
import express from 'express'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, '..', 'dist')
const PUBLIC = path.join(__dirname, '..', 'public')
const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '')

const ROUTES = [
  '/', '/about', '/crafts', '/painting', '/diy', '/community',
  '/blog', '/contact', '/privacy', '/terms', '/refund',
]
const NOTFOUND = '/__404__'

// ── serve dist with SPA fallback ──
const app = express()
app.use(express.static(DIST))
app.get('*', (_req, res) => res.sendFile(path.join(DIST, 'index.html')))
const server = await new Promise((resolve) => {
  const s = app.listen(0, () => resolve(s))
})
const port = server.address().port
const base = `http://localhost:${port}`

const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] })
const page = await browser.newPage()

function cleanup(html) {
  // ensure a single <meta name="description"> (keep the last = Helmet's)
  const metas = [...html.matchAll(/<meta[^>]+name="description"[^>]*>/gi)]
  if (metas.length > 1) {
    for (let i = 0; i < metas.length - 1; i++) html = html.replace(metas[i][0], '')
  }
  return '<!doctype html>\n' + html
}

async function snapshot(route, outFile) {
  await page.goto(base + route, { waitUntil: 'networkidle', timeout: 60000 })
  await page.waitForTimeout(400)
  const html = await page.evaluate(() => document.documentElement.outerHTML)
  const dest = path.join(DIST, outFile)
  await fs.mkdir(path.dirname(dest), { recursive: true })
  await fs.writeFile(dest, cleanup(html))
  console.log('prerendered', route, '→', outFile)
}

for (const r of ROUTES) {
  // flat files (about.html) → clean /about URLs with no trailing-slash redirect
  await snapshot(r, r === '/' ? 'index.html' : `${r.slice(1)}.html`)
}
await snapshot(NOTFOUND, '404.html') // unknown route renders the 404 page

// ── apple-touch-icon.png from the favicon ──
try {
  const svg = await fs.readFile(path.join(PUBLIC, 'favicon.svg'), 'utf8')
  await page.setViewportSize({ width: 180, height: 180 })
  await page.setContent(
    `<html><body style="margin:0"><div style="width:180px;height:180px">${svg.replace(
      /width="64" height="64"',/,
      ''
    )}</div></body></html>`
  )
  await page.waitForTimeout(150)
  const buf = await page.locator('svg').screenshot({ omitBackground: false })
  await fs.writeFile(path.join(DIST, 'apple-touch-icon.png'), buf)
  await fs.writeFile(path.join(PUBLIC, 'apple-touch-icon.png'), buf)
  console.log('generated apple-touch-icon.png')
} catch (e) {
  console.warn('apple-touch-icon generation skipped:', e.message)
}

await browser.close()
server.close()

// ── sitemap.xml + robots.txt with the real domain ──
const today = new Date().toISOString().slice(0, 10)
const urls = ['/', '/about', '/crafts', '/painting', '/diy', '/community', '/blog', '/contact', '/privacy', '/terms', '/refund']
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      (u) =>
        `  <url><loc>${SITE_URL}${u}</loc><lastmod>${today}</lastmod><changefreq>${
          u === '/' || u === '/blog' ? 'weekly' : 'monthly'
        }</changefreq><priority>${u === '/' ? '1.0' : '0.7'}</priority></url>`
    )
    .join('\n') +
  '\n</urlset>\n'
await fs.writeFile(path.join(DIST, 'sitemap.xml'), sitemap)

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
await fs.writeFile(path.join(DIST, 'robots.txt'), robots)
console.log('generated sitemap.xml + robots.txt for', SITE_URL)
