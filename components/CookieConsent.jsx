"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/cookieConsent.module.css";

const GA_ID = "G-WDDMGT2LK0";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check if consent already exists
    const consentChoice = localStorage.getItem("cookieConsent");
    if (consentChoice === "accepted" && !window.gtag) {
      initializeAnalytics();
      return;
    }

    // Show consent after slight delay if no choice made
    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookieConsent")) {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const initializeAnalytics = () => {
    if (typeof window === "undefined") return;

    try {
      // Initialize GA4
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA_ID);
    } catch (error) {
      console.error("Failed to initialize analytics:", error);
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    initializeAnalytics();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isClient || !isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.alert}>
        <h2 className={styles.title}>Cookie Consent</h2>
        <div className={styles.description}>
          <p className={styles.message}>
            We use cookies to analyze our traffic and improve your experience.
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Accept All
            </button>
            <button onClick={handleDecline} className={styles.declineButton}>
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={handleDecline}
          className={styles.closeButton}
          aria-label="Close"
        >
          <span className={styles.srOnly}>Close</span>
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
