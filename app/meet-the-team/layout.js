import React from "react";

export const metadata = {
  // Basic metadata
  title: "Our Expert Power Platform Team | Power Platform Experts",
  description:
    "Meet our certified Microsoft Power Platform consultants specialising in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",

  // OpenGraph
  openGraph: {
    title: "Our Expert Power Platform Team | Power Platform Experts",
    description:
      "Meet our certified Microsoft Power Platform consultants specialising in Power BI analytics, Power Apps development, Power Automate workflows, and Power Pages solutions.",
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

  // Additional metadata
  keywords: ["Power Platform expert development team"],
  alternates: {
    canonical: "/meet-the-team",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
