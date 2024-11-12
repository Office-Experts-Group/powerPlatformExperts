import React from "react";
import Link from "next/link";
import styles from "../styles/footerLocations.module.scss";

const locationsByState = {
  "New South Wales": {
    Sydney: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "https://www.officeexperts.com.au/excel-and-access-experts-sydney/",
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-sydney/",
        "https://www.officeexperts.com.au/office-and-office-365-experts-sydney/",
      ],
    },
    Wollongong:
      "https://www.officeexperts.com.au/office-excel-access-and-word-experts-wollongong/",
    "Central Coast":
      "https://www.officeexperts.com.au/excel-and-access-experts-central-coast-nsw/",
    "Northern Rivers":
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-northern-rivers-nsw/",
  },
  Victoria: {
    Melbourne: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "https://www.officeexperts.com.au/excel-and-access-experts-melbourne/",
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-melbourne/",
        "https://www.officeexperts.com.au/office-and-office-365-experts-melbourne/",
      ],
    },
    Richmond: {
      links: [
        ["Excel", "Access"],
        ["Word", "PowerPoint"],
        ["Office", "Office 365"],
      ],
      urls: [
        "https://www.officeexperts.com.au/excel-and-access-experts-richmond/",
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-richmond/",
        "https://www.officeexperts.com.au/office-and-office-365-experts-richmond/",
      ],
    },
  },
  Queensland: {
    Brisbane:
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-brisbane/",
    "Gold Coast":
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-gold-coast/",
  },
  "Western Australia": {
    Perth: {
      links: [
        ["Word", "PowerPoint"],
        ["Excel", "Access"],
        ["Office", "Office 365"],
      ],
      urls: [
        "https://www.officeexperts.com.au/word-and-powerpoint-experts-perth/",
        "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
        "https://www.officeexperts.com.au/office-excel-access-and-365-experts-perth/",
      ],
    },
  },
  ACT: {
    Canberra:
      "https://www.officeexperts.com.au/word-and-powerpoint-experts-canberra/",
  },
  "Northern Territory": {
    Darwin:
      "https://www.officeexperts.com.au/office-excel-access-and-365-experts-darwin/",
  },
};

const FooterLocationsSection = () => {
  return (
    <div className={styles.locationsSection}>
      <h3>Our Locations</h3>
      <p className={styles.remoteAccess}>Australia-wide via remote access</p>

      <div className={styles.statesGrid}>
        {Object.entries(locationsByState).map(([state, locations]) => (
          <div key={state} className={styles.stateDropdown}>
            <p className={styles.stateHeader}>{state}</p>
            <div className={styles.locationsDropdown}>
              {Object.entries(locations).map(([city, data]) => (
                <div key={city} className={styles.cityItem}>
                  {typeof data === "string" ? (
                    <Link href={data} className={styles.cityLink}>
                      {city}
                    </Link>
                  ) : (
                    <div className={styles.cityWithServices}>
                      <span className={styles.cityName}>{city}</span>
                      {data.links.map((linkGroup, index) => (
                        <div key={index} className={styles.servicesList}>
                          {linkGroup.map((service, serviceIndex) => (
                            <Link
                              key={service}
                              href={data.urls[index]}
                              className={styles.serviceLink}
                            >
                              {service}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterLocationsSection;
