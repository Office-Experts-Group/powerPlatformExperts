import React from "react";

import ServiceHero from "../../components/ServiceHero";
import LocationGroups from "./(components)/LocationGroups";
import Promo from "../../components/Promo";
import Contact from "../../components/Contact";

import australia from "../../public/pageHeros/australia.webp";
import australiaMob from "../../public/pageHeros/mob/australiaMob.webp";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";

// Import location images
import sydney from "../../public/pageHeros/sydney.webp";
import melbourne from "../../public/pageHeros/mob/melbourneMob.webp";
import brisbane from "../../public/pageHeros/mob/brisbaneMob.webp";
import perth from "../../public/pageHeros/mob/perthMob.webp";
import adelaide from "../../public/pageHeros/mob/adelaideMob.webp";
import canberra from "../../public/pageHeros/mob/canberraMob.webp";
import northernRivers from "../../public/pageHeros/mob/northernRiversMob.webp";
import wollongong from "../../public/pageHeros/mob/wollongongMob.webp";
import richmond from "../../public/pageHeros/mob/richmondMob.webp";
import darwin from "../../public/pageHeros/mob/darwinMob.webp";
import goldCoast from "../../public/pageHeros/mob/goldCoastMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/locations",
      url: "https://www.powerplatformexperts.com.au/locations",
      name: "Microsoft Power Platform Experts Locations",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au#website",
      },
      datePublished: "2025-03-26T00:00:00+00:00",
      dateModified: "2025-03-26T00:00:00+00:00",
      breadcrumb: {
        "@id": "https://www.powerplatformexperts.com.au/locations#breadcrumb",
      },
      inLanguage: "en-AU",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://www.powerplatformexperts.com.au/locations"],
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.powerplatformexperts.com.au/locations#breadcrumb",
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
          name: "Locations",
        },
      ],
    },
  ],
};

const Page = () => {
  // Define the location data
  const locationData = [
    {
      id: "nsw",
      sectionTitle: "New South Wales",
      locations: [
        {
          name: "Sydney, NSW",
          image: sydney,
          alt: "Sydney skyline",
          description:
            "Our Sydney specialists provide Microsoft Power Platform solutions throughout the Greater Sydney metropolitan area. Creating automated workflows, custom business apps, data visualisations, and client portals, our team offers comprehensive training and support for all Microsoft Power Platform components.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Northern Rivers, NSW",
          image: northernRivers,
          alt: "Northern Rivers region",
          description:
            "Serving the Northern Rivers region of NSW, our team implements efficient Microsoft Power Platform solutions for organisations across various industries. We deliver both remote and on-site implementation of Power Automate, Power Apps, Power BI, and Power Pages.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Wollongong, NSW",
          image: wollongong,
          alt: "Wollongong coastline",
          description:
            "Our Wollongong team serves the Illawarra region with specialised low-code automation and business intelligence services. We develop custom Power Platform solutions for organisations looking to modernise their processes and enhance their data-driven decision making.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "vic",
      sectionTitle: "Victoria",
      locations: [
        {
          name: "Melbourne, VIC",
          image: melbourne,
          alt: "Melbourne cityscape",
          description:
            "Our Melbourne team implements Microsoft Power Platform solutions across the Greater Melbourne region. Office Experts Group excels in business process automation, custom app development, and data visualisation using the full Microsoft Power Platform. Our dedicated consultants are certified specialists in their field.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Richmond, VIC",
          image: richmond,
          alt: "Richmond area",
          description:
            "Located in the heart of Richmond, our Power Platform experts deliver tailored automation and business intelligence solutions for local enterprises. We specialise in developing low-code applications and workflows that significantly enhance operational efficiency and productivity.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "qld",
      sectionTitle: "Queensland",
      locations: [
        {
          name: "Brisbane, QLD",
          image: brisbane,
          alt: "Brisbane river and skyline",
          description:
            "Our Brisbane team delivers Microsoft Power Platform solutions throughout Southeast Queensland. We implement automated workflows, custom business applications, and interactive dashboards to transform how organisations operate. Our Power Platform specialists have been optimising business processes for over two decades.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
        {
          name: "Gold Coast, QLD",
          image: goldCoast,
          alt: "Gold Coast skyline and beaches",
          description:
            "Our Gold Coast team specialises in Microsoft Office consulting and training for local businesses. From Excel automation to Word templates, Access databases, and Power Platform solutions, we provide tailored services to improve efficiency and productivity.",
          serviceLinks: {
            excel:
              "https://www.excelexperts.com.au/excel-consultants-gold-coast",
            word: "https://www.wordexperts.com.au/word-consultants-gold-coast",
            access:
              "https://www.accessexperts.com.au/access-consultants-gold-coast",
            powerplatform: "/contact-us",
            office:
              "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast",
          },
        },
      ],
    },
    {
      id: "wa",
      sectionTitle: "Western Australia",
      locations: [
        {
          name: "Perth, WA",
          image: perth,
          alt: "Perth skyline",
          description:
            "Our Perth consultants implement Power Platform solutions for businesses throughout Western Australia. We develop custom Power Apps, Power Automate workflows, Power BI dashboards, and Power Pages portals to revolutionize your business processes and enhance data visibility.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "sa",
      sectionTitle: "South Australia",
      locations: [
        {
          name: "Adelaide, SA",
          image: adelaide,
          alt: "Adelaide city view",
          description:
            "Serving South Australian organisations, our Adelaide team develops Microsoft Power Platform solutions tailored to diverse business needs. We design automated workflows, custom applications, and data analytics solutions that address complex operational challenges and drive digital transformation.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "act",
      sectionTitle: "Australian Capital Territory",
      locations: [
        {
          name: "Canberra, ACT",
          image: canberra,
          alt: "Canberra parliament house",
          description:
            "Our Canberra team specialises in Microsoft Power Platform solutions for government departments and local organisations. Within the Office Experts Group, our Power Platform specialists focus on developing secure, compliant automation and business intelligence solutions that meet the unique requirements of government and regulated industries.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
    {
      id: "nt",
      sectionTitle: "Northern Territory",
      locations: [
        {
          name: "Darwin, NT",
          image: darwin,
          alt: "Darwin harbor",
          description:
            "Our Northern Territory team delivers Microsoft Power Platform solutions to Darwin businesses and organisations. We implement custom workflows, business applications, and data analysis tools that work effectively in remote environments, with both on-site and cloud-based deployment options.",
          serviceLinks: {
            excel: "https://www.excelexperts.com.au/contact-us",
            word: "https://www.wordexperts.com.au/contact-us",
            access: "https://www.accessexperts.com.au/contact-us",
            powerplatform: "/contact-us",
            office: "https://www.officeexperts.com.au/contact-us",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceHero
        title="Our Locations"
        desktopImage={australia}
        mobileImage={australiaMob}
        altDesk="Australia map"
        altMob="man holding Australia flag"
      />

      {locationData.map((section) => (
        <LocationGroups
          key={section.id}
          sectionTitle={section.sectionTitle}
          locations={section.locations}
        />
      ))}

      <Promo
        h2={"Need automation and business intelligence solutions in your area?"}
        p={
          "Contact us today to discover how our local and remote services can help your organisation leverage the full capabilities of Microsoft Power Platform."
        }
      />
      <Contact />
    </>
  );
};

export default Page;
