/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import UnberryEmoticon from './Unberry';
import TraditionalEmoticon from './traditional';

import Image from 'next/image';
import arc from "../../../assets/new/design-arc.png";

// Json File


// Styles here
import styles from './styles.module.scss';

export default function CandidatesAbsolutely() {
  return (
    <div className={styles.candidatesAbsolutelyStyle}>
      <div className='container-width'>
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
          <ReactCompareSlider position={85} itemOne={<TraditionalEmoticon />} itemTwo={<UnberryEmoticon />}
          />
        </div>
      </div>
    </div>
  )
}
