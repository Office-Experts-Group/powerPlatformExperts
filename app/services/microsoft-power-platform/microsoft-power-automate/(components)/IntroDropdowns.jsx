"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../../../../../styles/paIntro.module.css";

const capabilities = [
  {
    id: "01",
    title: "Flow automation & system integration",
    tag: "Foundation",
    desc: "The backbone of Power Automate. Scheduled triggers, approvals, notifications and data sync across your existing platforms. If your team does it manually more than once a week, an automated flow can handle it instead.",
    href: "#contact",
  },
  {
    id: "02",
    title: "AI Builder - document & invoice intelligence",
    tag: "AI Builder",
    desc: "Power Automate can now read documents. Microsofts AI Builder's prebuilt or custom models extract fields from invoices, delivery dockets, compliance forms and receipts. It can feed structured data directly into your ERP, SharePoint or Dataverse.",
    href: "#document-processing",
  },
  {
    id: "03",
    title: "Intelligent approval workflows",
    tag: "Smart Routing",
    desc: "Approvals that route themselves. Flows that detect who is out of office, escalate automatically when nothing is actioned, and triage incoming emails by intent and urgency without human intervention.",
    href: "#approvals",
  },
  {
    id: "04",
    title: "Copilot Studio - autonomous agents",
    tag: "Agents",
    desc: "The frontier of Power Automate in 2026. Agents built in Copilot Studio monitor your systems 24/7, take action based on conditions, and surface only genuine exceptions to your team. Accounts payable, contract renewals, stock reordering. All handled without a trigger.",
    href: "#agents",
  },
  {
    id: "05",
    title: "Cross-platform API orchestration",
    tag: "Integration",
    desc: "We connect Power Automate to whatever else you are running. Dynamics 365, Xero, MYOB, Salesforce, custom REST APIs, or legacy systems. Data moves where it needs to go, automatically and accurately, across every platform in your stack.",
    href: "https://www.officeexperts.com.au/services/by-business-solution/3rd-party-application-or-office-integration",
  },
];

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PAIntro = () => {
  const [activeCap, setActiveCap] = useState(null);
  const [lineHeight, setLineHeight] = useState(0);

  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Trigger entrance animations once section enters viewport */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Grow the blue track line to the bottom of the active item */
  useEffect(() => {
    if (activeCap !== null && listRef.current) {
      const items = listRef.current.querySelectorAll("[data-cap-item]");
      const activeEl = items[activeCap];
      if (activeEl) {
        const listTop = listRef.current.getBoundingClientRect().top;
        const itemBottom = activeEl.getBoundingClientRect().bottom;
        setLineHeight(itemBottom - listTop + 8);
      }
    } else {
      setLineHeight(0);
    }
  }, [activeCap]);

  return (
    <section ref={sectionRef}>
      {/* ── RIGHT — interactive capability accordion ── */}
      <div className={styles.rightCol}>
        <p className={styles.capLabel}>What we create</p>

        <ul className={styles.capList} ref={listRef}>
          {/* Growing blue track line */}
          <div
            className={styles.trackLine}
            style={{ height: `${lineHeight}px` }}
          />

          {capabilities.map((cap, i) => (
            <li
              key={cap.id}
              data-cap-item
              className={`${styles.capItem} ${
                activeCap === i ? styles.capItemActive : ""
              }`}
              onMouseEnter={() => setActiveCap(i)}
              onMouseLeave={() => setActiveCap(null)}
              onFocus={() => setActiveCap(i)}
              onBlur={() => setActiveCap(null)}
              tabIndex={0}
            >
              <div className={styles.capItemInner}>
                {/* Number + dot */}
                <div className={styles.capLeft}>
                  <span className={styles.capNum}>{cap.id}</span>
                  <div className={styles.capDot} />
                </div>

                {/* Text content */}
                <div className={styles.capContent}>
                  <div className={styles.capHeader}>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <span className={styles.capTag}>{cap.tag}</span>
                  </div>

                  <div className={styles.capDesc}>
                    <p>{cap.desc}</p>
                    {cap.id !== "01" ? (
                      <Link href={cap.href} className={styles.capLink}>
                        See how it works
                        <ArrowIcon />
                      </Link>
                    ) : (
                      <a href={cap.href} className={styles.capLink}>
                        Speak with an Expert
                        <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right arrow */}
                <div className={styles.capArrow} aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10h12M12 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <Link
            href="#contact"
            className="btn"
            style={{ textTransform: "capitalize" }}
          >
            <span>Talk to our team</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PAIntro;
