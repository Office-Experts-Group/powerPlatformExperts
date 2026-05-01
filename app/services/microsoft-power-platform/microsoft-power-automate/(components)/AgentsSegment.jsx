import React from "react";
import Link from "next/link";

import AnimateOnScroll from "../../../../../components/AnimateOnScroll";
import AgentLoopSvg from "../(svgs)/AgentLoopSvg";

import styles from "../../../../../styles/agentsSegment.module.css";

const AgentsSegment = () => (
  <section
    className={styles.section}
    id="agents"
    style={{ scrollMarginTop: "150px" }}
  >
    <div className={styles.grid}>
      {/* ── Left: text ── */}
      <AnimateOnScroll animation="slide-left" duration={0.8} delay={0}>
        <div className={styles.content}>
          <span className={styles.eyebrow}>
            Copilot Studio · Autonomous Agents
          </span>

          <h2 className={styles.heading}>
            Digital workers that <span>don&rsquo;t clock off.</span>
          </h2>

          <p className={styles.body}>
            Copilot Studio takes Power Automate from reactive to proactive.
            Instead of waiting for someone to trigger a flow, it monitors your
            systems around the clock, apply your business rules, and can act on
            it instantly.
          </p>
          <p className={styles.body}>
            Not every process needs an agent. But for high-volume, rules-based
            tasks that currently need someone watching a queue, this is worth
            understanding.
          </p>

          <div className={styles.divider} aria-hidden="true" />

          <div className={styles.ctaBlock}>
            <Link
              href="#contact"
              className="btn"
              style={{ textTransform: "capitalize" }}
            >
              <span>Talk to us about agents</span>
            </Link>
          </div>
        </div>
      </AnimateOnScroll>

      {/* ── Right: animated SVG loop ── */}
      <AnimateOnScroll animation="fade-up" duration={0.9} delay={0.15}>
        <div className={styles.visual}>
          <div className={styles.svgWrap}>
            <AgentLoopSvg />
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
);

export default AgentsSegment;
