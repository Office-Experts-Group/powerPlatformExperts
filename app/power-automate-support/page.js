import React from "react";
import dynamic from "next/dynamic";

import ServiceHero from "../../components/ServiceHero";
import PageSegmentMain from "./(components)/PageSegmentMain";

const Contact = dynamic(() => import("../../components/Contact"));
const PageSegment4 = dynamic(() => import("./(components)/PageSegment4"));
const Segment4Repeat = dynamic(() => import("./(components)/Segment4Repeat"));
const BlackSegment = dynamic(() => import("./(components)/BlackSegment"));
const RelatedLinks = dynamic(() => import("../../components/RelatedLinks"));

import longDesk from "../../public/pageHeros/longDesk.webp";
import puzzleMob from "../../public/pageHeros/mob/puzzleMob.webp";

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
      "@id": "https://www.powerplatformexperts.com.au/power-automate-support",
      url: "https://www.powerplatformexperts.com.au/power-automate-support",
      name: "Power Automate Support Services",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-04-04T00:00:00+00:00",
      dateModified: "2025-04-04T00:00:00+00:00",
      description:
        "Power Automate support services for business intelligence solutions. Expert advice and training from Microsoft professionals.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/power-automate-support#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/power-automate-support",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/power-automate-support#breadcrumb",
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
          name: "Power Automate Support Services",
          item: "https://www.powerplatformexperts.com.au/power-automate-support",
        },
      ],
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Power Automate Support Services",
  provider: {
    "@type": "Organization",
    name: "Power Platform Experts - Office Experts Group",
    sameAs: [
      "https://powerplatformexperts.com.au",
      "https://officeexperts.com.au",
    ],
  },
  serviceType: "Workflow Automation Support",
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  description:
    "Professional Power Automate support services including troubleshooting, workflow optimisation, integrations, and automation training for Australian businesses.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "AUD",
    },
  },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Australian businesses using Microsoft Power Automate",
  },
  serviceOutput:
    "Reliable and optimised automated workflows, reduced manual effort, and seamless integrations across business systems.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power Automate Support Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Automate Troubleshooting & Technical Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Automate Maintenance & Enhancement",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Automate Integration Services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Automate Training & Knowledge Transfer",
        },
      },
    ],
  },
};

const PowerAutomate = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main>
        <ServiceHero
          title="Professional Power Automate Support and Integration Services"
          desktopImage={longDesk}
          mobileImage={puzzleMob}
          altDesk={"people working at an office desk"}
          altMob={"people holding large puzzle pieces"}
        />
        <PageSegmentMain />
        <Segment4Repeat />
        <BlackSegment />
        <PageSegment4 />
        <RelatedLinks
          theme="dark"
          eyebrow="Case Studies"
          heading="Power Automate projects we have delivered"
          links={[
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
          ]}
        />
        <Contact />
      </main>
    </>
  );
};

export default PowerAutomate;
