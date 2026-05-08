// powerplatformexperts.com.au/components/PowerPages/PPIntro.jsx

import styles from "../../../../../styles/ppIntro.module.css";

import introSVG from "../(svgs)/introSVG";

const capabilities = [
  {
    id: "01",
    title: "External portals",
    detail:
      "Customer self-service, partner login areas, job applications, event registrations, virtually anything where external users need controlled access to your data.",
  },
  {
    id: "02",
    title: "Data-connected forms",
    detail:
      "Forms that write directly to Dataverse tables, trigger Power Automate flows, and update records without a developer touching the backend.",
  },
  {
    id: "03",
    title: "Embedded Power BI",
    detail:
      "Publish live dashboards to authenticated users on your site, scoped by their role. Easily dictate role-based access to data and powerful analytics and dashboard visualisations.",
  },
  {
    id: "04",
    title: "Role-based access",
    detail:
      "Table permissions, column permissions, and web roles let you control exactly what each user can see and do, down to individual records and the finest details.",
  },
];

const PPIntro = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Power Platform Experts</span>

          <h2 className={styles.headline}>
            Power Pages <span>built</span> for your business...
          </h2>

          <p className={styles.lead}>
            Power Pages sits inside the Microsoft Power Platform, giving it
            native connections to Dataverse, Power BI, Power Automate, and Azure
            AD. If your business already runs on Microsoft 365, a Power Pages
            portal is a simple way of connecting your internal data to external
            users without custom middleware or a complex integration layer.
          </p>

          <p className={styles.lead}>
            Australian businesses use our Power Pages portals for everything
            from customer self-service to supplier management. We've seen what
            works and what doesn't, speak with one of our consultants to find
            the best fit for you.
          </p>
        </div>

        {/* ── RIGHT — capability stack ── */}
        <div className={styles.right}>
          <p className={styles.stackLabel}>Power Pages best assets</p>

          <ol className={styles.capList}>
            {capabilities.map((cap) => (
              <li key={cap.id} className={styles.capItem}>
                <span className={styles.capId}>{cap.id}</span>
                <div className={styles.capBody}>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDetail}>{cap.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PPIntro;
