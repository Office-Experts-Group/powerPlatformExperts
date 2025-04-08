import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import experts from "../../../public/experts600x400.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.customMargin}`}
      id="custom-solutions"
    >
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={experts}
            alt="ask the experts design"
            width={600}
            height={400}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <h2 style={{ fontSize: "2rem", marginTop: "0" }}>
            Common Power Apps Challenges We Solve
            </h2>
            <p style={{ lineHeight: "2", color: "#777a7e"}}>
            Our Power Apps support specialists help clients overcome the most frequent challenges that prevent organisations from realising the full potential of their business application investments. Performance issues with large datasets often frustrate users and delay operations; our optimisation strategies dramatically improve response times even with complex data models.
            </p>
            <p>Data source connection failures can undermine confidence in Power Apps solutions; we implement reliable connectivity mechanisms that ensure your applications always access current information. Security and governance concerns in enterprise environments can often require specialised expertise, our team implements comprehensive security frameworks that protect sensitive data while enabling appropriate access.</p>
          </div>
          <div className={styles.content}>
            
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
