/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import ImageCustom from "../../../common/ImageCustom";


// Styles here
import styles from './styles.module.scss';

export default function InstantScoreSection(props) {
  const communicationGrid = [
    {
      imgUrl: 'microphone.svg',
      title: 'Speaking',
      description: 'Evaluate a candidate’s ability to speak clearly, correctly and coherently'
    },
    {
      imgUrl: 'ear.svg',
      title: 'Listening',
      description: 'Evaluate a candidate’s ability to listen and comprehend properly'
    },
    {
      imgUrl: 'book-open.svg',
      title: 'Reading',
      description: 'Evaluate the ability to read, process & retain written information'
    },
    {
      imgUrl: 'pencil-simple.svg',
      title: 'Writing',
      description: 'Evaluate the ability to write fluently and clearly, to express effectively'
    }
  ]
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