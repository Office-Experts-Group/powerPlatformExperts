import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../../components/AnimateOnScroll";

import styles from "../../../../styles/pageSegment3.module.css";

import magnify from "../../../../public/magnify.webp";
import pencils from "../../../../public/pencils.webp";
import gears from "../../../../public/gears.webp";
import rocket from "../../../../public/rocket.webp";
import support from "../../../../public/support.webp";

const OurProcess = () => {
  return (
    <section
      className={styles.pageSegment}
      id="process"
      style={{
        padding: "6rem 10vw 0 10vw",
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
        <div className={styles.ourProcess}>
          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={magnify}
                width={100}
                height={100}
                alt="magnifying glass"
              />
              <div>
                <h3>Discovery & Strategy</h3>
                <p>
                  Begins with understanding your business challenges and
                  identifying automation opportunities. We assess your current
                  systems and data, then work with you to define clear success
                  metrics that will guide the project.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image src={pencils} width={100} height={100} alt="pencils" />
              <div>
                <h3>Design & Planning</h3>
                <p>
                  Creates the solution architecture and wireframes interfaces.
                  We document workflows in detail and obtain stakeholder
                  approval before development begins, ensuring everyone shares
                  the same vision.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image src={gears} width={100} height={100} alt="gears" />
              <div>
                <h3>Development</h3>
                <p>
                  Follows agile methodology with regular progress updates.
                  Iterative testing catches issues early. We provide change
                  management support to help your organisation prepare for the
                  new solution.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image src={rocket} width={100} height={100} alt="rocket" />
              <div>
                <h3>Deployment</h3>
                <p>
                  Includes thorough user acceptance testing and comprehensive
                  staff training. We prefer phased rollouts that minimize
                  disruption and provide dedicated go-live support to address
                  any immediate concerns.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" duration={1} delay={0.2}>
            <div className={styles.flexHolder}>
              <Image
                src={support}
                width={100}
                height={100}
                alt="support and optimisation"
              />
              <div>
                <h3>Support & Optimisation</h3>
                <p>
                  Continues with ongoing maintenance and feature enhancements.
                  We monitor performance continuously and track user adoption to
                  identify opportunities for improvement.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
