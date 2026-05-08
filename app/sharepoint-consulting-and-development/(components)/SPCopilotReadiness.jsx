// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPCopilotReadiness.jsx

import Link from "next/link";
import styles from "../../../styles/spCopilotReadiness.module.css";

const blockers = [
  {
    id: "oversharing",
    label: "Oversharing",
    detail:
      "Content accessible to far more people than intended. Copilot surfaces this content to anyone who asks without the correct permissions being set from the beginning.",
  },
  {
    id: "outdated",
    label: "Outdated & duplicate files",
    detail:
      "Copilot treats old documents as current. If your libraries haven't been reviewed in years, neither have the answers Copilot gives.",
  },
  {
    id: "classic",
    label: "Classic SharePoint sites",
    detail:
      "Classic sites don't index properly for Microsoft 365 Copilot. Content sitting in them is effectively invisible to the AI.",
  },
];

const tools = [
  {
    label: "SharePoint Admin Agent",
    body: "Handles governance tasks that would otherwise require manual admin work like monitoring sharing activity, flagging policy violations, managing site lifecycle at scale.",
  },
  {
    label: "SharePoint Premium",
    body: "Automates document classification and metadata enrichment, so content gets tagged and organised without depending on users to do it consistently.",
  },
  {
    label: "Copilot readiness assessment",
    body: "We audit your current environment, identify what's blocking a clean rollout, and produce a remediation plan before Copilot goes live.",
  },
];

const SPCopilotReadiness = () => {
  return (
    <section
      className={styles.section}
      id="copilot"
      aria-labelledby="sp-copilot-heading"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className={styles.inner}>
        {/* ── Full-width heading block ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Microsoft 365 Copilot</span>
          <h2 id="sp-copilot-heading" className={styles.headline}>
            Is your SharePoint
            <br />
            <span className={styles.accentPhrase}>ready for Copilot?</span>
          </h2>
          <p className={styles.lead}>
            Microsoft 365 Copilot doesn&rsquo;t have its own knowledge base. It
            reads yours. When someone asks Copilot a question, it pulls answers
            from the SharePoint content that person has access to. What
            information comes back is only as good as what&rsquo;s available.
          </p>
        </header>

        {/* ── Body: blockers left, tools right ── */}
        <div className={styles.body}>
          {/* Left — blocker cards */}
          <div className={styles.blockerCol}>
            <p className={styles.colLabel}>What we find during assessments</p>
            <ul
              className={styles.blockers}
              aria-label="Common Copilot readiness blockers"
            >
              {blockers.map(({ id, label, detail }) => (
                <li key={id} className={styles.blocker}>
                  <div className={styles.blockerHead}>
                    <span className={styles.blockerX} aria-hidden="true">
                      ✕
                    </span>
                    <strong className={styles.blockerLabel}>{label}</strong>
                  </div>
                  <p className={styles.blockerDetail}>{detail}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div className={styles.tools}>
            <p className={styles.colLabel}>Tools we use to fix it</p>
            <ul
              className={styles.toolList}
              aria-label="Copilot readiness tools"
            >
              {tools.map(({ label, body }) => (
                <li key={label} className={styles.tool}>
                  <div className={styles.toolDot} aria-hidden="true" />
                  <div>
                    <strong className={styles.toolLabel}>{label}</strong>
                    <p className={styles.toolBody}>{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SPCopilotReadiness;
