// app/power-bi-melbourne/page.js
import React from "react";

import ServiceHero from "../../components/ServiceHero";
import ExpertsAwait from "../../components/ExpertsAwait";
import Contact from "../../components/Contact";
import PageSegmentMain from "./(components)/PageSegmentMain";
import Segment4 from "./(components)/Segment4";
import Promo from "../../components/Promo";
import OurExperts from "./(components)/OurExperts";
import Testimonials from "../../app/(components)/Testimonials";

import melbourne from "../../public/pageHeros/melbourne.webp";
import melbourneMob from "../../public/pageHeros/mob/melbourneMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/power-bi-melbourne",
      url: "https://www.powerplatformexperts.com.au/power-bi-melbourne",
      name: "Power BI Consultants Melbourne | Expert Dashboard Development",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-10-08T00:00:00+00:00",
      dateModified: "2025-10-08T00:00:00+00:00",
      description:
        "Leading Power BI consultants in Melbourne. Custom dashboards, real-time analytics, and data visualisation solutions for Victorian businesses. Get in touch for a free consultation.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-bi-melbourne#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-bi-melbourne",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-bi-melbourne#breadcrumb",
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
          name: "Power BI Consultants Melbourne",
          item: "https://www.powerplatformexperts.com.au/power-bi-melbourne",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.powerplatformexperts.com.au/power-bi-melbourne#business",
  name: "Power BI Consultants Melbourne | Power Platform Experts",
  url: "https://www.powerplatformexperts.com.au/power-bi-melbourne",
  telephone: "1300 102 810",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  serviceType: "Power BI Consulting Services",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    containedInPlace: {
      "@type": "State",
      name: "Victoria",
    },
  },
  description:
    "Professional Power BI consulting services in Melbourne including custom dashboard development, data integration, ETL processes, and business intelligence solutions for Victorian businesses.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power BI Services Melbourne",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Dashboard Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Integration & Modeling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Excel to Power BI Migration",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ongoing Support & Maintenance",
        },
      },
    ],
  },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ServiceHero
          title="Power BI Consultants Melbourne"
          desktopImage={melbourne}
          mobileImage={melbourneMob}
          altDesk="Melbourne city skyline"
          altMob="Melbourne city skyline"
        />
        <PageSegmentMain />
        <Segment4 />
        <Promo
          h2="Contact Your Local Power BI Professionals"
          p={
            "Don't let legacy systems drag your business down. Discover the power of analytic's, dashboards and custom integrations designed by the experts."
          }
        />
        <OurExperts />
        <ExpertsAwait />
        <Testimonials testimonials={testimonials} />
        <Contact />
      </main>
    </>
  );
};

export default Page;
