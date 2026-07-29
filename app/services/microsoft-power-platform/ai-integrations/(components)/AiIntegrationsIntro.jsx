// app/services/microsoft-power-platform/ai-integrations/(components)/AiIntegrationsIntro.jsx
import Link from "next/link";

import styles from "../../../../../styles/aiIntegrationsIntro.module.css";

const AiIntegrationsIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Real Solutions</span>
          <h2 className={styles.heading}>
            Custom AI agents that actually{" "}
            <span className={styles.accent}>fit inside Microsoft 365.</span>
          </h2>
          <p className={styles.body}>
            Most &ldquo;AI integration&rdquo; on the market is a chatbot bolted
            onto a website. Ours is built into the tools your business already
            runs on. From Teams, to SharePoint, Dataverse, SQL Server and the
            entire Power Platform, it works with your existing data and tenant
            permissions from day one.
          </p>
          <p className={styles.body}>
            As part of the{" "}
            <Link
              href="https://www.officeexperts.com.au"
              className={styles.inlineLink}
            >
              Office Experts Group
            </Link>
            , we&rsquo;ve been building on the Microsoft stack since 2000. AI is
            the newest layer, and is quickly growing into a <em>must have</em>,
            not just an optional extra.
          </p>
          <div className={styles.ctaRow}>
            <Link href="#contact" className="btn">
              Request a consultation
            </Link>
            <Link href="#pillars" className={styles.ctaSecondary}>
              See what we build
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiIntegrationsIntro;
