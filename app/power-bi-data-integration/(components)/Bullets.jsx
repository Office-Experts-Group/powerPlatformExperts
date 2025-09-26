import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

const Bullets = () => {
  const checkItems = [
    "Centralised Reporting - With integrated data pipelines, Power BI becomes your single source of truth with live dashboards that update in real time.",
    "Data-Driven Decision Making - Integrated data enables richer insights. Analyse trends across departments, track KPIs, and uncover patterns you may miss when your data is siloed.",
    "Time & Cost Savings - Automating your data integration process reduces manual effort, lowers the risk of errors, and frees up valuable resources for higher-value tasks.",
    "Scalability for Growth - As your business grows, so does your data. Power BI can scale with you, integrating new systems and data sources without disrupting your reporting.",
  ];

  // Function to wrap the first part (before the dash) in strong tags
  const formatText = (text) => {
    const dashIndex = text.indexOf(" - ");
    if (dashIndex !== -1) {
      const strongPart = text.substring(0, dashIndex);
      const regularPart = text.substring(dashIndex);
      return (
        <>
          <strong>{strongPart}</strong>
          {regularPart}
        </>
      );
    }
    return text;
  };

  return (
    <div
      className="animate-wrapper"
      id="powerbi-integration"
      style={{
        scrollMarginTop: "150px",
        backgroundColor: "rgb(242, 243, 245)",
        paddingTop: "3rem",
      }}
    >
      <div
        className={styles.pageSegment}
        style={{ margin: "6rem 0 0 0", paddingBottom: "6rem" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content} style={{ marginBottom: "2rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>
              Why Integrate Your Data with Power BI?
            </h2>
            <p>
              In today's data-driven world, having access to timely and accurate
              insights can make or break business decisions. Yet many
              organisations still struggle with fragmented data spread across
              spreadsheets, CRMs, ERPs, databases, and cloud apps.{" "}
              <strong>
                Power BI solves this problem by bringing all your data sources
                together in one place.
              </strong>
            </p>
          </div>

          <div className={styles.points}>
            {checkItems.map((text, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginBottom: "1rem" }}
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
                <p>{formatText(text)}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Bullets;
