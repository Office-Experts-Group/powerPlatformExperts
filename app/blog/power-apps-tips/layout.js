import React from "react";

export const metadata = {
  // Basic metadata
  title: "Make your Power Apps Look Beautiful with Some Simple Techniques!",
  description:
  "In this tutorial, Marcello shows you how to turn any boring looking power app into a beautiful application!",

  // OpenGraph
  openGraph: {
    title: "Make your Power Apps Look Beautiful with Some Simple Techniques!",
    description:
      "In this tutorial, Marcello shows you how to turn any boring looking power app into a beautiful application!",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-tips",
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
    "Power Apps PDF Function",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Make your Power Apps Look Beautiful with Some Simple Techniques!",
    description:
      "In this tutorial, Marcello shows you how to turn any boring looking power app into a beautiful application!",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-apps-tips",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
