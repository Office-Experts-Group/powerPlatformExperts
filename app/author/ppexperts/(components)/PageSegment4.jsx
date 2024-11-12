import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import hand from "../../../../public/hand600x400.webp";

const PageSegment4 = () => {
  const pointsData = [
    "Microsoft Excel",
    "Microsoft Access",
    "Microsoft Word",
    "Microsoft PowerPoint",
    "Microsoft Office 365",
    "Microsoft Azure",
    "Microsoft SharePoint",
    "Microsoft Microsoft SQL Server",
  ];

  // Then modify the render section to use the map function
  const CheckIcon = () => (
    <svg
      stroke="#046999"
      fill="#046999"
      strokeWidth="2"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
    </svg>
  );
  return (
    <div
      className="animate-wrapper"
      style={{ margin: "6rem 0 6rem 0", scrollMarginTop: "150px" }}
      id="created"
    >
      <div className={styles.pageSegment}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <div className={styles.underline}>
              <h2>About Power Platform Experts</h2>
            </div>
            <p>Author of articles from Office Experts Group.</p>
            <p> Office Experts are specialists in business solutions with:</p>
            <div className={styles.points}>
              {pointsData.map((point, index) => (
                <div key={index} className={styles.point}>
                  <div className={styles.tick}>
                    <CheckIcon />
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={hand}
              alt="persons hand with digital people above it"
              width={600}
              height={400}
            />
          </div>
        </AnimateOnScroll>
      </div>
      <div className={styles.alsoTrading}>
        <div className={styles.underline}>
          <h3>Also Trading As:</h3>
        </div>
        <ul>
          <li>Excel Experts</li>
          <li>Access Experts</li>
          <li>Word Experts</li>
          <li>PowerPoint Experts</li>
          <li>365 Experts</li>
        </ul>
      </div>
    </div>
  );
};

export default PageSegment4;
