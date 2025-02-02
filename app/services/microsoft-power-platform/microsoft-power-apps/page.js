import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import BlackSegment from "./(components)/BlackSegment";
import PageSegment4 from "./(components)/PageSegment4";
import Promo from "../../../../components/Promo";
import Segment4Repeat from "./(components)/Segment4Repeat";
import SegmentMainRepeat from "./(components)/SegmentMainRepeat";
import Contents from "./(components)/Contents";
import FAQSection from "../../../../components/FAQSection";

import faqs from "../../../../faqs/power-apps";
import faqSchema from "../../../../faqs/appsSchema";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import calcMob from "../../../../public/pageHeros/mob/calcMob.webp";

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
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
