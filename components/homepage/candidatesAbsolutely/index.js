/* eslint-disable @next/next/no-img-element */
import React from 'react';

import icon1 from "../../../assets/new/emoji/dull.svg";
import icon2 from "../../../assets/new/emoji/stressed.svg";
import icon3 from "../../../assets/new/emoji/weary.svg";
import icon4 from "../../../assets/new/emoji/bored.svg";
import icon5 from "../../../assets/new/emoji/anxious.svg";
import icon6 from "../../../assets/new/emoji/mindBlown.svg";
import icon7 from "../../../assets/new/emoji/content.svg";
import icon8 from "../../../assets/new/emoji/happy.svg";



// Styles here
import styles from './styles.module.scss';
import Image from 'next/image';

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
        </div>
      </div>

      <div className={styles.traditionalSection}>
        <h3 className={styles.title3}>Traditional</h3>

        <div className={styles.emojiSectionStyle}>
          {iconsData.map((item) => (
            <div key={item} className={styles.emojiStyle}>
              <Image src={item.iconUrl} alt="" width="85" height="85" />
              <h4 className={styles.title4}>{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}