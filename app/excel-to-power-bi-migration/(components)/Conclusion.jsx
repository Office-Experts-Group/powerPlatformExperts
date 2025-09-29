import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import logo from "../../logo.webp";

const Conclusion = () => {
  return (
    <section
      className={`${styles.pageSegment} ${styles.padLess}`}
      style={{ padding: "8rem 10vw" }}
    >
      <div className={styles.content}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ marginBottom: "1.5rem" }}>
              Experts across the entire Microsoft Suite
            </h2>
            <p style={{ maxWidth: "100%", marginBottom: "1rem" }}>
              At <strong>Power Platform Experts</strong>, we understand that
              every business is different. Some teams still rely heavily on
              Excel, while others are keen to embrace the advanced capabilities
              of Power BI. As part of the Office Experts Group, we advise
              businesses in all aspects across the Microsoft suite and provide
              the most effective solutions to meet your needs.
            </p>
            <p style={{ maxWidth: "100%", marginBottom: "1rem" }}>
              Whether you need a full migration from Excel to Power BI, a hybrid
              setup that keeps Excel in the mix, or ongoing support to optimise
              your reporting, we provide a tailored approach that ensures you
              get the best possible results.
            </p>
            <p style={{ maxWidth: "100%" }}>
              Our cross-platform expertise means we don't just move your data,
              we help you unlock its full potential. With 25 years of experience
              supporting Australian businesses, we'll ensure your reporting is
              faster, smarter, and ready for the future.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
      <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
        <Image
          src={logo}
          alt="Office Experts Group logo"
          width={200}
          height={105}
          className={styles.deskImage}
        />
      </AnimateOnScroll>
    </section>
  );
};

export default Conclusion;
