import React from "react";

export const metadata = {
  // Basic metadata
  title: "Build your app the Responsive way in Microsoft Power Apps",
  description:
  "In this tutorial, Marcello demonstrates the new Horizontal and Vertical Containers for Power Apps and how to easily use them to build Responsive apps.",

  // OpenGraph
  openGraph: {
    title: "Build your app the Responsive way in Microsoft Power Apps",
    description:
      "In this tutorial, Marcello demonstrates the new Horizontal and Vertical Containers for Power Apps and how to easily use them to build Responsive apps.",
    url: "https://www.powerplatformexperts.com.au/blog/responsive-power-apps",
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
    "responsive power apps",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Build your app the Responsive way in Microsoft Power Apps",
    description:
      "In this tutorial, Marcello demonstrates the new Horizontal and Vertical Containers for Power Apps and how to easily use them to build Responsive apps.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/responsive-power-apps",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
