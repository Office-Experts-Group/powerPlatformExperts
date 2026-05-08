// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPServicesTabs.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "../../../styles/spServices.module.scss";

const CheckIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="6.5" cy="6.5" r="6" stroke="#046999" strokeWidth="1" />
    <path
      d="M4 6.5l2 2 3-3"
      stroke="#046999"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SPServicesTabs({ services }) {
  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <div className={styles.tabsWrap}>
      {/* ── Left: vertical nav ── */}
      <nav className={styles.nav} aria-label="SharePoint services">
        {services.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.navBtn} ${i === active ? styles.navBtnActive : ""}`}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
          >
            <span className={styles.navIndex}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className={styles.navLabel}>{s.label}</span>
            {s.tagAlert && (
              <span className={styles.alertDot} aria-label="Time sensitive" />
            )}
            <svg
              className={styles.navChevron}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </nav>

      {/* ── Right: service detail panel ── */}
      <div className={styles.panel} key={svc.id} aria-live="polite">
        <div className={styles.panelHeader}>
          <span
            className={`${styles.tag} ${svc.tagAlert ? styles.tagAlert : ""}`}
          >
            {svc.tag}
          </span>
          <h3 className={styles.panelTitle}>{svc.label}</h3>
          <p className={styles.panelIntro}>{svc.intro}</p>
        </div>

        <p className={styles.panelBody}>{svc.body}</p>

        {/* Deliverables list */}
        <ul className={styles.points} aria-label="What's included">
          {svc.points.map((p) => (
            <li key={p} className={styles.point}>
              <CheckIcon />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {/* Advisory note */}
        <blockquote className={styles.note}>
          <span className={styles.noteBar} aria-hidden="true" />
          <p>{svc.note}</p>
        </blockquote>

        {/* Optional cross-link */}
        {svc.link && (
          <Link href={svc.link.href} className={styles.panelLink}>
            {svc.link.label}
            <ArrowIcon />
          </Link>
        )}
      </div>
    </div>
  );
}
