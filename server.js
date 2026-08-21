import express from 'express'
import compression from 'compression'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const PORT = process.env.PORT || 8080

const app = express()
app.disable('x-powered-by')
app.use(compression())

// Serve prerendered static files. Directory requests (e.g. /about) resolve to
// dist/about/index.html automatically.
app.use(
  express.static(DIST, {
    extensions: ['html'],
    redirect: false,
    setHeaders(res, filePath) {
      if (/\.(js|css|jpg|jpeg|png|svg|webp|woff2?)$/.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      } else if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
      }
    },
  })
)

// Anything not matched → prerendered 404 page (with 404 status).
app.use((_req, res) => {
  const notFound = path.join(DIST, '404.html')
  if (fs.existsSync(notFound)) {
    res.status(404).sendFile(notFound)
  } else {
    res.status(404).sendFile(path.join(DIST, 'index.html'))
  }
})

app.listen(PORT, () => {
  console.log(`Senior Pet Companions running on http://localhost:${PORT}`)
})
