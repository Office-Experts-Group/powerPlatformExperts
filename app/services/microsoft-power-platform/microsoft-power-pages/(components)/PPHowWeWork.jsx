// powerplatformexperts.com.au/components/PowerPages/PPHowWeWork.jsx

import Link from "next/link";
import styles from "../../../../../styles/ppHowWeWork.module.css";

// ─────────────────────────────────────────────
// Engagement model cards
// ─────────────────────────────────────────────
const models = [
  {
    id: "fixed",
    index: "01",
    label: "Fixed-price quotes",
    body: "For well-defined projects, we scope the work and give you a number before we start. No surprises mid-project, no scope creep that quietly doubles the bill.",
    detail:
      "We document requirements clearly before any work begins. You sign off on scope before we write a line of code.",
    primary: true,
    // Glyph: price tag / document with tick
    glyph: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="22"
          height="28"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M9 12h12M9 17h12M9 22h7"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle
          cx="27"
          cy="27"
          r="7"
          fill="currentColor"
          fillOpacity="0.12"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M24 27l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "hourly",
    index: "02",
    label: "Hourly engagements",
    body: "For ongoing help, quick builds, or situations where the scope is still being worked out. Billed in hourly increments with no minimum commitment.",
    detail:
      "Suits businesses that need expert hands available without locking into a project.",
    primary: false,
    glyph: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r="13"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M18 10v8l5 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "support",
    index: "03",
    label: "Ongoing support",
    body: "We can look after sites after launch. Ongoing updates, new features, user issues, and anything that breaks. Most of our Power Pages clients stay with us long term for peace of mind.",
    detail:
      "Available on a retained or ad-hoc basis. We keep documentation current so your team is never dependent on us for basic answers.",
    primary: false,
    glyph: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M24 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="18" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "training",
    index: "04",
    label: "Tailored training",
    body: "We can run sessions for your team covering the Power Pages studio, content management, and day-to-day admin. Pitched at the right level for your staff.",
    detail:
      "Delivered remotely or on site. We tailor the session to your portal, your roles, and your team's current skill level.",
    primary: false,
    glyph: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="30"
          height="20"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M12 27l-2 4M24 27l2 4M10 31h16"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <circle cx="18" cy="17" r="4" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M11 17c0-3.866 3.134-7 7-7"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="2 2"
        />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const PPHowWeWork = () => {
  return (
    <section className={styles.section} id="how-we-work">
      <div className={styles.inner}>
        {/* ── Header row: headline left, context right ── */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>Our role</span>
            <h2 className={styles.headline}>
              How we work <span className={styles.accent}>with you...</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.intro}>
              We work with businesses across Australia, mostly remotely. Most
              Power Pages projects do not need anyone on site, screen sharing
              and good documentation cover it.
            </p>
            <Link
              href="https://www.powerplatformexperts.com.au/microsoft-support-and-training-australia"
              className={styles.introLink}
            >
              Microsoft support &amp; training
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 9.5l7-7M5 2.5h4.5V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── 2×2 engagement model grid ── */}
        <ul className={styles.grid} aria-label="Engagement models">
          {models.map((m) => (
            <li
              key={m.id}
              className={`${styles.card} ${m.primary ? styles.cardPrimary : styles.cardSecondary}`}
            >
              <div className={styles.cardHeader}>
                <span
                  className={`${styles.glyphWrap} ${m.primary ? styles.glyphPrimary : styles.glyphSecondary}`}
                >
                  {m.glyph}
                </span>
                <span className={styles.cardIndex}>{m.index}</span>
              </div>

              <h3 className={styles.cardLabel}>{m.label}</h3>
              <p className={styles.cardBody}>{m.body}</p>

              <p className={styles.cardDetail}>{m.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PPHowWeWork;
