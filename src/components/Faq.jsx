import { useState } from 'react'

// Accessible accordion. Answers exist in the DOM (good for crawlers); the
// button only toggles visibility via aria-expanded.
export default function Faq({ items }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-warmbrown/10 rounded-xl2 border border-warmbrown/10 bg-warmwhite">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="p-1">
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 rounded-lg px-4 py-4 text-left font-display text-lg font-medium text-warmbrown hover:bg-terracotta/5"
              >
                <span>{item.q}</span>
                <span aria-hidden="true" className="shrink-0 text-terracotta">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              hidden={!isOpen}
              className="px-4 pb-4 text-ink/85"
            >
              {item.a}
            </div>
          </div>
        )
      })}
    </div>
  )
}
