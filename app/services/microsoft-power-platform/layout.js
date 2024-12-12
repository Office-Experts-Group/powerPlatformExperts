import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Professional Microsoft Power Platform Development Services",
  description:
    "Expert Microsoft Power Platform consultants delivering custom Power Apps, Power BI analytics, and Power Automate solutions. We create scalable, enterprise-grade automation and business intelligence solutions that transform your business processes and drive operational excellence.",

  openGraph: {
    title: "Professional Microsoft Power Platform Development Services",
    description:
      "Expert Microsoft Power Platform consultants delivering enterprise-grade Power Apps, Power BI analytics, and Power Automate solutions for business process transformation.",
    url: "https://powerplatformexperts.com/services/microsoft-power-platform/",
  },

  keywords: [
    // Specific service combinations
    "custom Power Apps development for enterprise businesses",
    "Power BI dashboard development for financial services",
    "Power Automate workflow automation for healthcare",
    "Power Platform solutions for manufacturing industry",
    "Power Pages portal development for customer service",

    // Process-specific
    "automated approval workflow development Power Platform",
    "custom business intelligence dashboard creation Power BI",
    "enterprise data visualization solutions Power Platform",
    "mobile app development with Power Apps canvas",
    "model-driven Power Apps for customer management",

    // Integration-focused
    "SharePoint Power Platform integration solutions",
    "Dynamics 365 Power Platform custom development",
    "Microsoft Teams Power Platform app development",
    "Azure SQL Power Platform integration services",

    // Location-specific
    "Power Platform consulting services Sydney",
    "Power Apps development NSW",
    "Power BI consulting services Melbourne",
    "Power Platform solutions Brisbane",
    "Power Automate development services Australia",
  ],

  canonical:
    "https://powerplatformexperts.com/services/microsoft-power-platform/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
