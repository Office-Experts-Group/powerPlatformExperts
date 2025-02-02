import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4Repeat from "./(components)/Segment4Repeat";
import PageSegment4 from "./(components)/PageSegment4";
import SegmentMainRepeat from "./(components)/SegmentMainRepeat";

import faqs from "../../../../faqs/power-bi";
import faqSchema from "../../../../faqs/biSchema";

import graphMeeting from "../../../../public/pageHeros/graphMeeting.webp";
import graph from "../../../../public/pageHeros/mob/graph.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
      name: "Microsoft Power BI Services | Business Intelligence Experts",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Expert Microsoft Power BI development and consulting services. Data visualization, analytics, and business intelligence solutions. Call us today 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-bi#breadcrumb",
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
          name: "Services",
          item: "https://www.powerplatformexperts.com.au/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform",
          item: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Power BI Services",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceHero
        title="Microsoft Power BI Services"
        desktopImage={graphMeeting}
        mobileImage={graph}
        altDesk={"graphs on a table"}
        altMob={"graphs on a table"}
      />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <SegmentMainRepeat />
      <PageSegment4 />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
