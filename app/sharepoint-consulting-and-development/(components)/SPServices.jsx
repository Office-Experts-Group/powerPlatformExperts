// powerplatformexperts.com.au/sharepoint-consulting-and-development/(components)/SPServices.jsx

import Link from "next/link";
import SPServicesTabs from "./SPServicesTabs";
import styles from "../../../styles/spServices.module.css";

export const services = [
  {
    id: "implementation",
    label: "New implementation",
    tag: "Start fresh",
    intro:
      "For businesses with no existing SharePoint environment, or those moving off shared network drives, Google Drive, or other legacy tools.",
    body: "We can handle the entire setup: information architecture across hub sites, communication sites, and team sites; a permissions and governance framework built in from the start; branded intranet design; document libraries with metadata and content types; integration with Teams, Outlook, and OneDrive.",
    note: "The structure decisions made at setup are the ones you live with for years. Getting them right early is considerably cheaper than fixing them later.",
    points: [
      "Hub site & communication site architecture",
      "Permissions and governance framework",
      "Branded intranet design",
      "Document libraries with metadata & content types",
      "Teams, Outlook & OneDrive integration",
    ],
    link: null,
  },
  {
    id: "migration",
    label: "SharePoint migration",
    tag: "Time-sensitive",
    tagAlert: true,
    intro:
      "The most time-sensitive service we offer, given where Microsoft's end-of-support timelines currently sit.",
    body: "We handle migrations from SharePoint 2013, 2016, or 2019 to SharePoint Online; on-premises servers to hybrid or full cloud; file shares and network drives to SharePoint Online; Google Drive or Dropbox to SharePoint Online; and tenant-to-tenant migrations.",
    note: "Businesses on SharePoint 2016 are past end-of-support and receiving no security patches. The organisations that move first get more scheduling options and more time.",
    points: [
      "SharePoint 2013 / 2016 / 2019 → SharePoint Online",
      "On-premises to hybrid or full cloud",
      "File shares & network drives → SharePoint Online",
      "Google Drive / Dropbox → SharePoint Online",
      "Tenant-to-tenant migrations",
    ],
    link: null,
  },
  {
    id: "intranet",
    label: "Intranet design",
    tag: "Internal comms",
    intro:
      "For businesses that want a proper internal communications hub rather than a collection of disconnected sites nobody remembers to check.",
    body: "We build modern SharePoint intranets with branded design, news and announcements, staff directories, and org charts. Department sites sit under a hub site architecture so navigation is consistent and search works across everything. We embed Power BI dashboards directly in SharePoint pages where useful, and connect the intranet to Teams via Viva Connections so staff can reach it without switching apps.",
    note: "A well-designed intranet increases adoption. If staff don't use it, it doesn't matter how well it's built.",
    points: [
      "Branded design with news & announcements",
      "Staff directories and org charts",
      "Hub site architecture with consistent navigation",
      "Embedded Power BI dashboards",
      "Teams integration via Viva Connections",
    ],
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/power-bi/",
      label: "Power BI embedding services",
    },
  },
  {
    id: "development",
    label: "Custom development",
    tag: "When off-the-shelf isn't enough",
    intro: "When out-of-the-box SharePoint isn't enough.",
    body: "We build custom SPFx web parts and extensions, replace legacy InfoPath forms with modern equivalents, and embed Power Apps forms within SharePoint for more complex data capture. Document processing and metadata automation runs through SharePoint Premium and AI Builder. Where SharePoint needs to connect to other business systems, we build the integrations.",
    note: "Custom development scoped well upfront avoids the rebuild cost of an under-specified first attempt.",
    points: [
      "Custom SPFx web parts & extensions",
      "InfoPath form replacement",
      "Embedded Power Apps for complex data capture",
      "SharePoint Premium & AI Builder automation",
      "Third-party system integrations",
    ],
    link: {
      href: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps/",
      label: "Power Apps integration services",
    },
  },
  {
    id: "governance",
    label: "Governance & support",
    tag: "Ongoing",
    intro:
      "Governance is the part most SharePoint projects underinvest in. It's also the part that determines whether the environment stays usable in two years.",
    body: "We set up frameworks covering sharing policies, site lifecycle management, and permissions auditing. If a Microsoft 365 Copilot rollout is on the roadmap, this matters more than most people expect, now Copilot readiness depends on clean metadata, modern sites, and sensible permission controls. We configure the SharePoint Admin Agent, run readiness assessments, and can provide ongoing managed support.",
    note: "Most SharePoint environments degrade not from a single failure but from the accumulation of small, ungoverned decisions made over years.",
    points: [
      "Sharing policies & site lifecycle management",
      "Permissions auditing & remediation",
      "SharePoint Admin Agent configuration",
      "Copilot readiness assessments",
      "Ongoing managed support & health monitoring",
    ],
    link: null,
  },
];

const SPServices = () => {
  return (
    <section
      className={styles.section}
      aria-labelledby="sp-services-heading"
      id="services"
    >
      <div className={styles.inner}>
        {/* ── Section header ── */}
        <header className={styles.header}>
          <span className={styles.eyebrow}>What we do</span>
          <h2 id="sp-services-heading" className={styles.headline}>
            How we help
          </h2>
          <p className={styles.sub}>
            Five service lines, each scoped as a standalone engagement or
            combined depending on where your environment sits right now.
          </p>
        </header>

        {/* ── Tab interface — client component handles switching ── */}
        <SPServicesTabs services={services} />
      </div>
    </section>
  );
};

export default SPServices;
