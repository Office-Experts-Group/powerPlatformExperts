import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const ExpertsAwait = dynamic(
  () => import("../../../../components/ExpertsAwait"),
);
const FAQSection = dynamic(() => import("../../../../components/FAQSection"));
const Contact = dynamic(() => import("../../../../components/Contact"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const SegmentMainRepeat = dynamic(
  () => import("./(components)/SegmentMainRepeat"),
);
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);

import faqs from "../../../../faqs/power-bi";
import faqSchema from "../../../../faqs/biSchema";

import graphMeeting from "../../../../public/pageHeros/graphMeeting.webp";
import graph from "../../../../public/pageHeros/mob/graph.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
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
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Power BI projects in practice"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-reporting-security",
            linkText: "Explore the partner reporting tests",
            title:
              "Proving external partners could never see each other's Power BI data",
            description:
              "A retail data provider needed certainty that one wrong setting couldn't expose a partner's data to another before opening its Power BI reports to external partners. We reviewed the reports for design and usability, locked access down with Row-Level Security, and tested with a real external account against the provider's own figures, which matched to the cent, without changing what the internal team relied on.",
            image:
              "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-securityLg.webp",
            imageAlt:
              "Partner-facing Power BI reports secured with Row-Level Security",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/retail-analytics-automated-review-deck-generator",
            linkText: "See the one-click deck generator",
            title:
              "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
            description:
              "A retail analytics business built large retailer review decks by hand, pulling figures out of Power BI and pasting them into templates slide by slide. We built a Python tool that reads a simple scope sheet, queries Power BI directly and assembles a fully branded deck of around 660 slides in under five minutes.",
            image:
              "https://www.officeexperts.com.au/case-studies/retail-analytics-deck-generatorLg.png",
            imageAlt:
              "Branded PowerPoint review deck generated automatically from Power BI data",
          },
        ]}
      />
      <div style={{ marginTop: "6rem" }}>
        <FAQSection faqs={faqs} />
      </div>
      <Contact />
    </>
  );
};

export default Page;
