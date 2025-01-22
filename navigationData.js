// Base URLs for different sites (change these for production)
const WORD_EXPERTS_URL = "https://word-experts.vercel.app";
const OFFICE_EXPERTS_URL = "https://office-experts.vercel.app";
const EXCEL_EXPERTS_URL = "https://excel-experts.vercel.app";
const POWER_PLATFORM_EXPERTS_URL = "https://power-platform-experts.vercel.app";
const ACCESS_EXPERTS_URL = "https://access-experts.vercel.app";

export const navigationData = {
  home: {
    label: "Home",
    href: "/",
    items: [
      {
        label: "Office Experts",
        href: OFFICE_EXPERTS_URL,
      },
      {
        label: "Excel Experts",
        href: EXCEL_EXPERTS_URL,
      },
      {
        label: "Power Platform Experts",
        href: "/",
      },
      {
        label: "Access Experts",
        href: ACCESS_EXPERTS_URL,
      },
      {
        label: "Word Experts",
        href: WORD_EXPERTS_URL,
      },
    ],
  },
  services: {
    label: "Services",
    items: [
      {
        label: "All Our Services",
        href: `${OFFICE_EXPERTS_URL}/services`,
      },
      {
        label: "Microsoft Power Platform",
        href: "/",
        items: [
          {
            label: "Microsoft Power Apps",
            href: `/services/microsoft-power-platform/microsoft-power-apps`,
          },
          {
            label: "Microsoft Power BI",
            href: `/services/microsoft-power-platform/microsoft-power-bi`,
          },
          {
            label: "Microsoft Power Automate",
            href: `/services/microsoft-power-platform/microsoft-power-automate`,
          },
          {
            label: "Microsoft Power Pages",
            href: `/services/microsoft-power-platform/microsoft-power-pages`,
          },
        ],
      },
      {
        label: "By Office Product",
        href: `${OFFICE_EXPERTS_URL}/services/by-office-product`,
        items: [
          {
            label: "Microsoft Office",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office`,
          },
          {
            label: "Microsoft Excel",
            href: EXCEL_EXPERTS_URL,
          },
          {
            label: "Microsoft Access",
            href: ACCESS_EXPERTS_URL,
          },
          {
            label: "Microsoft Word",
            href: WORD_EXPERTS_URL,
          },
          {
            label: "Microsoft PowerPoint",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-powerpoint`,
          },
          {
            label: "Microsoft Office 365",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office-365`,
          },
        ],
      },
      {
        label: "By Business Solution",
        href: `${OFFICE_EXPERTS_URL}/services/by-business-solution`,
        items: [
          {
            label: "VBA Macro Development",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/vba-macro-development`,
          },
          {
            label: "Custom Office Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/custom-office-solutions`,
          },
          {
            label: "Database Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/database-development-and-solutions`,
          },
          {
            label: "Online Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/online-solutions`,
          },
          {
            label: "Microsoft Cloud Based Solutions",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/cloud-based-solutions-with-azure`,
          },
          {
            label: "Dashboards",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/dashboards`,
          },
          {
            label: "3rd Party App or Office Integration",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/3rd-party-application-or-office-integration`,
          },
          {
            label: "Office and SQL Server",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/office-and-sql-server-integration`,
          },
          {
            label: "Upgrades and Migration",
            href: `${OFFICE_EXPERTS_URL}/services/microsoft-office/upgrades-and-migration`,
          },
          {
            label: "Add-in Creation",
            href: `${OFFICE_EXPERTS_URL}/services/by-business-solution/add-in-creation`,
          },
        ],
      },
    ],
  },
  aboutUs: {
    label: "About Us",
    items: [
      {
        label: "About Us",
        href: `${OFFICE_EXPERTS_URL}/about-us`,
      },
      {
        label: "Meet Our Team",
        href: "/meet-the-team",
      },
    ],
  },
  staticLinks: [
    {
      label: "Testimonials",
      href: "/client-testimonials",
    },
  ],
};
