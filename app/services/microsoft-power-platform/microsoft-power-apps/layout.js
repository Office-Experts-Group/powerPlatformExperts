import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Power Apps Development & Consulting Services | Power Platform Experts",
  description:
    "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency.",

  // OpenGraph
  openGraph: {
    title:
      "Power Apps Development & Consulting Services | Power Platform Experts",
    description:
      "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
    siteName: "Power Platform Experts",
  },

  // Additional metadata
  keywords: ["custom Power Apps workflow automation"],
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-apps",
    alternate: [
      {
        url: "https://officeexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
