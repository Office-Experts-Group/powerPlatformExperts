// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPMoreThanStorage.jsx

import Link from "next/link";
import styles from "../../../styles/spMoreThanStorage.module.css";

const features = [
  {
    num: "01",
    title: "Version control & metadata",
    body: "Libraries track every change and who made it. Files are findable because they carry metadata, not just a filename buried three folders deep.",
  },
  {
    num: "02",
    title: "Co-authoring in real time",
    body: "Multiple people work in the same document simultaneously. No more emailing versions back and forth, no more overwriting each other's changes.",
  },
  {
    num: "03",
    title: "Automated approvals & routing",
    body: "Plug in Power Automate and document approvals, notifications, and follow-up tasks run in the background without anyone manually chasing them.",
  },
  {
    num: "04",
    title: "Central communications hub",
    body: "Communication sites give staff somewhere for news, policies, and department information. One source of truth, not twelve different shared drives.",
  },
];

const SPMoreThanStorage = () => {
  return (
    <section className={styles.section} aria-labelledby="sp-storage-heading">
      <div className={styles.inner}>
        {/* ── Top: offset headline block ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>The platform</span>
            <h2 id="sp-storage-heading" className={styles.headline}>
              More than
              <br />
              <span className={styles.accentLine}>file storage.</span>
            </h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.lead}>
              SharePoint gets written off as a glorified shared drive more often
              than it deserves. That reputation comes from poorly set-up
              environments, often with default settings, no structure and files
              dumped in wherever made sense at the time.
            </p>
            <p className={styles.lead}>
              A properly built SharePoint does quite a bit more. And beyond the
              day-to-day benefits, there&rsquo;s a bigger reason to get it
              right: Microsoft&nbsp;365 Copilot draws its answers directly from
              your SharePoint content. If your environment is disorganised or
              full of outdated files, the{" "}
              <Link
                href="/sharepoint-consulting-and-development#copilot"
                className={styles.inlineLink}
              >
                AI output reflects that
              </Link>
              .
            </p>
          </div>
        </div>
        {/* ── Feature cards ── */}
        <ol className={styles.cards} aria-label="SharePoint capabilities">
          {features.map(({ num, title, body }) => (
            <li key={num} className={styles.card}>
              <span className={styles.cardNum} aria-hidden="true">
                {num}
              </span>
              <div className={styles.cardBar} aria-hidden="true" />
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SPMoreThanStorage;
