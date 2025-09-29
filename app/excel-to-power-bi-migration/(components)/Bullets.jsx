import React from "react";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

const Bullets = () => {
  const services = [
    "Data Assessment & Planning - We start by reviewing your current Excel spreadsheets, data sources, and reporting processes. This allows us to identify possible inefficiencies, uncover data quality issues, and create a tailored migration roadmap.",
    "Data Transformation & Modelling - Excel data is often unstructured and difficult to manage at scale. We clean, transform, and model your data to ensure it's ready for Power BI, making it accurate, reliable, and future-proof.",
    "Report & Dashboard Development - Our team designs interactive, visually engaging Power BI dashboards that provide deeper insights, transforming endless spreadsheet scrolling into manageable charts and interactive elements to share with your team and stakeholders.",
    "Training & Handover - A successful migration means your team feels confident using Power BI. We provide hands-on training, documentation, and knowledge transfer so you can take ownership of your reporting environment.",
    "Ongoing Support & Optimisation - As your business evolves, so will your reporting needs. We offer ongoing support, performance tuning, and advanced Power BI consulting services to keep your data working for you.",
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
      style={{
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
              Our Excel to Power BI Migration Services
            </h2>
            <p>
              Migrating from Excel to Power BI unlocks new opportunities for
              smarter reporting, better collaboration, and long-term
              scalability.{" "}
              <strong>
                Our consultants work with you step-by-step to ensure a smooth
                transition.
              </strong>
            </p>
          </div>

          <div className={styles.points}>
            {services.map((text, index) => (
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
