import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import data from "../../../public/data600x400.webp";

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
            Our Power BI Support Process</h2>
            <p>
            We've refined our support approach through years of helping Australian businesses optimise their Power BI environments. Our process begins with a thorough assessment of your current implementation to identify pain points and opportunities for improvement. Based on this evaluation, we develop a tailored support strategy aligned with your business priorities and technical requirements.
            </p>
            <p>When issues arise, we deliver swift troubleshooting with clear communication throughout the resolution process, keeping you informed at every step. Following resolution, we provide comprehensive documentation of all solutions for future reference, creating a knowledge base specific to your environment. We ensure your team understands how to maintain optimal performance through targeted knowledge transfer, building internal capability alongside our external support.</p>
          </div>

          <div className={styles.content}>
            
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={data}
              alt="visual representation of data"
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
