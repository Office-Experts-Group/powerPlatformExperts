import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power BI Licensing Costs Spiraling? The Hidden Expenses Killing Your ROI",
  description:
    "Discover why 40% of businesses overpay for Power BI licenses. Learn the hidden costs, break-even points, and smart licensing strategies that could save your business.",

  // OpenGraph
  openGraph: {
    title: "Power BI Licensing Costs Spiraling? The Hidden Expenses Killing Your ROI",
    description:
      "Discover why 40% of businesses overpay for Power BI licenses. Learn the hidden costs, break-even points, and smart licensing strategies that could save your business.",
    url: "https://www.powerplatformexperts.com.au/blog/power-bi-licensing-costs",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Additional metadata
  keywords: [
    "power bi licensing costs",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power BI Licensing Costs Spiraling? The Hidden Expenses Killing Your ROI",
    description:
      "Discover why 40% of businesses overpay for Power BI licenses. Learn the hidden costs, break-even points, and smart licensing strategies that could save your business.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/blog/power-bi-licensing-costs",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}