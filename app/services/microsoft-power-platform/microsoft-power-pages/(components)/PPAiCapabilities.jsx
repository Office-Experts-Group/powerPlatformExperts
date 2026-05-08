// powerplatformexperts.com.au/components/PowerPages/PPAiCapabilities.jsx

import styles from "../../../../../styles/ppAiCapabilities.module.css";

// ─────────────────────────────────────────────
// AI feature cards
// ─────────────────────────────────────────────
const features = [
  {
    id: "design-studio",
    index: "01",
    label: "Copilot in the design studio",
    body: "Describe a page or section in plain language and Copilot drafts a layout. Useful for getting a starting point, however you will still need to refine it.",
    honest: "Good for scaffolding. Not a replacement for design decisions.",
    // SVG: pencil/layout sketch icon
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="8"
          width="36"
          height="28"
          rx="3"
          stroke="rgba(126,200,227,0.4)"
          strokeWidth="1.5"
        />
        <rect
          x="6"
          y="8"
          width="36"
          height="7"
          rx="3"
          fill="rgba(4,105,153,0.4)"
        />
        <rect
          x="10"
          y="20"
          width="14"
          height="10"
          rx="2"
          fill="rgba(4,105,153,0.25)"
          stroke="rgba(126,200,227,0.25)"
          strokeWidth="1"
        />
        <rect
          x="28"
          y="20"
          width="10"
          height="4"
          rx="1.5"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="28"
          y="27"
          width="14"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.07)"
        />
        <path
          d="M32 38l4-4 4 4"
          stroke="#7ec8e3"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="40" r="5" fill="#046999" />
        <text
          x="36"
          y="43.5"
          textAnchor="middle"
          fill="#fff"
          fontSize="7"
          fontWeight="700"
        >
          AI
        </text>
      </svg>
    ),
  },
  {
    id: "ai-forms",
    index: "02",
    label: "AI-generated forms",
    body: "Describe the data you want to collect and Copilot generates a form connected to a Dataverse table. Saves time on routine portal builds.",
    honest:
      "Works well for standard field types. Complex validation still needs manual configuration.",
    // SVG: form with auto-fill sparkle
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="6"
          width="28"
          height="36"
          rx="3"
          stroke="rgba(126,200,227,0.4)"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="12"
          width="20"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.15)"
        />
        <rect
          x="12"
          y="19"
          width="20"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.1)"
        />
        <rect
          x="12"
          y="26"
          width="14"
          height="3"
          rx="1.5"
          fill="rgba(255,255,255,0.07)"
        />
        <rect
          x="12"
          y="33"
          width="10"
          height="5"
          rx="2.5"
          fill="rgba(4,105,153,0.5)"
        />
        {/* Sparkle */}
        <path
          d="M38 10l1.2 3 3 1.2-3 1.2L38 18l-1.2-3.6-3-1.2 3-1.2z"
          fill="#7ec8e3"
          opacity="0.9"
        />
        <path
          d="M42 20l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"
          fill="#7ec8e3"
          opacity="0.5"
        />
      </svg>
    ),
  },
  {
    id: "chatbot",
    index: "03",
    label: "Chatbot integration",
    body: "Power Pages sites can embed Copilot Studio bots for on-site chat and FAQ handling. These can be grounded on your own data.",
    honest:
      "Powerful when the bot is well-scoped. A poorly configured bot creates support work, not savings.",
    // SVG: chat bubble with bot indicator
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="6"
          y="10"
          width="28"
          height="20"
          rx="4"
          stroke="rgba(126,200,227,0.4)"
          strokeWidth="1.5"
        />
        <path
          d="M14 30l-4 6 6-3"
          stroke="rgba(126,200,227,0.4)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="14" cy="20" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.3)" />
        <circle cx="26" cy="20" r="2" fill="rgba(255,255,255,0.3)" />
        {/* Bot badge */}
        <circle cx="36" cy="34" r="9" fill="#046999" />
        <rect
          x="31"
          y="31"
          width="10"
          height="7"
          rx="2"
          fill="rgba(255,255,255,0.15)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="0.8"
        />
        <circle cx="34" cy="34" r="1.2" fill="#7ec8e3" />
        <circle cx="38" cy="34" r="1.2" fill="#7ec8e3" />
        <rect x="33.5" y="36.5" width="5" height="1" rx="0.5" fill="#7ec8e3" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const PPAiCapabilities = () => {
  return (
    <section className={styles.section} id="ai-capabilities">
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Copilot Features</span>
          <h2 className={styles.headline}>
            AI in Power Pages -{" "}
            <span className={styles.accent}>
              what&rsquo;s real, what&rsquo;s useful
            </span>
          </h2>
          <p className={styles.intro}>
            Microsoft has added Copilot features to Power Pages in recent
            releases. The ones below are genuinely useful in practice. We help
            clients figure out which capabilities are worth using for their
            specific situation.
          </p>
        </header>

        {/* ── Feature card grid ── */}
        <ul className={styles.cardGrid} aria-label="Copilot feature breakdown">
          {features.map((f) => (
            <li key={f.id} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>{f.icon}</div>
                <span className={styles.cardIndex}>{f.index}</span>
              </div>

              <h3 className={styles.cardLabel}>{f.label}</h3>
              <p className={styles.cardBody}>{f.body}</p>

              {/* Honest assessment pill */}
              <div className={styles.honestWrap}>
                <span
                  className={styles.honestTag}
                  aria-label="Honest assessment"
                >
                  Honest take
                </span>
                <p className={styles.honestText}>{f.honest}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PPAiCapabilities;
