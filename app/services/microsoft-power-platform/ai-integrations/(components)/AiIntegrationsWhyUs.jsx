// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsWhyUs.jsx
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/aiIntegrationsWhyUs.module.css";

const stats = [
  { value: "25+", label: "years in business" },
  { value: "All", label: "Microsoft products covered" },
  { value: "100%", label: "Australian owned" },
  { value: "AU-wide", label: "remote and on-site delivery" },
];

const AiIntegrationsWhyUs = () => {
  return (
    <section className={styles.section}>
      <AnimateOnScroll animation="fade-up" duration={0.65}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Why Office Experts Group</span>
          <h2 className={styles.heading}>
            AI built by people who already know{" "}
            <span className={styles.accent}>your Microsoft environment.</span>
          </h2>
          <p className={styles.body}>
            We&rsquo;re not a new AI agency bolting large language models onto
            unfamiliar systems.{" "}
            <Link
              href="https://www.officeexperts.com.au/about-us"
              className={styles.inlineLink}
            >
              Office Experts Group
            </Link>{" "}
            has been building on the Microsoft stack since 2000, Excel, Access,
            SharePoint, SQL Server, and for the past several years, Power
            Platform and Microsoft 365 Copilot. AI is the newest layer on a
            stack we already understand deeply, which means less time spent
            figuring out your environment and more time building something that
            actually compliments it.
          </p>

          <div className={styles.stats}>
            {stats.map((stat, i) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                {i < stats.length - 1 && (
                  <div className={styles.divider} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default AiIntegrationsWhyUs;
