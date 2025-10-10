import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power BI for Financial Services",
  description:
    "Discover how Power BI transforms financial services with real-time dashboards, compliance reporting, and data-driven insights.",

  // OpenGraph
  openGraph: {
    title: "Power BI for Financial Services",
    description:
      "Discover how Power BI transforms financial services with real-time dashboards, compliance reporting, and data-driven insights.",
    url: "https://www.powerplatformexperts.com.au/blog/power-bi-for-financial-services",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: ["power bi financial services"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power BI for Financial Services",
    description:
      "Discover how Power BI transforms financial services with real-time dashboards, compliance reporting, and data-driven insights.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-bi-for-financial-services",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
