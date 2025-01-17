// Helper function to generate unique IDs for testimonials
const generateTestimonialId = (domain, page, index) => {
  return `${domain}#testimonial-${page}-${index}`;
};

// Helper to format date in ISO 8601
const formatDate = (date) => {
  return date.toISOString();
};

// Generate schema for a single testimonial
const generateTestimonialSchema = (testimonial, domain, page, index) => {
  // Extract domain name for service naming
  const domainName = domain.split(".")[1]; // e.g., 'wordexperts'
  const serviceName =
    domainName.charAt(0).toUpperCase() + domainName.slice(1, -7); // e.g., 'Word'

  return {
    "@type": "Review",
    "@id": generateTestimonialId(domain, page, index),
    itemReviewed: {
      "@type": "Service",
      name: `Microsoft ${serviceName} Consulting Services`,
      provider: {
        "@type": "Organization",
        "@id": `${domain}/#organization`,
      },
      serviceType: `Microsoft ${serviceName} Consulting`,
      description: `Professional Microsoft ${serviceName} consulting and support services`,
      areaServed: "Australia",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewBody: testimonial.content,
    datePublished: formatDate(new Date("2024-01-01")), // Set appropriate date
    publisher: {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
    },
  };
};

// Generate aggregated review schema
const generateAggregateSchema = (testimonials, domain) => {
  return {
    "@type": "AggregateRating",
    "@id": `${domain}/#aggregateRating`,
    itemReviewed: {
      "@type": "Organization",
      "@id": `${domain}/#organization`,
      name: "Office Experts Group",
    },
    ratingValue: "5",
    reviewCount: testimonials.length,
    bestRating: "5",
    worstRating: "1",
  };
};

// Main schema generator for testimonials pages
export const generateTestimonialsSchema = (
  testimonials,
  domain,
  page,
  includeAll = false
) => {
  // Base schema
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [],
  };

  // Add testimonial schemas based on page
  let testimonialsToInclude = testimonials;
  if (!includeAll) {
    // For home and about pages, only include a subset
    testimonialsToInclude = testimonials.slice(0, 3);
  }

  const testimonialSchemas = testimonialsToInclude.map((testimonial, index) =>
    generateTestimonialSchema(testimonial, domain, page, index)
  );

  // Add aggregate rating
  const aggregateSchema = generateAggregateSchema(testimonials, domain);

  // Combine all schemas
  baseSchema["@graph"] = [aggregateSchema, ...testimonialSchemas];

  return baseSchema;
};

// Usage example for different pages:
export const getHomePageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.powerplatformexperts.com.au",
    "/",
    false
  );
};

export const getTestimonialsPageSchema = (testimonials) => {
  return generateTestimonialsSchema(
    testimonials,
    "https://www.powerplatformexperts.com.au",
    "/client-testimonials/",
    true
  );
};
