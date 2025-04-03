import React from "react";

export const metadata = {
  // Basic metadata
  title: "Create Beautiful Pop-ups, Message and Model boxes in Microsoft PowerApps",
  description:
  "In this tutorial, Marcello shows you how to build and include beautiful looking custom dialog boxes in your Power Apps application.",

  // OpenGraph
  openGraph: {
    title: "Create Beautiful Pop-ups, Message and Model boxes in Microsoft PowerApps",
    description:
    "In this tutorial, Marcello shows you how to build and include beautiful looking custom dialog boxes in your Power Apps application.",
    url: "https://www.powerplatformexperts.com.au/blog/popups-in-power-apps",
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
    "Power Apps popups",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Create Beautiful Pop-ups, Message and Model boxes in Microsoft PowerApps",
    description:
    "In this tutorial, Marcello shows you how to build and include beautiful looking custom dialog boxes in your Power Apps application.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/popups-in-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
