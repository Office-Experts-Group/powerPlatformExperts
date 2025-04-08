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
            Fast, Effective Support When You Need It Most
            </h2>
            <p>
            Power Apps giving you trouble? We're here to help. From performance slowdowns to error messages that just won't go away, our team is skilled at diagnosing and fixing even the most complex issues — fast.
            </p>
            <p>We work with all kinds of data sources, from SharePoint and Dataverse to SQL, and we're experts at restoring broken connections and fixing app logic issues. We also specialise in troubleshooting on-premises data gateways to ensure seamless communication between your local systems and Power Apps.</p>
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
