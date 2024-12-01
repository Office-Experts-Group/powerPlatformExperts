import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials),
    {
      "@type": "WebPage",
      "@id":
        "https://powerplatformexperts.com/services/microsoft-power-platform/",
      url: "https://powerplatformexperts.com/services/microsoft-power-platform/",
      name: "Microsoft Power Platform Development & Consulting Services - Power Apps, Power BI, Power Automate Solutions",
      isPartOf: {
        "@id": "https://powerplatformexperts.com/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://powerplatformexperts.com/services/microsoft-power-platform/#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://powerplatformexperts.com/services/microsoft-power-platform/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://powerplatformexperts.com/services/microsoft-power-platform/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://powerplatformexperts.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://powerplatformexperts.com/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform Services",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://powerplatformexperts.com/#website",
      url: "https://powerplatformexperts.com/",
      name: "Power Platform Experts: Professional Power Apps, Power BI, and Power Automate Development Services",
      description:
        "Enterprise Microsoft Power Platform Development and Consulting Services",
      publisher: {
        "@id": "https://powerplatformexperts.com/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://powerplatformexperts.com/?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://powerplatformexperts.com/#organization",
      name: "Power Platform Experts",
      url: "https://powerplatformexperts.com/",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "1300 102 810",
          contactType: "customer service",
          email: "consult@officeexperts.com.au",
          availableLanguage: ["en", "en-AU"],
        },
      ],
      areaServed: [
        {
          "@type": "Country",
          name: "United States",
        },
        {
          "@type": "State",
          name: "New York",
        },
        {
          "@type": "State",
          name: "California",
        },
        {
          "@type": "State",
          name: "Texas",
        },
        {
          "@type": "State",
          name: "Florida",
        },
      ],
      logo: {
        "@type": "ImageObject",
        inLanguage: "en-US",
        "@id": "https://powerplatformexperts.com/#/schema/logo/image/",
        url: "/logo.png",
        contentUrl: "/logo.png",
        width: 1181,
        height: 1181,
        caption: "Power Platform Experts",
      },
      image: {
        "@id": "https://powerplatformexperts.com/#/schema/logo/image/",
      },
      sameAs: [
        "https://www.facebook.com/PowerPlatformExperts",
        "https://x.com/PowerPlatformExp",
        "https://www.instagram.com/powerplatformexperts",
        "https://www.linkedin.com/company/power-platform-experts",
        "https://www.youtube.com/c/PowerPlatformExperts",
      ],
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero title="Microsoft Power Platform Services" />
      <PageSegmentMain />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
