"use client";
import React, { useState } from "react";
import AnimateOnScroll from "../../../../../components/AnimateOnScroll";

import { InvoiceVisual } from "../(svgs)/InvoiceVisual";
import { FormVisual } from "../(svgs)/FormVisual";
import { EmailVisual } from "../(svgs)/EmailVisual";

import styles from "../../../../../styles/aiBuilderCapabilities.module.css";

// ─────────────────────────────────────────────
// Card data
// ─────────────────────────────────────────────
const cards = [
  {
    id: "invoice",
    index: "01",
    theme: "cardDark",
    eyebrow: "AI Builder · Document Intelligence",
    heading: "Stop re-keying invoices. Let Power Automate do the work.",
    body: "AI Builder's prebuilt invoice model extracts supplier name, invoice number, line items, amounts and due dates directly from PDF or image invoices. It then matches them against your ERP or Dynamics 365 data automatically. Your accounts team reviews exceptions, not every single document.",
    detail:
      "Works with scanned documents, emailed PDFs and mobile photos of paper invoices. Handles standard Australian tax invoice formats. Custom models can be trained on your specific layouts within weeks using sample documents.",
    tags: ["AI Builder", "Invoice Processing", "Dynamics 365", "Dataverse"],
    stat: {
      value: "Greater",
      label: "accuracy on structured invoice extraction",
    },
    Visual: InvoiceVisual,
  },
  {
    id: "forms",
    index: "02",
    theme: "cardMid",
    eyebrow: "AI Builder · Form Recognition",
    heading: "Paper forms, PDFs, scanned docs. Image to text ready",
    body: "Custom AI models trained on your documents and data. Delivery dockets, compliance checklists, HR onboarding packs, inspection reports. Extracted data flows directly into SharePoint, Dataverse or your line-of-business system without anyone typing a thing.",
    detail:
      "Model accuracy improves over time as it processes more of your real documents. Handles variation in form layout, handwriting and scan quality. Our consultants look at your existing workflow and find pain points that can be solved with automation ",
    tags: ["Form Extraction", "AI Builder", "SharePoint", "Custom Models"],
    stat: { value: "Seconds", label: "vs minutes of manual data entry" },
    Visual: FormVisual,
  },
  {
    id: "email",
    index: "03",
    theme: "cardAccent",
    eyebrow: "AI Builder · Natural Language Processing",
    heading:
      "Your shared inbox shouldn't need a full-time person to manage it.",
    body: "Power Automate's text classification model can read incoming emails and detect intent. It can classify your invoice query, purchase enquiry or support request and routes each one to the right queue or person.",
    detail:
      "Trained on your specific email categories and business terminology. Integrates with Outlook shared mailboxes and Microsoft Teams channels. Escalation rules are based on sentiment score, sender tier and response SLA. Shape the models permissions exactly how you would like them.",
    tags: ["Email Triage", "NLP", "Outlook", "Teams"],
    stat: { value: "Zero", label: "manual sorting for routine email volume" },
    Visual: EmailVisual,
  },
];

// ─────────────────────────────────────────────
// Single card component
// ─────────────────────────────────────────────
const CapabilityCard = ({ card, index }) => {
  const [expanded, setExpanded] = useState(false);
  const { Visual } = card;

  return (
    <AnimateOnScroll animation="fade-up" duration={0.65} delay={index * 0.1}>
      <article
        className={`${styles.card} ${styles[card.theme]} ${expanded ? styles.cardExpanded : ""}`}
        id={index === 0 ? "document-processing" : undefined}
      >
        <div className={styles.cardInner}>
          {/* ── Text pane ── */}
          <div className={styles.cardText}>
            <div className={styles.cardMeta}>
              <span className={styles.cardIndex}>{card.index}</span>
              <span className={styles.cardEyebrow}>{card.eyebrow}</span>
            </div>

            <h2 className={styles.cardHeading}>{card.heading}</h2>
            <p className={styles.cardBody}>{card.body}</p>

            <div className={styles.expandDetail} aria-hidden={!expanded}>
              <p>{card.detail}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.tags}>
                {card.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              <button
                className={styles.expandBtn}
                onClick={() => setExpanded((v) => !v)}
                aria-expanded={expanded}
                aria-label={expanded ? "Show less detail" : "Read more detail"}
              >
                {expanded ? "Show less" : "Read more"}
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Visual pane ── */}
          <div className={styles.visual}>
            <div className={styles.svgWrap}>
              <Visual />
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>{card.stat.value}</span>
              <span className={styles.statLabel}>{card.stat.label}</span>
            </div>
          </div>
        </div>
      </article>
    </AnimateOnScroll>
  );
};

const AiBuilderCapabilities = () => (
  <section
    className={styles.section}
    id="document-processing"
    style={{ scrollMarginTop: "180px" }}
  >
    <div className={styles.header}>
      <AnimateOnScroll animation="fade-up" duration={0.6}>
        <span className={styles.eyebrow}>AI Builder</span>
        <h2 className={styles.title}>
          Flows that <span>understand</span> your documents,
          <br />
          not just move them.
        </h2>
        <p className={styles.subtitle}>
          AI Builder is Microsoft&rsquo;s embedded machine-learning layer inside
          Power Automate. It lets your workflows read, classify and extract data
          from documents. No more error prone manual handling.
        </p>
      </AnimateOnScroll>
    </div>

    <div className={styles.cardStack}>
      {cards.map((card, i) => (
        <CapabilityCard key={card.id} card={card} index={i} />
      ))}
    </div>
  </section>
);

export default AiBuilderCapabilities;
