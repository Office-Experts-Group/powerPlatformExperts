import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import automate from "../../../../public/automate600x400.webp";

const ServicesAutomate = () => {
  const checkItems = [
    {
      strong: "Cloud Flows ",
      text: "create automated workflows that connect your apps and services. These flows can run on schedules, respond to specific events, or orchestrate complex processes across your entire digital ecosystem.",
    },
    {
      strong: "Desktop Flows ",
      text: "bring Robotic Process Automation (RPA) to legacy systems that lack modern APIs. We record and replicate mouse clicks and keyboard inputs, allowing you to integrate older systems that can't connect natively. This is particularly valuable for mainframe systems, legacy desktop applications, and proprietary software without integration options.",
    },
    {
      strong: "Business Process Flows ",
      text: "provide guided workflows that ensure teams follow standardised procedures from start to finish. These flows include built-in compliance checkpoints and quality controls. They're excellent for onboarding processes, approval chains, and any multi-step procedure that requires consistency.",
    },
    {
      strong: "Process Mining ",
      text: "analyses your existing business processes to identify bottlenecks, inefficiencies, and opportunities for improvement. By examining actual process data, we uncover patterns and problems that may not be visible in day-to-day operations.",
    },
  ];

  return (
    <main className="animate-wrapper" style={{ margin: "6rem 0" }}>
      <div className={`${styles.pageSegment} ${styles.services}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Power Automate Solutions</h2>
            <p>
              Our automation experts identify repetitive tasks and transform
              them into efficient, error-free workflows. From simple email
              notifications to complex multi-system integrations, we design
              automation that saves time and reduces operational costs.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={automate}
              alt="automate what you can"
              width={450}
              height={300}
              style={{ marginBottom: "2rem" }}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1}>
          <div className={styles.points}>
            {checkItems.map(({ strong, text }, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginTop: ".5rem" }}
              >
                <div className={styles.tick}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
                  </svg>
                </div>
                <p>
                  <strong>{strong}</strong> {text}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.challenges}>
            <h3>Common Applications</h3>
            <p>
              Approval workflows route requests through the right channels
              automatically. Document generation and routing create and
              distribute reports, contracts, and forms without manual
              intervention. Data synchronisation keeps information consistent
              across multiple systems. Email and notification automation ensures
              timely communication. Invoice processing extracts data and updates
              accounting systems automatically. Employee onboarding automation
              guides new hires through all necessary steps. Report generation
              and distribution deliver insights to stakeholders on schedule.
            </p>
          </div>
        </AnimateOnScroll>
      </div>

      <div
        className={`${styles.pageSegment} ${styles.services}`}
        style={{ marginTop: "2rem" }}
      >
        <p style={{ color: "#777a7e", lineHeight: "2rem" }}>
          Power Automate connects seamlessly with Microsoft 365, Azure, and
          Dynamics 365, while also supporting over 1,000 third-party
          applications. We build robust error handling and notification systems
          to keep you informed when exceptions occur. Automations can run on
          schedules or in response to specific triggers.
        </p>
      </div>
      <div className={styles.btnHolder}>
        <Link
          href="/services/microsoft-power-platform/microsoft-power-automate"
          className={styles.btn}
        >
          Learn more about Power Automate
        </Link>
      </div>
    </main>
  );
};

export default ServicesAutomate;
