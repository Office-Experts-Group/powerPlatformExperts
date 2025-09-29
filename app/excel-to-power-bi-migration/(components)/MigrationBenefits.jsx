import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

// Update this import path to your actual benefits image
import moving from "../../../public/moving.webp";

const MigrationBenefits = () => {
  const benefits = [
    {
      strong: "Real-Time Insights -",
      text: "With Excel, reports are often static and quickly become outdated. Power BI connects directly to your data sources, providing live updates and automatic refreshes so your dashboards always reflect the latest information.",
    },
    {
      strong: "Interactive Dashboards & Visualisations -",
      text: "Power BI transforms your data into dynamic, interactive visuals that make it easier to spot trends, opportunities, and risks at a glance.",
    },
    {
      strong: "Scalable Beyond Excel's Limits -",
      text: "Excel is a powerful tool, but it struggles when handling large datasets or multiple users. Power BI is designed for scalability, capable of managing millions of rows of data without slowing you down.",
    },
    {
      strong: "Seamless Collaboration -",
      text: "Instead of emailing spreadsheets back and forth, Power BI allows teams to access shared dashboards securely in the cloud. Everyone sees the same data, reducing errors and improving collaboration across departments.",
    },
    {
      strong: "Stronger Data Governance & Security -",
      text: "With built-in Microsoft security features, Power BI ensures your business intelligence is both compliant and protected. You control who has access to your reports and data at every level.",
    },
    {
      strong: "Smarter Decision-Making -",
      text: "By migrating to Power BI, you empower decision-makers with timely, accurate, and easy-to-understand insights.",
    },
  ];

  return (
    <div
      id="benefits"
      className="animate-wrapper"
      style={{
        backgroundColor: "rgb(242, 243, 245)",
        padding: "3rem 0",
      }}
    >
      <div
        className={styles.pageSegment}
        style={{ margin: "3rem 0 0 0", paddingRight: "0" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>Benefits of Migrating from Excel to Power BI</h2>
            </div>
            <p>
              Moving from Excel to Power BI can be a{" "}
              <strong>
                game-changer for the way your business works with data.
              </strong>{" "}
              Here's what you gain when you make the switch...
            </p>
          </div>

          <div className={styles.points}>
            {benefits.map(({ strong, text }, index) => (
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

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={moving}
              alt="Image of a box getting moved"
              width={300}
              height={225}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default MigrationBenefits;
