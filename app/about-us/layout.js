import React from "react";

export const metadata = {
  title: "About Us | Power Platform Experts",
  description:
    "Discover how our certified Power Platform consultants deliver custom business solutions using Power Apps, Power Automate, Power BI, and Power Pages across Australia.",
  openGraph: {
    title: "About Us | Power Platform Experts",
    description:
      "Discover how our certified Power Platform consultants deliver custom business solutions using Power Apps, Power Automate, Power BI, and Power Pages across Australia.",
    url: "https://www.powerplatformexperts.com.au/about-us",
    siteName: "Access Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Group Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  keywords: ["power platform consultants australia"],

  twitter: {
    card: "summary_large_image",
    site: "@OfficeExpertsG1",
    title: "About Us | Power Platform Experts",
    description:
      "Discover how our certified Power Platform consultants deliver custom business solutions using Power Apps, Power Automate, Power BI, and Power Pages across Australia.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
