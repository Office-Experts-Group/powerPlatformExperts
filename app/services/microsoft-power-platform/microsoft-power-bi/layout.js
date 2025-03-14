import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power BI Services | Power Platform Experts",
  description:
    "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualisation solutions.",
  // OpenGraph
  openGraph: {
    title: "Microsoft Power BI Services | Power Platform Experts",
    description:
      "Professional Power BI services including custom dashboard creation, real-time analytics implementation, and data visualisation solutions.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["Power BI dashboard development Australia"],
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-bi",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
