"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";
import styles from "../styles/cookieConsent.module.css";

// Google Analytics ID for Power Platform Experts
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WDDMGT2LK0";
// Google Ads Conversion ID and Label (same across all sites)
const GADS_CONVERSION_ID = "AW-1062762865";
const GADS_CONVERSION_LABEL = "ZqwXCP_M6MYaEPHy4foD";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const isDevelopment = process.env.NODE_ENV === 'development';

  useEffect(() => {
    setIsClient(true);

    // Check if consent already exists
    const consentChoice = localStorage.getItem("cookieConsent");
    if (consentChoice === "accepted") {
      setShowAnalytics(true);
      return;
    }

    // Add scroll listener for better UX
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Show consent after slight delay if no choice made and no scroll yet
    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookieConsent") && !hasScrolled) {
        setIsVisible(true);
      }
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled]);

  // Define the global conversion tracking function
  useEffect(() => {
    if (showAnalytics && typeof window !== 'undefined') {
      // Define the gtag_report_conversion function as a global function with error handling
      window.gtag_report_conversion = (url) => {
        try {
          const callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'conversion', {
              'send_to': `${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}`,
              'event_callback': callback
            });
          } else {
            console.log("Google Analytics not available yet, no conversion tracked");
            // Still execute the callback if gtag isn't available
            if (typeof callback === 'function') {
              callback();
            }
          }
          return false;
        } catch (error) {
          console.error("Error in conversion tracking:", error);
          // If there's an error, still handle the URL if provided
          if (typeof(url) != 'undefined') {
            window.location = url;
          }
          return false;
        }
      };
    }
  }, [showAnalytics]);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowAnalytics(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  return (
    <>
      {showAnalytics && (
        <>
          {/* Google Analytics script - gtag.js */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Only in development, add this to prevent warnings
              ${isDevelopment ? "gtag('set', 'send_page_view', false);" : ""}
              
              gtag('config', '${GA_ID}'${isDevelopment ? ", { 'debug_mode': true }" : ""});
              gtag('config', '${GADS_CONVERSION_ID}', {
                'send_page_view': false,
                'linker': {
                  'domains': ['excelexperts.com.au', 'officeexperts.com.au', 'accessexperts.com.au', 'wordexperts.com.au', 'powerplatformexperts.com.au']
                }
              });
            `}
          </Script>

          {/* Google Ads manual conversion function */}
          <Script id="google-ads-conversion" strategy="afterInteractive">
            {`
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': '${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}',
                  'event_callback': callback
                });
                return false;
              }
            `}
          </Script>

          {/* Enhanced conversion tracking with GA4 events */}
<Script id="conversion-tracking-auto" strategy="afterInteractive">
  {`
    window.addEventListener('load', function() {
      document.addEventListener('click', function(e) {
        if (e.target.closest('.contact_submitBtn__e1DBC')) {
          var contactTimer = setInterval(function() {
            if (document.querySelectorAll('.contact_successMessage__LYjcy').length > 0) {
              // Google Ads conversion (only counts if from ad click)
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {'send_to': '${GADS_CONVERSION_ID}/${GADS_CONVERSION_LABEL}'});
                
                // Google Analytics event (tracks ALL form submissions)
                gtag('event', 'form_submit', {
                  'event_category': 'Contact',
                  'event_label': 'Contact Form Submission',
                  'value': 1,
                  'custom_parameters': {
                    'form_type': 'contact',
                    'page_location': window.location.href
                  }
                });
              }
              clearInterval(contactTimer);
            }
          }, 1000);
        }
      });
    });
  `}
</Script>
        </>
      )}

      {isClient && isVisible && (
        <div className={styles.container}>
          <div className={styles.alert}>
            <h2 className={styles.title}>Cookie Consent</h2>
            <div className={styles.description}>
              <p className={styles.message}>
                We use cookies to analyze our traffic and improve your
                experience.
              </p>
              <div className={styles.buttonGroup}>
                <button onClick={handleAccept} className={styles.acceptButton}>
                  Accept All
                </button>
                <button
                  onClick={handleDecline}
                  className={styles.declineButton}
                >
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
      )}
    </>
  );
};

export default CookieConsent;