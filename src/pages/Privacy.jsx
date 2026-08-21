import Seo from '../components/Seo.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        path="/privacy"
        description="Privacy Policy for Senior Pet Companions — what we collect, how analytics and cookies work, your choices, and how to contact us."
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro="Last updated: 2025. This policy explains what information we collect and how it is used." />

      <div className="container-content prose-craft max-w-3xl py-10">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy describes how Senior Pet Companions (“we,” “us,” or “our”) handles
          information in connection with this website, an informational publication about art and
          crafts. By using the site, you agree to the practices described here.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We aim to collect as little information as possible. The information involved falls into
          two broad categories: information you choose to provide, and information collected
          automatically by standard web technologies.
        </p>

        <h2>3. Information You Provide</h2>
        <p>
          If you contact us by email, phone, or through the contact form (which opens your own email
          app), you may share your name, email address, and the contents of your message. If you use
          the newsletter form, you may share your email address. We use this information only to
          respond to you or to fulfill the request you made.
        </p>

        <h2>4. Automatically Collected Information</h2>
        <p>
          Like most websites, our analytics tools may automatically receive limited technical
          information such as pages viewed, approximate location derived from IP address (which we
          ask analytics to anonymize), device and browser type, and referring pages. This helps us
          understand which content is useful.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Cookies are small files stored by your browser. We use a small number of cookies for
          analytics only, and only after you accept them via our cookie banner. If you decline,
          analytics storage remains off and you can still use the entire site. Your choice is saved
          locally in your browser so we can respect it on future visits.
        </p>

        <h2>6. Analytics</h2>
        <p>
          We use analytics to measure general site usage in aggregate. We configure analytics to
          avoid collecting personally identifying details and we do not attempt to identify
          individual visitors.
        </p>

        <h2>7. Google Analytics</h2>
        <p>
          This site uses Google Analytics 4 (measurement ID G-4J046JXWVC) with IP anonymization
          enabled and with Google Consent Mode. Analytics cookies and data collection stay disabled
          by default and are only enabled if you accept cookies. Google’s handling of data is
          governed by Google’s own privacy policies. You can learn more at Google’s Privacy &amp;
          Terms pages.
        </p>

        <h2>8. Advertising</h2>
        <p>
          We may work with advertising services in the future. Where advertising is used, advertising
          storage and personalization remain disabled by default under Consent Mode and are only
          enabled if you accept. We do not sell your personal information.
        </p>

        <h2>9. How Information Is Used</h2>
        <p>
          We use information to respond to your messages, to understand aggregate site usage, to
          maintain and improve the site, and to keep the site secure. We do not use the contents of
          your messages for analytics or advertising.
        </p>

        <h2>10. Data Sharing</h2>
        <p>
          We do not sell your personal information. We share information only with service providers
          that help us operate the site (such as analytics and hosting), and only as needed to
          provide those services, or where required by law.
        </p>

        <h2>11. Third-Party Services</h2>
        <p>
          The site relies on a small number of third-party services, including a web host, Google
          Analytics, and Google Fonts for typography. These providers process data according to
          their own policies. We keep such services to a minimum.
        </p>

        <h2>12. Data Security</h2>
        <p>
          We take reasonable measures to protect information handled through the site. However, no
          method of transmission or storage over the internet is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>13. Data Retention</h2>
        <p>
          We keep email correspondence only as long as needed to address your request or as required
          by law. Aggregated analytics data is retained according to the analytics provider’s
          standard retention settings.
        </p>

        <h2>14. Your Choices</h2>
        <p>
          You can decline analytics cookies at any time using the cookie banner, and you can change
          your choice later. You can also control cookies through your browser settings. You may
          contact us to ask about information you have shared with us directly.
        </p>

        <h2>15. External Links</h2>
        <p>
          Our content may link to other websites for reference. We are not responsible for the
          privacy practices or content of those external sites and encourage you to review their
          policies.
        </p>

        <h2>16. Children’s Privacy</h2>
        <p>
          This website is intended for a general audience and is not directed to children under 13.
          We do not knowingly collect personal information from children. If you believe a child has
          provided us information, please contact us and we will take appropriate steps.
        </p>

        <h2>17. Policy Changes</h2>
        <p>
          We may update this Privacy Policy from time to time. When we do, we will revise the “last
          updated” date above. Significant changes will be reflected on this page.
        </p>

        <h2>18. Contact Information</h2>
        <p>Questions about this policy can be directed to:</p>
        <ul>
          <li>Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          <li>Phone: <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a></li>
          <li>Address: {SITE.address}</li>
        </ul>
      </div>
    </>
  )
}
