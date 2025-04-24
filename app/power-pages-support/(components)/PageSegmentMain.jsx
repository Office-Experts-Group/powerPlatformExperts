import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import power from "../../../public/power600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={power}
            alt="the power highlighted in a book"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Web design, wireframe illustration or icon</p>
            <h2>Build Better Experiences with Power Pages Support</h2>
            <p>
            At Power Platform Experts, we help you create secure, scalable, and user-friendly websites with Microsoft Power Pages. Whether you're building a customer portal, partner dashboard, or employee self-service site, our certified experts are here to support you every step of the way — from concept to continuous optimisation.
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
