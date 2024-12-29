import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import AnimateOnScroll from "./AnimateOnScroll";

import styles from "../styles/promo.module.css";

import computer from "../public/icons/computer.webp";

const Promo = ({ h2, p }) => {
  return (
    <section className={styles.promoCenter}>
      <AnimateOnScroll animation="scale-up" duration={1}>
        <div className={styles.content}>
          <div className={styles.circle}>
            <Image src={computer} alt="computer icon" width={30} height={30} />
          </div>
          <div className={styles.text}>
            <h2>{h2}</h2>
            <p>{p}</p>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

// Define PropTypes
Promo.propTypes = {
  h2: PropTypes.string,
  p: PropTypes.string,
};

export default Promo;
