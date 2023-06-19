/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import ImageCustom from "../../../common/ImageCustom";


// Styles here
import styles from './styles.module.scss';

export default function InstantScoreSection(props) {
  return (
    <div className={styles.instantScoreStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={`${styles.contentSection}`}>
          <h1 className={`${styles.title}`}>
            Instant Score Reporting
          </h1>
          <p className={`${styles.descriptionText} description`}>
            A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
          </p>
        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.imageItem}>
          <ImageCustom src="score-1.svg" alt="" layout="fill" />
        </div>
        <div className={styles.imageItem}>
          <ImageCustom src="score-2.svg" alt="" layout="fill" />
        </div>
      </div>
    </div>
  )
}