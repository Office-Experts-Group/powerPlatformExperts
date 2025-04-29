import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Platform Integration Assessment",
  description:
    "Free assessment to evaluate your Power Platform skills. Get personalised recommendations for improving your Power BI, Apps, and Automate capabilities.",
  
  // OpenGraph
  openGraph: {
    title: "Power Platform Integration Assessment",
    description:
      "Free assessment to evaluate your Power Platform skills. Get personalised recommendations for improving your Power BI, Apps, and Automate capabilities.",
    url: "https://www.powerplatformexperts.com.au/power-platform-assessment",
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

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Platform Integration Assessment",
    description:
      "Free assessment to evaluate your Power Platform skills. Get personalised recommendations for improving your Power BI, Apps, and Automate capabilities.",
    images: ["/logo.png"],
  },

  // Additional metadata
  keywords: [
    "Power Platform Integration assessment",
  ],
  
  alternates: {
    canonical: "/power-platform-assessment",
  },
};

export default function PowerPlatformAssessmentLayout({ children }) {
  return <>{children}</>;
}