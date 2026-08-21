import { useMemo, useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data/content.js'
import { trackEvent } from '../utils/analytics.js'

const PAGE = 4

export default function Blog() {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('All')
  const [count, setCount] = useState(PAGE)
  const [openId, setOpenId] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return ARTICLES.filter((a) => {
      const matchesCat = cat === 'All' || a.category === cat
      const matchesQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.body.join(' ').toLowerCase().includes(q)
      return matchesCat && matchesQ
    })
  }, [query, cat])

  const shown = filtered.slice(0, count)

  const toggle = (a) => {
    const next = openId === a.id ? null : a.id
    setOpenId(next)
    if (next) trackEvent('article_expand', { article_id: a.id })
  }

  const share = (a) => {
    trackEvent('article_share', { article_id: a.id })
    const subject = encodeURIComponent(`Craft article: ${a.title}`)
    const body = encodeURIComponent(`I thought you might like this: ${a.title}\n\n${a.excerpt}`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo
        title="Blog"
        path="/blog"
        description="Short, practical craft articles — knitting, watercolour color mixing, hand-building pottery, embroidery, upcycling, and seasonal makes."
      />
      <PageHeader
        eyebrow="Blog"
        title="Craft Articles & Ideas"
        intro="Short, useful reads on techniques and projects. Tap “Read More” to open a full article right here — no new pages, no pop-ups."
      />

      <div className="container-content py-8">
        {/* Search + filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setCount(PAGE) }}
              placeholder="Search articles…"
              className="w-full rounded-full border border-warmbrown/25 bg-white px-5 py-2.5 text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {ARTICLE_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => { setCat(c); setCount(PAGE) }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c
                    ? 'bg-terracotta text-white'
                    : 'border border-warmbrown/20 bg-warmwhite text-warmbrown hover:bg-cream'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {shown.length === 0 && (
          <p className="py-8 text-center text-ink/70">No articles match your search.</p>
        )}

        {/* Article list — full body is in the DOM; button toggles visibility */}
        <div className="grid gap-6">
          {shown.map((a) => {
            const isOpen = openId === a.id
            return (
              <article key={a.id} className="card overflow-hidden md:flex">
                <img
                  src={a.image}
                  loading="lazy"
                  width="1280"
                  height="853"
                  alt={a.alt}
                  className="h-52 w-full object-cover md:h-auto md:w-64"
                />
                <div className="p-6 md:flex-1">
                  <div className="mb-1 flex items-center gap-3 text-xs">
                    <span className="font-semibold uppercase tracking-wide text-terracotta">{a.category}</span>
                    <time dateTime={a.date} className="text-ink/60">
                      {new Date(a.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                  </div>
                  <h2 className="text-2xl">{a.title}</h2>
                  <p className="mt-2 text-ink/85">{a.excerpt}</p>

                  <div id={`article-${a.id}`} hidden={!isOpen} className="prose-craft mt-4 border-t border-warmbrown/10 pt-4">
                    {a.body.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => toggle(a)}
                      aria-expanded={isOpen}
                      aria-controls={`article-${a.id}`}
                      className="btn btn-secondary !py-2.5"
                    >
                      {isOpen ? 'Show Less' : 'Read More'}
                    </button>
                    <button
                      type="button"
                      onClick={() => share(a)}
                      className="text-[15px] font-semibold text-terracottaDark hover:text-terracotta"
                    >
                      Share by email
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {count < filtered.length && (
          <div className="mt-8 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setCount((c) => c + PAGE)}
            >
              Load More
            </button>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-ink/60">
          Have a topic you would like covered? Email{' '}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </>
  )
}
