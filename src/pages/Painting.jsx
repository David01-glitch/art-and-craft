import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { IMAGES } from '../data/content.js'

export default function Painting() {
  return (
    <>
      <Seo
        title="Painting"
        path="/painting"
        description="Beginner painting guidance — watercolour, acrylic, and gouache basics, color mixing, brush control, and easy first studies."
      />
      <PageHeader
        eyebrow="Painting"
        title="Painting for Beginners"
        intro="Start painting without the overwhelm. A friendly overview of the main beginner-friendly paints and the small set of skills that carries you a long way."
      />

      <div className="container-content grid gap-8 py-10 md:grid-cols-3">
        <div className="prose-craft md:col-span-2">
          <p>
            Painting is one of the most rewarding crafts to begin because progress is quick and the
            materials are flexible. You do not need a studio or costly supplies — a small set of good
            paints, a couple of brushes, paper or canvas, and a little patience are enough to start
            learning the fundamentals.
          </p>

          <h2>Choosing your first paint</h2>
          <p>Three paints are especially friendly for beginners:</p>
          <ul>
            <li>
              <strong>Watercolour</strong> — transparent, portable, and forgiving of small budgets.
              Great for loose studies and learning how water carries pigment.
            </li>
            <li>
              <strong>Acrylic</strong> — fast-drying and versatile. You can paint over mistakes once
              a layer dries, which makes it reassuring for new painters.
            </li>
            <li>
              <strong>Gouache</strong> — an opaque, matte cousin of watercolour that is easy to
              re-wet and rework. A nice middle ground between the two above.
            </li>
          </ul>

          <h2>The skills that matter most</h2>
          <p>
            Rather than collecting techniques, focus on a few fundamentals and practice them
            deliberately:
          </p>
          <ul>
            <li><strong>Color mixing:</strong> learn to make clean secondary colors from a limited palette.</li>
            <li><strong>Value:</strong> the light-to-dark range of a painting does more work than color.</li>
            <li><strong>Brush control:</strong> practice consistent strokes, edges, and pressure.</li>
            <li><strong>Water and timing:</strong> especially in watercolour, when you paint matters as much as where.</li>
          </ul>

          <h2>A simple first exercise</h2>
          <p>
            Paint a row of squares, each a slightly different value of a single color — from very
            pale to nearly solid. This teaches you how much water or white to add for control, and it
            produces a handy reference for future paintings. Keep it small and unhurried; the point
            is the practice, not the picture.
          </p>

          <p>
            For a deeper look at keeping colors clean, read our blog article on watercolour color
            mixing. When you are ready to make something functional, the{' '}
            <Link to="/diy">DIY section</Link> has projects where hand-painting adds a personal touch.
          </p>
        </div>

        <aside className="md:col-span-1">
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.paintingPage}
              loading="lazy"
              width="1280"
              height="853"
              alt="A painter's palette with mixed colours and a brush"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-xl2 border border-warmbrown/10 bg-warmwhite p-5">
            <h2 className="text-lg">Starter supply list</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink/85">
              <li>Warm + cool of each primary color</li>
              <li>One round and one flat brush</li>
              <li>Watercolour paper or canvas pad</li>
              <li>Two water jars and a rag</li>
              <li>A pencil and eraser for sketching</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}
