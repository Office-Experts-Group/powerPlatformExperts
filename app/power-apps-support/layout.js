import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Apps Support",
  description: 'Expert Power Apps support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Apps Support",
    description: 'Expert Power Apps support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',
    url: "https://www.powerplatformexperts.com.au/power-apps-support",
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
    "Microsoft Power Apps Support",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Apps Support",
    description: 'Expert Power Apps support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-apps-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
