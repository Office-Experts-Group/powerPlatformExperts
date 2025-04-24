import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment.module.css";

import success from "../../../public/success600x400.webp";
import Link from "next/link";

const PageSegmentMain = () => {
  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ height: "fit-content" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={success}
            alt="Lady at an office desk celebrating"
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
            <h2>End-to-End Support from Certified Experts</h2>
            <p>
            At Power Platform Experts, we offer comprehensive support services across the entire Microsoft Power Platform, <Link href={"/power-bi-support"}> Power BI</Link>, <Link href={"/power-apps-support"}>Apps</Link>, <Link href={"/power-automate-support"}>Automate</Link>, and <Link href={"/power-pages-support"}>Pages</Link>.
            </p>
            <p>Whether you're just getting started or managing a mature deployment, our team of Microsoft-certified consultants can help you unlock the full potential of the Power Platform, optimise performance, and ensure long-term success.</p>
          </div>
          <div className={styles.content}>
           
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
