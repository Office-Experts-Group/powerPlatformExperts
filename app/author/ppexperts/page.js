import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import PageSegment4 from "./(components)/PageSegment4";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/author/ppexperts",
      url: "https://www.powerplatformexperts.com.au/author/ppexperts",
      name: "Power Platform Experts Group | Expert Authors",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Meet our expert authors and consultants specialising in Microsoft Power Platform solutions. Industry leaders in Power Apps, Power Automate, Power BI, and Power Pages.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/author/ppexperts#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/author/ppexperts"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/author/ppexperts#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.powerplatformexperts.com.au",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Authors",
          item: "https://www.powerplatformexperts.com.au/author",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Power Platform Experts Group",
        },
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
      <ServiceHero title="Power Platform Experts" />
      <PageSegment4 />
    </>
  );
};

export default Page;
