import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use"
        path="/terms"
        description="Terms of Use for Senior Pet Companions — acceptable use, informational content, intellectual property, disclaimers, and liability."
      />
      <PageHeader eyebrow="Legal" title="Terms of Use" intro="Last updated: 2025. Please read these terms before using this website." />

      <div className="container-content prose-craft max-w-3xl py-10">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to these Terms of Use. If you do not agree,
          please do not use the site.
        </p>

        <h2>2. Website Use</h2>
        <p>
          You may use this website for personal, non-commercial, and lawful purposes. You agree not
          to misuse the site, interfere with its operation, or attempt to access it in ways not
          intended by its design.
        </p>

        <h2>3. Informational Content</h2>
        <p>
          The content on this website is provided for general informational and educational purposes
          about art and crafts. It is offered in good faith, but you are responsible for using your
          own judgment, following product instructions, and taking appropriate safety precautions
          when attempting any project.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The original text and layout of this website are owned by Senior Pet Companions unless
          otherwise noted. Photographs are used under their respective licenses, credited where
          required. You may not copy or redistribute site content in a way that infringes these
          rights.
        </p>

        <h2>5. User Conduct</h2>
        <p>
          When contacting us or interacting with the site, you agree not to submit unlawful,
          harmful, misleading, or abusive content, and not to impersonate others or violate the
          rights of any third party.
        </p>

        <h2>6. User Submissions</h2>
        <p>
          If you send us ideas, suggestions, or feedback, you grant us permission to use that
          feedback to improve the site without obligation to you. Please do not send confidential
          information you do not wish us to use.
        </p>

        <h2>7. External Links</h2>
        <p>
          This site may link to third-party websites for reference. We do not control and are not
          responsible for the content, accuracy, or practices of those external sites.
        </p>

        <h2>8. Advertising</h2>
        <p>
          This website may display advertising in the future. Any advertising will be handled in
          accordance with our Privacy Policy and applicable consent settings. Advertisements do not
          constitute an endorsement by us of the advertised products or services.
        </p>

        <h2>9. Affiliate Disclosure</h2>
        <p>
          At this time, this website does not participate in affiliate programs and does not earn
          commissions from links. If this changes, we will disclose affiliate relationships clearly
          on relevant pages.
        </p>

        <h2>10. Disclaimers</h2>
        <p>
          The website and its content are provided “as is” without warranties of any kind, express or
          implied. We do not warrant that the content is complete, accurate, or suitable for a
          particular purpose. Craft projects carry inherent risks; follow all tool and material
          safety guidance.
        </p>

        <h2>11. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Senior Pet Companions will not be liable for any
          indirect, incidental, or consequential damages arising from your use of the website or from
          attempting any project described here.
        </p>

        <h2>12. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the website after changes
          are posted constitutes acceptance of the revised Terms.
        </p>

        <h2>13. Contact</h2>
        <p>Questions about these Terms can be directed to:</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
