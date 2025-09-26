import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import custom from "../../../public/custom.webp";

const PageSegment5 = () => {
  return (
    <section className={styles.pageSegment} style={{ padding: "8rem 10vw" }}>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image src={custom} alt="custom design" width={450} height={300} />
      </AnimateOnScroll>

      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ marginBottom: "1rem" }}>
              Customised Integration Solutions
            </h2>
            <p style={{ maxWidth: "100%" }}>
              We create comprehensive integrations tailored for your business,
              we start by identifying and assessing your current data sources,
              often a mix of databases, spreadsheets, cloud platforms and
              third-party tools.
            </p>
            <p style={{ maxWidth: "100%" }}>
              Power BI supports hundreds of out-of-the-box connectors, but for
              large or complex systems our programmers create API integrations
              and custom connectors for legacy systems, SaaS platforms, and
              industry-specific tools.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegment5;
