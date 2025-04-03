import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Platform Blog",
  description:
    "",

  // OpenGraph
  openGraph: {
    title: "Power Platform Experts Blog",
    description:
      "",
    url: "https://www.powerplatformexperts.com.au/blog",
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
    "Microsoft Power Platform blog",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Platform Experts Blog",
    description:
      "",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
