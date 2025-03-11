import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Platform Consultants Wollongong",
  description:
    "Leading Power Platform consultants in Wollongong. For over 25yrs Powerplatfom Experts have supercharged business efficiency with power bi, power automate, pages, apps and the entire Office suite  ",

  // OpenGraph
  openGraph: {
    title: "Power Platform Consultants Wollongong",
    description:
      "Leading Power Platform consultants in Wollongong. For over 25yrs Powerplatfom Experts have supercharged business efficiency with power bi, power automate, pages, apps and the entire Office suite  ",
    url: "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
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
    // Location-specific
    "Power Platform consultants Wollongong",
  ],

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "Power Platform Consultants Wollongong",
    description:
      "Leading Power Platform consultants in Wollongong. For over 25yrs Powerplatfom Experts have supercharged business efficiency with power bi, power automate, pages, apps and the entire Office suite  ",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "/power-platform-consultants-wollongong",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
