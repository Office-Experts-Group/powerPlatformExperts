import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import tableGraph from "../../../public/tableGraph600x400.webp";

const Segment4 = () => {
  const industries = [
    "Finance & Banking",
    "Healthcare & Medical",
    "Retail & E-commerce",
    "Manufacturing",
    "Professional Services",
    "Education",
  ];

  return (
    <div className="animate-wrapper">
      <div
        className={`${styles.pageSegment}`}
        style={{ margin: "3rem 0 6rem 0" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Power BI Solutions for Local Industries
            </h2>
            <p>
              Our Sydney-based consultants have extensive experience across
              various sectors. We understand the unique data challenges faced by
              businesses in the city and deliver{" "}
              <Link href="/services/microsoft-power-platform/microsoft-power-bi">
                {" "}
                Power BI solutions
              </Link>{" "}
              that address specific industry requirements. From financial
              services in Martin Place to healthcare providers in the western
              suburbs, we've helped organisations of all sizes transform their
              data strategy.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "1.5rem",
              }}
            >
              <h3
                style={{
                  marginBottom: "1rem",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  color: "#046999",
                  lineHeight: "2rem",
                }}
              >
                We have worked with hundreds of businesses over the last 25
                years,<br></br> sectors ranging from...
              </h3>

              <div className={`${styles.points} ${styles.gridList}`}>
                {industries.map((industry, index) => (
                  <div key={index} className={styles.point}>
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
                    <p>{industry}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={tableGraph}
              alt="Power BI dashboard showing Sydney business data"
              width={300}
              height={200}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4;
