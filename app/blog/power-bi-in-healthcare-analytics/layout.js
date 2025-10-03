import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Power BI in Healthcare Analytics: Transforming Patient Outcomes with Data",
  description:
    "Discover how Power BI is revolutionising healthcare analytics. Learn how hospitals and healthcare providers use real-time dashboards to improve patient outcomes, reduce readmissions, and optimise resource allocation.",

  // OpenGraph
  openGraph: {
    title:
      "Power BI in Healthcare Analytics: Transforming Patient Outcomes with Data",
    description:
      "Discover how Power BI is revolutionising healthcare analytics. Learn how hospitals and healthcare providers use real-time dashboards to improve patient outcomes, reduce readmissions, and optimise resource allocation.",
    url: "https://www.powerplatformexperts.com.au/blog/power-bi-in-healthcare-analytics",
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
    type: "article",
  },

  // Additional metadata
  keywords: ["power bi healthcare analytics"],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power BI in Healthcare Analytics: Transforming Patient Outcomes",
    description:
      "Discover how Power BI is revolutionizing healthcare analytics with real-time dashboards that improve patient outcomes and optimize hospital operations.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-bi-in-healthcare-analytics",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
