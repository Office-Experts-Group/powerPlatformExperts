import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          Who are {service} Consultants in {location}?
        </h2>
      </div>

      <p>
        Our Power Platform experts provide {location} businesses with
        professional automation solutions, custom application development, and
        support services tailored to your specific needs. Our local team of
        Microsoft-certified Power Platform specialists offer expertise in Power
        Automate workflows, Power Apps creation, Power BI data visualisation,
        and Power Pages deployment.
      </p>
    </div>
  );
};

export default LocationSummary;
