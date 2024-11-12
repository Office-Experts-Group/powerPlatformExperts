import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Client Testimonials – Power Platforms Experts – Microsoft Power Platforms Design, Development and Consulting",
  description:
    "We are grateful to our clients for providing the following references and feedback for our consultants and our services.",

  // OpenGraph
  openGraph: {
    title: "Client Testimonials - Power Platform Experts",
    description:
      "Read what our clients say about our Microsoft Power Platform consulting services, including Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/client-testimonials/",
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
    // Testimonial-specific
    "power platform customer testimonials",
    "power bi implementation reviews",
    "power apps client feedback",
    "power automate success stories",
    "power pages customer experiences",

    // Service-specific testimonials
    "power bi dashboard success stories",
    "custom power apps testimonials",
    "power automate workflow reviews",
    "power platform integration feedback",
    "business automation case studies",

    // Industry-specific reviews
    "enterprise power platform testimonials",
    "corporate power bi testimonials",
    "business power apps feedback",
    "power automate client reviews",
    "power platform consulting reviews",

    // Location-based testimonials
    "australian power platform testimonials",
    "sydney power bi client reviews",
    "melbourne power apps feedback",
    "brisbane power automate reviews",
    "perth power platform testimonials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title: "Client Testimonials - Power Platform Experts",
    description:
      "Read what our clients say about our Microsoft Power Platform consulting services.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical: "https://www.powerplatformexperts.com.au/client-testimonials/",
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
