import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import blueCode from "../../../public/blueCode600x400.webp";

const PageSegment4 = () => {
  const checkItems = [
    {
      strong: "Security & Compliance Checks – ",
      text: "Regular reviews of access controls and data policies."
    },
    {
      strong: "Performance Optimisation – ",
      text: "Content delivery tuning, caching strategies, and code cleanup."
    },
    {
      strong: "Visual Improvements – ",
      text: "Refreshing UI/UX elements for a modern, user-friendly experience."
    },
    {
      strong: "Feature Expansion – ",
      text: "Implementing new integrations or extending site functionality as your needs grow."
    },
  ];

  return (
    <div
      className="animate-wrapper"
      id="unlock"
      style={{ scrollMarginTop: "150px" }}
    >
      <div className={`${styles.pageSegment} ${styles.customMargin}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
            Maintenance & Enhancement
            </h2>
            <p>
            Proactive support keeps your Power Pages solution running smoothly. We conduct periodic reviews to catch and address potential issues early — ensuring that your platform evolves with your organisation and stays aligned with Microsoft's latest updates.
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
