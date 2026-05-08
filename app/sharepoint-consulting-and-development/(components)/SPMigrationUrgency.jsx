// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPMigrationUrgency.jsx

import Link from "next/link";
import styles from "../../../styles/spMigrationUrgency.module.css";

const milestones = [
  {
    id: "sp2016",
    date: "July 2024",
    status: "passed",
    label: "SharePoint 2016",
    event: "End of support",
    detail:
      "No more security patches. No bug fixes. No compliance cover if something goes wrong. Organisations still running it are carrying real exposure with no way to reduce it except moving off.",
  },
  {
    id: "now",
    date: "Now",
    status: "current",
    label: "Where most orgs sit",
    event: "Planning window",
    detail:
      "The organisations that move during this window get more scheduling flexibility, more time for pre-migration testing, and consultants who aren't already stretched across a backlog of urgent projects.",
  },
  {
    id: "sp2019",
    date: "2026",
    status: "approaching",
    label: "SharePoint 2019",
    event: "End of support",
    detail:
      "Exchange Server, Office Online Server, and SharePoint Server all hit end-of-support within the same window. For organisations running the full stack, that's not one migration to plan but three.",
  },
  {
    id: "esu",
    date: "2026-2028",
    status: "warning",
    label: "Extended Security Updates",
    event: "Escalating cost",
    detail:
      "ESUs exist as a stopgap, but the cost goes up each year, the coverage is narrower than most expect, and they don't fix the underlying problem. At some point the bill for staying put exceeds the cost of moving.",
  },
];

const reasons = [
  {
    heading: "Scheduling flexibility",
    body: "Migration projects take time to scope and execute properly. Earlier movers get first pick of consultant availability and project timelines.",
  },
  {
    heading: "Pre-migration testing time",
    body: "Staged migrations with proper test runs require time. Organisations that rush cutover discover their problems during it, not before.",
  },
  {
    heading: "No parallel pressure",
    body: "The 2026 sunset puts Exchange, Office Online Server, and SharePoint under pressure simultaneously. Moving SharePoint now removes one variable from a crowded IT roadmap.",
  },
  {
    heading: "Copilot readiness",
    body: "Getting onto SharePoint Online now means your environment can be structured and governed in time for a Copilot rollout — rather than being a blocker to it.",
  },
];

const SPMigrationUrgency = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="sp-migration-heading"
      id="migration-urgency"
    >
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>End-of-support timelines</span>
          <div className={styles.headerGrid}>
            <h2 id="sp-migration-heading" className={styles.headline}>
              Why businesses are
              <br />
              migrating <span className={styles.accent}>now.</span>
            </h2>
            <p className={styles.lead}>
              Microsoft has set hard deadlines on on-premises infrastructure,
              and 2026 is closer than most IT roadmaps have planned for.
              There&rsquo;s no need to rush decisions, but having a migration
              plan in place now costs nothing, and it tends to make the eventual
              project considerably less stressful.
            </p>
          </div>
        </header>

        {/* ── Horizontal timeline ── */}
        <div
          className={styles.timelineWrap}
          aria-label="Migration deadline timeline"
        >
          {/* Track line */}
          <div className={styles.track} aria-hidden="true">
            <div className={styles.trackFill} />
          </div>

          <ol className={styles.timeline}>
            {milestones.map(({ id, date, status, label, event, detail }) => (
              <li
                key={id}
                className={`${styles.milestone} ${styles[`milestone_${status}`]}`}
              >
                {/* Node on track */}
                <div className={styles.node} aria-hidden="true">
                  <div className={styles.nodeDot} />
                </div>

                {/* Card below */}
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    <time className={styles.date}>{date}</time>
                    {status === "current" && (
                      <span
                        className={styles.currentPill}
                        aria-label="Current position"
                      >
                        You are here
                      </span>
                    )}
                    {status === "warning" && (
                      <span className={styles.warningPill}>
                        Escalating cost
                      </span>
                    )}
                  </div>
                  <strong className={styles.cardLabel}>{label}</strong>
                  <span className={styles.cardEvent}>{event}</span>
                  <p className={styles.cardDetail}>{detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Reasons grid ── */}
        <div className={styles.reasons}>
          <p className={styles.reasonsLabel}>Why moving earlier makes sense</p>
          <div className={styles.reasonsGrid}>
            {reasons.map(({ heading, body }) => (
              <div key={heading} className={styles.reason}>
                <div className={styles.reasonBar} aria-hidden="true" />
                <h3 className={styles.reasonHeading}>{heading}</h3>
                <p className={styles.reasonBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom note ── */}
        <div className={styles.note}>
          <p>
            For organisations also running Exchange Server or Office Online
            Server, our colleagues at{" "}
            <Link
              href="https://www.officeexperts.com.au/services/microsoft-365/microsoft-365-migration"
              className={styles.noteLink}
            >
              Office Experts handle the broader Microsoft&nbsp;365 migration
            </Link>{" "}
            — same team, coordinated delivery so the timelines don&rsquo;t
            compete.
          </p>
          <Link href="#contact" className={styles.cta}>
            Start a migration conversation
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
      </div>
    </section>
  );
};

export default SPMigrationUrgency;
