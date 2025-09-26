import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Power BI Data Integration Services | Power Platform Experts Australia",
  description:
    "Unlock the full potential of your business data with expert Power BI data integration services. We connect all your data sources for smarter insights.",

  // OpenGraph
  openGraph: {
    title:
      "Power BI Data Integration Services | Power Platform Experts Australia",
    description:
      "Unlock the full potential of your business data with expert Power BI data integration services. We connect all your data sources for smarter insights.",
    url: "https://www.powerplatformexperts.com.au/power-bi-data-integration",
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

  keywords: ["Power BI Data Integration"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title:
      "Power BI Data Integration Services | Power Platform Experts Australia",
    description:
      "Unlock the full potential of your business data with expert Power BI data integration services. We connect all your data sources for smarter insights. Based in Australia.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-bi-data-integration",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
