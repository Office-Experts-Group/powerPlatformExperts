import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Platform Support",
  description:
  "Power Platform support services for businesses of all sizes. We provide expert advice and training from certified professionals.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Platform Support",
    description:
    "Power Platform support services for businesses of all sizes. We provide expert advice and training from certified professionals.",
    url: "https://www.powerplatformexperts.com.au/power-platform-support",
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

  keywords: [
    "Microsoft Power PLatform Support",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Platform Support",
    description:
    "Power Platform support services for businesses of all sizes. We provide expert advice and training from certified professionals.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-platform-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
