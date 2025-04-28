import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import automate from "../../../public/automate600x400.webp";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={automate}
            alt="automate what yuo can text on a notepad"
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
            <h2>Power Automate Support to Streamline Your Business Processes</h2>
            <p>
            At Power Platform Experts, we specialise in helping businesses simplify and automate their workflows with Microsoft Power Automate. Whether you're looking to eliminate repetitive tasks, integrate cloud services, or resolve flow errors, our highly skilled Microsoft specialists are here to ensure your automations run smoothly and reliably.
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
