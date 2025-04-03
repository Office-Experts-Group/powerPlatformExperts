import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Apps Data Validation - The Best Way to do it!",
  description:
  "In this tutorial, Marcello shares his secret way to implement data validation on form fields, controls and basically everything else in Power Apps. This is the simplest and still technically best way of controlling how and when a user can input data into a form or input fields in your Power Apps application. ",

  // OpenGraph
  openGraph: {
    title: "Power Apps Data Validation - The Best Way to do it!",
    description:
    "In this tutorial, Marcello shares his secret way to implement data validation on form fields, controls and basically everything else in Power Apps. This is the simplest and still technically best way of controlling how and when a user can input data into a form or input fields in your Power Apps application. ",
    url: "https://www.powerplatformexperts.com.au/blog/power-apps-data-validation",
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
    "Power Apps Data Validation",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Apps Data Validation - The Best Way to do it!",
    description:
    "In this tutorial, Marcello shares his secret way to implement data validation on form fields, controls and basically everything else in Power Apps. This is the simplest and still technically best way of controlling how and when a user can input data into a form or input fields in your Power Apps application. ",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-apps-data-validation",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
