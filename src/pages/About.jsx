import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

export default function About() {
  return (
    <>
      <Seo
        title="About"
        path="/about"
        description="About Senior Pet Companions — an independent U.S. art & crafts publication sharing approachable projects and honest, useful craft guidance."
      />
      <PageHeader
        eyebrow="About"
        title="About Senior Pet Companions"
        intro="An independent publication about American art and crafts, written for beginners and hobbyists who want clear, honest, useful guidance."
      />
      <div className="container-content prose-craft max-w-3xl py-10">
        <h2>What this website is</h2>
        <p>
          Senior Pet Companions is a small, focused publication about art and crafts in the United
          States. We cover approachable painting, do-it-yourself projects, paper crafts, woodworking
          basics, seasonal makes, and handmade traditions. Our aim is simple: help people enjoy
          making things by hand, without pressure, jargon, or expensive equipment.
        </p>

        <h2>Our focus on U.S. art and crafts</h2>
        <p>
          American craft culture is broad and welcoming — from folk traditions and quilting to
          modern DIY and upcycling. We write with U.S. readers in mind, favoring materials that are
          easy to find in local stores and projects that suit the seasons and celebrations common
          across the country. Because most craft techniques are universal, makers anywhere are
          welcome to follow along.
        </p>

        <h2>What you can find here</h2>
        <ul>
          <li>Step-friendly beginner projects with realistic time and difficulty estimates.</li>
          <li>Short, practical articles on techniques like color mixing, basic stitches, and hand-building.</li>
          <li>Seasonal and gift ideas that use inexpensive, widely available materials.</li>
          <li>Encouragement to explore, experiment, and learn at your own pace.</li>
        </ul>

        <h2>Editorial philosophy</h2>
        <p>
          We believe good craft writing is honest and specific. We do not promise perfect results or
          shortcuts that do not exist. When a project is tricky, we say so; when a mistake is common,
          we explain how to avoid or fix it. We would rather publish fewer, clearer guides than a
          flood of thin content.
        </p>

        <h2>How our content is created</h2>
        <p>
          Articles are written and edited to be practical and accurate, drawing on widely accepted
          craft techniques. Photographs used across the site are real, appropriately licensed images
          that we store and serve locally. We update guidance when we find a clearer way to explain
          something.
        </p>

        <h2>Our commitment</h2>
        <p>
          We are committed to useful, original information and to being transparent about who we are
          and how to reach us. We do not invent credentials, awards, or statistics, and we do not
          publish fake reviews or testimonials.
        </p>

        <h2>Contact</h2>
        <p>
          Questions, suggestions, or corrections are always welcome.
        </p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
