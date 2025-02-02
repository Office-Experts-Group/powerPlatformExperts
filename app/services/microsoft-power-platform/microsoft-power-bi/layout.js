import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power BI Services | Power Platform Experts",
  description:
    "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualisation solutions. Expert consultants delivering tailored Power BI solutions across Australia.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Power BI Services | Power Platform Experts",
    description:
      "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualisation solutions. Expert consultants delivering tailored Power BI solutions across Australia.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
  },

  // Additional metadata
  keywords: [
    // Core Service Keywords
    "Power BI dashboard development Australia",
    // "custom Power BI report creation",
    // "real-time data visualization services",

    // // Specific Solution Keywords
    // "Power BI sales trend analysis",
    // "inventory tracking dashboards",
    // "customer behavior analytics Power BI",
    // "financial reporting Power BI solutions",

    // // Technical Keywords
    // "Power BI data source integration",
    // "drill-through dashboard development",
    // "Power BI data modeling services",

    // // Location-Based
    // "Power BI consultants Sydney",
    // "Melbourne Power BI specialists",
    // "Brisbane data visualization experts",
    // "Perth business intelligence services",

    // // Service-Level
    // "Power BI training and support",
    // "end-to-end BI implementation",
    // "Power BI system integration",
  ],
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
