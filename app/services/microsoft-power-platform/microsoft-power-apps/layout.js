import React from "react";

export const metadata = {
  // Basic metadata
  title:
    "Power Apps Consulting & Development Services | Power Platform Experts",
  description:
    "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency.",

  // OpenGraph
  openGraph: {
    title:
      "Power Apps Consulting & Development Service | Power Platform Experts",
    description:
      "Custom Power Apps solutions for streamlined operations, automated workflows, and enhanced business efficiency.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
    siteName: "Power Platform Experts",
  },

  // Additional metadata
  keywords: ["Power Apps consulting Australia"],
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-apps",
    alternate: [
      {
        url: "https://www.officeexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
