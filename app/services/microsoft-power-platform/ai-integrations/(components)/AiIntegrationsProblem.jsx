// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsProblem.jsx
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/aiIntegrationsProblem.module.css";

const painPoints = [
  {
    id: "disconnected",
    heading: "Disconnected pilots",
    body: "A proof-of-concept that impressed one team and never made it any further, because it doesn't talk to core business systems. The agent does not know what to look for and where to find it",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="7" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
        <circle
          cx="25"
          cy="24"
          r="3.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M10 10.5L14 14.5M18 18L22 21.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M14.5 15L17.5 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="1 3.5"
        />
      </svg>
    ),
  },
  {
    id: "security",
    heading: "Security uncertainty",
    body: "Leadership wants AI adoption, but IT and compliance haven't signed off on where the data actually goes. 3rd party apps have unclear data permissions and no one really has the answer",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 4L27 8v8c0 7-4.7 11.6-11 14C9.7 27.6 5 23 5 16V8l11-4z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M13.3 13.2c0-1.7 1.3-3 3-3s3 1.1 3 2.7c0 1.7-3 1.9-3 4.3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="16.3" cy="21.5" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "expertise",
    heading: "No internal expertise",
    body: "Copilot is licensed and available, but there's no one to configure, govern, or extend it properly. No permissions are set and hallucinations are common and confident",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="9" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 26c0-4.4 3.1-8 7-8s7 3.6 7 8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M25 12v2.2M25 21.8V24M20.7 17.5H23M27 17.5h2.3M21.9 13.9l1.5 1.5M27.6 21.1l-1.5-1.5M21.9 21.1l1.5-1.5M27.6 13.9l-1.5 1.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle
          cx="25"
          cy="17.5"
          r="2.3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
];

const AiIntegrationsProblem = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateOnScroll animation="fade-up" duration={0.65}>
          <div className={styles.header}>
            <span className={styles.eyebrow}>The Gap We Keep Seeing</span>
            <h2 className={styles.heading}>
              Every business wants &ldquo;AI.&rdquo;{" "}
              <span className={styles.accent}>
                Few know what that means for their systems.
              </span>
            </h2>
            <p className={styles.body}>
              Most businesses feel they are stuck with really just two bad
              options, either a generic AI tool that doesn't understand their
              data, or expensive custom builds that take a year and never quite
              integrate with Microsoft 365. An AI agent that can&rsquo;t see
              your SharePoint library or respect your Dataverse permissions
              isn&rsquo;t integrated. It&rsquo;s a glorified, expensive chatbot.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {painPoints.map((point, i) => (
            <AnimateOnScroll
              key={point.id}
              animation="fade-up"
              duration={0.55}
              delay={i * 0.08}
            >
              <article className={styles.card}>
                <div className={styles.cardIcon}>{point.icon}</div>
                <h3 className={styles.cardHeading}>{point.heading}</h3>
                <p className={styles.cardBody}>{point.body}</p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiIntegrationsProblem;
