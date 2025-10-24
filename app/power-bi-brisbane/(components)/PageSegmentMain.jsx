import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import origami from "../../../public/origami.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={origami}
            alt="origami"
            width={600}
            height={400}
            style={{ marginTop: "4rem" }}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Brisbane Based Experts</p>
            <h2>Transform Your Business with Power BI</h2>
            <p>
              Power Platform Experts helps Brisbane businesses eliminate
              time-consuming manual reporting and transform scattered data into
              clear, actionable insights. Our Power BI consultants replace
              endless spreadsheets and disconnected systems with interactive
              dashboards. Whether you're struggling with data trapped in
              multiple systems, spending hours compiling reports, or lacking the
              insights needed for confident decision-making, our solutions can
              streamline your business.
            </p>
            <p>
              We specialise in custom Power BI dashboard development, data
              integration, and{" "}
              <Link href="/excel-to-power-bi-migration">
                {" "}
                migration from Excel to Power BI
              </Link>
              . With over 25 years of Microsoft expertise, we offer flexible
              engagement models including on-site consultation at your location
              or efficient remote access and{" "}
              <Link href="/power-bi-support">support</Link>.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
