// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsScenarios.jsx

import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import ScrollLine from "./ScrollLine";
import styles from "../../../../../styles/aiIntegrationsScenarios.module.css";

const scenarios = [
  {
    id: "knowledge-search",
    situation:
      "Policies, SOPs and pricing rules live somewhere in SharePoint, but nobody can find the current version quickly. Staff ask a manager instead, or guess.",
    resolution: (
      <>
        An internal knowledge agent built in{" "}
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-office-365/copilot"
          className={styles.inlineLink}
        >
          Copilot Studio
        </Link>{" "}
        that answers in plain English, cites the source document, and respects
        the same SharePoint permissions already in place.
      </>
    ),
    tag: "Copilot Studio · SharePoint",
  },
  {
    id: "approvals-automation",
    situation:
      "Invoices, leave requests or purchase orders sit in an inbox waiting for a person to read them, decide, and manually update three different systems.",
    resolution: (
      <>
        A{" "}
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
          className={styles.inlineLink}
        >
          Power Automate
        </Link>{" "}
        flow with an AI step that reads the incoming document, extracts the
        relevant data, and either actions it automatically or routes it to the
        right person to approve.
      </>
    ),
    tag: "Power Automate · AI Builder",
  },
  {
    id: "readable-reporting",
    situation:
      "The dashboards exist and the data is accurate, but anyone who isn't fluent in the report can't get a straight answer without asking someone else first.",
    resolution: (
      <>
        A Copilot agent connected to the underlying{" "}
        <Link
          href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi"
          className={styles.inlineLink}
        >
          Power BI
        </Link>{" "}
        dataset so staff can ask a plain-English question, such as what refunds
        looked like last quarter in Victoria, and get an answer, not a request
        to learn the report.
      </>
    ),
    tag: "Power BI · Copilot Studio",
  },
  {
    id: "data-governance",
    situation:
      "The business is in finance, legal, health or government. Generic AI tools would work technically but nobody can confirm what happens to the data once it leaves the building.",
    resolution: (
      <>
        A solution designed on
        <Link
          href="https://www.officeexperts.com.au/services/by-business-solution/cloud-based-solutions-with-azure"
          className={styles.inlineLink}
        >
          {" "}
          Azure
        </Link>{" "}
        and Dataverse from the outset, keeping data inside your tenant boundary,
        applying row- level security to agent permissions, and logging every
        query for audit.
      </>
    ),
    tag: "Azure · Dataverse · Governance",
  },
  {
    id: "copilot-adoption",
    situation:
      "Microsoft 365 Copilot came with the tenant, someone tried it once, and it's now sitting idle because no one configured it for how the business actually works.",
    resolution: (
      <>
        Tenant configuration, permission review, and role-based training so
        marketing, finance and operations each learn how{" "}
        <Link
          href="https://www.officeexperts.com.au/services/microsoft-office-365/copilot"
          className={styles.inlineLink}
        >
          Copilot
        </Link>{" "}
        applies to their own work, not a generic overview.
      </>
    ),
    tag: "Microsoft 365 Copilot",
  },
];

// ─────────────────────────────────────────────
// Single comparison row
// ─────────────────────────────────────────────
const Row = ({ row, index }) => (
  <div className={styles.row}>
    {/* ── Situation cell ── */}
    <div className={styles.cell}>
      <div className={styles.cellHeader}>
        <span className={styles.xIcon} aria-label="The situation">
          ✕
        </span>
        <span className={styles.cellLabel}>The Situation</span>
      </div>
      <p className={styles.cellText}>{row.situation}</p>
    </div>

    {/* ── Divider arrow, sits on top of the centre scroll line ── */}
    <div className={styles.arrow} aria-hidden="true">
      <div className={styles.arrowDisc}>
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="16"
            cy="16"
            r="15"
            stroke="rgba(4,105,153,0.2)"
            strokeWidth="1"
          />
          <path
            d="M10 16h12M18 12l4 4-4 4"
            stroke="#046999"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>

    {/* ── Resolution cell ── */}
    <div className={styles.cell}>
      <div className={styles.cellHeader}>
        <span className={styles.checkIcon} aria-label="What we build">
          ✓
        </span>
        <span className={styles.cellLabel}>What We Build</span>
        <p
          //   href={row.tagHref ? row.tagHref : "#"}
          className={styles.tagPill}
          aria-label={`Learn more about ${row.tag}`}
        >
          {row.tag}
        </p>
      </div>
      <p className={styles.cellText}>{row.resolution}</p>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Main component — plain server component, no
// client-side state required
// ─────────────────────────────────────────────
const AiIntegrationsScenarios = () => {
  return (
    <section className={styles.section}>
      {/* ── Section header ── */}
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Real-World Scenarios</span>
          <h2 className={styles.title}>
            The problems AI and Power Automate{" "}
            <span className={styles.accentText}>actually</span> solve.
          </h2>
          <p className={styles.intro}>
            Not hypothetical use cases. Below are the situations that come up
            most often when we sit down with a business and ask where their time
            is actually going, and exactly what we build in response.
          </p>
        </div>
      </AnimateOnScroll>

      {/* ── Comparison rows, with the scroll line running behind them ── */}
      <div className={styles.rowStack}>
        <ScrollLine />
        {scenarios.map((row, i) => (
          <Row key={row.id} row={row} index={i} />
        ))}
      </div>

      <div className={styles.footRow}>
        <p className={styles.footNote}>
          None of this requires replacing what you already run on. Every
          scenario above sits on top of Microsoft 365, Power Platform or Azure
          you likely already have.
        </p>
        <Link href="#contact" className={styles.footCta}>
          Talk through your scenario
        </Link>
      </div>
    </section>
  );
};

export default AiIntegrationsScenarios;
