// powerplatformexperts.com.au/components/PowerPages/PPSecurity.jsx
"use client";

import { useState } from "react";
import styles from "../../../../../styles/ppSecurity.module.css";

import { PermissionStackSvg } from "../(svgs)/PermissionStackSvg";

// ─────────────────────────────────────────────
// Security layer data — rendered bottom-up in SVG,
// top-down in the detail list
// ─────────────────────────────────────────────
const layers = [
  {
    id: "auth",
    index: "01",
    label: "Authentication",
    short: "Azure AD · Azure AD B2C · Social / local",
    detail:
      "Authentication options include Azure AD for internal users or B2B, Azure AD B2C for external customer accounts, and a range of social and federated identity providers. Local contact authentication is also available for simpler username/password setups.",
    svgY: 30,
    svgFill: "#046999",
    svgTextFill: "#fff",
  },
  {
    id: "webroles",
    index: "02",
    label: "Web Roles",
    short: "Who is allowed to do what",
    detail:
      "Web roles group authenticated users by their access level, be it customer, partner, admin, or any custom role you define. Every permission in the system is attached to a web role, not to individual users.",
    svgY: 80,
    svgFill: "#0a4f72",
    svgTextFill: "#fff",
  },
  {
    id: "table",
    index: "03",
    label: "Table Permissions",
    short: "Which Dataverse tables each role can read, write, or delete",
    detail:
      "Table permissions define exactly which Dataverse tables a given web role can read, create, edit, or delete. A supplier role might have read-only access to order records and write access to delivery confirmations — nothing else.",
    svgY: 130,
    svgFill: "#0d6e9e",
    svgTextFill: "#fff",
  },
  {
    id: "column",
    index: "04",
    label: "Column Permissions",
    short: "Hide sensitive fields from users who can see the record",
    detail:
      "Column-level permissions let you hide sensitive fields like cost prices, internal notes, or margin data from users who are permitted to view the rest of the record. The most granular layer of access control in the platform.",
    svgY: 180,
    svgFill: "#e8f4fa",
    svgTextFill: "#046999",
  },
];

const callouts = [
  { label: "Azure AD and Azure AD B2C authentication" },
  { label: "Table and column-level permissions" },
  { label: "Web roles for fine-grained access control" },
  { label: "DLP policy enforcement through Power Platform admin centre" },
];

// ─────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────
const PPSecurity = () => {
  const [activeLayer, setActiveLayer] = useState("auth");
  const active = layers.find((l) => l.id === activeLayer);

  return (
    <section className={styles.section} id="security">
      <div className={styles.inner}>
        {/* ── Header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Security & Governance</span>
          <h2 className={styles.headline}>
            Security that actually <span className={styles.accent}>scales</span>
          </h2>
          <p className={styles.intro}>
            Power Pages inherits Microsoft&rsquo;s security model, which is one
            of its strongest arguments for enterprise use. Access is controlled
            at four distinct layers, each one independently configurable.
          </p>
        </header>

        {/* ── Main grid: layer picker left, detail right ── */}
        <div className={styles.grid}>
          {/* Left: SVG stack diagram */}
          <div className={styles.diagramCol}>
            <PermissionStackSvg activeId={activeLayer} />
          </div>

          {/* Right: layer selector + detail */}
          <div className={styles.detailCol}>
            <p className={styles.selectPrompt}>
              Select a layer to see how it works
            </p>

            <ol className={styles.layerList}>
              {layers.map((l) => {
                const isActive = activeLayer === l.id;
                return (
                  <li key={l.id}>
                    <button
                      className={`${styles.layerBtn} ${isActive ? styles.layerBtnActive : ""}`}
                      onClick={() => setActiveLayer(l.id)}
                      aria-pressed={isActive}
                    >
                      <span className={styles.layerIndex}>{l.index}</span>
                      <span className={styles.layerLabel}>{l.label}</span>
                      <svg
                        className={styles.layerChevron}
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.5 2.5L8 6l-3.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {/* Inline detail drawer — CSS max-height transition */}
                    <div
                      className={`${styles.layerDetail} ${isActive ? styles.layerDetailOpen : ""}`}
                    >
                      <p>{active?.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Governance note */}
            <aside className={styles.govNote}>
              <strong>Governance</strong>
              <p>
                Power Pages sites sit inside your Power Platform environment, so
                your existing DLP policies, admin controls, and audit logging
                all apply without any additional configuration.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPSecurity;
