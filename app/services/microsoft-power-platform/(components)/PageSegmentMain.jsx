import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment.module.css";

import services from "../../../../public/services.webp";

const PageSegmentMain = () => {
  return (
    <section
      className={styles.pageSegment}
      style={{ flexDirection: "row-reverse" }}
    >
      <div
        className={styles.imgWrapper}
        style={{ height: "fit-content", borderBottom: "none" }}
      >
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <Image
            src={services}
            alt="someone writing services by hand"
            width={450}
            height={300}
            priority
          />
        </AnimateOnScroll>
      </div>

      <div className={styles.contentWrapper}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.content}>
            <p>Custom Design and Development</p>
            <h2>Power Platform Services</h2>
            <p>
              Since 2000, Office Experts Group has helped Australian
              organisations unlock the full potential of Microsoft technologies.
              Our Power Platform specialists team design, develop, and deploy
              custom solutions that streamline operations, automate workflows,
              and transform data into interactive dashboards and actionable
              insights. Be it a small mobile app for field workers, automated
              approval processes, or interactive dashboards for executive teams,
              we deliver practical solutions tailored for your needs.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default PageSegmentMain;
