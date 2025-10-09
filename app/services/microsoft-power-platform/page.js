import React from "react";

import ServiceHero from "../../../components/ServiceHero";
import ExpertsAwait from "../../../components/ExpertsAwait";
import Contact from "../../../components/Contact";
import Testimonials from "../../(components)/Testimonials";
import PageSegmentMain from "./(components)/PageSegmentMain";
import ServicesApps from "./(components)/ServicesApps";
import ServicesAutomate from "./(components)/ServicesAutomate";
import ServicesBI from "./(components)/ServicesBI";
import ServicesPages from "./(components)/ServicesPages";
import OurProcess from "./(components)/OurProcess";

import { getTestimonialsPageSchema } from "../../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../../testimonials";

import tableGraph from "../../../public/pageHeros/tableGraph.webp";
import graphTableMob from "../../../public/pageHeros/mob/graphTableMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../utils/schemaGenerators";
import DeskImage from "./(components)/DeskImage";
import Quote from "./(components)/Quote";
import Quote2 from "./(components)/Quote2";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(testimonials)["@graph"],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
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
