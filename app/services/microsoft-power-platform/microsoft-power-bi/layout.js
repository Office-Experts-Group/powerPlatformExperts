import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Power BI Services: Reporting, Charts and Dashboards | Power Platform Experts",
  description:
    "Expert Power BI consultancy services for real-time analytics, custom dashboard development, and data visualization. Transform your business data into actionable insights with our specialized Power BI solutions.",

  // OpenGraph
  openGraph: {
    title: "Power BI Consulting & Dashboard Development Services",
    description:
      "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualization solutions. Expert consultants delivering tailored Power BI solutions across Australia.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Power BI Services",
      },
    ],
    locale: "en-AU",
    type: "article",
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
    "cross-platform analytics solutions",

    // Industry-Specific
    "business intelligence consulting Australia",
    "enterprise data visualization",
    "Power BI healthcare analytics",
    "retail analytics Power BI solutions",

    // Feature-Specific
    "real-time Power BI dashboard updates",
    "interactive data visualization",
    "Power BI mobile reporting solutions",
    "automated report generation Power BI",

    // Location-Based
    "Power BI consultants Sydney",
    "Melbourne Power BI specialists",
    "Brisbane data visualization experts",
    "Perth business intelligence services",

    // Service-Level
    "Power BI training and support",
    "end-to-end BI implementation",
    "Power BI system integration",
    "custom analytics solution development",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Power BI Consulting & Dashboard Development Services",
    description:
      "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualization solutions. Expert consultants delivering tailored Power BI solutions across Australia.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
