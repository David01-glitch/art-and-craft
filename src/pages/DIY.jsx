import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { IMAGES } from '../data/content.js'

export default function DIY() {
  return (
    <>
      <Seo
        title="DIY"
        path="/diy"
        description="Practical DIY crafts — home décor, upcycling, and simple woodworking you can make with basic tools and everyday materials."
      />
      <PageHeader
        eyebrow="DIY"
        title="Do-It-Yourself Crafts"
        intro="Make useful, good-looking things with your hands and a modest set of tools. Our DIY approach favors everyday materials, safe methods, and clear steps."
      />

      <div className="container-content grid gap-8 py-10 md:grid-cols-3">
        <div className="prose-craft md:col-span-2">
          <p>
            DIY crafting is about solving small problems and adding personality to your space with
            what you have on hand. The best beginner projects use inexpensive materials, need only a
            handful of tools, and forgive small mistakes.
          </p>

          <h2>A sensible starter toolkit</h2>
          <p>
            You can complete a surprising range of projects with a small kit. Add specialized tools
            only when a project truly needs them:
          </p>
          <ul>
            <li>A craft knife and cutting mat</li>
            <li>A steel ruler and a pencil</li>
            <li>Wood glue and a general-purpose craft glue</li>
            <li>Sandpaper in a couple of grits</li>
            <li>A small hand saw and a set of clamps for wood projects</li>
            <li>A tape measure and safety glasses</li>
          </ul>

          <h2>Three friendly starting points</h2>
          <h3>1. Upcycling</h3>
          <p>
            Turn jars, tins, and offcuts into organizers, planters, and décor. Upcycling builds core
            skills — measuring, gluing, painting, sanding — without the cost of new materials.
          </p>
          <h3>2. Simple home décor</h3>
          <p>
            Fabric bunting, painted signs, and small shelves are approachable and genuinely useful.
            They teach finishing skills that make later projects look polished.
          </p>
          <h3>3. Beginner woodworking</h3>
          <p>
            Start with a small, flat project like a coaster set or a key holder. Focus on accurate
            measuring, clean sanding, and a careful finish. Always work safely: cut away from
            yourself, secure your material, and wear eye protection.
          </p>

          <h2>Finishing well</h2>
          <p>
            A tidy finish separates a homemade look from a handmade one. Sand between coats, wipe
            away dust, and let paint or sealant dry fully before handling. Patience at the end of a
            project pays off more than any single technique.
          </p>

          <p>
            Pair DIY with a little hand-painting from our <Link to="/painting">Painting section</Link>,
            or browse the <Link to="/crafts">Crafts page</Link> for more ideas.
          </p>
        </div>

        <aside className="md:col-span-1">
          <div className="overflow-hidden rounded-xl2 border border-warmbrown/10 shadow-card">
            <img
              src={IMAGES.diyPage}
              loading="lazy"
              width="1280"
              height="853"
              alt="Woodworking hand tools laid out on a workbench"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-6 rounded-xl2 border border-warmbrown/10 bg-warmwhite p-5">
            <h2 className="text-lg">Safety first</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] text-ink/85">
              <li>Cut away from your body.</li>
              <li>Clamp or secure your workpiece.</li>
              <li>Wear eye protection when cutting or sanding.</li>
              <li>Work in a ventilated space with glues and paints.</li>
              <li>Keep sharp tools capped and out of reach of children.</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  )
}
