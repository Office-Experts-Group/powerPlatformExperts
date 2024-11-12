import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Request a Quote - Power Platform Experts | Microsoft Power Platform Solutions",
  description:
    "Submit your Power Platform project requirements for a detailed quote. Specialists in Power BI, Power Apps, Power Automate, and Power Pages custom development and consulting services.",

  // OpenGraph
  openGraph: {
    title:
      "Request a Quote - Power Platform Experts | Custom Solutions & Consulting",
    description:
      "Get a detailed quote for your Microsoft Power Platform project. Expert consulting and development services for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Quote Request",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    // Quote-specific keywords
    "Power Platform consultation quote",
    "Power BI development cost estimate",
    "Power Apps custom solution pricing",
    "Power Automate implementation quote",
    "Power Pages development estimate",

    // Service-specific long tail
    "Power BI dashboard migration cost",
    "Power Apps business process automation quote",
    "Power Automate workflow optimization pricing",
    "Power Pages portal development estimate",
    "Power Platform system integration consultation",

    // Project-specific
    "Power BI financial dashboard quote",
    "Power Apps inventory system estimate",
    "Power Automate document workflow pricing",
    "Power Pages customer portal quote",
    "Power Platform enterprise solution cost",

    // Support-specific
    "Power BI technical support pricing",
    "Power Apps maintenance services quote",
    "Power Automate workflow support cost",
    "Power Pages hosting services estimate",
    "Power Platform ongoing support plans",

    // Location-specific
    "Power Platform consultants Sydney quote",
    "Power BI specialists Melbourne pricing",
    "Power Apps developers Brisbane estimate",
    "Power Platform experts Perth consultation",
    "Australian Power Platform services quote",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Request a Quote - Power Platform Experts | Custom Solutions",
    description:
      "Get a detailed quote for your Microsoft Power Platform project. Expert consulting and development services for all Power Platform components.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
  robots: {
    index: false,
    follow: false,
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
