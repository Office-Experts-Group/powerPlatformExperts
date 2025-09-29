import React from "react";

export const metadata = {
  // Basic metadata
  title: "Excel to Power BI Migration Services | Power Platform Experts",
  description:
    "Migrate your spreadsheets to Power BI with our expert consultants. Unlock real-time dashboards, advanced analytics, and smarter business decisions.",

  // OpenGraph
  openGraph: {
    title: "Excel to Power BI Migration Services | Power Platform Experts",
    description:
      "Migrate your spreadsheets to Power BI with our expert consultants. Unlock real-time dashboards, advanced analytics, and smarter business decisions",
    url: "https://www.powerplatformexperts.com.au/excel-to-power-bi-migration",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  keywords: ["Excel to Power BI migration"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Excel to Power BI Migration Services | Power Platform Experts",
    description:
      "Migrate your spreadsheets to Power BI with our expert consultants. Unlock real-time dashboards, advanced analytics, and smarter business decisions. Based in Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/excel-to-power-bi-migration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
