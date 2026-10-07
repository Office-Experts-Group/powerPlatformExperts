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

import northernRivers from "../../public/pageHeros/northernRivers.webp";
import northernRiversMob from "../../public/pageHeros/mob/northernRiversMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
      name: "Power Platform Consultants Northern Rivers, NSW",
      description:
        "With our headquarters in Grafton. Our now nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-northern-rivers-nsw#breadcrumb",
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
          name: "Power Platform Consultants Northern Rivers, NSW",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Northern Rivers, NSW";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={northernRivers}
        mobileImage={northernRiversMob}
        altDesk="Northern Rivers, NSW"
        altMob="Northern Rivers, NSW"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Power Platform, AI and 365 solutions we have made"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/life-insurance-real-time-competitive-intelligence",
            linkText: "Learn about AI in 365",
            title:
              "Cutting competitor response time from two weeks to twelve minutes",
            description:
              "A bank's life insurance division was consistently late to competitor pricing and product moves, with intelligence assembled by hand from fragmented sources. We built an AI-driven competitive intelligence system on the client's own Microsoft 365 tenancy that monitors competitors, scores material changes and routes prioritised alerts into Teams and internal review workflows. Response time dropped from around two weeks to roughly 12 minutes from detection to action.",
            image:
              "https://www.officeexperts.com.au/case-studies/life-insurance-competitive-intelligenceLg.png",
            imageAlt:
              "AI competitor monitoring system routing alerts into Microsoft Teams",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/retail-analytics-automated-review-deck-generator",
            linkText: "Read about our one-click deck generator",
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
            linkText: "Read how 10,000+ documents became one report",
            title:
              "Turning 10,000+ documents into a 70-page go-to-market report in 4 weeks, not 3 months",
            description:
              "An international sustainability company needed a go-to-market strategy for the UK BioChar market, built from research scattered across government databases, competitor material, academic journals and customer sources. We built AI research agents through Power Automate that synthesised those sources into a reusable SharePoint knowledge base, auto-populated a standardised Word report template and logged every analyst refinement through Power Apps for a full audit trail.",
            image:
              "https://www.officeexperts.com.au/case-studies/biochar-gtm-analysisLg.png",
            imageAlt:
              "AI research agents feeding a SharePoint knowledge base and Word report template",
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
