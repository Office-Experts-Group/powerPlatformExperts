import React from "react";
import Image from "next/image";
import Link from "next/link";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment4.module.css";

import keyboard from "../../../../public/keyboard600x400.webp";

const ServicesApps = () => {
  const checkItems = [
    {
      strong: "Canvas Apps ",
      text: "give you complete control over the user interface and experience. These custom-designed mobile and web applications are perfect for field service work, inspections, data collection, and task management. You define exactly how the app looks and behaves.",
    },
    {
      strong: "Model-Driven Apps ",
      text: "are built on Microsoft Dataverse and leverage your database structure to create sophisticated applications with built-in business logic, automated workflows, and comprehensive reporting capabilities. These apps are ideal when you need rapid development based on your data model.",
    },
    {
      strong: "Portal and Pages Integration ",
      text: "extends your Power Apps to external users securely, creating customer-facing applications that maintain your brand while providing controlled access to your business systems.",
    },
  ];

  return (
    <main className="animate-wrapper" style={{ margin: "6rem 0" }}>
      <div className={`${styles.pageSegment} ${styles.services}`}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>Power Apps Development</h2>
            <p>
              We build tailored Power Apps solutions that connect to your
              existing data sources and work seamlessly across devices. From
              simple forms to complex database applications, our developers
              create intuitive interfaces that your team will actually want to
              use.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className="image-wrapper">
            <Image
              src={keyboard}
              alt="computer keyboard with digital design"
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
            <h3>Solving Real Business Challenges</h3>
            <p>
              <strong>
                Our Power Apps solutions address common operational needs across
                industries.
              </strong>
            </p>
            <ul>
              <li>
                Field service teams use custom apps for mobile inspections and
                real-time data capture.
              </li>
              <li>
                Asset management systems track equipment location, maintenance
                history, and lifecycle costs.
              </li>
              <li>
                Customer relationship management tools help sales teams stay
                organised and responsive.
              </li>
              <li>
                Inventory and stock control systems provide real-time visibility
                across warehouses and locations.
              </li>
              <li>
                Employee onboarding workflows guide new hires through paperwork
                and training.
              </li>
              <li>
                Quality assurance checklists ensure consistent standards across
                operations.
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
          We can integrate Power Apps with SharePoint, SQL Server, Dynamics 365,
          and over 1,000 other data connectors. Our apps include offline
          functionality for remote workers, custom connectors for legacy
          systems, and sophisticated Power FX formulas. Applications can feature
          responsive designs that work on phones, tablets, and desktop
          computers.
        </p>
      </div>
      <div className={styles.btnHolder}>
        <Link
          href="/services/microsoft-power-platform/microsoft-power-apps"
          className={styles.btn}
        >
          Learn more about Power Apps
        </Link>
      </div>
    </main>
  );
};

export default ServicesApps;
