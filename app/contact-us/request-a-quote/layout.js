import React from "react";

export const metadata = {
  // Basic metadata
  title: "Request a Quote | Power Platform Experts",
  description:
    "Get expert quotes for your Power Platform projects. Specialised consulting for Power BI, Apps, Automate, and Pages to transform your business processes.",

  // OpenGraph
  openGraph: {
    title: "Request a Quote | Power Platform Experts",
    description:
      "Get expert quotes for your Power Platform projects. Specialised consulting for Power BI, Apps, Automate, and Pages to transform your business processes.",
    url: "https://www.powerplatformexperts.com.au/contact-us/request-a-quote",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 620,
        alt: "Power Platform Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "website",
  },

  // Twitter Card (added)
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Request a Quote | Power Platform Experts",
    description:
      "Get expert quotes for your Power Platform projects. Specialised consulting for Power BI, Apps, Automate, and Pages to transform your business processes.",
    images: ["/logo.png"],
  },

  // Additional metadata
  keywords: [
    "Power Platform consultation quote",
  ],
  
  alternates: {
    canonical: "/contact-us/request-a-quote",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
