import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../../styles/ourExperts.module.css";
import yuriy from "../../../public/team/yuriy.webp";
import martin from "../../../public/team/martin.webp";
import josh from "../../../public/team/joshua.webp";

const OurExperts = () => {
  return (
    <section className={styles.ourExperts} id="our-experts">
      <h2>Our Local Melbourne Consultants</h2>
      <p style={{ marginBottom: "2rem" }}>
        As part of{" "}
        <Link href="https://www.officeexperts.com.au">
          Office Experts Group
        </Link>
        , we have a team of professionals throughout Australia specialising
        across the entire Microsoft Suite. We also have our local Melbourne
        consultants specialising in Power BI, working with the Power Platform
        Team.
      </p>
      <div className={styles.consultant}>
        <div className={styles.authorImage}>
          <Image src={yuriy} alt="Yuriy" width={80} height={80} />
        </div>
        <p>
          Yuriy is a Senior Analyst Programmer with over eight years of
          experience with Power Platform Experts. He specialises in developing
          and maintaining transactional and reporting databases using Microsoft
          Access and SQL Server. Yuriy also designs and implements reporting and
          business intelligence solutions with tools such as Power BI, SSAS,
          SSIS, Power Pivot, Excel, and VBA.
        </p>
      </div>

      <div className={styles.consultant}>
        <div className={styles.authorImage}>
          <Image src={josh} alt="Joshua Tseitlin" width={80} height={80} />
        </div>
        <p>
          Josh brings a strong background in banking, finance, and business
          analytics. A graduate of RMIT, he has over six years of experience
          driving process improvements and implementing efficiency initiatives,
          achieving measurable performance gains for enterprise clients. At
          Office Experts Group, Josh applies his expertise in data analysis,
          Excel, Power Platform and business process design.
        </p>
      </div>

      <div className={styles.consultant}>
        <div className={styles.authorImage}>
          <Image src={martin} alt="Martin" width={80} height={80} />
        </div>
        <p>
          Martin is an experienced Analyst Programmer with a strong background
          in data analysis, business systems, and process automation. Over more
          than a decade, he has worked with major Australian organisations
          including NAB, ANZ, Shell, Visionstream, and Victoria Police —
          developing and maintaining analytical and reporting solutions across
          highly regulated and data-driven environments.
        </p>
      </div>
    </section>
  );
};

export default OurExperts;
