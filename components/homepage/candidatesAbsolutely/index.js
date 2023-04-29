/* eslint-disable @next/next/no-img-element */
import React from 'react';

import arc from "../../../assets/new/design-arc.png";
import icon5 from "../../../assets/new/emoji/anxious.svg";
import icon4 from "../../../assets/new/emoji/bored.svg";
import icon7 from "../../../assets/new/emoji/content.svg";
import icon1 from "../../../assets/new/emoji/dull.svg";
import icon8 from "../../../assets/new/emoji/happy.svg";
import icon6 from "../../../assets/new/emoji/mindBlown.svg";
import icon2 from "../../../assets/new/emoji/stressed.svg";
import icon3 from "../../../assets/new/emoji/weary.svg";

// Styles here
import Image from 'next/image';
import ReactCompareImage from 'react-compare-image';
import styles from './styles.module.scss';

export default function CandidatesAbsolutely() {
  const iconsData = [
    {
      iconUrl: icon1,
      title: 'Dull'
    },
    {
      iconUrl: icon2,
      title: 'Stressed'
    },
    {
      iconUrl: icon3,
      title: 'Weary'
    },
    {
      iconUrl: icon4,
      title: 'Bored'
    },
    {
      iconUrl: icon5,
      title: 'Anxious'
    },
    {
      iconUrl: icon6,
      title: 'Mind Blown'
    },
    {
      iconUrl: icon7,
      title: 'Content'
    },
    {
      iconUrl: icon8,
      title: 'Happy'
    }
  ]
  return (
    <div className={styles.candidatesAbsolutelyStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          Candidates absolutely love the experience
        </h1>

        <div className={styles.numbersCard}>
          <div className={styles.item}>
            <h2 className={styles.titleNumber}>91%</h2>
            <div className={styles.subtext}>Experience Score</div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.item}>
            <h2 className={styles.titleNumber}>91%</h2>
            <div className={styles.subtext}>Completion Rates</div>
          </div>

          <div className={styles.arcStyle}>
            <Image src={arc} alt="" width="85" height="85" />
          </div>
        </div>
      </div>

      <div className={styles.traditionalSection}>

        <div className={styles.emojiDesktopStyle}>
          <ReactCompareImage
            leftImage="/assets/light.svg"
            rightImage="/assets/dark.svg"
            sliderLineWidth={0}
            handle={<div className={styles.handleImage}><Image src="/assets/switch.svg" alt="" width="90" height="90" /></div>}
            sliderPositionPercentage={0.85}
            handleSize={70}
          />
        </div>

        <div className={styles.emojiMobileStyle}>
          <ReactCompareImage
            leftImage="/assets/mob-light.svg"
            rightImage="/assets/mob-dark.svg"
            sliderLineWidth={0}
            handle={<div className={styles.handleImage}><Image src="/assets/switch.svg" alt="" width="90" height="90" /></div>}
            sliderPositionPercentage={0.65}
            handleSize={50}
          />
        </div>
      </div>

    </div>
  )
}
