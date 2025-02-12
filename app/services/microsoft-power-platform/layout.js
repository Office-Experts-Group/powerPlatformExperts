import React from "react";

export const metadata = {
  title:
    " Microsoft Power Platform Development Services | Power Platform Experts",
  description:
    "Expert Microsoft Power Platform consultants delivering custom Power Apps, Power BI analytics, and Power Automate solutions. We create scalable, enterprise-grade automation and business intelligence solutions that transform your business processes and drive operational excellence.",

  openGraph: {
    title:
      " Microsoft Power Platform Development Services | Power Platform Experts",
    description:
      "Expert Microsoft Power Platform consultants delivering custom Power Apps, Power BI analytics, and Power Automate solutions. We create scalable, enterprise-grade automation and business intelligence solutions that transform your business processes and drive operational excellence.",
    url: "https://powerplatformexperts.com/services/microsoft-power-platform",
  },

  keywords: [
    "Microsoft Power Platform consulting services",
    // Specific service combinations
    // "custom Power Apps development for enterprise businesses",
    // "Power BI dashboard development for financial services",
    // "Power Automate workflow automation for healthcare",
    // "Power Platform solutions for manufacturing industry",
    // "Power Pages portal development for customer service",

    // // Process-specific
    // "automated approval workflow development Power Platform",
    // "custom business intelligence dashboard creation Power BI",
    // "enterprise data visualization solutions Power Platform",
    // "mobile app development with Power Apps canvas",
    // "model-driven Power Apps for customer management",

    // // Integration-focused
    // "SharePoint Power Platform integration solutions",
    // "Dynamics 365 Power Platform custom development",
    // "Microsoft Teams Power Platform app development",
    // "Azure SQL Power Platform integration services",

    // // Location-specific
    // "Power Platform consulting services Sydney",
    // "Power Apps development NSW",
    // "Power BI consulting services Melbourne",
    // "Power Platform solutions Brisbane",
    // "Power Automate development services Australia",
  ],
  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
    alternates: [
      {
        url: "https://officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
