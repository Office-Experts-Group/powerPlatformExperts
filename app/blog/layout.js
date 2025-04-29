import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Platform Experts Blog",
  description:
    "Explore expert tutorials, tips, and best practices for Microsoft Power Platform. Our experts share their knowledge to help you build better business solutions.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Experts Blog",
    description:
    "Explore expert tutorials, tips, and best practices for Microsoft Power Platform. Our experts share their knowledge to help you build better business solutions.",
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
    "Power Platform blog",
    "Power Apps tutorials",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Platform Experts Blog",
    description:
    "Explore expert tutorials, tips, and best practices for Microsoft Power Platform. Our experts share their knowledge to help you build better business solutions.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}