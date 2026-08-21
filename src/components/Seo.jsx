import { Helmet } from 'react-helmet-async'
import { SITE } from '../data/site.js'
import ogImage from '../assets/images/hero/hero.jpg'

// Per-route SEO: title, description, canonical, Open Graph, Twitter, JSON-LD.
export default function Seo({ title, description, path = '/', type = 'website', jsonLd }) {
  const fullTitle =
    path === '/' ? `${SITE.name} — ${SITE.tagline}` : `${title} · ${SITE.name}`
  const base = SITE.url.replace(/\/$/, '')
  const canonical = base + path
  const image = base + ogImage

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
