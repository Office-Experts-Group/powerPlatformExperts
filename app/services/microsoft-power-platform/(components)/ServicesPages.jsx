import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import web from "../../../../public/web.webp";

const ServicesPages = () => {
  const checkItems = [
    {
      strong: "Customer Portals ",
      text: "create self-service environments where customers can view orders, submit requests, track cases, and access resources. This reduces support burden while improving customer satisfaction through 24/7 access to information.",
    },
    {
      strong: "Partner Portals ",
      text: "provide collaborative spaces for distributors, resellers, and business partners. They can manage their accounts, view performance data, access marketing materials, and process orders all in one secure location.",
    },
    {
      strong: "Employee Portals ",
      text: "offer internal sites where staff can access HR information, submit requests, find company resources, and stay connected with organisational news and updates.",
    },
    {
      strong: "PCommunity Sites ",
      text: "serve as public-facing websites with forums, knowledge bases, and content management. These sites can include customer success stories, product documentation, and interactive support communities.",
    },
  ];

  return (
    <main className="animate-wrapper" style={{ margin: "6rem 0" }}>
      <div className={`${styles.pageSegment} ${styles.services}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Power Pages Development</h2>
            <p>
              Create secure, data-driven websites that connect external users to
              your business systems. Power Pages enables customers, partners,
              and stakeholders to interact with your organisation through
              branded, feature-rich portals.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={web}
              alt="web text with digital design"
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

      <div style={{ marginTop: "2rem" }}>
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.3}>
          <div className={styles.challenges}>
            <h3>Real Life Use Cases</h3>
            <p>
              <strong>
                Our Power Apps solutions address common operational needs across
                industries.
              </strong>
            </p>
            <ul>
              <li>
                <strong>Application and Registration Forms:</strong> Streamline
                data collection with automated form processing and validation.
              </li>
              <li>
                <strong>Knowledge Bases and FAQ Sites:</strong> Provide instant
                answers to common questions with searchable documentation.
              </li>
              <li>
                <strong>Event Registration Systems:</strong> Manage attendees
                efficiently with automated registration and tracking.
              </li>
              <li>
                <strong>Job Boards and Recruitment Portals:</strong> Attract and
                process candidates with streamlined application workflows.
              </li>
              <li>
                <strong>Distributor and Partner Management:</strong> Centralise
                collaboration with dedicated partner portals and communication
                tools.
              </li>
              <li>
                <strong>Warranty and Service Request Tracking:</strong> Keep
                everyone informed with real-time status updates and automated
                notifications.
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>

      <div
        className={`${styles.pageSegment} ${styles.services}`}
        style={{ marginTop: "2rem" }}
      >
        <p style={{ color: "#777a7e", lineHeight: "2rem" }}>
          Getting your portal up and running doesn't need to take months. Power
          Pages uses low-code development, which means we can design, build, and
          launch your site in weeks rather than the traditional timeline of
          custom web development.
        </p>
        <p style={{ color: "#777a7e", lineHeight: "2rem" }}>
          The interface tools are surprisingly powerful considering how easy
          they are to use. Advanced data tables let users sort, filter, and
          search through information just like they would in any modern
          application. Forms are smart and can adapt based on user input. And
          when you need to update content or make changes, the built-in content
          management system lets you do it yourself without calling a developer
          every time.
        </p>
      </div>
      <div className={styles.btnHolder}>
        <Link
          href="/services/microsoft-power-platform/microsoft-power-pages"
          className={styles.btn}
        >
          Learn more about Power Pages
        </Link>
      </div>
    </main>
  );
};

export default ServicesPages;
