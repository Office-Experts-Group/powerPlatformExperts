import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ExpertsAwait = dynamic(() => import("../../../components/ExpertsAwait"));
const Contact = dynamic(() => import("../../../components/Contact"));
const Testimonials = dynamic(() => import("../../(components)/Testimonials"));
const ServicesApps = dynamic(() => import("./(components)/ServicesApps"));
const ServicesAutomate = dynamic(
  () => import("./(components)/ServicesAutomate"),
);
const ServicesBI = dynamic(() => import("./(components)/ServicesBI"));
const ServicesPages = dynamic(() => import("./(components)/ServicesPages"));
const OurProcess = dynamic(() => import("./(components)/OurProcess"));
const DeskImage = dynamic(() => import("./(components)/DeskImage"));
const Quote = dynamic(() => import("./(components)/Quote"));
const Quote2 = dynamic(() => import("./(components)/Quote2"));

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import tableGraph from "../../../public/pageHeros/tableGraph.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://powerplatformexperts.com/services/microsoft-power-platform",
      url: "https://powerplatformexperts.com/services/microsoft-power-platform",
      name: "Microsoft Power Platform Development & Consulting Services - Power Apps, Power BI, Power Automate Solutions",
      isPartOf: {
        "@id": "https://powerplatformexperts.com#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://powerplatformexperts.com/services/microsoft-power-platform#breadcrumb",
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://powerplatformexperts.com/services/microsoft-power-platform",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://powerplatformexperts.com/services/microsoft-power-platform#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://powerplatformexperts.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://powerplatformexperts.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform Services",
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
      <ServiceHero
        title="Microsoft Power Platform Services"
        altDesk={"graphs on a table"}
        altMob={"graphs on a tables"}
        mobileImage={graphTableMob}
        desktopImage={tableGraph}
      />
      <PageSegmentMain />
      <Quote />
      <ServicesApps />
      <ServicesAutomate />
      <ServicesBI />
      <ServicesPages />
      <DeskImage />
      <Quote2 />
      <OurProcess />
      <Testimonials testimonials={testimonials} />
      <ExpertsAwait />
      <Contact />
    </>
  );
};

export default Page;
