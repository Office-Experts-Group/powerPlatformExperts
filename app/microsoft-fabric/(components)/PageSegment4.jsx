import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

const PageSegment4 = () => {
  const workloads = [
    {
      title: "Data Factory",
      description: "Data integration and ETL",
      detail:
        "Connect to hundreds of data sources and orchestrate data movement with visual, low-code pipelines. Transform and prepare data at scale without writing complex code.",
      link: "https://learn.microsoft.com/en-us/fabric/data-factory/data-factory-overview",
    },
    {
      title: "Synapse Data Engineering",
      description: "Big data processing",
      detail:
        "Process massive datasets using Apache Spark notebooks and pipelines. Build robust data transformation workflows that handle enterprise-scale data volumes.",
      link: "https://azure.microsoft.com/en-us/resources/developers/synapse-analytics-for-data-engineers",
    },
    {
      title: "Synapse Data Warehouse",
      description: "Enterprise data warehousing",
      detail:
        "Create high-performance data warehouses optimised for analytics workloads. Query massive datasets with lightning-fast performance and automatic optimisation.",
      link: "https://blog.fabric.microsoft.com/en-US/blog/introducing-synapse-data-warehouse-in-microsoft-fabric/",
    },
    {
      title: "Synapse Data Science",
      description: "ML and AI capabilities",
      detail:
        "Develop and deploy machine learning models directly within Fabric. Access built-in AI capabilities and popular ML frameworks without managing separate infrastructure.",
      link: "https://blog.fabric.microsoft.com/en-us/blog/introducing-synapse-data-science-in-microsoft-fabric/",
    },
    {
      title: "Synapse Real-Time Analytics",
      description: "Streaming data processing",
      detail:
        "Analyse streaming data as it arrives with near-instant insights. Build real-time dashboards and alerts that respond to events as they happen.",
      link: "https://blog.fabric.microsoft.com/en-US/blog/synapse-real-time-analytics-discovering-the-best-ways-to-get-data-into-a-kql-database/",
    },
    {
      title: "Power BI",
      description: "Business intelligence and reporting",
      detail:
        "Create interactive reports and dashboards with integrations to all Fabric workloads. Share insights across your organisation with built-in security features.",
      link: "/services/microsoft-power-platform/microsoft-power-bi",
    },
  ];

  return (
    <div
      className="animate-wrapper"
      style={{
        backgroundColor: "rgb(242, 243, 245)",
        padding: "6rem 0",
      }}
    >
      <div className={styles.pageSegment} style={{ margin: "0" }}>
        <AnimateOnScroll animation="slide-left" duration={1} delay={0}>
          <div className={styles.content}>
            <h2 style={{ marginBottom: "1rem" }}>
              Comprehensive Fabric Capabilities
            </h2>
            <p>
              Microsoft Fabric brings together six powerful workloads into a
              single, integrated platform. Each component is designed to handle
              specific aspects of your analytics needs, while working seamlessly
              with the others. This unified approach means you don't need to
              manage separate tools, deal with complex integrations, or worry
              about data compatibility between systems.
            </p>

            {/* Workload breakdown */}
            <div style={{ marginTop: "2rem" }} className={styles.workloads}>
              {workloads.map((workload, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <Link href={workload.link}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "0.25rem",
                        color: "#046999",
                      }}
                    >
                      {workload.title}
                    </h3>
                  </Link>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      fontStyle: "italic",
                      color: "#666",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {workload.description}
                  </p>
                  <p style={{ color: "#777a7e", lineHeight: "1.6" }}>
                    {workload.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PageSegment4;
