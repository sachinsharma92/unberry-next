/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ImageCustom from '../../../common/ImageCustom';

// Styles here
import styles from './styles.module.scss';
import Link from 'next/link';

export default function FootprintCandidateSection(props) {
  return (
    <div className={styles.footprintCandidateStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <h1 className={`${styles.titleLarge} title1`}>
            How we map the holistic <br /> workplace footprint of a candidate
          </h1>
        </div>

        <div className={styles.infoStyle}>
          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Job Knowledge & Functional Skills</h4>
              <p className={styles.description}>How proficient they are on their domain centric knowledge</p>
            </div>
            <Link href="/">Explore More</Link>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Communication Skills</h4>
              <p className={styles.description}>How they understand speech and express themselves</p>
            </div>
            <Link href="/">Explore More</Link>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Cognition & Intelligence</h4>
              <p className={styles.description}>How they process information & knowledge, learn new concepts & navigate problems</p>
            </div>
            <Link href="/">Explore More</Link>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Behavioural & Personality</h4>
              <p className={styles.description}>How they control & conduct themselves, and react to social situations</p>
            </div>
            <Link href="/">Explore More</Link>
          </div>
          <div className={styles.imgBox}>
            <ImageCustom src="h-footprint.svg" alt="Unberry - Know More in a Detailed Video " layout="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}