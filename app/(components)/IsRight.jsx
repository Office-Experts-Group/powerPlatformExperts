import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../components/AnimateOnScroll";

import styles from "../../styles/isRight.module.css";

import isRight from "../../public/isRight.webp";
import Link from "next/link";

const IsRight = () => {
  return (
    <div className={styles.isRight}>
      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.imgWrapper}>
          <div className={styles.imgDiv}>
            <Image
              className={styles.imgMain}
              src={isRight}
              alt="person using a laptop"
              width={505}
              height={635}
            />
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="scale-down" delay={0.2} duration={1.6}>
        <div className={styles.contentWrapper}>
          <div className={styles.sub}>
            <p>Unlock New Possibilities</p>
          </div>
          <h2>Achieve More with Expert Power Platform Integration</h2>
          <p className={styles.text}>
            At Power Platform Experts, we specialise in harnessing the
            capabilities of the Power Platform to propel business forward. Our
            team excels in crafting tailored solutions, from design and
            development, through to deployment, addressing your unique business
            needs and requirements. Additionally, we offer comprehensive
            training, ongoing support and facilitate effective integration into
            your business to ensure the success of your
          </p>
          <p className={styles.textAlone}>Power Platform projects.</p>
          <div className={styles.contentGrid}>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>Power Platform Solutions</h3>
              </div>
              <p>
                Customised apps, workflows, and insights to boost productivity.
              </p>
            </div>
            <div className={styles.excerpt}>
              <div>
                <div className={styles.bar}></div>
                <h3>End-to-End Support</h3>
              </div>
              <p>From development to deployment, we've got you covered.</p>
            </div>
          </div>

          <Link href={"/meet-the-team"} className={`btn ${styles.btn}`}>
            Meet our Team
          </Link>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default IsRight;
