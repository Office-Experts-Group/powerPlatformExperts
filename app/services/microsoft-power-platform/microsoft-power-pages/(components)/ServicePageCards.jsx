import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../../../public/icons/ideaBlue.webp";

// Import main images
import desk from "../../../../../public/350x260/desk.webp";
import magnify from "../../../../../public/350x260/magnify.webp";
import graph from "../../../../../public/350x260/graph.webp";
import coder from "../../../../../public/350x260/coder.webp";

const ServicePageCards = () => {
  return (
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#enhance-your-business-productivity">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Enhance your Business Productivity</h2>
            <Image
              src={stuckIcon}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={desk}
              alt="office desk with a computer"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#data-visualisation">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Empower Your Data Visualisations</h2>
            <Image
              src={issuesIcon}
              alt="Access issues icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={graph}
              alt="graph illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#streamlined-data-accessibility">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Streamlined Data Accessibility</h2>
            <Image
              src={expertsIcon}
              alt="Expert help icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={coder}
              alt="computer programmer working on code"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#maximise-with-expert-assistance">
          <div className={styles.content}>
            <p>Power Pages</p>
            <h2>Maximise with Expert Assistance</h2>
            <Image
              src={migrateIcon}
              alt="Migration icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={magnify}
              alt="magnifying glass over a graph"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ServicePageCards;
