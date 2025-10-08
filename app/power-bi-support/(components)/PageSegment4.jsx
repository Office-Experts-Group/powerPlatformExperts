import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import keyboard from "../../../public/keyboard600x400.webp";

const Segment4Repeat = () => {
  return (
    <div className="animate-wrapper">
      <div
        className={`${styles.pageSegment} ${styles.customMargin}`}
        style={{ margin: "6rem 0" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Comprehensive Power BI Support Solutions
            </h2>
            <p>
              Our team of Microsoft Power BI specialists offers end-to-end
              support services designed to address your unique business
              challenges. We've built our support offerings around the
              real-world needs we've encountered while serving Australian
              businesses for over two decades.
            </p>
          </div>

          <div className={styles.points}></div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={keyboard}
              alt="computer keyboard with digital design"
              width={450}
              height={300}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
