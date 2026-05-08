// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPWhyUs.jsx

import Link from "next/link";
import styles from "../../../styles/spWhyUs.module.css";

const differentiators = [
  {
    id: "ecosystem",
    heading: "We understand the connections.",
    body: "SharePoint doesn't exist in isolation, and neither does our work on it. The platform connects to Teams, Power Automate, Power Apps, Power BI, and Azure. Decisions made in SharePoint affect how those tools behave. With programmers and developers working across the entire Microsoft suite, we have you covered.",
    link: {
      href: "/services/microsoft-power-platform/microsoft-power-automate",
      label: "Power Automate services",
    },
  },
  {
    id: "australian",
    heading: "Australian-based, remote-first.",
    body: "We work with businesses across the country without the travel overhead. Our Australian team connects with you over teams and email so you don't pay the costs, whilst gaining the benefits of a well established, nation-wide organisation ,with developers dotted throughout the country.",
    link: {
      href: "/locations",
      label: "Our locations",
    },
  },
  {
    id: "governance",
    heading: "Governance isn't an afterthought.",
    body: "Governance, Copilot readiness, and scalability get scoped into projects from the start rather than proposed as afterthoughts once the main work is done. An environment that functions well on day one but becomes a maintenance problem in two years is a project that wasn't scoped properly. We'd rather have that conversation early.",
    link: null,
  },
  {
    id: "honest",
    heading: "We'll tell you when it's not us.",
    body: "We're not limited to SharePoint. Where a workflow belongs in Power Automate, where a form needs Power Apps, where a portal makes more sense than a SharePoint site we can build those as part of the same engagement. And if something is outside our wheelhouse, we'll say so rather than stretch the scope to fit.",
    link: {
      href: "https://www.officeexperts.com.au/services/microsoft-office-365/office-365-migration",
      label: "Office 365 migration",
    },
  },
];

const relatedLinks = [
  {
    label: "Power Apps embedded in SharePoint",
    href: "/services/microsoft-power-platform/microsoft-power-apps",
  },
  {
    label: "Power BI dashboards in SharePoint",
    href: "/services/microsoft-power-platform/microsoft-power-bi",
  },
  {
    label: "Power Automate workflow automation",
    href: "/services/microsoft-power-platform/microsoft-power-automate",
  },
];

const SPWhyUs = () => {
  return (
    <section className={styles.section} aria-labelledby="sp-whyus-heading">
      <div className={styles.inner}>
        {/* ── Main two-zone layout ── */}
        <div className={styles.body}>
          {/* Left: pull-quote column */}
          <div className={styles.quoteCol}>
            <span className={styles.eyebrow}>Why work with us</span>

            <blockquote className={styles.pullQuote}>
              <p>
                &ldquo;An environment that functions well on day&nbsp;one but
                becomes a maintenance problem in two years is a project that
                wasn&rsquo;t scoped properly.&rdquo;
              </p>
            </blockquote>

            <div className={styles.quoteAttribution}>
              <div className={styles.attributionBar} aria-hidden="true" />
              <div>
                <strong>Power Platform Experts</strong>
                <span>Est. 2000 · Australian owned</span>
              </div>
            </div>

            <Link href="#contact" className={styles.cta}>
              Start a conversation
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Right: prose differentiators */}
          <div className={styles.diffCol}>
            <h2 id="sp-whyus-heading" className={styles.srOnly}>
              Why work with us
            </h2>

            {differentiators.map(({ id, heading, body, link }, i) => (
              <div
                key={id}
                className={`${styles.diff} ${i === 0 ? styles.diffFirst : ""}`}
              >
                <h3 className={styles.diffHeading}>{heading}</h3>
                <p className={styles.diffBody}>{body}</p>
                {link && (
                  <Link href={link.href} className={styles.diffLink}>
                    {link.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Related links footer strip ── */}
        <footer className={styles.footer}>
          <span className={styles.footerLabel}>
            Related services &amp; pages
          </span>
          <nav className={styles.linkCluster} aria-label="Related services">
            {relatedLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.clusterLink}>
                {label}
              </Link>
            ))}
          </nav>
        </footer>
      </div>
    </section>
  );
};

export default SPWhyUs;
