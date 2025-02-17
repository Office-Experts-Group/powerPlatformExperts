import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Pages Services | Power Platform Experts",
  description:
    "Empower your business with Microsoft Power Pages services. Create secure, responsive websites with data integration, visuals, and AI insights. Contact us today for expert assistance!",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Pages Services | Power Platform Experts",
    description:
      "Empower your business with Microsoft Power Pages services. Create secure, responsive websites with data integration, visuals, and AI insights. Contact us today for expert assistance!",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
  },

  // Additional metadata
  keywords: ["Custom Power Pages web development"],

  alternates: {
    canonical:
      "/services/microsoft-power-platform/services/microsoft-power-platform/microsoft-power-pages/",
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
