/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import ImageCustom from "../../../common/ImageCustom";
import styles from './styles.module.scss';

export default function WorksHeroSection(props) {

  return (
    <div className={styles.workHeroStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <div className={`${styles.contentSection} animation-block`}>
            <h1 className={`${styles.titleDesktop} title1 animation-heading`}>
              Immerse yourself <br />
              in the unberry experience
            </h1>
            <p className={`${styles.descriptionText} description animation-heading`}>
              The most modern & experiential talent assessment suite, that can measure job-relevant skills and proficiencies in just a few minutes
            </p>

            <div className={`${styles.btnSection} animation-heading`}>
              <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
            </div>
          </div>
        </div>
        <div className={`${styles.containerStyle}`}>

          <div className={styles.timelineSection}>
            <h4 className={styles.titleMedium}>Geared for Rapidity. Optimized for Expansion. <span>Fueled by AI</span></h4>
            <div className={styles.timelineBox}>
              <div className={styles.imgBox}>
                <ImageCustom src="h-1.png" alt="Unberry - Know More in a Detailed Video " layout="fill" />
              </div>
              <div className={styles.contentSection}>
                <div className={styles.itemStyle}>
                  <h4 className={`${styles.titleSM} title1 animation-heading`}>
                    Data
                  </h4>
                  <p className={`${styles.description} description animation-heading`}>
                    We leverage a vast data network, contextual industry models, and deep learning to empower of dynamic platform.
                  </p>
                </div>

                <div className={styles.itemStyle}>
                  <h4 className={`${styles.titleSM} title1 animation-heading`}>
                    Intelligence
                  </h4>
                  <p className={`${styles.description} description animation-heading`}>
                    Dynamic system of intelligence that bridges the gap between people, data, and interactions .
                  </p>
                </div>

                <div className={styles.itemStyle}>
                  <h4 className={`${styles.titleSM} title1 animation-heading`}>
                    Experience
                  </h4>
                  <p className={`${styles.description} description animation-heading`}>
                    Integrating AI, automation, and personalisation for extraordinary talent experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}