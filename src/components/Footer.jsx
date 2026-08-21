import { Link } from 'react-router-dom'
import { SITE, FOOTER_LINKS } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-warmbrown/15 bg-warmwhite">
      <div className="container-content grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span aria-hidden="true" className="text-xl">🎨</span>
            <span className="font-display text-lg font-semibold text-warmbrown">{SITE.name}</span>
          </div>
          <p className="text-[15px] text-ink/80">
            An independent U.S. art &amp; crafts publication sharing approachable projects,
            painting basics, DIY ideas, and handmade traditions.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 font-display text-base font-semibold text-warmbrown">Pages</h2>
          <ul className="space-y-2 text-[15px]">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="no-underline text-ink/80 hover:text-terracottaDark">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-display text-base font-semibold text-warmbrown">Explore</h2>
          <ul className="space-y-2 text-[15px]">
            <li><Link to="/crafts" className="no-underline text-ink/80 hover:text-terracottaDark">Crafts</Link></li>
            <li><Link to="/painting" className="no-underline text-ink/80 hover:text-terracottaDark">Painting</Link></li>
            <li><Link to="/diy" className="no-underline text-ink/80 hover:text-terracottaDark">DIY</Link></li>
            <li><Link to="/blog" className="no-underline text-ink/80 hover:text-terracottaDark">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 font-display text-base font-semibold text-warmbrown">Contact</h2>
          <address className="space-y-2 text-[15px] not-italic text-ink/80">
            <div>
              <a href={`mailto:${SITE.email}`} className="no-underline text-ink/80 hover:text-terracottaDark break-all">
                {SITE.email}
              </a>
            </div>
            <div>
              <a href={`tel:${SITE.phoneHref}`} className="no-underline text-ink/80 hover:text-terracottaDark">
                {SITE.phone}
              </a>
            </div>
            <div>{SITE.address}</div>
          </address>
        </div>
      </div>

      <div className="border-t border-warmbrown/10">
        <div className="container-content flex flex-col items-center justify-between gap-2 py-4 text-sm text-ink/70 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Made for people who love making things by hand.</p>
        </div>
      </div>
    </footer>
  )
}
