import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

export default function Refund() {
  return (
    <>
      <Seo
        title="Refund Policy"
        path="/refund"
        description="Refund Policy for Senior Pet Companions. We do not currently sell paid products or services, so no purchases require a refund policy at this time."
      />
      <PageHeader eyebrow="Legal" title="Refund Policy" intro="Last updated: 2025." />

      <div className="container-content prose-craft max-w-3xl py-10">
        <h2>No Purchases at This Time</h2>
        <p>
          Senior Pet Companions currently does not sell paid products or services through this
          website, so there are no purchases requiring a refund policy at this time.
        </p>

        <h2>If This Changes</h2>
        <p>
          If we begin offering paid products or services in the future, we will publish a clear
          refund policy here describing eligibility, timeframes, and how to request a refund, before
          any purchase is possible.
        </p>

        <h2>Questions</h2>
        <p>If you have any questions, please contact us:</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
