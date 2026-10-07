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

import richmond from "../../public/pageHeros/richmond.webp";
import richmondMob from "../../public/pageHeros/mob/richmondMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
      name: "Power Platform Consultants Richmond",
      description:
        "Richmond's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-richmond#breadcrumb",
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
          name: "Power Platform Consultants Richmond",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Richmond";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={richmond}
        mobileImage={richmondMob}
        altDesk="Richmond"
        altMob="Richmond"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Past work with the future of Power Platform and AI"
        links={[
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
          {
            href: "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundation-workshops",
            linkText: "Learn how we get the most from Sharepoint",
            title:
              "Moving a team off shared logins onto a proper SharePoint foundation",
            description:
              "A small team ran its email, files and calendar through a single shared login, with a second shared login for its bookings system, so nobody could see who had changed what or remove someone cleanly when they left. We ran a series of live SharePoint Foundation Workshops that built a proper site structure, an Owners, Members and Visitors access model, and a staged plan to retire both shared logins.",
            image:
              "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundationLg.png",
            imageAlt:
              "SharePoint site structure and access model built in live workshops",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant-azure-migration",
            linkText: "See the proposal assistant",
            title:
              "Turning call notes and a rate card into a first-pass proposal inside the real Word template",
            description:
              "A proposal-writing process relied on reps manually re-reading transcripts and copy-pasting fee figures and consultant details from earlier proposals. We built a conversational AI assistant that turns a job request, tone guidance and call notes into a first-pass proposal drafted straight into the real Word template, with fee tables, payment milestones and a consultant roster drawn from the current rate card, then migrated the tool inside the Microsoft and Azure tenant to meet IT's compliance requirements.",
            image:
              "https://www.officeexperts.com.au/case-studies/internal-ai-proposal-assistant.png",
            imageAlt:
              "Conversational AI assistant drafting a proposal into a Word template",
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
