/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ReactCompareSlider } from 'react-compare-slider';
import TraditionalEmoticon from './traditional';
import UnberryEmoticon from './unberry';

// Styles here
import ImageCustom from '../../../common/ImageCustom';
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
              <h2 className={styles.titleNumber}>95%</h2>
              <div className={styles.subtext}>Completion Rate</div>
            </div>

            <div className={styles.arcStyle}>
              <ImageCustom src="design-arc.svg" alt="" width="85" height="85" />
            </div>
          </div>
        </div>

        <div className={styles.traditionalSection}>
          <ReactCompareSlider position={40} itemOne={<TraditionalEmoticon />} itemTwo={<UnberryEmoticon />}
          />
        </div>

        <div className={styles.videoCard}>
          <video muted autoPlay loop playsInline width="100%" height="100%">
            <source src="https://assets.unberry.com/media/emoji-motions.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}
