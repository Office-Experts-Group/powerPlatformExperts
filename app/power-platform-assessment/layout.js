import React from "react";

export const metadata = {
  title: "Power Platform Integration Assessment",
  description:
    "Discover your Microsoft Power Platform skill level with our free assessment. Get personalised recommendations to enhance your Power BI, Power Apps, and Power Automate capabilities.",
  keywords: "Power Platform Integration assessment",
  openGraph: {
    title: "Power Platform Integration Assessment",
    description:
      "Take our free assessment to evaluate your Microsoft Power Platform Integration and receive personalised improvement recommendations.",
    url: "https://wwww.powerplatformexperts.com.au/power-platform-assessment",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "https://officeexperts.com.au/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Office Experts Group logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function PowerPlatformAssessmentLayout({ children }) {
  return <>{children}</>;
}
