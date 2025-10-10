import React from "react";

export const metadata = {
  title:
    " Microsoft Power Platform Development Services | Power Platform Experts",
  description:
    "Delivering custom Power Apps, Power BI analytics, and Power Automate solutions. We create scalable, enterprise-grade automation and business intelligence solutions to transform your business.",

  openGraph: {
    title:
      " Microsoft Power Platform Development Services | Power Platform Experts",
    description:
      "Delivering custom Power Apps, Power BI analytics, and Power Automate solutions. We create scalable, enterprise-grade automation and business intelligence solutions to transform your business.",
    url: "https://powerplatformexperts.com/services/microsoft-power-platform",
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

  keywords: ["Microsoft Power Platform consulting services"],
  alternate: {
    canonical: "/services/microsoft-power-platform",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
