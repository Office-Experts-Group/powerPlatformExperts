import Link from "next/link";
import React from "react";

import styles from "../../styles/footerHelp.module.css";

const FooterHelpSection = () => {
  return (
    <div className={styles.helpSection}>
      <h3>Help</h3>
      <Link href={"/contact-us"}>Online Enquiry Form</Link>
      <Link
        rel="nofollow noopener noreferrer"
        href={"https://www.officeexperts.com.au/faq"}
      >
        FAQ
      </Link>
      <Link
        rel="nofollow noopener noreferrer"
        href={"https://www.officeexperts.com.au/terms-and-conditions"}
      >
        Terms and Conditions
      </Link>
      <Link
        rel="nofollow noopener noreferrer"
        href={"https://www.officeexperts.com.au/privacy-policy"}
      >
        Privacy Policy
      </Link>
      <Link
        rel="nofollow noopener noreferrer"
        href={"https://www.officeexperts.com.au/refund-policy"}
      >
        Refund Policy
      </Link>
    </div>
  );
};

export default FooterHelpSection;
