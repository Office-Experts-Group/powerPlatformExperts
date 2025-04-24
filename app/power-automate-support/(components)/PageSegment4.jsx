import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import blueCode from "../../../public/blueCode600x400.webp";

const PageSegment4 = () => {
  const checkItems = [
    {
      strong: "System Integration – ",
      text: "Connect Power Automate with Microsoft 365, SharePoint, Teams, Dynamics, and more."
    },
    {
      strong: "Training Workshops – ",
      text: "Upskill your team with targeted training sessions."
    },
    {
      strong: "Custom Connector Configuration – ",
      text: "Set up secure, reusable API connectors."
    },
    {
      strong: "Knowledge Transfer – ",
      text: "Documented workflows and internal training resources."
    },
  ];

  return (
    <div
      className="animate-wrapper"
      id="unlock"
      style={{ scrollMarginTop: "150px", marginBottom: "4rem" }}
    >
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
            Integration & Training Support
            </h2>
            <p>
            Need to connect Power Automate to your internal systems, third-party apps, or the rest of the Power Platform? We provide seamless integration services backed by clear documentation and training so your team can confidently build and manage their own flows.
            </p>
          </div>

          <div className={styles.points}>
          {checkItems.map(({ strong, text }, index) => (
  <div key={index} className={styles.point}>
    <div className={styles.tick}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
      </svg>
    </div>
    <p><strong>{strong}</strong>{text}</p>
  </div>
))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={blueCode}
              alt="person on a computer"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
