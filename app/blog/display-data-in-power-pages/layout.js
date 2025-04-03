import React from "react";

export const metadata = {
  // Basic metadata
  title: "Display data in Power Pages",
  description:
    "I will show you how I built a custom page in Microsoft Power Pages with a custom built Power Apps like gallery using JavaScript, HTML, CSS and using the Dataverse WEBAPI",

  // OpenGraph
  openGraph: {
    title: "Display data in Power Pages",
    description:
      "I will show you how I built a custom page in Microsoft Power Pages with a custom built Power Apps like gallery using JavaScript, HTML, CSS and using the Dataverse WEBAPI",
    url: "https://www.powerplatformexperts.com.au/blog/display-data-in-power-pages",
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
    "Display data in Power Pages",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Display data in Power Pages",
    description:
      "I will show you how I built a custom page in Microsoft Power Pages with a custom built Power Apps like gallery using JavaScript, HTML, CSS and using the Dataverse WEBAPI",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/display-data-in-power-pages",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
