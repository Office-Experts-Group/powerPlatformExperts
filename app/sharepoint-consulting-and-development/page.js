// powerplatformexperts.com.au/sharepoint-consulting-and-development/page.js
import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import SPIntro from "./(components)/SPIntro";

const Contact = dynamic(() => import("../../components/Contact"));
const SPMoreThanStorage = dynamic(
  () => import("./(components)/SPMoreThanStorage"),
);
const SPServices = dynamic(() => import("./(components)/SPServices"));
const SPCopilotReadiness = dynamic(
  () => import("./(components)/SPCopilotReadiness"),
);
const SPMigrationUrgency = dynamic(
  () => import("./(components)/SPMigrationUrgency"),
);
const SPProcess = dynamic(() => import("./(components)/SPProcess"));
const SPWhyUs = dynamic(() => import("./(components)/SPWhyUs"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import sharepoint from "../../public/pageHeros/sharepoint.webp";
import sharepointMob from "../../public/pageHeros/mob/sharepointMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
      url: "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
      name: "SharePoint Consulting & Development Services | Power Platform Experts",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-05-04T00:00:00+00:00",
      dateModified: "2025-05-04T00:00:00+00:00",
      description:
        "Expert SharePoint consultants with 25+ years of experience. Implementation, migration, custom development and Copilot readiness. Call for a free assessment.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/sharepoint-consulting-and-development#breadcrumb",
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
          name: "SharePoint Consulting & Development",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.powerplatformexperts.com.au#website",
      url: "https://www.powerplatformexperts.com.au/",
      name: "Power Platform Experts: Microsoft Power Platform Development and Consulting Services",
      description:
        "Your Microsoft Power Platform Design, Development and Consulting Experts",
      publisher: {
        "@id": "https://www.powerplatformexperts.com.au#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.powerplatformexperts.com.au?s={search_term_string}",
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
      <ServiceHero
        title="SharePoint Consulting & Development Services"
        desktopImage={sharepoint}
        mobileImage={sharepointMob}
        altDesk={"A digital office environment with SharePoint services"}
        altMob={"A digital office environment with SharePoint services"}
      />
      <SPIntro />
      <SPMoreThanStorage />
      <SPServices />
      <SPCopilotReadiness />
      <SPMigrationUrgency />
      <SPProcess />
      <RelatedLinks
        theme="light"
        eyebrow="Case Studies"
        heading="SharePoint projects in practice"
        links={[
          {
            href: "https://www.officeexperts.com.au/case-studies/professional-services-sharepoint-foundation-workshops",
            linkText: "See the SharePoint Foundation Workshops",
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
            href: "https://www.officeexperts.com.au/case-studies/building-consultants-inspection-crm",
            linkText: "Read the enquiry automation case study",
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
            href: "https://www.officeexperts.com.au/case-studies/manufacturing-project-setup-automation",
            linkText: "Read the project setup flow",
            title:
              "Turning a new project email into a fully built job folder in under a minute",
            description:
              "A manufacturing company's project setup relied on staff manually creating folders across multiple SharePoint sites, renaming them to match convention and copying in templates by hand every time a job was won. We built a Power Automate flow that reads the project details from the notification email and does the whole setup automatically, cutting setup time from roughly 30 minutes to under 1 minute.",
            image:
              "https://www.officeexperts.com.au/case-studies/manufacturing-project-setupLg.webp",
            imageAlt:
              "Power Automate flow building a project folder structure across SharePoint sites",
          },
        ]}
      />
      <SPWhyUs />
      <Contact />
    </>
  );
};

export default Page;
