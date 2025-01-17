import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials – Power Platforms Experts",
  description:
    "Read what our clients say about our Microsoft Power Platform consulting services, including Power BI, Power Apps, Power Automate, and Power Pages solutions.",
  // OpenGraph
  openGraph: {
    title: "Client Testimonials - Power Platform Experts",
    description:
      "Read what our clients say about our Microsoft Power Platform consulting services, including Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/client-testimonials/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/logo.webp",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Testimonial-specific
    "power platform customer testimonials",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/client-testimonials/",
    languages: {
      "en-AU": "/services/microsoft-power-platform/client-testimonials/",
    },
  },
};

export default function ClientTestimonialsLayout({ children }) {
  return <>{children}</>;
}

ClientTestimonialsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
