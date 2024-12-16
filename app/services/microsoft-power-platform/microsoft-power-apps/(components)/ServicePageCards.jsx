import React from "react";
import Image from "next/image";

import styles from "../../../../../styles/servicePageCards.module.css";

// Import icons
import chartBlue from "../../../../../public/icons/chartBlue.webp";
import issuesIcon from "../../../../../public/icons/connectBlue.webp";
import expertsIcon from "../../../../../public/icons/fileBlue.webp";
import migrateIcon from "../../../../../public/icons/wordBlue.webp";

// Import main images
import calcGraph from "../../../../../public/cards/calcGraph350x200.webp";
import data from "../../../../../public/cards/data350x200.webp";
import graphHands from "../../../../../public/cards/graphHands350x200.webp";
import desk from "../../../../../public/cards/desk350x200.webp";

const ServicePageCards = () => {
  return (
    <section
      className={styles.servicePageCards}
      style={{ margin: "4rem 0 0rem 0" }}
    >
      <div className={styles.card}>
        <a href="#microsoft-partner">
          <div className={styles.content}>
            <p>Certified</p>
            <h2>Microsoft Partner</h2>
            <Image
              src={chartBlue}
              alt="Old version icon"
              width={60}
              height={60}
              className={styles.icon}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src={calcGraph}
              alt="calculator on a table with graphs"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#existing-data">
          <div className={styles.content}>
            <p>Connect</p>
            <h2>Existing Data</h2>
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
              src={data}
              alt="Data illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#unlock">
          <div className={styles.content}>
            <p>Unlock</p>
            <h2>Mobility with Apps</h2>
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
              src={graphHands}
              alt="hands pointing at a graph"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#custom-solutions">
          <div className={styles.content}>
            <p>Custom</p>
            <h2>Platform Solutions</h2>
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
              src={desk}
              alt="Miscellaneous items on a desk"
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
