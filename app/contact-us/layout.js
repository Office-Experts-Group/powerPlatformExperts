import React from "react";

export const metadata = {
  // Basic metadata
  title: "Contact Us | Power Platform Experts",
  description:
    "Connect with Australia's leading Microsoft Power Platform consultants. Expert consulting for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
  // OpenGraph
  openGraph: {
    title: "Contact Us | Power Platform Experts",
    description:
      "Connect with Australia's leading Microsoft Power Platform consultants. Expert consulting for Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/contact-us",
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

  keywords: [
    // Contact-specific keywords
    "Power Platform consultation booking",
  ],
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
