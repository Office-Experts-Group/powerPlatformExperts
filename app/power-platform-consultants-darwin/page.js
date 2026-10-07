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

import darwin from "../../public/pageHeros/darwin.webp";
import darwinMob from "../../public/pageHeros/mob/darwinMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
      name: "Power Platform Consultants Darwin",
      description:
        "Darwin's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-darwin#breadcrumb",
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
          name: "Power Platform Consultants Darwin",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Darwin";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={darwin}
        mobileImage={darwinMob}
        altDesk="Darwin"
        altMob="Darwin"
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
          {
            href: "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-reporting-security",
            linkText: "See the Row-Level Security approach",
            title:
              "Proving external partners could never see each other's Power BI data",
            description:
              "A retail data provider needed certainty that one wrong setting couldn't expose a partner's data to another before opening its Power BI reports to external partners. We reviewed the reports for design and usability, locked access down with Row-Level Security, and tested with a real external account against the provider's own figures, which matched to the cent, without changing what the internal team relied on.",
            image:
              "https://www.officeexperts.com.au/case-studies/retail-power-bi-partner-securityLg.webp",
            imageAlt:
              "Partner-facing Power BI reports secured with Row-Level Security",
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
