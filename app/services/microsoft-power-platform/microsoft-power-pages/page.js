import React from "react";

import ServiceHero from "../../../../components/ServiceHero";
import ExpertsAwait from "../../../../components/ExpertsAwait";
import FAQSection from "../../../../components/FAQSection";
import ServicePageCards from "./(components)/ServicePageCards";
import Contact from "../../../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";

import PageSegment4 from "./(components)/PageSegment4";
import Segment4Repeat from "./(components)/Segment4Repeat";
import SegmentMainRepeat from "./(components)/SegmentMainRepeat";

import faqs from "../../../../faqs/power-pages";
import Contents from "./(components)/Contents";

import longDesk from "../../../../public/pageHeros/longDesk.webp";
import coffee from "../../../../public/pageHeros/mob/coffeeMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      name: "Microsoft Power Pages Services | Web Portal Development",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Professional Microsoft Power Pages development and consulting services. Create secure, modern web portals and business websites. Call us today 1300 102 810",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/#breadcrumb",
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
          name: "Services",
          item: "https://www.powerplatformexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform",
          item: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Power Pages Services",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au/#website",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au/?s={search_term_string}",
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
      <Contents />
      <ServiceHero
        title="Microsoft Power Pages Services"
        desktopImage={longDesk}
        mobileImage={coffee}
        altDesk={"An office desk full of paperwork"}
        altMob={"office supplies and a cup of coffee"}
      />
      <ServicePageCards />
      <PageSegmentMain />
      <Segment4Repeat />
      <ExpertsAwait />
      <PageSegment4 />
      <SegmentMainRepeat />
      <FAQSection faqs={faqs} />
      <Contact />
    </>
  );
};

export default Page;
