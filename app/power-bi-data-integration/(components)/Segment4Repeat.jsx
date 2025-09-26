import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import transform from "../../../public/transform.webp";
import Link from "next/link";

const Segment4Repeat = () => {
  const checkItems = [
    {
      strong: "Extract -",
      text: "Pulling data from multiple sources such as databases, cloud platforms, CRMs, ERPs, APIs, or spreadsheets.",
    },
    {
      strong: "Transform -",
      text: "Cleaning, shaping, and standardising the extracted data so it's accurate and  consistent. This might include removing duplicates, handling missing values, and applying business logic.",
    },
    {
      strong: "Load -",
      text: "Delivering the transformed data into Power BI so it can be modelled, visualised, and refreshed automatically.",
    },
  ];

  return (
    <div
      id="etl"
      className="animate-wrapper"
      style={{ scrollMarginTop: "200px" }}
    >
      <div className={styles.pageSegment} style={{ margin: "6rem 0 0 0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div style={{ marginBottom: "1.5rem" }}>
              <h2>
                ETL Process...<br></br>(Extract, Transform, Load)
              </h2>
            </div>
            <p>
              ETL stands for <strong>Extract, Transform, and Load</strong>,{" "}
              These are three essential steps needed to make raw data ready for
              analysis.
            </p>
          </div>

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
          <div className={styles.content} style={{ marginTop: "1rem" }}>
            <p>
              We design ETL pipelines using tools like{" "}
              <Link href="/services/microsoft-power-platform/microsoft-power-bi">
                Power Query
              </Link>
              , Dataflows, and Azure Data Factory to ensure data moves smoothly
              through this process. By automating and standardising these steps,
              your organisation can maintain consistency, accuracy, and
              usability across all Power BI dashboards and reports.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={transform}
              alt="excavator dumping files into a dashboard"
              width={600}
              height={450}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
