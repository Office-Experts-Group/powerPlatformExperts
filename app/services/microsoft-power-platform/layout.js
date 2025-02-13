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
  },

  keywords: ["Microsoft Power Platform consulting services"],
  alternates: {
    canonical:
      "https://powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
    alternates: [
      {
        url: "https://officeexperts.com.au/services/microsoft-power-platform/microsoft-power-pages",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
