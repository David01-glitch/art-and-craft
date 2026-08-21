import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'
import { IMAGES } from '../data/content.js'

export default function Community() {
  return (
    <>
      <Seo
        title="Community"
        path="/community"
        description="Discover craft projects, share ideas, and explore American craft traditions. A growing community space for makers of all levels."
      />
      <PageHeader
        eyebrow="Community"
        title="A Community of Makers"
        intro="Crafting is better shared. This is a growing space to discover projects, exchange ideas, and explore the craft traditions that bring people together."
      />

      <div className="container-content grid gap-8 py-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
          <img
            src={IMAGES.community}
            loading="lazy"
            width="1280"
            height="853"
            alt="Makers gathered at a community craft fair"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="prose-craft">
          <h2>How you can take part</h2>
          <ul>
            <li><strong>Discover projects</strong> across painting, DIY, paper, and seasonal crafts.</li>
            <li><strong>Share ideas</strong> and suggest topics you would like us to cover.</li>
            <li><strong>Explore traditions</strong> — from quilting circles to holiday makes handed down through families.</li>
            <li><strong>Find inspiration</strong> for gifts, home décor, and rainy-day activities.</li>
            <li><strong>Grow with us</strong> as we add more community features over time.</li>
          </ul>
          <p>
            We are keeping this simple and honest: community features are still being built, so we
            are not publishing member counts or claims we cannot back up. For now, the best way to
            take part is to reach out directly.
          </p>
        </div>
      </div>

      <section className="bg-warmwhite py-12">
        <div className="container-content grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h2 className="text-xl">Suggest a project</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Want a guide on a specific craft? Tell us and we will consider it for a future article.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-xl">Share what you made</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Finished a project from the site? We would love to hear how it went and what you changed.
            </p>
          </div>
          <div className="card p-6">
            <h2 className="text-xl">Ask a question</h2>
            <p className="mt-2 text-[15px] text-ink/80">
              Stuck on a technique? Send us a note and we will do our best to point you in the right direction.
            </p>
          </div>
        </div>
        <div className="container-content mt-8 text-center">
          <p className="text-ink/85">
            Reach us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{' '}
            <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>.
          </p>
          <Link to="/contact" className="btn btn-primary mt-5">Go to Contact</Link>
        </div>
      </section>
    </>
  )
}
