/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function BookADemo() {

  return (
    <div className={styles.bookADemoStyle}>
      <div className='container-width'>
        <div className={styles.contentSection}>
          <div className={`${styles.title1}`}>
            Take the <br className={styles.brStyle} /> guesswork out...
          </div>
          <div className={`${styles.title2}`}>
            Book A Demo
          </div>
          <div className={styles.btnSection}>
            <p className={`${styles.description}`}>
              Transform the way you identify, hire and develop talent. Switch to a smarter, unbiased, tech-driven and experiential way of hiring.
            </p>
            <ButtonPrimary className={styles.btnStyle} href="/book-demo" title="BOOK A DEMO" />
          </div>
        </div>
      </div>
    </div>
  )
}
