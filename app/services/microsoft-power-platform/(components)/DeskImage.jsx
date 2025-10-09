import Image from "next/image";
import React from "react";

import how from "../../../../public/how.webp";

import styles from "../../../../styles/intro.module.css";

const DeskImage = () => {
  return (
    <section
      id="your"
      className={styles.deskImage}
      style={{
        marginTop: "0rem",
        backgroundColor: "transparent",
      }}
    >
      <Image src={how} alt="how in bold text" width={600} height={400} />
    </section>
  );
};

export default DeskImage;
