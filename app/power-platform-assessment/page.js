"use client";
import React, { useState } from "react";
import Image from "next/image";

import PowerPlatformAssessment from "../../components/PowerPlatformAssessment";
import ServiceHero from "../../components/ServiceHero";
import Contact from "../../components/Contact";
import ExpertsAwait from "../../components/ExpertsAwait";
import Promo from "../../components/Promo";

import question from "../../public/questionMark.webp";
import exclamation from "../../public/exclamation.webp";

import styles from "../../styles/assessment.module.css";

import assessment from "../../public/pageHeros/assessment.webp";
import assessmentMob from "../../public/pageHeros/mob/assessmentMob.webp";

const Page = () => {
  const [assessmentState, setAssessmentState] = useState({
    showResults: false,
    showEmailForm: false,
    currentStep: 0,
  });

  const handleAssessmentStateChange = (newState) => {
    setAssessmentState(newState);
  };

  return (
    <main>
      <ServiceHero
        title="Power Platform Integration Assessment"
        desktopImage={assessment}
        mobileImage={assessmentMob}
        altDesk={"Grading Papers"}
        altMob={"Grading Papers"}
      />
      <div className={styles.assessmentPage}>
        <Image
          src={assessmentState.showResults ? exclamation : question}
          alt={
            assessmentState.showResults ? "exclamation marks" : "question marks"
          }
          fill
        />
        <PowerPlatformAssessment onStateChange={handleAssessmentStateChange} />
      </div>
      <ExpertsAwait />
      <Promo
        h2={"Ready to level up your Power Platform Skills?"}
        p={
          "Contact us today to discover how we can help you gain the most for you and your business from the entire Microsoft Power Platform Suite."
        }
      />
      <Contact />
    </main>
  );
};

export default Page;
