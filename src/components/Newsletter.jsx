import { useState } from 'react'
import { SITE } from '../data/site.js'
import { trackEvent } from '../utils/analytics.js'

// Honest signup: there is no automated mailing backend, so submitting opens
// the visitor's email client pre-addressed to us. No fake "subscribed!" state.
export default function Newsletter() {
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    trackEvent('newsletter_signup', { source: 'homepage' }) // no PII sent
    const subject = encodeURIComponent('Newsletter subscribe')
    const body = encodeURIComponent(
      `Please add me to the Senior Pet Companions craft newsletter.\n\nMy email: ${email}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Your email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="flex-1 rounded-full border border-warmbrown/25 bg-white px-5 py-3 text-ink placeholder:text-ink/40 focus:border-terracotta focus:outline-none"
      />
      <button type="submit" className="btn btn-primary">
        Subscribe by email
      </button>
    </form>
  )
}
