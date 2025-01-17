import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Power Platform Experts ",
  description:
    "Get a detailed quote for your Microsoft Power Platform project. Expert consulting and development services for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
  // OpenGraph
  openGraph: {
    title: "Request a Quote | Power Platform Experts ",
    description:
      "Get a detailed quote for your Microsoft Power Platform project. Expert consulting and development services for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us/request-a-quote/",
  },

  // Additional metadata
  keywords: [
    // Quote-specific keywords
    "Power Platform consultation quote",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/contact-us/request-a-quote/",
    languages: {
      "en-AU": "/services/microsoft-power-platform/contact-us/request-a-quote/",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
