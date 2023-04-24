/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';


// Styles here
import styles from './styles.module.scss';

export default function BreakingExperience() {

  return (
    <div className={styles.breakingExperienceStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          Breaking down the experience
        </h1>
        <p className={styles.description}>
          A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
        </p>
        <ButtonPrimary href="/" title="BOOK DEMO" />
      </div>
    </div>
  )
}
