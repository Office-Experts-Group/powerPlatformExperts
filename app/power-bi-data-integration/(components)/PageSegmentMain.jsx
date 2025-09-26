import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import power from "../../../public/power.webp";
import Link from "next/link";

const PageSegmentMain = () => {
  return (
    <section
      id="what"
      className={`${styles.pageSegment} ${styles.customMargin}`}
    >
      <div
        className={styles.imgWrapper}
        style={{ height: "fit-content", borderBottom: "none" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={power}
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
            <h2>What is Power BI Data Integration?</h2>
            <p>
              Power BI data integration is the process of connecting multiple
              data sources such as
              <Link href="https://www.excelexperts.com.au"> Excel</Link>, SQL
              Server, SharePoint, Salesforce, and cloud applications into an
              interactive dashboard within Microsoft Power BI.
            </p>
            <p>
              Power BI makes it easy to turn raw data into meaningful, visual
              reports that can be shared across your organisation. At Power
              Platform Experts, we specialise in helping businesses design and
              implement end-to-end Power BI data integration strategies.
            </p>
          </div>
          <div className={styles.content}></div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
