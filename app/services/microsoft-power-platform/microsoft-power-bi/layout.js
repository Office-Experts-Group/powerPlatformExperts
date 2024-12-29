import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Power BI Services: Reporting, Charts and Dashboards | Power Platform Experts",
  description:
    "Expert Power BI consultancy services for real-time analytics, custom dashboard development, and data visualization. Transform your business data into actionable insights with our specialised Power BI solutions.",

  // OpenGraph
  openGraph: {
    title: "Power BI Consulting & Dashboard Development Services",
    description:
      "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualization solutions. Expert consultants delivering tailored Power BI solutions across Australia.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
  },

  // Additional metadata
  keywords: [
    // Core Service Keywords
    "Power BI dashboard development Australia",
    "custom Power BI report creation",
    "real-time data visualization services",

    // Specific Solution Keywords
    "Power BI sales trend analysis",
    "inventory tracking dashboards",
    "customer behavior analytics Power BI",
    "financial reporting Power BI solutions",

    // Technical Keywords
    "Power BI data source integration",
    "drill-through dashboard development",
    "Power BI data modeling services",

    // Location-Based
    "Power BI consultants Sydney",
    "Melbourne Power BI specialists",
    "Brisbane data visualization experts",
    "Perth business intelligence services",

    // Service-Level
    "Power BI training and support",
    "end-to-end BI implementation",
    "Power BI system integration",
  ],

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
