import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CookieBanner from './CookieBanner.jsx'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only rounded-md bg-white px-3 py-2 text-warmbrown shadow focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  )
}
