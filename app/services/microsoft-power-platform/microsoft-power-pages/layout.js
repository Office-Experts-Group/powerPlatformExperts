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
      "Professional Power Pages development and consulting services specializing in responsive business websites, data integration, and secure web solutions with cross-browser compatibility.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
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
    "Power Pages data visualization tools",
    "Power Pages R integration development",
    "Power Pages Python integration services",
    "Power Pages mobile optimization",

    // Service specific (based on provided services)
    "Power Pages consultant Australia",
    "Remote Power Pages development",
    "Power Pages training services",
    "Custom Power Pages solutions",
    "Power Pages support services",

    // Technical capabilities (from content)
    "Power Pages dashboard development",
    "Power Pages data source connectivity",
    "Power Pages collaborative features",
    "Power Pages security protocols",
    "Power Pages governance framework",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Microsoft Power Pages Services | Web Development & Consulting",
    description:
      "Professional Power Pages development and consulting services specializing in responsive business websites, data integration, and secure web solutions with cross-browser compatibility.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
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
