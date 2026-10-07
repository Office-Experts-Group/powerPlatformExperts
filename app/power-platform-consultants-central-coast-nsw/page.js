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

import centralCoast from "../../public/pageHeros/centralCoast.webp";
import centralCoastMob from "../../public/pageHeros/mob/centralCoastMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw",
      name: "Power Platform Consultants Central Coast, NSW",
      description:
        "Central Coast NSW's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-central-coast-nsw#breadcrumb",
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
          name: "Power Platform Consultants Central Coast, NSW",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Central Coast, NSW";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={centralCoast}
        mobileImage={centralCoastMob}
        altDesk="Central Coast, NSW"
        altMob="Central Coast, NSW"
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
            href: "https://www.officeexperts.com.au/case-studies/rdao-application-ai-review-workflow",
            linkText: "Read how reviews dropped to 90 minutes",
            title:
              "Cutting a 6-7 day investment review down to 90 minutes with an AI agent workflow",
            description:
              "An investor assessing remote companies relied on one person manually researching each applicant and cross-checking the investor's own policy, taking six to seven days per application. We built an AI agentic workflow across Power Automate, Power Apps, Power BI and Power Pages that pushes each application and its documents through a series of agents covering KYC, compliance, legal and financial checks, producing a detailed, referenced review in around 90 minutes.",
            image: "https://www.officeexperts.com.au/case-studies/kula.png",
            imageAlt:
              "AI agent workflow reviewing investment applications across the Power Platform",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/healthcare-patient-form-followup-automation",
            linkText: "Explore the Fabric and Power Automate build",
            title:
              "Removing manual form chasing for an allied health provider's active patients",
            description:
              "An allied health provider sent intake and milestone forms to every patient but tracked who had responded entirely by hand, pulling clinical staff away from care to send reminders and escalations. We built two scheduled Power Automate flows against the provider's Microsoft Fabric data warehouse that send reminders, escalate overdue cases and close off completed forms automatically.",
            image:
              "https://www.officeexperts.com.au/case-studies/healthcare-form-followupLg.webp",
            imageAlt:
              "Scheduled Power Automate flows chasing patient forms from a Microsoft Fabric data warehouse",
          },
          {
            href: "https://www.officeexperts.com.au/case-studies/financial-services-ai-risk-compliance-automation",
            linkText: "See the AI risk register build",
            title:
              "Taking 24 unowned risks to full ownership and monthly reviews from 6 hours to 1",
            description:
              "An FCA-regulated financial services firm had outgrown a compliance workflow built on spreadsheets and scattered policy documents. We replaced the spreadsheet with a live SharePoint risk register, built AI agents through Power Automate that map risks to mitigations and controls, and added a Power BI and Power Apps compliance dashboard with automated regulatory-change alerts. Monthly compliance review time fell by 83%, from 6 hours to 1.",
            image:
              "https://www.officeexperts.com.au/case-studies/financial-services-compliance-automationLg.png",
            imageAlt:
              "AI risk register and compliance dashboard built on SharePoint, Power Automate and Power BI",
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
