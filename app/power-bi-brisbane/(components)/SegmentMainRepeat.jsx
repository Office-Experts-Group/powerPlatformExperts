import React from "react";
import Image from "next/image";
import AnimateOnScroll from "../../../components/AnimateOnScroll";
import styles from "../../../styles/pageSegment.module.css";
import handDesign from "../../../public/handDesign600x400.webp";

const SegmentMainRepeat = () => {
  const services = [
    "Custom Power BI dashboard development",
    "Data migration from Excel to Power BI",
    "Power BI training for Melbourne teams",
    "Integration with existing business systems",
    "Ongoing Power BI support and optimization",
  ];

  return (
    <section className={`${styles.pageSegment} ${styles.customMargin}`}>
      <div className={styles.imgWrapper} style={{ borderBottom: "none" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={handDesign}
            alt="Power BI consultant designing dashboard"
            width={450}
            height={300}
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <h2>Comprehensive Power BI Services in Brisbane</h2>
            <p>
              From the Brisbane CBD to Fortitude Valley, South Bank, and
              Chermside, we deliver comprehensive Power BI solutions. We also
              work with businesses across regional Queensland, offering flexible
              engagement models including on-site visits, remote consulting, and
              hybrid arrangements. Our local presence means we understand
              Brisbane's business landscape.
            </p>
            <h3 style={{ marginTop: "1.5rem", marginBottom: "1rem" }}>
              Our Services
            </h3>
            <ul style={{ marginLeft: "2rem" }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default SegmentMainRepeat;
