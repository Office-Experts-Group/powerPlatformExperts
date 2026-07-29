// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsPillars.jsx
import styles from "../../../../../styles/aiIntegrationsPillars.module.css";

const pillars = [
  {
    id: "custom-ai-agents",
    tag: "Power Platform · Copilot Studio · Azure AI Foundry",
    heading: "Custom AI agents",
    body: "Purpose-built agents that read documents, answer staff questions, triage requests from emails or web forms, or sit inside a Power Automate flow making decisions and inputting to databases, sharepoint lists or even sending of team messages to relevant parties.",
  },
  {
    id: "copilot-intranet",
    tag: "Microsoft 365 Copilot · SharePoint · Teams",
    heading: "Copilot & intranet services",
    body: "Copilot rollout, configuration and governance across Microsoft 365, plus SharePoint intranets built so Copilot can search them properly. A purpose built agent that it trained on all your company data and efficiently retrieves the correct information every time.",
  },
  {
    id: "data-secure-ai",
    tag: "Azure · Dataverse · Data governance",
    heading: "Data-secure AI solutions",
    body: "For finance, legal, health and government, where data residency and audit logging are non-negotiable and need to be built in from day one. The Microsoft ecosystem is built with security in mind and is a pivotable reason as to why it is has long been trusted for business systems.",
  },
];

const AiIntegrationsPillars = () => {
  return (
    <section className={styles.section} id="pillars">
      <div className={styles.header}>
        <span className={styles.eyebrow}>What We Build</span>
        <h2 className={styles.heading}>
          Three ways AI fits into your business.
        </h2>
      </div>

      <div className={styles.strip}>
        {pillars.map((pillar, i) => (
          // `name="pillars"` groups the <details> elements as an accordion,
          // so opening one closes the others, without any JavaScript.
          <details
            key={pillar.id}
            id={pillar.id}
            className={styles.item}
            name="pillars"
            open={i === 0}
          >
            <summary className={styles.summary}>
              <span className={styles.summaryNum}>0{i + 1}</span>
              <span className={styles.summaryHeading}>{pillar.heading}</span>
              <span className={styles.summaryTag}>{pillar.tag}</span>
              <svg
                className={styles.chevron}
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5.5L7 9.5L11 5.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <p className={styles.itemBody}>{pillar.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default AiIntegrationsPillars;
