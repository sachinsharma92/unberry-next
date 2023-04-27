/* eslint-disable @next/next/no-img-element */
import React from 'react';
import image1 from "../../../assets/new/automation1.png";
import icon2 from "../../../assets/new/switching.svg";
import icon1 from "../../../assets/new/video.svg";

// Styles here
import Image from 'next/image';
import styles from './styles.module.scss';

export default function EndAutomation() {

  return (
    <div className={styles.endAutomationStyle}>
      <h1 className={`${styles.title1}`}>
        End to end automation
      </h1>

      <div className={styles.accordianCard}>
        <div className={styles.contentSec}>
          <h4 className={styles.title4}>Proctoring</h4>
          <p className={styles.description}>Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage.</p>

          <ul className={styles.listStyle}>
            <li className={styles.listItem}>
              <Image src={icon1} alt='image services' width="20" height="20" />
              Video Proctoring
            </li>
            <li className={styles.listItem}>
              <Image src={icon2} alt='image services' width="20" height="20" />
              Video Proctoring
            </li>
          </ul>
        </div>
        <div className={styles.imageCard}>
          <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
        </div>
      </div>

    </div>
  )
}