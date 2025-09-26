import React from "react";
import Image from "next/image";

import styles from "../../../styles/servicePageCards.module.css";

// Import icons
import stuckIcon from "../../../public/icons/computerBlue.webp";
import issuesIcon from "../../../public/icons/supportBlue.webp";
import expertsIcon from "../../../public/icons/handShakeBlue.webp";
import migrateIcon from "../../../public/icons/ideaBlue.webp";

// Import main images
import data from "../../../public/cards/data.webp";
import issuesImage from "../../../public/service-img-2350x201.webp";
import dashboard from "../../../public/cards/dashboard.webp";
import platforms from "../../../public/cards/platforms.webp";

const ServicePageCards = () => {
  return (
    <section className={styles.servicePageCards}>
      <div className={styles.card}>
        <a href="#what">
          <div className={styles.content}>
            <p>Power BI</p>
            <h2>What is Data Integration?</h2>
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
              alt="data written in scrabble pieces"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#your">
          <div className={styles.content}>
            <p>Help</p>
            <h2>Your Data with Power BI</h2>
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
              src={issuesImage}
              alt="Access issues illustration"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#etl">
          <div className={styles.content}>
            <p>ETL Process</p>
            <h2>Extract, Transform, Load</h2>
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
              src={dashboard}
              alt="computer screens with data dashboards"
              fill
              className={styles.mainImage}
            />
          </div>
        </a>
      </div>

      <div className={styles.card}>
        <a href="#work">
          <div className={styles.content}>
            <p>Tools</p>
            <h2>Platforms We Work With</h2>
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
              src={platforms}
              alt="various technology platforms logos"
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
