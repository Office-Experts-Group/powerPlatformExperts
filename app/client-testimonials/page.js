import React from "react";

import Contact from "../../components/Contact";
import TestimonialPage from "./(components)/TestimonialPage";
import ServiceHero from "../../components/ServiceHero";

import {
  generateProfessionalServiceSchema,
  generateOrganizationSchema,
} from "../../utils/schemaGenerators";
import { getTestimonialsPageSchema } from "../../utils/testimonialSchemaGenerator";
import { testimonials } from "../../testimonials";
import { filterAndSortTestimonials } from "../../utils/filterTestimonials";
const serviceTestimonials =
  filterAndSortTestimonials(testimonials, "powerplatform") || testimonials;
import testimonialsPic from "../../public/pageHeros/testimonials.webp";
import testimonialsMob from "../../public/pageHeros/mob/testimonialsMob.webp";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...getTestimonialsPageSchema(serviceTestimonials, "powerplatform")[
      "@graph"
    ],
    generateOrganizationSchema(),
    generateProfessionalServiceSchema(),
    {
      "@type": "WebPage",
      "@id": "https://www.powerplatformexperts.com.au/client-testimonials/",
      url: "https://www.powerplatformexperts.com.au/client-testimonials/",
      name: "Client Testimonials | Power Platform Experts Success Stories",
      isPartOf: {
        "@id": "https://www.powerplatformexperts.com.au/#website",
      },
      datePublished: "2024-10-27T00:00:00+00:00",
      dateModified: "2024-10-27T00:00:00+00:00",
      description:
        "Read what our clients say about our Microsoft Power Platform services.",
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.powerplatformexperts.com.au/client-testimonials/#breadcrumb",
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
          name: "Client Testimonials",
        },
      ],
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
        title="Client Testimonials"
        desktopImage={testimonialsPic}
        mobileImage={testimonialsMob}
        altDesk={"Wooden block with smiley face"}
        altMob={"five stars"}
      />
      <TestimonialPage testimonials={serviceTestimonials} />
      <Contact />
    </>
  );
};

export default Page;
