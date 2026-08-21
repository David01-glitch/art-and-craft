import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { CATEGORIES, PROJECTS } from '../data/content.js'

export default function Crafts() {
  return (
    <>
      <Seo
        title="Crafts"
        path="/crafts"
        description="Explore approachable American craft categories — painting, DIY, paper & handmade, and seasonal projects, with beginner-friendly ideas."
      />
      <PageHeader
        eyebrow="Crafts"
        title="Crafts to Explore"
        intro="Browse our main craft categories. Each one is chosen to be approachable, affordable, and satisfying — whether you have five minutes or an afternoon."
      />

      <section className="container-content py-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {CATEGORIES.map((c) => (
            <article key={c.slug} className="card overflow-hidden">
              <img
                src={c.image}
                loading="lazy"
                width="1280"
                height="853"
                alt={c.alt}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl">{c.title}</h2>
                <p className="mt-2 text-ink/85">{c.blurb}</p>
                {(c.to === '/painting' || c.to === '/diy') && (
                  <Link to={c.to} className="btn btn-secondary mt-4 !py-2.5">
                    Explore {c.title}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-warmwhite py-12">
        <div className="container-content">
          <h2 className="mb-6 text-2xl font-semibold">Simple projects to try</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => (
              <article key={p.title} className="card overflow-hidden">
                <img
                  src={p.image}
                  loading="lazy"
                  width="1280"
                  height="853"
                  alt={p.alt}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-sage/15 px-3 py-1 text-sageDark">{p.level}</span>
                    <span className="rounded-full bg-mutedblue/15 px-3 py-1 text-mutedblue">{p.time}</span>
                  </div>
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-2 text-[15px] text-ink/80">{p.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
