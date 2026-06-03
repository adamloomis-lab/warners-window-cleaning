import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/business";

export default function Accessibility() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Accessibility Statement"
      metaTitle={`Accessibility Statement | ${BUSINESS.name}`}
      metaDescription={`${BUSINESS.name} is committed to making our website accessible to everyone.`}
    >
      <p><strong>Last updated: {new Date().getFullYear()}</strong></p>
      <p>
        {BUSINESS.legalName} is committed to making our website accessible to everyone, including
        people with disabilities. We want every visitor to be able to learn about our services
        and get in touch with us easily.
      </p>

      <h2>Our Commitment</h2>
      <p>
        We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA.
        These guidelines explain how to make web content more accessible for people with a wide
        range of disabilities, including visual, auditory, motor, and cognitive limitations.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Using clear structure, headings, and readable color contrast;</li>
        <li>Providing descriptive text alternatives for meaningful images;</li>
        <li>Supporting keyboard navigation and legible, resizable text;</li>
        <li>Designing forms with clearly associated labels and inline error messages.</li>
      </ul>

      <h2>Known Limitations</h2>
      <p>
        Despite our efforts, some content — particularly third-party embedded maps, social media
        widgets, or video tools — may not yet be fully accessible. We are continually working to
        identify and improve these areas.
      </p>

      <h2>Need Help or Found an Issue?</h2>
      <p>
        If you experience any difficulty accessing part of our website, or have a suggestion to
        help us improve, please contact us at{" "}
        <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or{" "}
        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>. We'll do our best to provide
        the information you need through an alternative method and to address the issue promptly.
      </p>
    </LegalPage>
  );
}
