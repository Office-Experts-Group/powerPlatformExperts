import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title:
    "Microsoft Power Apps Services | Custom Business App Development & Consulting",
  description:
    "Expert Power Apps development and consulting services specializing in custom business applications, workflow automation, and mobile solutions. Certified Microsoft Power Platform consultants delivering tailored apps for enhanced efficiency.",

  // OpenGraph
  openGraph: {
    title:
      "Power Apps Development & Consulting Services | Power Platform Experts",
    description:
      "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency. Expert consultants delivering tailored Microsoft Power Platform solutions.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps/",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts - Power Apps Services",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Extracted long-tail keywords from content
    "custom Power Apps workflow automation",
    "Office 365 Power Apps integration",
    "Power Apps mobile solution development",
    "cloud-based Power Apps consulting",
    "Power Apps data source integration",
    "custom business process automation apps",
    "Power Apps real-time collaboration solutions",
    "enterprise Power Apps security implementation",
    "Power Apps cross-device compatibility",
    "remote Power Apps development services",
    "Power Apps efficiency optimization",
    "custom Power Apps interface design",
    "Power Apps business process automation",
    "Power Platform workflow streamlining",
    "Power Apps data protection solutions",
    "mobile-first Power Apps development",
    "Power Apps cloud deployment services",
    "custom Power Apps training programs",
    "Power Apps system integration services",
    "Power Platform automation consulting",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@PowerPlatformExp",
    title:
      "Power Apps Development & Consulting Services | Power Platform Experts",
    description:
      "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency. Expert consultants delivering tailored Microsoft Power Platform solutions.",
    images: [
      "https://www.powerplatformexperts.com.au/wp-content/uploads/2023/09/microsoft-office-experts-group-logo.png",
    ],
  },

  // Additional tags

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps/",
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
