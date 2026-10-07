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

import wollongong from "../../public/pageHeros/wollongong.webp";
import wollongongMob from "../../public/pageHeros/mob/wollongongMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
      name: "Power Platform Consultants Wollongong",
      description:
        "Wollongong's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-wollongong#breadcrumb",
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
          name: "Power Platform Consultants Wollongong",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Wollongong";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={wollongong}
        mobileImage={wollongongMob}
        altDesk="Wollongong"
        altMob="Wollongong"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Recent work across the Power Platform and AI"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant-azure-migration",
            linkText: "See the proposal assistant we made",
            title:
              "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
            description:
              "A proposal-writing process relied on reps manually re-reading transcripts and copy-pasting fee figures and consultant details from earlier proposals. We built a conversational AI assistant that turns a job request, tone guidance and call notes into a first-pass proposal drafted straight into the real Word template, with fee tables, payment milestones and a consultant roster drawn from the current rate card, then migrated the tool inside the Microsoft and Azure tenant to meet IT's compliance requirements.",
            image:
              "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant.png",
            imageAlt:
              "Conversational AI assistant drafting a proposal into a Word template",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/building-consultants-inspection-crm",
            linkText: "Explore our SharePoint and Power Apps build process",
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
            linkText: "Read about the joys of customer service automation",
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
