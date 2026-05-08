// powerplatformexperts.com.au/app/services/microsoft-power-platform/microsoft-power-pages/page.js

import dynamic from "next/dynamic";

import ServiceHero from "../../../../components/ServiceHero";

import PPIntro from "./(components)/PPIntro";

const PPDataIntegration = dynamic(
  () => import("./(components)/PPDataIntegration"),
);
const PPVisualisation = dynamic(() => import("./(components)/PPVisualisation"));
const PPSecurity = dynamic(() => import("./(components)/PPSecurity"));
const PPAiCapabilities = dynamic(
  () => import("./(components)/PPAiCapabilities"),
);
const PPHowWeWork = dynamic(() => import("./(components)/PPHowWeWork"));
const PPComparison = dynamic(() => import("./(components)/PPComparison"));

const Contact = dynamic(() => import("../../../../components/Contact"));

import pages from "../../../../public/pageHeros/pages.webp";
import pagesMob from "../../../../public/pageHeros/mob/pagesMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "../../../../utils/schemaGenerators";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    generateWebSiteSchema(),
    {
      "@type": "WebPage",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
      name: "Microsoft Power Pages Services | Web Portal Development Australia",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2025-05-01T00:00:00+00:00",
      description:
        "Power Pages consultants for Australian businesses. We build external-facing portals connected to Dataverse, Dynamics 365 and Azure AD. Enterprise level security, role-based access, and embedded Power BI.",
      breadcrumb: {
        "@id":
          "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: [
            "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages/",
          ],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-pages#breadcrumb",
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
          name: "Services",
          item: "https://www.powerplatformexperts.com.au/services/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Power Platform",
          item: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Microsoft Power Pages Services",
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

// ── Page ───────────────────────────────────────────────────────────────────
const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ServiceHero
        title="Microsoft Power Pages"
        desktopImage={pages}
        mobileImage={pagesMob}
        altDesk="Power Pages infographic"
        altMob="Power Pages infographic"
      />
      <PPIntro />
      <PPDataIntegration />
      <PPVisualisation />
      <PPSecurity />
      <PPAiCapabilities />
      <PPHowWeWork />
      <PPComparison />

      <Contact />
    </>
  );
};

export default Page;
