import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import keyboard from "../../../public/keyboard600x400.webp";

const Segment4Repeat = () => {

  return (
    <div className="animate-wrapper">
      <div className={`${styles.pageSegment} ${styles.customMargin}`}
      style={{margin: "6rem 0"}}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
            Empowering Your Team
            </h2>
            <p>
            Adoption is key to any successful implementation. That's why we offer hands-on training and user enablement services designed to build internal capability and confidence. We help your team understand not just how the tools work, but how to use them strategically. Whether you're empowering business users to create their own apps or enabling analysts to generate insights with Power BI, we ensure your staff is equipped to get the most from the Power Platform.
            </p>
          </div>

          <div className={styles.points}>
           
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={keyboard}
              alt="computer keyboard with digital design"
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
