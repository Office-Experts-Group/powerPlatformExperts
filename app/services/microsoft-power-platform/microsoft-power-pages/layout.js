import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Services | Custom Web Solutions & Development",
  description:
    "Expert Power Pages consulting services for creating secure, responsive business websites with seamless data integration, interactive visuals, and AI-powered insights. Specialists in cross-device compatibility and governance solutions.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Services | Web Development & Consulting",
    description:
      "Professional Power Pages development and consulting services specialising in responsive business websites, data integration, and secure web solutions with cross-browser compatibility.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
  },

  // Additional metadata
  keywords: [
    // Core Power Pages specific keywords (extracted from content)
    "Power Pages cross-device compatibility",
    "Power Pages data integration solutions",
    "Power Pages security governance implementation",
    "Interactive Power Pages visuals development",
    "Power Pages AI-powered insights configuration",
    "Custom Power Pages web development",

    // Integration specific (based on content)
    "Power Pages Power BI integration",
    "Power Pages Power Apps connectivity",
    "Power Pages Power Platform integration",
    "Power Pages Power Query implementation",

    // Feature specific (from content analysis)
    "Power Pages role-based security setup",
    "Power Pages data visualisation tools",
    "Power Pages Python integration services",
    "Power Pages mobile optimisation",

    // Service specific (based on provided services)
    "Power Pages consultant Australia",
    "Remote Power Pages development",
    "Power Pages training services Sydney",
    "Custom Power Pages solutions Melbourne",
    "Power Pages support services Australia",

    // Technical capabilities (from content)
    "Power Pages dashboard development",
    "Power Pages data source connectivity",
    "Power Pages collaborative features",
    "Power Pages security protocols",
    "Power Pages governance framework",
  ],

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
