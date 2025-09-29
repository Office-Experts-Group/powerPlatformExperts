import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import migration from "../../../public/migration.webp";

const PageSegmentMain = () => {
  return (
    <section id="introduction" className={`${styles.pageSegment}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={migration}
            alt="Excel spreadsheet transforming into Power BI dashboard"
            width={300}
            height={150}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Transform Your Data</p>
            <h2>Turn Static Spreadsheets into Dynamic Dashboards</h2>
            <p>
              Power BI takes the best of Excel and elevates it into a modern
              business intelligence platform. With interactive dashboards,
              real-time insights, and secure cloud access, you can move beyond
              static spreadsheets and make smarter, data-driven decisions.
            </p>
            <p>
              We have helped many organisations migrate from Excel to Power BI.
              Our team of Microsoft-certified consultants includes professionals
              in not only the Power Platforms, but also{" "}
              <Link href="https://www.excelexperts.com.au">Excel</Link> and
              across the{" "}
              <Link href="https://www.officeexperts.com.au">
                entire Microsoft suite
              </Link>
              .
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
