import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import LocationSummary from "../(components)/LocationSummary";

const LocationPages = dynamic(() => import("../(components)/LocationPages"));
const CTAMainProps = dynamic(() => import("../(components)/CTAMainProps"));
const ContactLocationSegment = dynamic(
  () => import("../../components/ContactLocationSegment"),
);
const ServicesLocation = dynamic(
  () => import("../(components)/ServicesLocation"),
);
const Promo = dynamic(() => import("../../components/Promo"));
const GoodToKnow = dynamic(() => import("../../components/GoodToKnow"));
const Testimonials = dynamic(() => import("../(components)/Testimonials"));
const MeetTheTeamSlider = dynamic(
  () => import("../../components/MeetTheTeamSlider"),
);
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import perth from "../../public/pageHeros/perth.webp";
import perthMob from "../../public/pageHeros/mob/perthMob.webp";

import { getHomePageSchema } from "../../utils/testimonialSchemaGenerator";
import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";
import { testimonials } from "../../testimonials";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    ...getHomePageSchema(testimonials, "powerplatform")["@graph"],
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
      name: "Power Platform Consultants Perth",
      description:
        "Perth's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-perth#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-perth",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-perth#breadcrumb",
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
          name: "Power Platform Consultants Perth",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Perth";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={perth}
        mobileImage={perthMob}
        altDesk="Perth"
        altMob="Perth"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="A taste of our work with Power Platform and AI"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/retail-analytics-automated-review-deck-generator",
            linkText: "Read more about how we did it",
            title:
              "Turning a days-long PowerPoint build into a one-click, 600+ slide deck",
            description:
              "A retail analytics business built large retailer review decks by hand, pulling figures out of Power BI and pasting them into templates slide by slide. We built a Python tool that reads a simple scope sheet, queries Power BI directly and assembles a fully branded deck of around 660 slides in under five minutes.",
            image:
              "https://www.officeexperts.com.au/case-studies/retail-analytics-deck-generatorLg.png",
            imageAlt:
              "Branded PowerPoint review deck generated automatically from Power BI data",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/biochar-ai-go-to-market-analysis-uk",
            linkText: "How 10,000+ documents became one report",
            title:
              "Turning 10,000+ documents into a 70-page go-to-market report in 4 weeks, not 3 months",
            description:
              "An international sustainability company needed a go-to-market strategy for the UK BioChar market, built from research scattered across government databases, competitor material, academic journals and customer sources. We built AI research agents through Power Automate that synthesised those sources into a reusable SharePoint knowledge base, auto-populated a standardised Word report template and logged every analyst refinement through Power Apps for a full audit trail.",
            image:
              "https://www.officeexperts.com.au/case-studies/biochar-gtm-analysisLg.png",
            imageAlt:
              "AI research agents feeding a SharePoint knowledge base and Word report template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundation-workshops",
            linkText: "Explore the access model",
            title:
              "Moving a team off shared logins onto a proper SharePoint foundation",
            description:
              "A small team ran its email, files and calendar through a single shared login, with a second shared login for its bookings system, so nobody could see who had changed what or remove someone cleanly when they left. We ran a series of live SharePoint Foundation Workshops that built a proper site structure, an Owners, Members and Visitors access model, and a staged plan to retire both shared logins.",
            image:
              "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundationLg.png",
            imageAlt:
              "SharePoint site structure and access model built in live workshops",
          },
        ]}
      />
      <GoodToKnow />
      <Testimonials testimonials={testimonials} />
      <Promo
        h2={"Let's transform your business processes!"}
        p={
          "Unlock the full potential of Microsoft Power Platform with our expert consultant solutions—designed to automate workflows, create custom applications, and streamline your business operations."
        }
      />
      <ContactLocationSegment location={location} />
    </>
  );
};

export default Page;
