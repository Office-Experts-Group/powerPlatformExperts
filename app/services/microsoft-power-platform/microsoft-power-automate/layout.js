import React from "react";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Automate Services | Power Platform Experts",
  description:
    "Expert Power Automate consulting services for workflow automation, process optimisation, and business efficiency.",

  // OpenGraph
  openGraph: {
    title: "Microsoft Power Automate Services | Power Platform Experts",
    description:
      "Expert Power Automate consulting services for workflow automation, process optimisation, and business efficiency.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
  },

  // Additional metadata
  keywords: ["custom Power Automate workflow development"],
  alternates: {
    canonical: "/services/microsoft-power-platform/microsoft-power-automate",
    alternate: [
      {
        url: "https://officeexperts.com.au/services/microsoft-power-platform/microsoft-power-automate",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}
