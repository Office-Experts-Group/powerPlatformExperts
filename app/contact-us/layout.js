import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Contact Us - Power Platform Experts | Microsoft Power Platform Consulting",
  description:
    "Get in touch with Power Platform Experts for specialized Microsoft Power Platform consulting services. Professional support for Power BI, Power Apps, Power Automate, and Power Pages development across Australia.",

  // OpenGraph
  openGraph: {
    title:
      "Contact Power Platform Experts | Microsoft Power Platform Consulting",
    description:
      "Connect with Australia's leading Microsoft Power Platform consultants. Expert consulting for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Contact",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Contact-specific keywords
    "Power Platform consultation booking",
    "Microsoft Power Platform support Australia",
    "Power BI implementation consultation",
    "Power Apps development inquiry",
    "Power Automate workflow consultation",

    // Service-specific contact keywords
    "Power BI dashboard consultation request",
    "Power Apps custom development quote",
    "Power Automate workflow assessment",
    "Power Pages website consultation",

    // Location-based contact
    "Sydney Power Platform consultants contact",
    "Melbourne Power BI consultation",
    "Brisbane Power Apps developers contact",
    "Perth Power Platform experts inquiry",

    // Business-specific
    "enterprise Power Platform solutions quote",
    "business automation consultation",
    "Power Platform integration assessment",
    "Power BI reporting consultation",

    // Support-specific
    "Power Platform technical support Australia",
    "Power BI dashboard support request",
    "Power Apps maintenance consultation",
    "Power Automate workflow support",

    // Company details
    "Brayalei Pty Ltd Power Platform services",
    "Microsoft certified Power Platform consultants",
    "Australian Power Platform experts contact",
    "Professional Power Platform consulting",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title:
      "Contact Power Platform Experts | Microsoft Power Platform Solutions",
    description:
      "Get in touch with Australia's leading Microsoft Power Platform consultants for expert consulting in Power BI, Power Apps, Power Automate, and Power Pages.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.powerplatformexperts.com.au/contact-us/",
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

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
