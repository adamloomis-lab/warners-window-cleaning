import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export default function Terms() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      metaTitle={`Terms of Service | ${BUSINESS.name}`}
      metaDescription={`The terms that govern your use of the ${BUSINESS.name} website.`}
    >
      <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
      <p>
        These Terms of Service ("Terms") govern your use of the {BUSINESS.name} website. By
        accessing or using this site, you agree to these Terms.
      </p>

      <h2>Use of This Website</h2>
      <p>
        The content on this site is provided for general informational purposes about our
        residential and commercial window cleaning services. You agree to use the site lawfully
        and not to interfere with its operation or security.
      </p>

      <h2>Estimates & Service</h2>
      <p>
        Information on this website does not constitute a binding offer or guarantee of pricing,
        availability, or results. All estimates are provided after we evaluate your specific
        property and project, and the scope, price, and warranty for any work are governed by
        the separate written agreement between you and {BUSINESS.legalName}.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All content on this site — including text, logos, graphics, and photographs — is the
        property of {BUSINESS.legalName} or its licensors and may not be copied, reused, or
        redistributed without our written permission.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        Our site may link to third-party websites. We are not responsible for the content,
        privacy practices, or security of those sites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, {BUSINESS.name} is not liable for any indirect,
        incidental, or consequential damages arising from your use of this website. The site is
        provided "as is" without warranties of any kind.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the site after changes are
        posted means you accept the updated Terms.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about these Terms? Reach us at{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>.
      </p>

      <p>
        <em>
          These Terms are provided for general informational purposes and are not legal advice.
          Please review them with your own legal counsel to confirm they meet your specific needs.
        </em>
      </p>
    </LegalPage>
  );
}
