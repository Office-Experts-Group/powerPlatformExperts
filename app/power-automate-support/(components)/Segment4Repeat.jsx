import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import hand from "../../../public/hand600x400.webp";

const Segment4Repeat = () => {

  return (
    <div
      className="animate-wrapper"
      id="microsoft-partner"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
            Comprehensive Power Automate Support Services</h2>
            <p>
            Our Power Automate specialists deliver support that goes beyond basic troubleshooting. We help you design, build, maintain, and enhance your automated workflows so your team can focus on what they do best. With over 20 years of experience serving Australian businesses, we understand the real-world needs of modern organisations—and how to meet them with the Power Platform.
            </p>
          </div>

          <div className={styles.content}>
            
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="outreached hand with digital design"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default Segment4Repeat;
