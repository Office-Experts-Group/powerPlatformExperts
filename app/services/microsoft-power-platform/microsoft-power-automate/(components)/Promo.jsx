import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import styles from "../../../../../styles/promo.module.css";

import computer from "../../../../../public/icons/computer.webp";

const Promo = () => {
  return (
    <section
      className={`${styles.promoCenter} ${styles.topMargin}`}
      id="custom-solutions"
    >
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={`${styles.text} ${styles.leftMargin}`}>
            <h2>Tailored Power Automate Solutions Nationwide</h2>
            <p>
              Our devoted experts craft customised Power Automate solutions that
              cater to your precise needs. Flexible pricing options, including
              fixed price quotes and hourly rates, ensures dedicated project
              guidance from inception to completion.
            </p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Promo;
