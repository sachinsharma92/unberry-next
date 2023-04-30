/* eslint-disable @next/next/no-img-element */
import React from 'react';

// Styles here
import styles from './styles.module.scss';
import ButtonPrimary from '../../../common/buttonPrimary';

export default function BookADemo() {

  return (
    <div className={styles.bookADemoStyle}>
      <div className='container-width'>
        <div className={styles.contentSection}>
          <div>
            <h1 className={`${styles.title1}`}>
              Take the guesswork out...
            </h1>
            <h2 className={`${styles.title2}`}>
              Book A Demo
            </h2>
            <div className={styles.btnSection}>
              <p className={styles.description}>
                Transform the way you hire - by taking out inefficiencies and biases. By switching to a smarter, unbiased, tech-driven and experiential way of hiring.
              </p>
              <ButtonPrimary className={styles.btnStyle} href="/" title="BOOK A DEMO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
