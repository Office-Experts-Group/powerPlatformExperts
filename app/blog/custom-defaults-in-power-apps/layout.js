import React from "react";

export const metadata = {
  // Basic metadata
  title: "Custom Default Value in Microsoft Power Apps",
  description:
  "In this tutorial, Marcello shows you how to set a custom / first value for your drop down fields that are connected to a data source.",

  // OpenGraph
  openGraph: {
    title: "Custom Default Value in Microsoft Power Apps",
    description:
    "In this tutorial, Marcello shows you how to set a custom / first value for your drop down fields that are connected to a data source.",
    url: "https://www.powerplatformexperts.com.au/blog/custom-defaults-in-power-apps",
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
    "Custom default value in power apps",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Custom Default Value in Microsoft Power Apps",
    description:
    "In this tutorial, Marcello shows you how to set a custom / first value for your drop down fields that are connected to a data source.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/custom-defaults-in-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
