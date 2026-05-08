// powerplatformexperts.com.au/components/PowerPages/PPComparison.jsx

import Link from "next/link";
import styles from "../../../../../styles/ppComparison.module.css";

// ─────────────────────────────────────────────
// Decision criteria — two columns
// ─────────────────────────────────────────────
const powerPagesCriteria = [
  "Your business runs on Microsoft 365, Dynamics 365, or Dataverse and you need to expose that data to external users",
  "You want something built and running in weeks, not months",
  "Your team needs to maintain the site themselves after launch, without a developer on call",
  "You are building a portal with relatively standard patterns: login, forms, dashboards, role-based views",
  "Licensing, vendor support, and staying inside the Microsoft ecosystem matter to you",
];

const customBuildCriteria = [
  "You need something Power Pages cannot do, like complex UI animations, non-Microsoft data sources, or a unique user experience",
  "You want full control over performance, architecture, and how the application evolves over time",
  "You are not tied to the Microsoft ecosystem and do not want to be",
  "You are building something that needs to scale independently or be deployed anywhere",
  "WordPress with PHP suits a content-heavy site where your team needs easy editing without a proprietary licence",
];

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const PPComparison = () => {
  return (
    <section className={styles.section} id="comparison">
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>The Real Comparison</span>
          <h2 className={styles.headline}>
            Power Pages or a custom&#8209;built web app...{" "}
            <span className={styles.accent}>which do you actually need?</span>
          </h2>
          <p className={styles.intro}>
            This is a critical decision point, because the answer is not always
            Power Pages. Both paths have real trade&#8209;offs and we help with
            both. Our developers work within a huge variety of programming
            languages, frameworks and platforms. Every project is unique and we
            are here to help you find the right solution.
          </p>
        </header>

        {/* ── Two-column decision matrix ── */}
        <div className={styles.matrix}>
          {/* Power Pages column */}
          <div className={`${styles.col} ${styles.colPowerPages}`}>
            <div className={styles.colHeader}>
              {/* Small inline SVG: Power Pages mark */}
              <span className={styles.colIconWrap} aria-hidden="true">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="6" fill="#046999" />
                  <rect
                    x="5"
                    y="7"
                    width="18"
                    height="3"
                    rx="1.5"
                    fill="rgba(255,255,255,0.9)"
                  />
                  <rect
                    x="5"
                    y="12.5"
                    width="12"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <rect
                    x="5"
                    y="16.5"
                    width="14"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.5)"
                  />
                  <rect
                    x="5"
                    y="20.5"
                    width="9"
                    height="2"
                    rx="1"
                    fill="rgba(255,255,255,0.3)"
                  />
                </svg>
              </span>
              <div>
                <h3 className={styles.colHeading}>Power Pages</h3>
                <p className={styles.colSubheading}>makes sense when</p>
              </div>
            </div>

            <ul
              className={styles.criteriaList}
              aria-label="When Power Pages is the right choice"
            >
              {powerPagesCriteria.map((c, i) => (
                <li key={i} className={styles.criteriaItem}>
                  <span className={styles.criteriaCheck} aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        stroke="#046999"
                        strokeWidth="1"
                      />
                      <path
                        d="M5 8l2.5 2.5L11 5.5"
                        stroke="#046999"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <aside className={styles.colNote}>
              The low&#8209;code approach is a real advantage. A Power Pages
              portal your admin can update, extend, and troubleshoot without
              touching code is genuinely valuable for a lot of businesses.
            </aside>
          </div>

          {/* Divider */}
          <div className={styles.divider} aria-hidden="true">
            <span className={styles.dividerLabel}>or</span>
          </div>

          {/* Custom build column */}
          <div className={`${styles.col} ${styles.colCustom}`}>
            <div className={styles.colHeader}>
              <span className={styles.colIconWrap} aria-hidden="true">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="28" height="28" rx="6" fill="#1a2a3a" />
                  <path
                    d="M8 11l-4 3 4 3M20 11l4 3-4 3"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 8l-4 12"
                    stroke="rgba(126,200,227,0.8)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className={styles.colHeading}>Custom JavaScript app</h3>
                <p className={styles.colSubheading}>makes sense when</p>
              </div>
            </div>

            <ul
              className={styles.criteriaList}
              aria-label="When a custom build is the right choice"
            >
              {customBuildCriteria.map((c, i) => (
                <li key={i} className={styles.criteriaItem}>
                  <span className={styles.criteriaCheck} aria-hidden="true">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.5"
                        stroke="#4a5568"
                        strokeWidth="1"
                      />
                      <path
                        d="M5 8l2.5 2.5L11 5.5"
                        stroke="#4a5568"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            <aside className={styles.colNote}>
              Frameworks like{" "}
              <Link
                href="https://www.officeexperts.com.au/services/by-business-solution/online-solutions"
                className={styles.noteLink}
              >
                React and Next.js
              </Link>{" "}
              give you full control. Connect to any API, host anywhere,
              server&#8209;side render for SEO, and build exactly to your
              requirements.
            </aside>
          </div>
        </div>

        {/* ── Trade-off summary ── */}
        <div className={styles.tradeoff}>
          <div className={styles.tradeoffInner}>
            <h3 className={styles.tradeoffHeading}>The real trade&#8209;off</h3>
            <p className={styles.tradeoffBody}>
              Custom development takes longer and costs more upfront, but you
              own the result outright. Power Pages is faster to stand up but you
              are working within Microsoft&rsquo;s boundaries, pricing, and
              roadmap. Neither is the wrong answer, it simply depends on what
              you are building and how your business is set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPComparison;
