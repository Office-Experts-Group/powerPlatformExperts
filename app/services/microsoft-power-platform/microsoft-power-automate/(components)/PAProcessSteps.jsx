import styles from "../../../../../styles/paProcess.module.css";

const steps = [
  {
    num: "01",
    label: "Discovery",
    detail:
      "We map your manual processes before touching a single tool. A focused workshop to identify which tasks are high-volume, rule-based and burning the most team hours. We then rank them by automation potential and business impact.",
  },
  {
    num: "02",
    label: "Design",
    detail:
      "We select the right software solution your business will need. Our consultants will discuss your options and define the pros and cons of each. You might just need a few tweaks to your existing stack",
  },
  {
    num: "03",
    label: "Flow Architecture",
    detail:
      "Before any code is written we design the full flow on paper, be it triggers, conditions, AI model calls, error handling, escalation paths or audit logging. You sign off on the design before build begins.",
  },
  {
    num: "04",
    label: "Build & Test",
    detail:
      "We build inside your own Microsoft environment using your real data. Every flow is tested iteratively against edge cases and exceptional scenarios. Our aim is to simplify your operation, not add unnecessary complexity",
  },
  {
    num: "05",
    label: "Handover",
    detail:
      "Your team gets full documentation and hands-on training. We show you how to monitor flows, handle exceptions and extend the automation as your business evolves.",
  },
];

const PAProcessSteps = () => {
  return (
    <ol
      className={styles.stepList}
      aria-label="Our AI automation delivery process"
    >
      {steps.map((s, i) => (
        <li key={s.num} className={styles.step} tabIndex={0}>
          <div className={styles.stepTrack}>
            <span className={styles.stepNum}>{s.num}</span>
            <span className={styles.stepLine} aria-hidden="true" />
          </div>
          <div className={styles.stepBody}>
            <h3 className={styles.stepLabel}>{s.label}</h3>
            <p className={styles.stepDetail}>{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default PAProcessSteps;
