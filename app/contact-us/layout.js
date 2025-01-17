import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Power Platform Experts",
  description:
    "Connect with Australia's leading Microsoft Power Platform consultants. Expert consulting for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
  // OpenGraph
  openGraph: {
    title: "Contact Us | Power Platform Experts",
    description:
      "Connect with Australia's leading Microsoft Power Platform consultants. Expert consulting for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us/",
  },

  keywords: [
    // Contact-specific keywords
    "Power Platform consultation booking",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/contact-us/",
    languages: {
      "en-AU": "/services/microsoft-power-platform/contact-us/",
    },
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}

ContactLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
