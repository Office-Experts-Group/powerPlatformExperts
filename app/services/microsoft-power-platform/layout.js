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
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-US",
    type: "website",
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

    // Industry and solution specific
    "healthcare Power Platform automation solutions",
    "financial services Power BI reporting solutions",
    "manufacturing process automation Power Platform",
    "retail inventory management Power Apps solution",
    "professional services automation Power Platform",

    // Location-specific
    "Power Platform consulting services United States",
    "Power Apps development company New York",
    "Power BI consulting services California",
    "Power Platform solutions Texas",
    "Power Automate development services Florida",
  ],

  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Professional Microsoft Power Platform Development Services",
    description:
      "Expert Microsoft Power Platform consultants delivering enterprise-grade Power Apps, Power BI analytics, and Power Automate solutions.",
    images: ["/logo.png"],
  },

  canonical:
    "https://powerplatformexperts.com/services/microsoft-power-platform/",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

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
