// utils/schemaGenerators.js
export const generateProfessionalServiceSchema = () => ({
  "@type": "ProfessionalService",
  "@id": `https://www.powerplatformexperts.com.au/#business`,
  name: "Microsoft Power Platform Consulting Services",
  url: "https://www.powerplatformexperts.com.au/",
  description:
    "Professional Microsoft Power Platform consulting and support services",
  priceRange: "$$",
  serviceType: "Microsoft Power Platform Consulting",
  availableService: [
    {
      "@type": "Service",
      name: "Remote Consulting",
      description:
        "Australia-wide remote Microsoft Power Platform consulting services",
    },
    {
      "@type": "Service",
      name: "On-site Consulting",
      description:
        "In-house Microsoft Power Platform consulting services available in major metropolitan areas",
    },
  ],
  areaServed: [
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "New South Wales",
    },
    {
      "@type": "AdministrativeArea",
      name: "Victoria",
    },
    {
      "@type": "AdministrativeArea",
      name: "Queensland",
    },
    {
      "@type": "AdministrativeArea",
      name: "Western Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "South Australia",
    },
    {
      "@type": "AdministrativeArea",
      name: "Tasmania",
    },
    {
      "@type": "AdministrativeArea",
      name: "Australian Capital Territory",
    },
    {
      "@type": "AdministrativeArea",
      name: "Northern Territory",
    },
  ],
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  provider: {
    "@type": "Organization",
    "@id": `https://www.powerplatformexperts.com.au/#organization`,
  },
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
});

export const generateOrganizationSchema = () => ({
  "@type": "Organization",
  "@id": "https://www.powerplatformexperts.com.au/#organization",
  name: "Office Experts Group",
  url: "https://www.powerplatformexperts.com.au/",
  telephone: "1300 102 810",
  email: "consult@officeexperts.com.au",
  // Enhanced contact point information
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "1300 102 810",
      email: "consult@officeexperts.com.au",
      availableLanguage: ["en", "en-AU"],
      contactOption: "TollFree",
      hoursAvailable: "Mo,Tu,We,Th,Fr 09:00-17:00",
    },
  ],
  // Remote service availability
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Power Platform Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power BI Solutions",
          description: "Custom dashboard development and data visualisation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Apps Development",
          description: "Custom business application development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Automate",
          description: "Workflow automation and business process optimisation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Power Pages",
          description: "External-facing website development and portals",
        },
      },
    ],
  },
  location: [
    // New South Wales
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Sydney",
        postalCode: "2000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Sydney Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Grafton",
        postalCode: "2460",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Grafton Region",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Newcastle",
        postalCode: "2300",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Newcastle Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NSW",
        addressLocality: "Wollongong",
        postalCode: "2500",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Wollongong Metropolitan Area",
      },
    },
    // Victoria
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Melbourne",
        postalCode: "3000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Melbourne Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Richmond",
        postalCode: "3121",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Richmond Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "VIC",
        addressLocality: "Geelong",
        postalCode: "3220",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Geelong Metropolitan Area",
      },
    },
    // Queensland
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Brisbane",
        postalCode: "4000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Brisbane Metropolitan Area",
      },
    },
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "QLD",
        addressLocality: "Gold Coast",
        postalCode: "4217",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Gold Coast Metropolitan Area",
      },
    },
    // Western Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "WA",
        addressLocality: "Perth",
        postalCode: "6000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Perth Metropolitan Area",
      },
    },
    // South Australia
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "SA",
        addressLocality: "Adelaide",
        postalCode: "5000",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Adelaide Metropolitan Area",
      },
    },
    // Northern Territory
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "NT",
        addressLocality: "Darwin",
        postalCode: "0800",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Darwin Metropolitan Area",
      },
    },
    // ACT
    {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "AU",
        addressRegion: "ACT",
        addressLocality: "Canberra",
        postalCode: "2600",
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Canberra Metropolitan Area",
      },
    },
  ],
  virtualLocation: {
    "@type": "VirtualLocation",
    name: "Remote Service Available Australia-wide",
  },
  logo: {
    "@type": "ImageObject",
    inLanguage: "en-AU",
    "@id": "/logo.png",
    url: "/logo.png",
    contentUrl: "/logo.png",
    width: 1200,
    height: 630,
    caption: "Office Experts Group",
  },
  image: {
    "@id": "/logo.png",
  },
  sameAs: [
    "https://www.facebook.com/MSOfficeExperts",
    "https://x.com/OfficeExpertsG1",
    "https://www.instagram.com/officeexpertsgroup",
    "https://www.linkedin.com/company/office-experts-group",
    "https://www.youtube.com/channel/UCw2Xf02ukEwvM6fQ2lVZxuw",
  ],
});
