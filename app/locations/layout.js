import React from "react";

export const metadata = {
  // Basic metadata
  title: "Australia's Trusted Power Platform Consultants | Find a Location",
  description:
    "Discover expert Power Platform consulting services across Australia. We offer remote and on-site support to meet your business needs, wherever you are.",

  // OpenGraph
  openGraph: {
    title: "Australia's Trusted Power Platform Consultants | Find a Location",
    description:
      "Discover expert Power Platform consulting services across Australia. We offer remote and on-site support to meet your business needs, wherever you are.",
    url: "https://www.powerplatformexperts.com.au/locations",
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
    // Location-based
    "Microsoft Power Platform consultant locations Australia",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Australia's Trusted Power Platform Consultants | Find a Location",
    description:
      "Discover expert Power Platform consulting services across Australia. We offer remote and on-site support to meet your business needs, wherever you are.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/locations",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
