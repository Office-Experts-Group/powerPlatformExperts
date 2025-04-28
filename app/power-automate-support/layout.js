import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Automate Support",
  description: 'Expert Power Automate support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Automate Support",
    description: 'Expert Power Automate support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',
    url: "https://www.powerplatformexperts.com.au/power-automate-support",
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
    "Microsoft Power Automate Support",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Microsoft Power Automate Support",
    description: 'Expert Power Automate support services for Australian businesses. Troubleshooting, optimisation, and ongoing maintenance from Microsoft specialists.',
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-automate-support",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
