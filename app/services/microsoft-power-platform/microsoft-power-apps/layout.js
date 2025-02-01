import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Power Apps Development & Consulting Services | Power Platform Experts",
  description:
    "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency. Expert consultants delivering tailored Microsoft Power Platform solutions.",

  // OpenGraph
  openGraph: {
    title:
      "Power Apps Development & Consulting Services | Power Platform Experts",
    description:
      "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency. Expert consultants delivering tailored Microsoft Power Platform solutions.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
    siteName: "Power Platform Experts",
  },

  // Additional metadata
  keywords: [
    // Extracted long-tail keywords from content
    "custom Power Apps workflow automation",
    // "Office 365 Power Apps integration",
    // "Power Apps mobile solution development",
    // "cloud-based Power Apps consulting",
    // "Power Apps data source integration",
    // "custom business process automation apps",
    // "Power Apps real-time collaboration solutions",
    // "enterprise Power Apps security implementation",
    // "Power Apps cross-device compatibility",
    // "remote Power Apps development services",
    // "Power Apps efficiency optimization",
    // "custom Power Apps interface design",
    // "Power Apps business process automation",
    // "Power Platform workflow streamlining",
    // "Power Apps data protection solutions",
    // "mobile-first Power Apps development",
    // "Power Apps cloud deployment services",
    // "custom Power Apps training programs",
    // "Power Apps system integration services",
    // "Power Platform automation consulting",
  ],

  metadataBase: new URL("https://www.powerplatformexperts.com.au"),
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-apps",
    languages: {
      "en-AU": "/services/microsoft-power-platform/microsoft-power-apps",
    },
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
