/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import icon4 from "../../../assets/new/behavioural-personality.svg";
import icon2 from "../../../assets/new/cognition-Intelligence.svg";
import icon3 from "../../../assets/new/communication-skills.svg";
import icon1 from "../../../assets/new/job-knowledge.svg";

// Styles here
import Image from 'next/image';
import styles from './styles.module.scss';

export default function BetterTalent() {

  return (
    <div className={styles.betterTalentSectionStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          We enable companies to <span> make better talent decisions </span> by seeing more in people.
        </h1>
      </div>

      <video className={styles.videoSection} playsinline autoPlay muted loop>
        <source src="https://s3.ap-south-1.amazonaws.com/grappus-website/GrappusVideo-Feb17th+(online-video-cutter.com).mp4" type="video/mp4" />
      </video>
    </div>
  )
}
