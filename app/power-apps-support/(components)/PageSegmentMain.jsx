import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import cloud from "../../../public/cloudSolution600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={cloud}
            alt="cloud solutions digital design"
            width={600}
            height={400}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Advice from the Experts</p>
            <h2>Custom Support & Training</h2>
            <p>
            Whether it's remote or onsite, Power Platform Experts offers tailored support and training for Microsoft Power Apps. We help your team build, maintain, and improve custom business applications that boost productivity and streamline operations. As part of the Office Experts Group, we bring over 25 years of Microsoft experience to the table — giving you reliable, expert guidance every step of the way.
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
