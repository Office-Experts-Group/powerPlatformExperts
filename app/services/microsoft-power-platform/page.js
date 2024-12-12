import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import SolutionsCarousel from "./(components)/SolutionsCarousel";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import tableGraph from "../../../public/pageHeros/tableGraph.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
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
        title="Microsoft Power Platform Services"
        altDesk={"graphs on a table"}
        altMob={"graphs on a tables"}
        mobileImage={graphTableMob}
        desktopImage={tableGraph}
      />
      <PageSegmentMain />
      <SolutionsCarousel />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
