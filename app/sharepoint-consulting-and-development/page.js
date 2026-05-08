// powerplatformexperts.com.au/sharepoint-consulting-and-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import SPIntro from "./(components)/SPIntro";

const Contact = dynamic(() => import("../../components/Contact"));
const SPMoreThanStorage = dynamic(
  () => import("./(components)/SPMoreThanStorage"),
);
const SPServices = dynamic(() => import("./(components)/SPServices"));
const SPCopilotReadiness = dynamic(
  () => import("./(components)/SPCopilotReadiness"),
);
const SPMigrationUrgency = dynamic(
  () => import("./(components)/SPMigrationUrgency"),
);
const SPProcess = dynamic(() => import("./(components)/SPProcess"));
const SPWhyUs = dynamic(() => import("./(components)/SPWhyUs"));

import sharepoint from "../../public/pageHeros/sharepoint.webp";
import sharepointMob from "../../public/pageHeros/mob/sharepointMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
      url: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
      name: "SharePoint Consulting & Development Services | Power Platform Experts",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-05-04T00:00:00+00:00",
      dateModified: "2025-05-04T00:00:00+00:00",
      description:
        "Expert SharePoint consultants with 25+ years of experience. Implementation, migration, custom development and Copilot readiness. Call for a free assessment.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.powerplatformexperts.com.au/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "SharePoint Consulting & Development",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au#website",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au?s={search_term_string}",
          },
          "query-input": {
            "@type": "PropertyValueSpecification",
            valueRequired: true,
            valueName: "search_term_string",
          },
        },
      ],
      inLanguage: "en-AU",
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
      <ServiceHero
        title="SharePoint Consulting & Development Services"
        desktopImage={sharepoint}
        mobileImage={sharepointMob}
        altDesk={"A digital office environment with SharePoint services"}
        altMob={"A digital office environment with SharePoint services"}
      />
      <SPIntro />
      <SPMoreThanStorage />
      <SPServices />
      <SPCopilotReadiness />
      <SPMigrationUrgency />
      <SPProcess />
      <SPWhyUs />
      <Contact />
    </>
  );
};

export default Page;
