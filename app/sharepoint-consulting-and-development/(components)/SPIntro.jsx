// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPIntro.jsx

import Link from "next/link";
import styles from "../../../styles/spIntro.module.scss";

const problems = [
  {
    label: "File Management",
    problem: "Cluttered file share nobody trusts",
    fix: "Structured libraries with version control & metadata",
  },
  {
    label: "Migration",
    problem: "Ageing server past end-of-support",
    fix: "Migration to SharePoint Online with zero data loss",
  },
  {
    label: "Automation",
    problem: "Manual approvals & follow-up work",
    fix: "Automated workflows via Power Automate integration",
  },
  {
    label: "AI Readiness",
    problem: "Copilot giving unreliable answers",
    fix: "Clean, governed environment Copilot can actually draw from",
  },
];

const SPIntro = () => {
  return (
    <section className={styles.section} aria-labelledby="sp-intro-heading">
      {/* ── Dark left panel ── */}
      <div className={styles.dark}>
        <span className={styles.eyebrow}>SharePoint Development</span>

        <h2 id="sp-intro-heading" className={styles.headline}>
          What SharePoint <span>should actually</span> do for your business
        </h2>

        <p className={styles.lead}>
          Most businesses know SharePoint as a place to store files, a somewhat
          accurate assessment but realistically incomplete. A properly built
          SharePoint environment also runs your intranet, automates document
          workflows, connects your teams, and underpins the AI tools Microsoft
          is pushing hard right now. The gap between what it does and what most
          organisations are getting out of it is usually significant.
        </p>

        <p className={styles.lead}>
          We work with Australian businesses to implement, migrate, and build on
          SharePoint, completing integrations within the Microsoft ecosystem.
          Whether you&rsquo;re starting from scratch, moving off an ageing
          server, or trying to get more out of what you already have,
          we&rsquo;ll tell you what&rsquo;s actually worth doing.
        </p>

        <Link href="#contact" className={`${styles.cta} btn`}>
          Get a free assessment
        </Link>
      </div>

      {/* ── Light right panel ── */}
      <div className={styles.light}>
        <p className={styles.panelLabel}>Common situations we&nbsp;fix</p>

        <div className={styles.tableWrap}>
          <table className={styles.fixTable}>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">The problem</th>
                <th scope="col">What we do</th>
              </tr>
            </thead>
            <tbody>
              {problems.map(({ label, problem, fix }) => (
                <tr key={label}>
                  <td className={styles.labelCell}>
                    <span>{label}</span>
                  </td>
                  <td className={styles.problemCell}>{problem}</td>
                  <td className={styles.fixCell}>
                    {/* checkmark icon inline SVG — no extra dep */}
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="6.5"
                        cy="6.5"
                        r="6.5"
                        fill="#046999"
                        fillOpacity="0.12"
                      />
                      <path
                        d="M3.5 6.5L5.5 8.5L9.5 4.5"
                        stroke="#046999"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {fix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className={styles.footnote}>
          <p>
            Complete{" "}
            <Link href="https://www.officeexperts.com.au/services/microsoft-365">
              Office 365 integrations
            </Link>{" "}
            are also handled by our colleagues at{" "}
            <Link href="https://www.officeexperts.com.au">Office Experts</Link>.
          </p>
        </footer>
      </div>
    </section>
  );
};

export default SPIntro;
