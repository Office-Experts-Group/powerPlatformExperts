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

import sydney from "../../public/pageHeros/sydney.webp";
import sydneyMob from "../../public/pageHeros/mob/sydneyMob.webp";

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
        "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
      url: "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
      name: "Power Platform Consultants sydney",
      description:
        "Sydney's leading Power Platform consultants. Our nationwide team has 25+ years experience helping businesses streamline operations with Power BI, Apps, Pages, and Automate solutions.",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-26T00:00:00+00:00",
      dateModified: "2026-05-13T00:00:00+00:00",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-platform-consultants-sydney#breadcrumb",
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
          name: "Power Platform Consultants Sydney",
        },
      ],
    },
  ],
};

const Page = () => {
  const location = "Sydney";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title={`Power Platform Consultants ${location}`}
        desktopImage={sydney}
        mobileImage={sydneyMob}
        altDesk="Sydney"
        altMob="Sydney"
      />
      <LocationSummary location={location} service="Power Platform" />
      <LocationPages location={location} />
      <CTAMainProps location={location} />
      <ServicesLocation location={location} />
      <MeetTheTeamSlider />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="Some Power Platform and AI work we have done"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundation-workshops",
            linkText: "Learn how we control access in Sharepoint",
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
            linkText: "See our proposal assistant",
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
            linkText: "Explore our SharePoint and Power Apps build",
            title:
              "Turning manual enquiry handling into an automated quote-to-email pipeline",
            description:
              "A building consultancy was handling inspection enquiries entirely by hand, from the first request through to putting together and sending a quote, which was slow and prone to errors that meant rework. We built an automated system on SharePoint, Power Apps and Power Automate that receives enquiries, manages them through to completion and generates quotes ready to send by email.",
            image:
              "https://www.officeexperts.com.au/case-studies/gm-building-consultants-inspection-crmLg.png",
            imageAlt:
              "Enquiry-to-quote system built on SharePoint, Power Apps and Power Automate",
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
