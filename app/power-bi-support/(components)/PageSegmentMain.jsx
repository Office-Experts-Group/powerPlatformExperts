import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import bi from "../../../public/bi600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={bi}
            alt="the letters bi on a keyboard"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Expert Advice</p>
            <h2>Power BI Support When You Need It Most</h2>
            <p>
            At Power Platform Experts, we understand that effective data visualisation and business intelligence are critical to your organisation's success. Our specialised Power BI support services ensure your dashboards, reports, and analytics solutions continue to deliver actionable insights without interruption.
            </p>
          </div>
          <div className={styles.content}>
           
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
