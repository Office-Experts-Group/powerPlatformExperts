import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power BI Support",
  description: 'Expert Power BI support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from certified Microsoft specialists.',

  // OpenGraph
  openGraph: {
    title: "Microsoft Power BI Support",
    description: 'Expert Power BI support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from certified Microsoft specialists.',
    url: "https://www.powerplatformexperts.com.au/power-bi-support",
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
    "Microsoft Power BI Support",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power BI Support",
    description: 'Expert Power BI support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from certified Microsoft specialists.',
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-bi-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
