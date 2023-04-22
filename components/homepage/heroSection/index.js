/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import icon1 from "../../../assets/new/job-knowledge.svg"
import icon2 from "../../../assets/new/cognition-Intelligence.svg"
import icon3 from "../../../assets/new/communication-skills.svg"
import icon4 from "../../../assets/new/behavioural-personality.svg"

// Styles here
import styles from './styles.module.scss';
import Image from 'next/image';

export default function HeroSection() {

  return (
    <div className={styles.heroSectionStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1} title1`}>
          Building Talent Intelligence For
          The Modern Workplace
        </h1>
        <p className={`${styles.descriptionText} description`}>
          Modern, next-gen talent assessment suite, that can measure job-relevant skills and proficiencies, to build and scale teams.
        </p>

        <div className={styles.btnSection}>
          <ButtonPrimary href="/" title="BOOK DEMO" />
        </div>
      </div>

      <div className={styles.workplaceSection}>
        <div className={styles.gridSection}>
          <div className={styles.imgBoxStyle}>
            <Image src={icon1} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Job Knowledge & Functional Skills</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon2} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Cognition & <br /> Intelligence</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon3} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Communication <br /> Skills</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon4} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Behavioural & Personality</h4>
          </div>
        </div>
      </div>

      <h3 className={styles.title3}>
        Mapping the holistic workplace footprint of a candidate
      </h3>
    </div>
  )
}
