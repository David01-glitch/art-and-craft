import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Crafts from './pages/Crafts.jsx'
import Painting from './pages/Painting.jsx'
import DIY from './pages/DIY.jsx'
import Community from './pages/Community.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Refund from './pages/Refund.jsx'
import NotFound from './pages/NotFound.jsx'
import { trackPageView } from './utils/analytics.js'

function RouteTracker() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    // give Helmet a tick to update document.title
    const id = setTimeout(() => trackPageView(pathname, document.title), 60)
    return () => clearTimeout(id)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <Layout>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/painting" element={<Painting />} />
        <Route path="/diy" element={<DIY />} />
        <Route path="/community" element={<Community />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
