export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Power Pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft Power Pages is a low-code platform which allows users to create, host and manage websites quickly and effectively. Power Pages integrates with Microsoft dataverse, Dynamics 365, Power BI, as well as other sources.",
      },
    },
    {
      "@type": "Question",
      name: "How does Power Pages work in conjunction to my existing website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Power Pages has various options available for integrating Power Pages into your existing website. Additionally, you can also incorporate Power Pages with Microsoft's other cloud based tools such as Power BI and SharePoint to extend the scope of your application.",
      },
    },
    {
      "@type": "Question",
      name: "Can I integrate Power Pages with other Power Platform tools?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft's Power Platform tools like Power BI, Power Automate and Power Apps integrate seamlessly into Power Pages. This allows you to build business processes stemming from a Power Pages website. The benefit of this is that you can create rich, interactive web experiences that seamlessly feed into business and operational processes.",
      },
    },
    {
      "@type": "Question",
      name: "What costs are involved/license is required to use Microsoft Power Pages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Microsoft's Power Pages has various licensing options depending on the type and number of users you need for your site over time. These options are flexible and scalable depending on your requirements.",
      },
    },
  ],
};

export default faqSchema;
