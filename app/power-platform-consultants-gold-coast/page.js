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

import goldCoast from "../../public/pageHeros/goldCoast.webp";
import goldCoastMob from "../../public/pageHeros/mob/goldCoastMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
      name: "Power Platform Consultants gold-coast",
      description:
        "Gold Coast's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-gold-coast#breadcrumb",
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
          name: "Power Platform Consultants Gold Coast",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Gold Coast";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={goldCoast}
        mobileImage={goldCoastMob}
        altDesk="Gold Coast, QLD"
        altMob="Gold Coast, QLD"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Power Platform with AI Projects Completed"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/financial-services-ai-risk-compliance-automation",
            linkText: "Learn how AI agents can mitigate risks",
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
          {
            href: "https://www.officeexperts.com.au/case-studies/life-insurance-real-time-competitive-intelligence",
            linkText: "Explore our AI intelligence build",
            title:
              "Cutting competitor response time from two weeks to twelve minutes",
            description:
              "A bank's life insurance division was consistently late to competitor pricing and product moves, with intelligence assembled by hand from fragmented sources. We built an AI-driven competitive intelligence system on the client's own Microsoft 365 tenancy that monitors competitors, scores material changes and routes prioritised alerts into Teams and internal review workflows. Response time dropped from around two weeks to roughly 12 minutes from detection to action.",
            image:
              "https://www.officeexperts.com.au/case-studies/life-insurance-competitive-intelligenceLg.png",
            imageAlt:
              "AI competitor monitoring system routing alerts into Microsoft Teams",
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
