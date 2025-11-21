import React from "react";

export const metadata = {
  // Basic metadata
  title: "How to Get Live MYOB & Xero Data into Power BI — No More Manual Exports",
  description:
    "Tired of CSV exports and stale reports? Learn how to connect live MYOB and Xero data into Power BI using modern OData feeds like OdataLink, plus implementation strategies from Power Platform Experts.",

  // OpenGraph
  openGraph: {
    title: "How to Get Live MYOB & Xero Data into Power BI — No More Manual Exports",
    description:
      "Tired of CSV exports and stale reports? Learn how to connect live MYOB and Xero data into Power BI using modern OData feeds like OdataLink, plus implementation strategies from Power Platform Experts.",
    url: "https://www.powerplatformexperts.com.au/blog/xero-to-power-bi",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "Xero Power BI",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "How to Get Live MYOB & Xero Data into Power BI — No More Manual Exports",
    description:
      "Tired of CSV exports and stale reports? Learn how to connect live MYOB and Xero data into Power BI using modern OData feeds like OdataLink, plus implementation strategies from Power Platform Experts.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/xero-to-power-bi",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}