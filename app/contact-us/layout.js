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
  },

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

    // Company details
    "Brayalei Pty Ltd Power Platform services",
    "Microsoft certified Power Platform consultants",
    "Australian Power Platform experts contact",
    "Professional Power Platform consulting",
  ],

  canonical: "https://www.powerplatformexperts.com.au/contact-us/",
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
