// Downloads REAL, freely-licensed craft photos from Wikimedia Commons,
// validates each file (JPEG signature + size), and records license info.
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG_DIR = path.join(__dirname, '..', 'src', 'assets', 'images')
const API = 'https://commons.wikimedia.org/w/api.php'
const UA = 'SeniorPetCompanions-CraftSite/1.0 (educational; contact seniorpetcompanions@gmail.com)'
const BAD = /non-?commercial|\bnc\b|no ?deriv|fair use|all rights reserved/i

// each target: try these Commons categories in order, then a plain search
const targets = [
  { file: 'hero/hero.jpg', cats: ["Painting materials", "Artists' materials"], q: 'art supplies brushes' },
  { file: 'crafts/painting.jpg', cats: ['Watercolor paintings', 'Gouache paintings'], q: 'watercolour painting' },
  { file: 'crafts/diy.jpg', cats: ['Do it yourself', 'Handicrafts'], q: 'handmade craft' },
  { file: 'crafts/paper.jpg', cats: ['Quilling', 'Paper craft', 'Origami'], q: 'paper craft' },
  { file: 'crafts/seasonal.jpg', cats: ['Wreaths', 'Christmas decorations'], q: 'wreath decoration' },
  { file: 'painting/painting.jpg', cats: ['Palettes (painting)', 'Acrylic paintings'], q: 'paint palette' },
  { file: 'diy/diy.jpg', cats: ['Woodworking', 'Hand tools'], q: 'woodworking tools' },
  { file: 'community/community.jpg', cats: ['Craft fairs', 'Knitting circles'], q: 'craft fair' },
  { file: 'blog/knitting.jpg', cats: ['Knitting', 'Balls of yarn'], q: 'knitting yarn' },
  { file: 'blog/pottery.jpg', cats: ['Pottery', 'Ceramics'], q: 'pottery clay' },
  { file: 'blog/embroidery.jpg', cats: ['Embroidery', 'Cross-stitch'], q: 'embroidery hoop' },
  { file: 'projects/card.jpg', cats: ['Greeting cards', 'Scrapbooking'], q: 'greeting card craft' },
  { file: 'projects/macrame.jpg', cats: ['Macramé', 'Knotwork'], q: 'macrame' },
  { file: 'projects/candle.jpg', cats: ['Candle making', 'Candles'], q: 'candle making' },
]

function meta(im) {
  const em = im.extmetadata || {}
  const strip = (s) => (s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
  return {
    thumburl: im.thumburl || im.url,
    descriptionurl: im.descriptionurl,
    width: im.thumbwidth || im.width,
    height: im.thumbheight || im.height,
    license: strip(em.LicenseShortName?.value || em.UsageTerms?.value) || 'Unknown',
    licenseUrl: em.LicenseUrl?.value || '',
    artist: strip(em.Artist?.value) || 'Unknown',
  }
}

async function fromGenerator(params) {
  const r = await fetch(`${API}?${params}`, { headers: { 'User-Agent': UA } })
  const j = await r.json()
  const pages = j?.query?.pages ? Object.values(j.query.pages) : []
  return pages
    .map((p) => p.imageinfo?.[0])
    .filter((i) => i && i.mime === 'image/jpeg' && i.width >= 900)
    .map(meta)
    .filter((i) => i.license !== 'Unknown' && !BAD.test(i.license))
    .sort((a, b) => b.width - a.width)
}

function catParams(cat) {
  return new URLSearchParams({
    action: 'query', format: 'json', generator: 'categorymembers',
    gcmtitle: 'Category:' + cat, gcmtype: 'file', gcmlimit: '30',
    prop: 'imageinfo', iiprop: 'url|mime|size|extmetadata', iiurlwidth: '1400',
  })
}
function searchParams(q) {
  return new URLSearchParams({
    action: 'query', format: 'json', generator: 'search',
    gsrsearch: q + ' filetype:bitmap', gsrnamespace: '6', gsrlimit: '20',
    prop: 'imageinfo', iiprop: 'url|mime|size|extmetadata', iiurlwidth: '1400',
  })
}

async function download(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA } })
  if (!r.ok) throw new Error('HTTP ' + r.status)
  const buf = Buffer.from(await r.arrayBuffer())
  if (!(buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff)) throw new Error('bad JPEG signature')
  if (buf.length < 8000) throw new Error('too small')
  return buf
}

const results = []
for (const t of targets) {
  // skip if already downloaded successfully in a prior run
  const dest = path.join(IMG_DIR, t.file)
  try {
    const existing = await fs.stat(dest)
    if (existing.size > 8000) {
      results.push({ file: t.file, kept: true })
      console.log(`• ${t.file}  (kept existing)`)
      continue
    }
  } catch {}

  let cands = []
  for (const c of t.cats) {
    cands = cands.concat(await fromGenerator(catParams(c)).catch(() => []))
    if (cands.length >= 3) break
  }
  if (cands.length < 1) cands = await fromGenerator(searchParams(t.q)).catch(() => [])

  let ok = false
  for (const c of cands) {
    try {
      const buf = await download(c.thumburl)
      await fs.mkdir(path.dirname(dest), { recursive: true })
      await fs.writeFile(dest, buf)
      results.push({ ...t, ...c, bytes: buf.length })
      console.log(`✓ ${t.file}  (${(buf.length / 1024).toFixed(0)} KB, ${c.license})`)
      ok = true
      break
    } catch {}
  }
  if (!ok) console.log(`✗ ${t.file}`)
}

// regenerate docs from ALL images currently on disk (merge with prior sources.json)
let prior = []
try {
  prior = JSON.parse(await fs.readFile(path.join(IMG_DIR, 'sources.json'), 'utf8'))
} catch {}
const byFile = {}
for (const r of prior) if (r.descriptionurl) byFile[r.file] = r
for (const r of results) if (r.descriptionurl) byFile[r.file] = r
const all = Object.values(byFile)

let md = '# Image Sources & Licenses\n\n'
md += 'All photographs are real, downloaded locally, and bundled at build time — no runtime hotlinks.\n'
md += 'Sourced from Wikimedia Commons under free licenses that permit commercial use.\n\n'
md += '| File | Source (Wikimedia Commons) | Creator | License |\n|---|---|---|---|\n'
for (const r of all)
  md += `| \`${r.file}\` | ${r.descriptionurl} | ${r.artist || 'Unknown'} | ${r.license} |\n`
md += '\n> CC-BY / CC-BY-SA require attribution (creator + source above). CC0 / Public Domain require none.\n'
await fs.writeFile(path.join(IMG_DIR, 'IMAGE-SOURCES.md'), md)
await fs.writeFile(path.join(IMG_DIR, 'sources.json'), JSON.stringify(all, null, 2))
console.log(`\nDocumented ${all.length} images.`)
