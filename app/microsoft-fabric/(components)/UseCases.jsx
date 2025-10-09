import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/pageSegment3.module.css";

import financial from "../../../public/financial.webp";
import healthcare from "../../../public/healthcare.webp";
import retail from "../../../public/retail.webp";
import manufacturing from "../../../public/manufacturing.webp";
import government from "../../../public/government.webp";

const UseCases = () => {
  const industries = [
    {
      title: "Financial Services",
      description: "Real-time fraud detection and risk analytics",
      detail:
        "Monitor transactions as they occur, identify suspicious patterns instantly, and calculate risk exposure across your entire portfolio with unified data.",
      image: financial,
    },
    {
      title: "Healthcare",
      description: "Patient data integration and predictive analytics",
      detail:
        "Consolidate patient records from multiple systems, predict health outcomes, and improve care quality through comprehensive data analysis.",
      image: healthcare,
    },
    {
      title: "Retail",
      description: "Customer behavior analysis and inventory optimisation",
      detail:
        "Track customer journeys across all touchpoints, forecast demand accurately, and optimise stock levels to reduce waste and maximize sales.",
      image: retail,
    },
    {
      title: "Manufacturing",
      description: "Supply chain optimisation and predictive maintenance",
      detail:
        "Monitor equipment health in real-time, predict failures before they happen, and streamline supply chain operations with end-to-end visibility.",
      image: manufacturing,
    },
    {
      title: "Government",
      description: "Data consolidation and reporting compliance",
      detail:
        "Unify data from disparate departments, ensure regulatory compliance, and deliver transparent reporting to stakeholders and citizens.",
      image: government,
    },
  ];

  return (
    <section
      className={styles.pageSegment}
      id="use-cases"
      style={{
        padding: "6rem 0 0 0",
        scrollMarginTop: "100px",
        margin: "0",
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
              How Businesses Use Microsoft Fabric
            </h2>
          </div>
          <p style={{ maxWidth: "80vw", textAlign: "center" }}>
            From financial services to healthcare, manufacturing to government,
            organisations across Australia are leveraging Microsoft Fabric to
            transform their data operations. Here's how different industries are
            putting Fabric's unified platform to work.
          </p>
        </AnimateOnScroll>

        <div className={styles.useCases}>
          {industries.map((industry, index) => (
            <AnimateOnScroll
              key={index}
              animation="slide-left"
              duration={1}
              delay={0.2}
            >
              <div className={styles.gridHolder}>
                <Image
                  src={industry.image}
                  width={150}
                  height={150}
                  alt={`${industry.title} icon`}
                />
                <div>
                  <h3 style={{ color: "#046999" }}>{industry.title}</h3>
                  <p style={{ fontWeight: "600", marginBottom: "0.5rem" }}>
                    {industry.description}
                  </p>
                  <p style={{ color: "#777a7e" }}>{industry.detail}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
