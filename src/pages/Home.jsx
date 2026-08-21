import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Newsletter from '../components/Newsletter.jsx'
import Faq from '../components/Faq.jsx'
import { SITE } from '../data/site.js'
import { CATEGORIES, PROJECTS, ARTICLES, FAQS, IMAGES } from '../data/content.js'
import { trackEvent } from '../utils/analytics.js'

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.addressParts.line1,
    addressLocality: SITE.addressParts.city,
    addressRegion: SITE.addressParts.region,
    postalCode: SITE.addressParts.postalCode,
    addressCountry: SITE.addressParts.country,
  },
}

export default function Home() {
  const latest = ARTICLES.slice(0, 3)

  return (
    <>
      <Seo
        title="Home"
        path="/"
        description="A friendly U.S. art & crafts publication with approachable painting, DIY, paper, wood, and seasonal craft projects and inspiration."
        jsonLd={orgJsonLd}
      />

      {/* Hero */}
      <section className="bg-warmwhite">
        <div className="container-content grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
          <div>
            <p className="eyebrow mb-3">American Art &amp; Craft</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Discover the Art of Making by Hand
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink/85">
              Senior Pet Companions is a place to explore approachable American art, crafts, DIY
              projects, and handmade traditions. Clear, honest guides for beginners and hobbyists —
              made for the joy of creating something yourself.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/crafts"
                className="btn btn-primary"
                onClick={() => trackEvent('cta_click', { cta: 'explore_crafts' })}
              >
                Explore Crafts
              </Link>
              <Link
                to="/blog"
                className="btn btn-secondary"
                onClick={() => trackEvent('cta_click', { cta: 'read_blog' })}
              >
                Read the Blog
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.hero}
              width="1280"
              height="853"
              alt="A tidy craft table with paintbrushes and art supplies ready for a project"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="container-content py-12">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-2">Where to start</p>
          <h2 className="text-3xl font-semibold">Featured Craft Categories</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={c.to} className="card group block overflow-hidden no-underline">
              <img
                src={c.image}
                loading="lazy"
                width="1280"
                height="853"
                alt={c.alt}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-2 text-[15px] text-ink/80">{c.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-warmwhite py-12">
        <div className="container-content">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow mb-2">Make it this week</p>
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="card overflow-hidden">
                <img
                  src={p.image}
                  loading="lazy"
                  width="1280"
                  height="853"
                  alt={p.alt}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-sage/15 px-3 py-1 text-sageDark">{p.level}</span>
                    <span className="rounded-full bg-mutedblue/15 px-3 py-1 text-mutedblue">{p.time}</span>
                  </div>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-ink/80">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="container-content py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow mb-2">From the blog</p>
            <h2 className="text-3xl font-semibold">Latest Articles</h2>
          </div>
          <Link to="/blog" className="btn btn-secondary !py-2.5">All articles</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((a) => (
            <article key={a.id} className="card overflow-hidden">
              <img
                src={a.image}
                loading="lazy"
                width="1280"
                height="853"
                alt={a.alt}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-terracotta">{a.category}</p>
                <h3 className="text-lg">{a.title}</h3>
                <p className="mt-2 text-[15px] text-ink/80">{a.excerpt}</p>
                <Link to="/blog" className="mt-3 inline-block text-[15px] font-semibold text-terracottaDark">
                  Read on the blog →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="bg-warmwhite py-12">
        <div className="container-content grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.community}
              loading="lazy"
              width="1280"
              height="853"
              alt="People gathered at a craft fair sharing handmade work"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-2">Made together</p>
            <h2 className="text-3xl font-semibold">A Community of Makers</h2>
            <p className="mt-4 text-lg text-ink/85">
              Crafting is more fun when ideas are shared. Our community pages are a growing space
              to discover projects, swap tips, and explore American craft traditions — from quilting
              circles to holiday makes passed down through families.
            </p>
            <Link to="/community" className="btn btn-secondary mt-6">Visit the Community</Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-content py-12">
        <div className="mx-auto max-w-2xl rounded-xl2 border border-warmbrown/10 bg-warmwhite p-8 text-center shadow-soft">
          <p className="eyebrow mb-2">Stay inspired</p>
          <h2 className="text-2xl font-semibold">Craft ideas in your inbox</h2>
          <p className="mx-auto mt-3 max-w-md text-ink/80">
            Get occasional project ideas and seasonal inspiration. No spam — just making.
          </p>
          <div className="mt-6">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content pb-16">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow mb-2">Good to know</p>
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <Faq items={FAQS} />
      </section>
    </>
  )
}
