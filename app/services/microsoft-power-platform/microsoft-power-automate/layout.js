import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  // Basic metadata
  title: "Microsoft Power Automate Services | Power Platform Experts",
  description:
    "Expert Power Automate consulting services for workflow automation, process optimization, and business efficiency. Specializing in cloud flows, business process flows, and robotic process automation.",

  // OpenGraph
  openGraph: {
    title: "Power Automate Services | Custom Workflow Automation Solutions",
    description:
      "Transform your business operations with expert Power Automate consulting. Custom workflow automation, process optimization, and seamless system integration for enhanced productivity.",
    url: "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate/",
  },

  // Additional metadata
  keywords: [
    // Core Power Automate services
    "custom Power Automate workflow development",
    "business process automation consulting",
    "Power Automate cloud flow implementation",
    "robotic process automation solutions",

    // Specific workflow types
    "automated approval workflow setup",
    "document processing automation",
    "Power Automate email workflow automation",
    "automated data entry solutions",

    // Integration focused
    "Power Automate SharePoint integration",
    "Microsoft 365 workflow automation",
    "Teams automation solutions",
    "multi-system workflow integration",

    // Process specific
    "automated invoice processing workflow",
    "employee onboarding automation",
    "document approval flow automation",
    "automated notification systems",

    // Business solutions
    "business process optimization Power Automate",
    "custom trigger workflow automation",
    "automated task management solutions",
    "process mining implementation",

    // Industry specific
    "financial process automation Power Automate",
    "healthcare workflow automation",
    "retail process automation solutions",
    "manufacturing workflow optimization",

    // Location based
    "Power Automate consultants Sydney",
    "workflow automation Melbourne",
    "Power Platform automation Brisbane",
    "business process automation Perth",
  ],

  canonical:
    "https://www.powerplatformexperts.com.au/services/microsoft-power-platform/microsoft-power-automate/",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
