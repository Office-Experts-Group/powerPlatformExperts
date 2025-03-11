import React from "react";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import powerApps from "../../public/microsoft/powerAppsNoBG.webp";
import powerBI from "../../public/microsoft/powerBINoBG.webp";
import powerAutomate from "../../public/microsoft/powerAutomateNoBG.webp";
import powerPages from "../../public/microsoft/powerPagesNoBG.webp";

const Services = ({ location }) => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Design, Development and Consulting
              <span> for Microsoft Power Platform Solutions</span>
            </p>
          </div>
          <h2>Microsoft Power Platform Services - {location}</h2>
          <p>
            Our reputation is built on delivering innovative business automation
            solutions, custom application development, and comprehensive Power
            Platform support. With a growing list of satisfied clients, we take
            pride in offering expert implementation, tailored workflow
            automation, and strategic guidance to meet diverse operational
            challenges. Whether it's automated processes, mobile business
            applications, interactive dashboards, or customer-facing portals you
            need, our 25+ years of Microsoft expertise ensures optimised,
            effective solutions that transform your organisation's efficiency.
          </p>
          <p>
            Working with a local Power Platform consultant brings the added
            advantage of understanding regional business requirements, faster
            response times and direct, face-to-face collaboration when needed.
            Based in {location}, we are well-positioned to provide both remote
            and onsite services, ensuring organisations receive timely,
            professional automation and business intelligence solutions from
            specialists who understand their unique operational challenges and
            industry-specific needs.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <CardIntersectionWrapper>
            <ServicesCard
              src={powerApps}
              alt={"Microsoft Power Apps"}
              h3={"Microsoft Power Apps"}
              li={[
                "Unique, high performance custom solutions for your specific business needs.",
                "Seamless data integration into your existing data sources.",
                "Leverage automation to optimise processes, reduce manual effort, and boost overall efficiency.",
              ]}
              link={"/services/microsoft-power-platform/microsoft-power-apps"}
              linkText={"Power Apps"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={powerBI}
              alt={"Microsoft Power BI"}
              h3={"Microsoft Power BI"}
              li={[
                "Tailored reports and interactive dashboards to enable actionable insights for your business.",
                "Transform your data into insightful visualizations, enabling you to make timely and informed decisions.",
                "Dive deep into your data with interactive features, allowing you to effortlessly explore trends and patterns.",
              ]}
              link={"/services/microsoft-power-platform/microsoft-power-bi"}
              linkText={"Power BI"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={powerAutomate}
              alt={"Microsoft Power Automate"}
              h3={"Microsoft Power Automate"}
              li={[
                "Automated workflows that streamline your business processes, reducing manual input and effort.",
                "Seamlessly connect to your existing systems and applications, ensuring a cohesive workflow ecosystem.",
                "Tailored workflows that suit your unique business requirements, from simple tasks to complex processes.",
              ]}
              link={
                "/services/microsoft-power-platform/microsoft-power-automate"
              }
              linkText={"Power Automate"}
            />
          </CardIntersectionWrapper>

          <CardIntersectionWrapper>
            <ServicesCard
              src={powerPages}
              alt={"Microsoft Power Pages"}
              h3={"Microsoft Power Pages"}
              li={[
                "Engaging Content: Deliver captivating web experiences that leave a lasting impression on your visitors.",
                "Data Collection: Collect data efficiently from your customers from any device.",
              ]}
              link={"/services/microsoft-power-platform/microsoft-power-pages"}
              linkText={"Power Pages"}
            />
          </CardIntersectionWrapper>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
