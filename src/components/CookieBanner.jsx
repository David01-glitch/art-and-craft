import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getConsent, setConsent } from '../utils/analytics.js'

// Simple, honest cookie banner. Accept and Reject are equally prominent.
// The choice persists in localStorage and can be changed later via the
// "Cookie settings" link in the footer area (re-opens this banner).
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!getConsent()) setVisible(true)
    const reopen = () => setVisible(true)
    window.addEventListener('open-cookie-settings', reopen)
    return () => window.removeEventListener('open-cookie-settings', reopen)
  }, [])

  const choose = (choice) => {
    setConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-warmbrown/15 bg-warmwhite/98 backdrop-blur"
    >
      <div className="container-content flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[15px] text-ink/85">
          We use cookies to understand how the site is used (Google Analytics). Analytics
          and advertising storage stay <strong>off</strong> until you choose to accept. You can
          decline and still use the whole site. See our{' '}
          <Link to="/privacy" className="text-terracottaDark">Privacy Policy</Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button type="button" className="btn btn-secondary !py-2.5" onClick={() => choose('denied')}>
            Decline
          </button>
          <button type="button" className="btn btn-primary !py-2.5" onClick={() => choose('granted')}>
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
