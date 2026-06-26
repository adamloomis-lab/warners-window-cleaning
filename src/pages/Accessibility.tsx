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
      <p><strong>Last updated: June 2026</strong></p>

      <h2>Our Commitment</h2>
      <p>
        This site is built to WCAG 2.1 AA, the standard referenced by the ADA for web
        accessibility. We review and update our accessibility practices on an ongoing basis.
      </p>

      <h2>What We Have Done</h2>
      <p>
        We have taken the following steps to make this site more accessible to all visitors:
      </p>
      <ul>
        <li>
          Skip links let keyboard and screen reader users bypass navigation and get straight to
          the main content without tabbing through every menu item.
        </li>
        <li>
          A visible outline appears on every interactive element when navigated by keyboard, so
          focus is always clear.
        </li>
        <li>
          Text colors meet the 4.5:1 minimum contrast ratio for readability by people with low
          vision.
        </li>
        <li>
          All form fields, buttons, and interactive elements have descriptive labels so screen
          readers can announce them accurately.
        </li>
        <li>
          Animations automatically reduce for users who have the Reduce Motion preference enabled
          on their device.
        </li>
      </ul>

      <h2>Report an Issue</h2>
      <p>
        If you encounter any accessibility barrier on this site, please contact us and we will
        address it promptly. You can reach us by phone at{" "}
        <a href={`tel:${BUSINESS.phoneE164}`}>{BUSINESS.phone}</a>.
      </p>
    </LegalPage>
  );
}
