"use client";
import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import AnimateOnScroll from "./AnimateOnScroll";

import styles from "../styles/promo.module.css";

import computer from "../public/icons/computer.webp";
import promo from "../public/promo.webp";
import idea from "../public/icons/ideaBlue.webp";

const Promo = ({ h2, p }) => {
  const [activeSection, setActiveSection] = useState(1); // 1 corresponds to state1

  return (
    <>
      {/* Buttons to switch sections */}
      <button onClick={() => setActiveSection(1)}>1</button>
      <button onClick={() => setActiveSection(2)}>2</button>
      <button onClick={() => setActiveSection(3)}>3</button>
      <button onClick={() => setActiveSection(4)}>4</button>
      <button onClick={() => setActiveSection(5)}>5</button>

      {/* Conditionally render each section based on activeSection */}
      {activeSection === 1 && (
        <section className={styles.promo}>
          {/* <AnimateOnScroll animation="scale-up" duration={1}> */}
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
          {/* </AnimateOnScroll> */}
        </section>
      )}

      {activeSection === 2 && (
        <section className={styles.promo}>
          {/* <AnimateOnScroll animation="scale-up" duration={1}> */}
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
          {/* </AnimateOnScroll> */}

          {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}> */}
          <div className={styles.img}>
            <div className={styles.bar}></div>
            <Image
              src={promo}
              alt="person at a computer"
              width={130}
              height={60}
            />
          </div>
          {/* </AnimateOnScroll> */}
        </section>
      )}

      {activeSection === 3 && (
        <section className={styles.promoCenter}>
          {/* <AnimateOnScroll animation="scale-up" duration={1}> */}
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
          {/* </AnimateOnScroll> */}
        </section>
      )}

      {activeSection === 4 && (
        <section className={styles.promo}>
          {/* <AnimateOnScroll animation="scale-up" duration={1}> */}
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
          {/* </AnimateOnScroll> */}

          {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}> */}
          <div className={styles.circleButton}>
            <span className={styles.iconWrapper}>
              <Image
                src={idea}
                alt="Icon"
                style={{ width: "60px", height: "60px" }}
              />
            </span>
          </div>
          {/* </AnimateOnScroll> */}
        </section>
      )}

      {activeSection === 5 && (
        <section className={styles.promo}>
          {/* <AnimateOnScroll animation="scale-up" duration={1}> */}
          <div className={styles.content}>
            <div className={styles.circle}>
              <Image
                src={computer}
                alt="computer icon"
                width={30}
                height={30}
              />
            </div>
            <div className={styles.text}>
              <h2>{h2}</h2>
              <p>{p}</p>
            </div>
          </div>
          {/* </AnimateOnScroll> */}

          {/* <AnimateOnScroll animation="scale-up" duration={1} delay={0.3}> */}
          <div className={styles.img}>
            <div className={styles.barLarge}></div>
            <Image
              src={promo}
              alt="person at a computer"
              width={260}
              height={120}
            />
          </div>
          {/* </AnimateOnScroll> */}
        </section>
      )}
    </>
  );
};

// Define PropTypes
Promo.propTypes = {
  h2: PropTypes.string,
  p: PropTypes.string,
};

export default Promo;
