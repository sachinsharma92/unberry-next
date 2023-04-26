/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Styles here
import styles from './styles.module.scss';

export default function BetterTalent() {

  return (
    <div className={styles.betterTalentSectionStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          We enable companies to <span> make better talent decisions </span> by seeing more in people.
        </h1>
      </div>

      <div className={styles.videoBox}>
        <video className={styles.videoSection} playsinline autoPlay muted loop>
          <source src="https://s3.ap-south-1.amazonaws.com/grappus-website/GrappusVideo-Feb17th+(online-video-cutter.com).mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
