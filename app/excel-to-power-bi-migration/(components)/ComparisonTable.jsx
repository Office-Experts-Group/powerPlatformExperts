import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/comparisonTable.module.css";

import emoji from "../../../public/thinkEmoji.webp";

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: "Data Handling",
      excel:
        "Handles smaller datasets effectively, but performance slows with large or complex files.",
      powerbi:
        "Designed to process millions of rows from multiple sources without performance issues.",
    },
    {
      feature: "Visualisations",
      excel: "Basic charts and graphs that require manual setup.",
      powerbi:
        "Advanced, interactive dashboards with drill-downs, filters, and modern visuals.",
    },
    {
      feature: "Real-Time Updates",
      excel: "Static reports — needs manual refresh or re-upload of data.",
      powerbi:
        "Live connection to data sources with automatic refresh for up-to-date insights.",
    },
    {
      feature: "Collaboration",
      excel:
        "Sharing via email or shared drives, leading to version control issues.",
      powerbi:
        "Cloud-based sharing with secure access - everyone sees the same version.",
    },
    {
      feature: "Automation",
      excel: "Limited automation with macros or manual processes.",
      powerbi:
        "Powerful automation of data refreshes, workflows, and reporting.",
    },
    {
      feature: "Security & Governance",
      excel: "File-based security, limited central control.",
      powerbi:
        "Enterprise-grade Microsoft security, role-based access, and audit trails.",
    },
    {
      feature: "Scalability",
      excel: "Best for individual users or small teams.",
      powerbi:
        "Scales seamlessly across teams, departments, and enterprise organisations.",
    },
  ];

  return (
    <section className={styles.comparisonSection} id="comparison">
      <Image
        src={emoji}
        alt="thinking emoji"
        width={300}
        height={300}
        className={styles.emoji}
      />
      <AnimateOnScroll animation="fade-up" duration={1} delay={0}>
        <div className={styles.header}>
          <h2>Excel vs Power BI: What's the Difference?</h2>
        </div>
      </AnimateOnScroll>

      {/* Desktop Table View */}
      <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
        <div className={styles.tableWrapper}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th className={styles.featureColumn}>Feature / Capability</th>
                <th className={styles.excelColumn}>Excel</th>
                <th className={styles.powerbiColumn}>Power BI</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td className={styles.featureCell}>
                    <strong>{row.feature}</strong>
                  </td>
                  <td className={styles.excelCell}>{row.excel}</td>
                  <td className={styles.powerbiCell}>{row.powerbi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimateOnScroll>

      {/* Mobile Card View */}
      <div className={styles.mobileCards}>
        {comparisonData.map((row, index) => (
          <AnimateOnScroll
            key={index}
            animation="fade-up"
            duration={0.6}
            delay={index * 0.1}
          >
            <div className={styles.comparisonCard}>
              <h3 className={styles.cardFeature}>{row.feature}</h3>
              <div className={styles.cardComparison}>
                <div className={styles.cardSection}>
                  <h4>Excel</h4>
                  <p>{row.excel}</p>
                </div>
                <div className={styles.cardSection}>
                  <h4>Power BI</h4>
                  <p>{row.powerbi}</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default ComparisonTable;
