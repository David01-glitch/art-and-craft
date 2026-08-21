import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { NAV } from '../data/site.js'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        path="/404"
        description="The page you were looking for could not be found. Explore our crafts, painting, DIY, and blog sections instead."
      />
      <section className="container-content flex flex-col items-center py-20 text-center">
        <p className="eyebrow mb-2">Error 404</p>
        <h1 className="text-4xl font-semibold">This page could not be found</h1>
        <p className="mt-4 max-w-md text-lg text-ink/85">
          The page you were looking for may have moved or never existed. Try one of these instead:
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link to={n.to} className="btn btn-secondary !py-2.5">{n.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="btn btn-primary mt-8">Back to Home</Link>
      </section>
    </>
  )
}
