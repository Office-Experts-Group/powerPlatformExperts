import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment4.module.css";

import service from "../../../public/service.webp";

const ServicesSection = () => {
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
              Our Microsoft Fabric Services
            </h2>
            <p>
              With over 25 years of Microsoft expertise, we provide
              comprehensive Microsoft Fabric services that take you from initial
              planning through to full deployment. We can create entire systems
              from scratch or help with migrating your existing setup.
            </p>

            {/* Fabric Assessment */}
            <div style={{ marginTop: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "#046999",
                }}
              >
                Assessment
              </h3>
              <p
                style={{
                  color: "#777a7e",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                Before diving into implementation, we conduct a thorough
                assessment of your current tech stack. We analyse your existing
                systems, evaluate the potential return on investment, and plan
                your migration strategy.
              </p>
            </div>

            {/* Implementation Services */}
            <div style={{ marginTop: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "#046999",
                }}
              >
                Implementation
              </h3>
              <p
                style={{
                  color: "#777a7e",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                We configure OneLake as your one true source of data, set up
                workspaces tailored to your team structure, and implement
                security configurations.
              </p>
            </div>

            {/* Custom Development */}
            <div style={{ marginTop: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "#046999",
                }}
              >
                Custom Development
              </h3>
              <p
                style={{
                  color: "#777a7e",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                We build custom solutions for your specific business
                requirements. Our developers create data pipelines that automate
                your workflows, design ETL processes that transform raw data
                into valuable insights, implement real-time analytics solutions
                for immediate visibility, and develop custom integrations that
                connect Fabric with existing systems.
              </p>
            </div>

            {/* Training & Support */}
            <div style={{ marginTop: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.75rem",
                  color: "#046999",
                }}
              >
                Training & Support
              </h3>
              <p
                style={{
                  color: "#777a7e",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                Our team will provide comprehensive training for both end users
                and administrators, ensuring everyone understands how to work
                effectively with Fabric. We document best practices so your team
                can maintain and expand your Fabric environment in the future.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-up" duration={1} delay={0.2}>
          <div className={styles.imgDeskWrapper}>
            <Image
              src={service}
              alt="Microsoft Fabric services and support"
              width={300}
              height={600}
            />
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default ServicesSection;
