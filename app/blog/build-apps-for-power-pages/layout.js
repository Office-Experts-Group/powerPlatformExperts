import React from "react";

export const metadata = {
  // Basic metadata
  title: "Build Apps for Power Pages",
  description:
  "In this tutorial, you will learn how to build web applications with only a limited amount of coding knowledge required using Power Pages, a powerful platform that lets you connect to any web service or API and design and customise your page layout using HTML and JavaScript.",

  // OpenGraph
  openGraph: {
    title: "Build Apps for Power Pages",
    description:
      "In this tutorial, you will learn how to build web applications with only a limited amount of coding knowledge required using Power Pages, a powerful platform that lets you connect to any web service or API and design and customise your page layout using HTML and JavaScript.",
    url: "https://www.powerplatformexperts.com.au/blog/build-apps-for-power-pages",
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
    "Build Apps for Power Pages",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Build Apps for Power Pages",
    description:
      "In this tutorial, you will learn how to build web applications with only a limited amount of coding knowledge required using Power Pages, a powerful platform that lets you connect to any web service or API and design and customise your page layout using HTML and JavaScript.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/build-apps-for-power-pages",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
