import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import silos from "../../../public/silos.webp";

const Segment4Repeat = () => {
  const checkItems = [
    "Unified data storage with OneLake",
    "Eliminate data movement costs",
    "Integrated security and governance",
    "Simplified data management",
  ];

  return (
    <div className="animate-wrapper">
      <div
        className={`${styles.pageSegment} ${styles.customMargin}`}
        style={{ paddingBottom: "6rem" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Breaking Down Data Silos</h2>
            <p>
              Businesses often find themselves trapped in a maze of disconnected
              systems. Data is scattered across multiple platforms, analytics
              tools don't talk to each other, and legacy systems can grind
              well-informed decisions to a halt.
            </p>
            <p>
              Microsoft Fabric fundamentally rethinks how organisations work
              with data. At its heart is OneLake. A unified data system that
              eliminates the need for multiple storage systems and data movement
              between platforms. Native{" "}
              <Link href="/services/microsoft-power-platform/microsoft-power-bi">
                Power BI
              </Link>{" "}
              integration means your analytics work seamlessly with your data,
              while built-in governance ensures security and compliance without
              additional tools.
            </p>
          </div>

          <div className={styles.points} style={{ marginTop: "2rem" }}>
            {checkItems.map((text, index) => (
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
                <p>{text}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image src={silos} alt="silos exploding" width={450} height={300} />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
