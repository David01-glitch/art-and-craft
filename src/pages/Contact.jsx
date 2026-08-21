import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'
import { trackEvent } from '../utils/analytics.js'

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${SITE.name}`,
  url: `${SITE.url.replace(/\/$/, '')}/contact`,
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // No email backend is configured, so we hand off to the visitor's mail
    // client. We do NOT show a fake "message sent" confirmation.
    trackEvent('contact_submit', { has_subject: !!form.subject }) // no PII
    const subject = encodeURIComponent(form.subject || 'Website enquiry')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <Seo
        title="Contact"
        path="/contact"
        description="Contact Senior Pet Companions. Email, phone, and address, plus a simple contact form that opens in your email app."
        jsonLd={contactJsonLd}
      />
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        intro="Questions, suggestions, or corrections? We would be glad to hear from you."
      />

      <div className="container-content grid gap-10 py-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold">Reach us directly</h2>
          <address className="mt-4 space-y-3 not-italic text-ink/85">
            <p>
              <span className="font-semibold text-warmbrown">Email:</span>{' '}
              <a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a>
            </p>
            <p>
              <span className="font-semibold text-warmbrown">Phone:</span>{' '}
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            </p>
            <p>
              <span className="font-semibold text-warmbrown">Address:</span><br />
              {SITE.address}
            </p>
          </address>

          <div className="mt-6 rounded-xl2 border border-warmbrown/10 bg-warmwhite p-5 text-[15px] text-ink/80">
            <p>
              This form does not send email on its own — when you submit it, your device’s email app
              opens with the message ready for you to send. You can also email us directly at the
              address above.
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-xl2 border border-warmbrown/10 bg-warmwhite p-6 shadow-soft">
          <h2 className="mb-4 text-2xl font-semibold">Send a message</h2>

          <div className="mb-4">
            <label htmlFor="c-name" className="mb-1 block text-sm font-medium text-warmbrown">Name</label>
            <input id="c-name" required value={form.name} onChange={set('name')}
              className="w-full rounded-lg border border-warmbrown/25 bg-white px-4 py-2.5 focus:border-terracotta focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="c-email" className="mb-1 block text-sm font-medium text-warmbrown">Email</label>
            <input id="c-email" type="email" required value={form.email} onChange={set('email')}
              className="w-full rounded-lg border border-warmbrown/25 bg-white px-4 py-2.5 focus:border-terracotta focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="c-subject" className="mb-1 block text-sm font-medium text-warmbrown">Subject</label>
            <input id="c-subject" value={form.subject} onChange={set('subject')}
              className="w-full rounded-lg border border-warmbrown/25 bg-white px-4 py-2.5 focus:border-terracotta focus:outline-none" />
          </div>
          <div className="mb-4">
            <label htmlFor="c-message" className="mb-1 block text-sm font-medium text-warmbrown">Message</label>
            <textarea id="c-message" required rows={5} value={form.message} onChange={set('message')}
              className="w-full rounded-lg border border-warmbrown/25 bg-white px-4 py-2.5 focus:border-terracotta focus:outline-none" />
          </div>
          <button type="submit" className="btn btn-primary w-full">Open in email app</button>
        </form>
      </div>
    </>
  )
}
