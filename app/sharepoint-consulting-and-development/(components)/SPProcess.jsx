// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPProcess.jsx

import Link from "next/link";
import styles from "../../../styles/spProcess.module.css";

const phases = [
  {
    num: "01",
    label: "Assessment",
    summary: "Understand before anything else.",
    body: "We audit the current environment before any work starts. This can include data volume, site structure, customisations, permissions, and compliance requirements. For migrations, this includes mapping workflows, third-party integrations, and content that needs restructuring before it moves.",
    note: "Surprises at this stage are manageable. Surprises during cutover are not so friendly.",
    outputs: [
      "Current environment audit report",
      "Workflow & integration inventory",
      "Content restructuring requirements",
      "Compliance gap analysis",
    ],
  },
  {
    num: "02",
    label: "Architecture & planning",
    summary: "Define what done looks like.",
    body: "The assessment informs the target state: what the environment should look like when the project is done, how it connects to the rest of Microsoft 365, and what the governance framework covers. Migration approach, timeline, and phasing are locked in here.",
    note: "Work doesn't start until there's a shared picture of what done looks like.",
    outputs: [
      "Target architecture design",
      "Governance framework blueprint",
      "Migration approach & phasing plan",
      "Agreed timeline with milestones",
    ],
  },
  {
    num: "03",
    label: "Migration or build",
    summary: "Execute with staged confidence.",
    body: "Migrations run in stages with pre-migration test runs to avoid problems down the track. Content is restructured in transit where needed, workflows are rebuilt in Power Automate, and branding is applied. For new implementations, this is where sites, libraries, and the information architecture are built to the agreed design.",
    note: "Staged migrations mean cutover is a non-event, not a crisis.",
    outputs: [
      "Staged migration with test runs",
      "Content restructuring in transit",
      "Power Automate workflow rebuilds",
      "Branded sites & library setup",
    ],
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate/",
      label: "Power Automate workflow services",
    },
  },
  {
    num: "04",
    label: "Validation & testing",
    summary: "Verify before handover.",
    body: "Before handover we run functional equivalency checks, verify permissions, and test performance. For migrations specifically, we aim to build simply and scalable, often the most complex route is the best solution.",
    note: "Permission verification is the step most projects under-resource. We understand the importance.",
    outputs: [
      "Functional equivalency checks",
      "Permissions verification report",
      "Performance testing results",
      "Stakeholder sign-off documentation",
    ],
  },
  {
    num: "05",
    label: "Adoption & support",
    summary: "This does not have to be the end.",
    body: "We can provide end-user training, admin handover documentation, and ongoing managed support for organisations that want it. Copilot readiness work often lands here too, if it wasn't scoped into the initial project. An environment that functions well on day one but becomes a maintenance problem in two years is a project that wasn't scoped properly.",
    note: "Most SharePoint environments degrade through accumulated small decisions. Governance at handover prevents that.",
    outputs: [
      "End-user training sessions",
      "Admin handover documentation",
      "Copilot readiness remediation",
      "Ongoing managed support (optional)",
    ],
  },
];

const SPProcess = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="sp-process-heading"
      id="our-process"
    >
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>How we work</span>
            <h2 id="sp-process-heading" className={styles.headline}>
              How we approach a<br />
              <span className={styles.accent}>SharePoint engagement.</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.lead}>
              SharePoint projects vary a lot in scope, a tenant-to-tenant
              migration looks nothing like a greenfield intranet build. The
              process underneath is consistent, because the failure modes are
              usually the same, migrating without properly understanding what
              you have, or building without understanding on what you&rsquo;re
              building toward.
            </p>
          </div>
        </header>

        {/* ── Phase rows ── */}
        <ol className={styles.phases} aria-label="SharePoint engagement phases">
          {phases.map(
            ({ num, label, summary, body, note, outputs, link }, i) => (
              <li
                key={num}
                className={`${styles.phase} ${i % 2 === 1 ? styles.phaseAlt : ""}`}
              >
                {/* Large background numeral */}
                <span className={styles.bgNum} aria-hidden="true">
                  {num}
                </span>

                <div className={styles.phaseGrid}>
                  {/* Left: phase identity */}
                  <div className={styles.phaseLeft}>
                    <div className={styles.phaseTag}>Phase {num}</div>
                    <h3 className={styles.phaseLabel}>{label}</h3>
                    <p className={styles.phaseSummary}>{summary}</p>
                  </div>

                  {/* Right: content */}
                  <div className={styles.phaseRight}>
                    <p className={styles.phaseBody}>{body}</p>

                    {/* Output checklist */}
                    <div className={styles.outputs}>
                      <span className={styles.outputsLabel}>Deliverables</span>
                      <ul className={styles.outputList}>
                        {outputs.map((o) => (
                          <li key={o} className={styles.outputItem}>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 13 13"
                              fill="none"
                              aria-hidden="true"
                            >
                              <circle
                                cx="6.5"
                                cy="6.5"
                                r="6"
                                stroke="#046999"
                                strokeWidth="1"
                              />
                              <path
                                d="M4 6.5l2 2 3-3"
                                stroke="#046999"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Advisory note */}
                    <p className={styles.phaseNote}>
                      <span className={styles.noteRule} aria-hidden="true" />
                      {note}
                    </p>

                    {/* Optional cross-link */}
                    {link && (
                      <Link href={link.href} className={styles.phaseLink}>
                        {link.label}
                        <svg
                          width="13"
                          height="13"
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
                    )}
                  </div>
                </div>
              </li>
            ),
          )}
        </ol>
      </div>
    </section>
  );
};

export default SPProcess;
