import React from "react";

import IntroDropdowns from "./IntroDropdowns";

import styles from "../../../../../styles/paIntro.module.css";

const PAIntro = () => {
  return (
    <section id="ai-workflows" className={styles.section}>
      <div className={`${styles.grid} ${styles.gridVisible}`}>
        {/* ── LEFT — sticky headline + stats ── */}
        <div className={styles.leftCol}>
          <div className={styles.eyebrow}>Power Platform Experts</div>

          <h2 className={styles.headline}>
            Power Automate has{" "}
            <span className={styles.accentWord}>evolved.</span>
            <br />
            Are you keeping up?
          </h2>

          <div className={styles.body}>
            <p>
              Power Automate has always been the fastest way to connect your
              Microsoft stack. Everything from approvals, notifications, data
              sync, and SharePoint triggers to name a few. That foundation has
              not changed, what <em>has</em> changed is the ceiling. Flows can
              now read documents, classify emails and monitor your systems
              around the clock without a trigger.
            </p>
            <p>
              We have been building with Microsoft technologies for over 25
              years. During this time we have helped thousands of Australian
              businesses upgrade, migrate and streamline their day to day
              activities, our consultants help navigate you through the
              extensive integrations and applications available in the Microsoft
              ecosystem.
            </p>
          </div>
        </div>

        {/* ── RIGHT — interactive capability accordion ── */}
        <IntroDropdowns />
      </div>
    </section>
  );
};

export default PAIntro;
