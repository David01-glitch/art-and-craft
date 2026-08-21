// GA4 helpers + Google Consent Mode v2 controls.
// Never send personally identifiable information (names, emails, phone,
// addresses, message contents) as event parameters.
const GA_ID = 'G-4J046JXWVC'
const CONSENT_KEY = 'spc_consent'

function gtag() {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(arguments)
}

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) // 'granted' | 'denied' | null
  } catch {
    return null
  }
}

export function setConsent(choice) {
  const granted = choice === 'granted'
  try {
    localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied')
  } catch {}
  gtag('consent', 'update', {
    ad_storage: granted ? 'granted' : 'denied',
    ad_user_data: granted ? 'granted' : 'denied',
    ad_personalization: granted ? 'granted' : 'denied',
    analytics_storage: granted ? 'granted' : 'denied',
  })
  trackEvent('cookie_consent', { choice: granted ? 'accept' : 'reject' })
}

// Strip anything that could be PII before it reaches GA4.
const PII = /email|mail|name|phone|tel|address|message|first|last/i
function safeParams(params = {}) {
  const out = {}
  for (const [k, v] of Object.entries(params)) {
    if (PII.test(k)) continue
    if (typeof v === 'string' && (v.includes('@') || /\d{7,}/.test(v))) continue
    out[k] = v
  }
  return out
}

export function trackEvent(name, params = {}) {
  gtag('event', name, safeParams(params))
}

export function trackPageView(path, title) {
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location:
      typeof window !== 'undefined' ? window.location.origin + path : path,
  })
}

export { GA_ID }
