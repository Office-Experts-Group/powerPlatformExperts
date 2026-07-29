// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsProcess.jsx
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/aiIntegrationsProcess.module.css";

const steps = [
  {
    num: "01",
    heading: "Discovery & scoping",
    body: "We map the task, decision, or workflow the AI needs to support, and the systems and data it needs access to.",
  },
  {
    num: "02",
    heading: "Architecture & sign-off",
    body: "Full solution design covering data sources, permissions, exception handling and governance, agreed before any build starts.",
  },
  {
    num: "03",
    heading: "Build in your environment",
    body: "Development happens inside your actual Microsoft 365 or Azure tenant, tested against your real data and permission structure.",
  },
  {
    num: "04",
    heading: "Testing & exception handling",
    body: "We test the expected path and the edge cases: unclear requests, missing data, and permission conflicts.",
  },
  {
    num: "05",
    heading: "Handover & training",
    body: "Documentation and role-based training for your team, plus ongoing support if you want us to keep managing it.",
  },
];

const AiIntegrationsProcess = () => {
  return (
    <section className={styles.section}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>How We Work</span>
          <h2 className={styles.heading}>
            From idea to a live AI integration,{" "}
            <span className={styles.accent}>without the guesswork.</span>
          </h2>
        </div>
      </AnimateOnScroll>

      <div className={styles.timeline}>
        {steps.map((step, i) => (
          <AnimateOnScroll
            key={step.num}
            animation="fade-up"
            duration={0.55}
            delay={i * 0.07}
          >
            <div className={styles.step}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default AiIntegrationsProcess;
