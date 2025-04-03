import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Apps Global Variables - Stop Using Them!",
  description:
  "In this tutorial, we will explore the benefits of using the With function in Power Apps over using global variables and the Set function. The With function is a powerful tool that allows you to make multiple changes to your app in a single function, rather than making each change individually.",

  // OpenGraph
  openGraph: {
    title: "Power Apps Global Variables - Stop Using Them!",
    description:
    "In this tutorial, we will explore the benefits of using the With function in Power Apps over using global variables and the Set function. The With function is a powerful tool that allows you to make multiple changes to your app in a single function, rather than making each change individually.",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-global-variables",
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
    "Power Apps Global Variables",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Apps Global Variables - Stop Using Them!",
    description:
    "In this tutorial, we will explore the benefits of using the With function in Power Apps over using global variables and the Set function. The With function is a powerful tool that allows you to make multiple changes to your app in a single function, rather than making each change individually.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-apps-global-variables",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
