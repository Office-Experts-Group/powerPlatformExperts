import React from "react";

export const metadata = {
  // Basic metadata
  title: "Save Multiple Records with a single click in Microsoft Power Apps",
  description:
  "In this tutorial, Marcello shows you how to use the Gallery control as a repeating table to simplify saving multiple records to a data source.",

  // OpenGraph
  openGraph: {
    title: "Save Multiple Records with a single click in Microsoft Power Apps",
    description:
    "In this tutorial, Marcello shows you how to use the Gallery control as a repeating table to simplify saving multiple records to a data source.",
    url: "https://www.powerplatformexperts.com.au/blog/multiple-records-with-power-apps",
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
    title: "Save Multiple Records with a single click in Microsoft Power Apps",
    description:
    "In this tutorial, Marcello shows you how to use the Gallery control as a repeating table to simplify saving multiple records to a data source.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/multiple-records-with-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
