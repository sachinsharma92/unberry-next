/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import ImageCustom from "../../../common/ImageCustom";


// Styles here
import styles from './styles.module.scss';

export default function CommunicationHeroSection(props) {
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
    <div className={styles.communicationHeroStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={`${styles.contentSection} animation-block`}>
          <h1 className={`${styles.titleDesktop} title1`}>
            Instant AI Spoken & Written <br />
            Communication Assessment <br />
            <div className={styles.spanBlock}>
              <span className={styles.color1}>Unbiased</span>
              <span className={styles.color2}>Comprehensive</span>
              <span className={styles.color2}>Engaging</span>
            </div>
          </h1>
          <p className={`${styles.descriptionText} description`}>
            That automates meaningful conversations with candidates scoring them on their spoken & written communication skills and their ability to respond and react to different scenarios and situations.
          </p>

          <div className={`${styles.btnSection}`}>
            <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
          </div>
        </div>
      </div>

      <div className={styles.communicationSkills}>
        <div className={`container-width ${styles.containerStyle}`}>
          <div className={styles.titleMedium}>
            Assess all aspects of communication skills
          </div>
          <p className={`${styles.desc} description`}>
            A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
          </p>

          <div className={styles.communicationGrid}>
            {communicationGrid.map((item) => (
              <div key={item} className={styles.gridItem}>
                <div className={styles.imgBox}>
                  <ImageCustom src={item.imgUrl} alt="" width="32" height="32" />
                </div>
                <h4 className={styles.title4}>
                  {item.title}
                </h4>
                <p className={`${styles.description} description`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}