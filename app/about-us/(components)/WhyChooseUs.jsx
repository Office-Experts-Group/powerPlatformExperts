import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../../../styles/whyChoose.module.css";

import faqs from "../../../faqs/about-us";

import semi from "../../../public/shapes/semi600x600.webp";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChoose}>
      <Image
        src={semi}
        alt="Semi Circle"
        height={900}
        width={900}
        className={styles.semi}
      />
      <AnimateOnScroll animation="fade-up-right" delay={0} duration={1.5}>
        <div className={styles.content}>
          <p>Why Choose Us?</p>
          <h2>Reliable, Personalised Power Platform Solutions</h2>
          <p>
            As part of the{" "}
            <Link href="https://www.officeexperts.com.au">
              Office Experts Group
            </Link>
            , Power Platform Experts bring together deep technical expertise
            with a broader understanding of the entire Microsoft 365 ecosystem.
            Whether you're building custom apps with Power Apps, automating
            workflows with Power Automate, visualising data with Power BI, or
            creating secure portals with Power Pages—we deliver solutions that
            are not only powerful, but also seamlessly integrated across your
            organisation.
          </p>
          <p>
            Our team works closely with businesses to understand your
            operational challenges and design end-to-end solutions that boost
            productivity, streamline processes, and enable smarter
            decision-making.
          </p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="slide-right" delay={0} duration={1.5}>
        <div className={styles.dropdowns}>
          <div className={styles.faqContainer} role="group">
            {faqs.map(({ question, answer }, index) => (
              <details
                key={`faq-${index}`}
                className={styles.faqItem}
                name="faq-group"
              >
                <summary>
                  <p className={styles.questionText}>{question}</p>
                </summary>
                <div className={styles.faqContent}>
                  <p>{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default WhyChooseUs;
