import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import experts from "../../../public/experts600x400.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.customMargin}`}
      style={{ marginTop: "8rem" }}
      id="custom-solutions"
    >
      <div
        className={styles.imgWrapper}
        style={{ height: "fit-content", marginTop: "3rem" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={experts}
            alt="ask the experts design"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <h2 style={{ fontSize: "2rem", marginTop: "0rem" }}>
              Maintenance & Enhancement
            </h2>
            <p style={{ lineHeight: "2", color: "#777a7e" }}>
              Preventing issues before they impact your business is the
              cornerstone of our maintenance approach. We conduct regular health
              checks of your Power BI environment, identifying potential
              problems before they affect your operations. As Microsoft releases
              new Power BI versions, our team manages smooth transitions to the
              latest features with minimal disruption to your workflows.
            </p>
            <p>
              Data models form the foundation of effective Power BI solutions,
              which is why we provide ongoing refinement of your semantic layer
              for improved performance as your data grows in volume and
              complexity. Security is paramount in today's business environment,
              so we regularly assess your sharing and permission settings to
              protect sensitive information while ensuring authorised users
              maintain access to critical insights. When your reporting needs
              evolve, we offer expert report redesign services that enhance
              visual engagement and insight delivery without disrupting your
              established workflows.
            </p>
          </div>
          <div className={styles.content}></div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
