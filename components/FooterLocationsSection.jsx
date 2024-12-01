"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/footerLocations.module.scss";

const locationsByState = {
  "New South Wales": {
    Sydney: "https://officeexperts.com.au/word-and-powerpoint-experts-sydney/",
    Wollongong:
      "https://officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
    "Central Coast":
      "https://officeexperts.com.au/excel-and-access-experts-central-coast-nsw/",
    "Northern Rivers":
      "https://officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/",
  },
  Victoria: {
    Melbourne:
      "https://officeexperts.com.au/word-and-powerpoint-experts-melbourne/",
    Richmond:
      "https://officeexperts.com.au/office-and-office-365-experts-richmond/",
  },
  Queensland: {
    Brisbane:
      "https://officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
    "Gold Coast":
      "https://officeexperts.com.au/word-and-powerpoint-experts-gold-coast/",
  },
  "Western Australia": {
    Perth: "https://officeexperts.com.au/word-and-powerpoint-experts-perth/",
  },
  ACT: {
    Canberra:
      "https://officeexperts.com.au/word-and-powerpoint-experts-canberra/",
  },
  "Northern Territory": {
    Darwin:
      "https://officeexperts.com.au/office-excel-access-and-365-experts-darwin/",
  },
};

export default function FooterLocationsSection() {
  const [activeState, setActiveState] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  const handleStateClick = (state, e) => {
    e.preventDefault();
    setActiveState(activeState === state ? null : state);
  };

  return (
    <div className={styles.locationsSection}>
      <h3>Our Locations</h3>
      <p className={styles.remoteAccess}>Australia-wide via remote access</p>

      <div className={styles.statesGrid}>
        {Object.entries(locationsByState).map(([state, locations]) => {
          const isActive = activeState === state;
          const dropdownClasses = `${styles.locationsDropdown} ${
            isActive ? styles.show : ""
          }`;
          const stateClasses = `${styles.stateDropdown} ${
            isActive ? styles.active : ""
          }`;

          return (
            <div
              key={state}
              className={stateClasses}
              onClick={(e) => handleStateClick(state, e)}
            >
              <p className={styles.stateHeader}>{state}</p>
              <div className={dropdownClasses}>
                {Object.entries(locations).map(([city, url]) => (
                  <div key={city} className={styles.cityItem}>
                    <Link href={url} className={styles.cityLink}>
                      {city}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
