import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import fabric from "../../../public/fabric.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div
        className={styles.imgWrapper}
        style={{ height: "fit-content", borderBottom: "none" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={fabric}
            alt="Microsoft Fabric unified analytics platform"
            width={600}
            height={450}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Unified Analytics</p>
            <h2>What is Microsoft Fabric?</h2>
            <p>
              Microsoft Fabric is an all-in-one analytics solution designed for
              enterprises that need powerful, integrated data capabilities.
              Rather than juggling multiple tools and platforms, Fabric brings
              everything together in a single, comprehensive environment built
              on a Software as a Service (SaaS) foundation.
            </p>
            <p>
              This unified platform combines data integration, engineering,
              warehousing, data science, real-time analytics, and business
              intelligence all under one banner. Fabric provides the tools you
              need without the complexity of managing separate systems. It's the
              evolution of enterprise analytics, designed for organisations
              ready to transform how they work with data.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
