import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import PAProcessSteps from "./PAProcessSteps";

import styles from "../../../../../styles/paProcess.module.css";

const differentiators = [
  {
    heading: "We build in your environment.",
    body: "Every flow is developed inside your actual Microsoft tenant using your real data, connectors and permissions so nothing breaks when going live to production.",
  },
  {
    heading: "AI model training.",
    body: "Custom AI Builder models are not an add-on. When your process needs a trained document model we gather your sample files, train it and iterate until accuracy meets the threshold before the flow is built around it.",
  },
  {
    heading: "Transparent pricing.",
    body: "We take care to explain the costs involved before a single line of code is written. No surprises mid-project, no scope creep that quietly doubles the bill.",
  },
  {
    heading: "We stick around.",
    body: "We can provide ongoing support, model retraining and flow updates. Many of our Power Automate clients have been with us for years and trust us across to manage their entire software applications.",
  },
];

const PAProcess = () => (
  <section
    className={styles.section}
    id="approvals"
    style={{ scrollMarginTop: "150px" }}
  >
    {/* ── Top: headline left + differentiator cards right ── */}
    <div className={styles.topBlock}>
      <AnimateOnScroll animation="slide-left" duration={0.7} delay={0}>
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.headline}>
            Straight&shy;forward delivery.
            <br />
            <span>No black boxes.</span>
          </h2>
          <p className={styles.intro}>
            <strong>We match the tool to the problem. </strong> Not every
            automation needs AI. We scope your requirements honestly, sometimes
            the right solution is a clean flow with proper error handling, not a
            machine-learning model. When a trained document model is genuinely
            the best fit, we build it properly.
          </p>
          <Link
            href="#contact"
            className="btn"
            style={{ textTransform: "capitalize" }}
          >
            Start a conversation
          </Link>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.15}>
        <div className={styles.diffGrid}>
          {differentiators.map((d, i) => (
            <div key={i} className={styles.diffCard}>
              <div className={styles.diffBar} aria-hidden="true" />
              <div>
                <h3 className={styles.diffHeading}>{d.heading}</h3>
                <p className={styles.diffBody}>{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>

    {/* ── Bottom: five-step process ── */}
    <div className={styles.processBlock}>
      <AnimateOnScroll animation="fade-up" duration={0.6} delay={0}>
        <div className={styles.processHeader}>
          <span className={styles.processLabel}>The process</span>
          <p className={styles.processSub}>
            From first call to a live, tested flow. This is what working with us
            on a project looks like.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" duration={0.7} delay={0.1}>
        <PAProcessSteps />
      </AnimateOnScroll>
    </div>
  </section>
);

export default PAProcess;
