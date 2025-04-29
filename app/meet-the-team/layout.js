import React from "react";

export const metadata = {
  // Basic metadata
  title: "Power Platform Consulting Team | Experts in Power BI, Apps, Automate & Pages",
  description:
    "Meet our expert Power Platform consultants. Specialists in Power BI, Power Apps, Power Automate, and Power Pages, helping businesses thrive across Australia.",

  // OpenGraph
  openGraph: {
    title: "Power Platform Consulting Team | Experts in Power BI, Apps, Automate & Pages",
    description:
      "Meet our expert Power Platform consultants. Specialists in Power BI, Power Apps, Power Automate, and Power Pages, helping businesses thrive across Australia.",
    url: "https://www.powerplatformexperts.com.au/meet-the-team",
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

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      site: "@OfficeExpertsG1",
      title: "Power Platform Consulting Team | Experts in Power BI, Apps, Automate & Pages",
      description:
        "Meet our expert Power Platform consultants. Specialists in Power BI, Power Apps, Power Automate, and Power Pages, helping businesses thrive across Australia.",
      images: ["/logo.png"],
    },

  // Additional metadata
  keywords: ["Power Platform expert development team"],
  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
