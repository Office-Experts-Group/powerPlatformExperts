import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import bi from "../../../../public/power-bi.webp";

const ServicesBI = () => {
  const checkItems = [
    {
      strong: "Custom Dashboards ",
      text: "provide web-enabled reporting solutions with automatic refresh capabilities, keeping your metrics current without any manual intervention. You get the data you need, when you need it, in formats that make sense for your business.",
    },
    {
      strong: "Advanced Analytics ",
      text: "go beyond basic reporting to deliver complex calculations, key performance indicators, and predictive analytics. We help you understand not just what happened, but what's likely to happen next and what you should do about it.",
    },
    {
      strong: "Data Modeling ",
      text: "creates efficient data structures that ensure fast performance even when working with millions of rows. Good data modeling is the foundation of responsive, reliable business intelligence.",
    },
    {
      strong: "Mobile Reports ",
      text: "optimise dashboards for executives and field teams who need insights on the go. Checking performance during travel and making decisions in the field, your team has access to current data from any device.",
    },
  ];

  return (
    <main className="animate-wrapper" style={{ margin: "6rem 0" }}>
      <div className={`${styles.pageSegment} ${styles.services}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Power BI Solutions</h2>
            <p>
              We transform raw data from multiple sources into compelling visual
              dashboards that drive strategic decisions. Our Power BI solutions
              deliver real-time insights accessible from any device, empowering
              teams at every level with the information they need.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={bi}
              alt="hands around digital files"
              width={450}
              height={300}
              style={{ marginBottom: "2rem" }}
            />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1}>
          <div className={styles.points}>
            {checkItems.map(({ strong, text }, index) => (
              <div
                key={index}
                className={styles.point}
                style={{ marginTop: ".5rem" }}
              >
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
                <p>
                  <strong>{strong}</strong> {text}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      <div style={{ margin: "2rem 0" }}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.challenges}>
            <h3>Practical Applications</h3>
            <p>
              Sales and revenue tracking monitors performance against targets
              and identifies trends. Financial reporting and budgeting provides
              real-time visibility into fiscal health. Operational performance
              monitoring highlights efficiency opportunities. Customer analytics
              reveal behavior patterns and preferences. Supply chain visibility
              tracks inventory, shipments, and supplier performance. HR metrics
              and workforce planning support talent decisions. Marketing
              campaign analysis measures ROI and guides strategy.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
      <div className={styles.btnHolder}>
        <Link
          href="/services/microsoft-power-platform/microsoft-power-bi"
          className={styles.btn}
        >
          Learn more about Power BI
        </Link>
      </div>
    </main>
  );
};

export default ServicesBI;
