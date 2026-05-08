// powerplatformexperts.com.au/components/PowerPages/PPVisualisation.jsx
"use client";

import { useState } from "react";

import { PowerBiMockup } from "../(svgs)/PowerBiMockup";
import { NativeMockup } from "../(svgs)/NativeMockup";
import { CustomMockup } from "../(svgs)/CustomMockup";

import styles from "../../../../../styles/ppVisualisation.module.css";

// ─────────────────────────────────────────────
// Tab data
// ─────────────────────────────────────────────
const tabs = [
  {
    id: "powerbi",
    label: "Power BI",
    heading: "Embedded dashboards, scoped by role",
    body: "Power Pages supports embedded Power BI reports, so authenticated users can see live dashboards without leaving your portal. You control which reports show to which roles.",
    detail:
      "Reports are embedded using the Power BI embedded API. Row-level security in Power BI maps to your portal web roles, so the same report serves multiple user types with each seeing only their permitted data.",
    tags: ["Power BI Embedded", "Row-level Security", "Live Data", "Web Roles"],
  },
  {
    id: "native",
    label: "Native grids & lists",
    heading: "Data views built directly in the studio",
    body: "Beyond Power BI, you can build data grids, charts, and filtered list views natively in Power Pages using Liquid templates and the built-in component framework.",
    detail:
      "Liquid templates give you full control over how Dataverse records are rendered. Sortable columns, filter panels, and paginated lists are all achievable within the low-code studio. Complex filtering logic can be handled server-side through FetchXML queries.",
    tags: ["Liquid Templates", "FetchXML", "Dataverse", "Low-code Studio"],
  },
  {
    id: "custom",
    label: "Custom visuals",
    heading: "JavaScript and web resources for anything else",
    body: "For more customised visuals, the platform accepts JavaScript and supports custom web resources, so there is room to extend well beyond what the low-code component library provides.",
    detail:
      "Chart.js, D3, or any CDN-hosted visualisation library can be loaded as a web resource. Custom HTML templates let you embed these alongside Dataverse data fetched via the Web API.",
    tags: ["JavaScript", "Chart.js / D3", "Web Resources", "Web API"],
  },
];

const mockups = {
  powerbi: PowerBiMockup,
  native: NativeMockup,
  custom: CustomMockup,
};

const PPVisualisation = () => {
  const [active, setActive] = useState("powerbi");
  const activeTab = tabs.find((t) => t.id === active);
  const Mockup = mockups[active];

  return (
    <section className={styles.section} id="visualisations">
      <div className={styles.inner}>
        {/* ── Section header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>Visualisations & Reporting</span>
          <h2 className={styles.headline}>
            Charts, dashboards, and live data on your site
          </h2>
          <p className={styles.intro}>
            There are three prominent ways to surface data visually inside a
            Power Pages portal, ranging from zero-code embedded reports to fully
            custom JavaScript visuals.
          </p>
        </header>

        {/* ── Tab strip ── */}
        <div
          className={styles.tabStrip}
          role="tablist"
          aria-label="Visualisation options"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              aria-controls={`tabpanel-${t.id}`}
              className={`${styles.tab} ${active === t.id ? styles.tabActive : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Content panel ── */}
        <div className={styles.panel} id={`tabpanel-${active}`} role="tabpanel">
          {/* Left: text */}
          <div className={styles.panelText}>
            <h3 className={styles.panelHeading}>{activeTab.heading}</h3>
            <p className={styles.panelBody}>{activeTab.body}</p>
            <p className={styles.panelDetail}>{activeTab.detail}</p>
            <ul className={styles.tags} aria-label="Technologies">
              {activeTab.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: SVG mockup */}
          <div className={styles.panelVisual}>
            <Mockup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PPVisualisation;
