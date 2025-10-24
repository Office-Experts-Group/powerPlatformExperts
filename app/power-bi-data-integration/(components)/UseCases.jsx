import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import bi from "../../../public/microsoft/bi.webp";
import azure from "../../../public/microsoft/azureNoBG.webp";
import sql from "../../../public/microsoft/sql.webp";
import automate from "../../../public/microsoft/powerAutomateNoBG.webp";
import sharepoint from "../../../public/microsoft/sharepoint.webp";
import api from "../../../public/microsoft/api.webp";
import dataverse from "../../../public/microsoft/dataverse.webp";

const UseCases = () => {
  return (
    <section
      className={styles.pageSegment}
      id="work"
      style={{
        padding: "6rem 10vw",
        scrollMarginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={styles.content}
      >
        <AnimateOnScroll animation="fade-up" duration={1} delay={0.2}>
          <div className={styles.underline}>
            <h2 style={{ fontSize: "2rem", textAlign: "center" }}>
              Tools & Platforms We Work With
            </h2>
          </div>
          <p style={{ maxWidth: "100%", textAlign: "center" }}>
            To deliver robust and scalable integrations, we use a wide range of
            Microsoft and third-party tools. Our team selects the right mix of
            platforms based on your organisation's goals, IT environment, and
            budget.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={bi} width={75} height={75} alt="microsoft power bi" />
              <div>
                <h3>Microsoft Power BI</h3>
                <p>
                  The foundation of your analytics and reporting environment.
                </p>
              </div>
              <div></div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={azure} width={75} height={75} alt="microsoft azure" />
              <div>
                <h3>Azure Data Factory</h3>
                <p>
                  Scalable data pipelines for complex integrations and
                  enterprise-level ETL.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={sql} width={75} height={75} alt="SQL Database" />
              <div>
                <h3>SQL Server Integration Services (SSIS)</h3>
                <p>
                  Powerful ETL capabilities for on-premises and hybrid
                  solutions.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image
                src={automate}
                width={75}
                height={75}
                alt="power automate"
              />
              <div>
                <h3>Power Automate</h3>
                <p>
                  Workflow automation that connects Power BI with your broader
                  business processes.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={sharepoint} width={75} height={75} alt="sharepoint" />
              <div>
                <h3>SharePoint</h3>
                <p>
                  A common data source and collaboration platform seamlessly
                  integrated with Power BI.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={api} width={75} height={75} alt="REST APIs" />
              <div>
                <h3>REST APIs</h3>
                <p>
                  Custom API integrations to connect virtually any cloud or
                  on-premises application.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.gridHolder}>
              <Image src={dataverse} width={75} height={75} alt="dataverse" />
              <div>
                <h3>Microsoft Dataverse</h3>
                <p>
                  Unified storage for data from across the Microsoft Power
                  Platform.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
