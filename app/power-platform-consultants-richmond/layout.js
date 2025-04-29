import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Platform Consultants Richmond",
  description:
  "Richmond's leading Power Platform consultants. 25+ years helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Consultants Richmond",
    description:
    "Richmond's leading Power Platform consultants. 25+ years helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
    url: "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
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

  // Additional metadata
  keywords: [
    // Location-specific
    "Power Platform consultants Richmond",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Platform Consultants Richmond",
    description:
    "Richmond's leading Power Platform consultants. 25+ years helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-platform-consultants-richmond",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
