import React from "react";
import Image from "next/image";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/services.module.css";

import powerApps from "../../public/microsoft/powerAppsNoBG.webp";
import powerBI from "../../public/microsoft/powerBINoBG.webp";
import powerAutomate from "../../public/microsoft/powerAutomateNoBG.webp";
import powerPages from "../../public/microsoft/powerPagesNoBG.webp";
import scott from "../../public/scott.webp";
import signature from "../../public/signature.webp";

const Services = () => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Experts in Custom Design and Development
              <span> for the Microsoft Power Platform</span>
            </p>
          </div>
          <h2>
            Microsoft<br></br>Power Platform Consulting Services
          </h2>
          <p>
            Microsoft&apos;s Power Platform empowers businesses by offering a
            suite of powerful tools including Power BI for data visualisation,
            Power Apps for app creation and Power Automate for workflow
            automation. These tools enable organisations to streamline
            processes, gain actionable insights and develop customised solutions
            that enhance efficiency and productivity across various aspects of
            their operations.
          </p>
          <div className={styles.signature}>
            <div>
              <Image src={scott} alt="Scott Robinson" width={30} height={30} />
            </div>
            <Image
              src={signature}
              alt="Scott signature"
              width={200}
              height={50}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <ServicesCard
            src={powerApps}
            alt={"Microsoft Power Apps"}
            h3={"Microsoft Power Apps"}
            li={[
              "Unique, high performance custom solutions for your specific business needs.",
              "Seamless data integration into your existing data sources.",
              "Leverage automation to optimize processes, reduce manual effort, and boost overall efficiency.",
            ]}
            link={"/services/microsoft-power-platform/microsoft-power-apps"}
          />
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
          />
          <ServicesCard
            src={powerAutomate}
            alt={"Microsoft Power Automate"}
            h3={"Microsoft Power Automate"}
            li={[
              "Automated workflows that streamline your business processes, reducing manual input and effort.",
              "Seamlessly connect to your existing systems and applications, ensuring a cohesive workflow ecosystem.",
              "Tailored workflows that suit your unique business requirements, from simple tasks to complex processes.",
            ]}
            link={"/services/microsoft-power-platform/microsoft-power-automate"}
          />
          <ServicesCard
            src={powerPages}
            alt={"Microsoft Power Pages"}
            h3={"Microsoft Power Pages"}
            li={[
              "Engaging Content: Deliver captivating web experiences that leave a lasting impression on your visitors.",
              "Data Collection: Collect data efficiently from your customers from any device.",
            ]}
            link={"/services/microsoft-power-platform/microsoft-power-pages"}
          />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Services;
