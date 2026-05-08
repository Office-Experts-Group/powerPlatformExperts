// powerplatformexperts.com.au/components/PowerPages/PPDataIntegration.jsx

import Link from "next/link";
import styles from "../../../../../styles/ppDataIntegration.module.css";

const callouts = [
  {
    id: "direct",
    label: "Direct Dataverse integration",
    sub: "No API layer needed",
  },
  {
    id: "virtual",
    label: "Virtual tables",
    sub: "For external data sources",
  },
  {
    id: "automate",
    label: "Power Automate triggers",
    sub: "On every form submission",
  },
  {
    id: "permissions",
    label: "Read / write permissions",
    sub: "Scoped by user role",
  },
];

const PPDataIntegration = () => {
  return (
    <section className={styles.section} id="data-integration">
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Data Integration</span>
          <h2 className={styles.headline}>
            Your data, your website...{" "}
            <span className={styles.accent}>In Your Hands</span>
          </h2>
        </header>

        {/* ── Body grid: prose left, SVG right ── */}
        <div className={styles.grid}>
          <div className={styles.prose}>
            <p>
              The most common reason clients come to us is that they have data
              sitting in Dataverse (or Dynamics&nbsp;365) and they want external
              users such as customers, suppliers, or contractors to be able to
              view and interact with it through a website.
            </p>
            <p>
              Power Pages handles this without custom APIs or middleware. We
              configure the data connection through Dataverse table permissions,
              and the platform takes care of the rest, authentication, filtering
              by user, and enforcing what each role can read or write.
            </p>
            <p>
              You can also pull in data from external sources using virtual
              tables or{" "}
              <Link
                href="https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate"
                className={styles.inlineLink}
              >
                Power Automate integrations
              </Link>
              .
            </p>

            <Link href="#contact" className={styles.cta}>
              Talk to us about your data
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 11.5l9-9M5 2.5h6.5V9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* ── Data flow SVG diagram ── */}
          <figure className={styles.visual} aria-hidden="true">
            <svg
              viewBox="0 0 340 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.svg}
            >
              {/* ── Layer labels ── */}
              <text
                x="170"
                y="16"
                textAnchor="middle"
                fill="rgba(255,255,255,0.35)"
                fontSize="7.5"
                fontWeight="600"
                letterSpacing="2"
              >
                DATA LAYER
              </text>
              <text
                x="170"
                y="122"
                textAnchor="middle"
                fill="rgba(255,255,255,0.35)"
                fontSize="7.5"
                fontWeight="600"
                letterSpacing="2"
              >
                POWER PAGES
              </text>
              <text
                x="170"
                y="228"
                textAnchor="middle"
                fill="rgba(255,255,255,0.35)"
                fontSize="7.5"
                fontWeight="600"
                letterSpacing="2"
              >
                EXTERNAL USERS
              </text>

              {/* ── Data sources row ── */}
              {/* Dataverse */}
              <rect
                x="20"
                y="24"
                width="90"
                height="44"
                rx="6"
                fill="rgba(4,105,153,0.25)"
                stroke="#046999"
                strokeWidth="1.2"
              />
              <text
                x="65"
                y="43"
                textAnchor="middle"
                fill="#7ec8e3"
                fontSize="8"
                fontWeight="700"
              >
                Dataverse
              </text>
              <text
                x="65"
                y="56"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="6.5"
              >
                Native tables
              </text>

              {/* Dynamics 365 */}
              <rect
                x="125"
                y="24"
                width="90"
                height="44"
                rx="6"
                fill="rgba(4,105,153,0.15)"
                stroke="rgba(4,105,153,0.4)"
                strokeWidth="1.2"
              />
              <text
                x="170"
                y="43"
                textAnchor="middle"
                fill="#7ec8e3"
                fontSize="8"
                fontWeight="700"
              >
                Dynamics 365
              </text>
              <text
                x="170"
                y="56"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="6.5"
              >
                CRM / ERP data
              </text>

              {/* External sources */}
              <rect
                x="230"
                y="24"
                width="90"
                height="44"
                rx="6"
                fill="rgba(4,105,153,0.1)"
                stroke="rgba(4,105,153,0.3)"
                strokeWidth="1.2"
                strokeDasharray="4 2.5"
              />
              <text
                x="275"
                y="43"
                textAnchor="middle"
                fill="#7ec8e3"
                fontSize="8"
                fontWeight="700"
              >
                External APIs
              </text>
              <text
                x="275"
                y="56"
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)"
                fontSize="6.5"
              >
                Via virtual tables
              </text>

              {/* ── Connectors down to Power Pages ── */}
              {/* From Dataverse */}
              <line
                x1="65"
                y1="68"
                x2="65"
                y2="86"
                stroke="#046999"
                strokeWidth="1.5"
                strokeOpacity="0.7"
              />
              <line
                x1="65"
                y1="86"
                x2="150"
                y2="104"
                stroke="#046999"
                strokeWidth="1.5"
                strokeOpacity="0.7"
              />
              {/* From Dynamics */}
              <line
                x1="170"
                y1="68"
                x2="170"
                y2="104"
                stroke="#046999"
                strokeWidth="1.5"
                strokeOpacity="0.5"
                strokeDasharray="3 2"
              />
              {/* From External */}
              <line
                x1="275"
                y1="68"
                x2="275"
                y2="86"
                stroke="#046999"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                strokeDasharray="3 2"
              />
              <line
                x1="275"
                y1="86"
                x2="192"
                y2="104"
                stroke="#046999"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                strokeDasharray="3 2"
              />

              {/* ── Power Pages centre node ── */}
              <rect
                x="100"
                y="104"
                width="140"
                height="52"
                rx="8"
                fill="#046999"
              />
              <text
                x="170"
                y="126"
                textAnchor="middle"
                fill="#fff"
                fontSize="9.5"
                fontWeight="700"
              >
                Power Pages
              </text>
              <text
                x="170"
                y="140"
                textAnchor="middle"
                fill="rgba(255,255,255,0.72)"
                fontSize="6.8"
              >
                Auth · Permissions · Rendering
              </text>

              {/* ── Connectors down to users ── */}
              <line
                x1="130"
                y1="156"
                x2="80"
                y2="180"
                stroke="rgba(4,105,153,0.6)"
                strokeWidth="1.5"
              />
              <line
                x1="170"
                y1="156"
                x2="170"
                y2="180"
                stroke="rgba(4,105,153,0.6)"
                strokeWidth="1.5"
              />
              <line
                x1="210"
                y1="156"
                x2="260"
                y2="180"
                stroke="rgba(4,105,153,0.6)"
                strokeWidth="1.5"
              />

              {/* ── User role nodes ── */}
              {/* Customer */}
              <circle
                cx="80"
                cy="196"
                r="18"
                fill="rgba(255,255,255,0.07)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <text
                x="80"
                y="193"
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                fontSize="6.5"
                fontWeight="700"
              >
                Customer
              </text>
              <text
                x="80"
                y="203"
                textAnchor="middle"
                fill="rgba(255,255,255,0.45)"
                fontSize="6"
              >
                Self-service
              </text>

              {/* Supplier */}
              <circle
                cx="170"
                cy="196"
                r="18"
                fill="rgba(255,255,255,0.07)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <text
                x="170"
                y="193"
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                fontSize="6.5"
                fontWeight="700"
              >
                Supplier
              </text>
              <text
                x="170"
                y="203"
                textAnchor="middle"
                fill="rgba(255,255,255,0.45)"
                fontSize="6"
              >
                Own records
              </text>

              {/* Partner */}
              <circle
                cx="260"
                cy="196"
                r="18"
                fill="rgba(255,255,255,0.07)"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
              />
              <text
                x="260"
                y="193"
                textAnchor="middle"
                fill="rgba(255,255,255,0.8)"
                fontSize="6.5"
                fontWeight="700"
              >
                Partner
              </text>
              <text
                x="260"
                y="203"
                textAnchor="middle"
                fill="rgba(255,255,255,0.45)"
                fontSize="6"
              >
                Scoped access
              </text>

              {/* Role permission badge */}
              <rect
                x="108"
                y="218"
                width="124"
                height="22"
                rx="11"
                fill="rgba(4,105,153,0.3)"
                stroke="rgba(4,105,153,0.5)"
                strokeWidth="1"
              />
              <text
                x="170"
                y="233"
                textAnchor="middle"
                fill="#7ec8e3"
                fontSize="6.8"
                fontWeight="700"
                letterSpacing="0.5"
              >
                Row-level security enforced
              </text>
            </svg>
            <figcaption className={styles.figCaption}>
              Data flows from source to user — permissions enforced at every
              layer
            </figcaption>
          </figure>
        </div>

        {/* ── Feature callout strip ── */}
        <ul className={styles.callouts} aria-label="Data integration features">
          {callouts.map((c) => (
            <li key={c.id} className={styles.callout}>
              <span className={styles.calloutDot} aria-hidden="true" />
              <div>
                <strong className={styles.calloutLabel}>{c.label}</strong>
                <span className={styles.calloutSub}>{c.sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PPDataIntegration;
