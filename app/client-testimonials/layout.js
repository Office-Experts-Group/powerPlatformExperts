import React from "react";

export const metadata = {
  // Basic metadata
  title: "Client Testimonials – Power Platforms Experts",
  description:
    "Read what our clients say about our Microsoft Power Platform consulting services, including Power BI, Power Apps, Power Automate, and Power Pages solutions.",
  // OpenGraph
  openGraph: {
    title: "Client Testimonials - Power Platform Experts",
    description:
      "Read what our clients say about our Microsoft Power Platform consulting services, including Power BI, Power Apps, Power Automate, and Power Pages solutions.",
    url: "https://www.powerplatformexperts.com.au/client-testimonials",
    siteName: "Power Platform Experts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Office Experts Logo",
      },
    ],
    locale: "en-AU",
    type: "article",
  },

  // Additional metadata
  keywords: [
    // Testimonial-specific
    "power platform customer testimonials",
  ],
  alternates: {
    canonical: "https://powerplatformexperts.com.au/client-testimonials",
  },
};

export default function ClientTestimonialsLayout({ children }) {
  return <>{children}</>;
}
