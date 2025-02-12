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
  },

  keywords: [
    // Contact-specific keywords
    "Power Platform consultation booking",
  ],
  alternates: {
    canonical: "https://powerplatformexperts.com.au/contact-us",
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
