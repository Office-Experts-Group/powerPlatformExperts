import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contents from "./(components)/Contents";

const Contact = dynamic(() => import("../../../../components/Contact"));
const PageSegmentMain = dynamic(() => import("./(components)/PageSegmentMain"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const Promo = dynamic(() => import("../../../../components/Promo"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const SegmentMainRepeat = dynamic(
  () => import("./(components)/SegmentMainRepeat"),
);
const RelatedLinks = dynamic(
  () => import("../../../../components/RelatedLinks"),
);
const FAQSection = dynamic(() => import("../../../../components/FAQSection"));

import faqs from "../../../../faqs/power-apps";
import faqSchema from "../../../../faqs/appsSchema";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import calcMob from "../../../../public/pageHeros/mob/calcMob.webp";

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
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
      name: "Microsoft Power Apps Services | Power Platform Consulting",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Expert Microsoft Power Apps development and consulting services. Custom Power Apps solutions, integration, and support. Call us today 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-apps#breadcrumb",
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
          name: "Microsoft Power Apps Services",
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
      <Contents />
      <ServiceHero
        title="Microsoft Power Apps Consulting Services"
        desktopImage={longDesk}
        mobileImage={calcMob}
        altDesk={"meeting at an office desk"}
        altMob={"calculator on a desk"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <Segment4Repeat />
      <BlackSegment />
      <Promo
        h2={"Empower Business with Certified Expertise"}
        p={
          "Power Platform Experts specialise in harnessing Power Apps to streamline operations and drive innovation. Custom applications tailored to your business needs ensure enhanced efficiency and seamless workflows."
        }
      />
      <PageSegment4 />
      <SegmentMainRepeat />
      <RelatedLinks
        theme="dark"
        eyebrow="Case Studies"
        heading="Power Apps projects in practice"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/building-consultants-inspection-crm",
            linkText: "See how enquiries became quotes",
            title:
              "Turning manual enquiry handling into an automated quote-to-email pipeline",
            description:
              "A building consultancy was handling inspection enquiries entirely by hand, from the first request through to putting together and sending a quote, which was slow and prone to errors that meant rework. We built an automated system on SharePoint, Power Apps and Power Automate that receives enquiries, manages them through to completion and generates quotes ready to send by email.",
            image:
              "https://www.officeexperts.com.au/case-studies/gm-building-consultants-inspection-crmLg.png",
            imageAlt:
              "Enquiry-to-quote system built on SharePoint, Power Apps and Power Automate",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/sporting-goods-agentic-ai-customer-service",
            linkText: "Read how tickets get resolved end to end",
            title:
              "Resolving customer service tickets end to end in 3 hours instead of 48",
            description:
              "A national sporting goods provider ran customer service from Microsoft 365, with agents triaging every ticket, updating spreadsheets and writing responses by hand. We built a chained agentic AI system on Power Automate and Power Apps, with Classifier, Resolution, Validation and Escalation agents working in sequence and human review feeding training back in. Average resolution time fell by 94%, and 67% of tickets are now resolved end to end with no human intervention.",
            image:
              "https://www.officeexperts.com.au/case-studies/sporting-goods-agentic-customer-serviceLg.png",
            imageAlt:
              "Chained AI agents resolving customer service tickets on Power Automate and Power Apps",
          },
        ]}
      />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
