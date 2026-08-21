import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NAV, SITE } from '../data/site.js'
import { trackEvent } from '../utils/analytics.js'

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `no-underline rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${
      isActive
        ? 'text-terracottaDark bg-terracotta/10'
        : 'text-warmbrown hover:text-terracottaDark hover:bg-terracotta/5'
    }`

  const onNav = (label) => {
    trackEvent('nav_click', { label })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-warmbrown/10 bg-warmwhite/90 backdrop-blur">
      <div className="container-content flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-2 no-underline" onClick={() => onNav('Logo')}>
          <span aria-hidden="true" className="text-2xl">🎨</span>
          <span className="font-display text-xl font-semibold text-warmbrown">
            {SITE.name}
          </span>
        </NavLink>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass} onClick={() => onNav(item.label)} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="btn btn-secondary md:hidden !px-4 !py-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? '✕ Menu' : '☰ Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-warmbrown/10 bg-warmwhite md:hidden">
          <ul className="container-content flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass} onClick={() => onNav(item.label)} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
