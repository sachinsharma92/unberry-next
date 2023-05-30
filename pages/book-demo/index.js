/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import DemoForm from '../../components/demoForm';
import SeoHead from '../../components/seoHead';
import ImageCustom from '../../common/ImageCustom';

// Styles here
import styles from './styles.module.scss';


export default function BookDemoScreen() {

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent."
        title="Unberry - Transforming the future of hiring and developing talent."
        description="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent"
      />

      <div className={styles.bookDemoStyle}>
        <div className={styles.contentSection}>
          <div>
            <Link href="/">
              <a className={`logo-black ${styles.logoBlack}`}>
                <ImageCustom src="logo-black.svg" width="124" height="34" alt="logo" />
              </a>
            </Link>

            <div className={styles.headSection}>
              <h2 className={styles.title2}>Make better talent decisions with unberry</h2>
              <p className={styles.description}>Transform the way you hire - by taking out inefficiencies and biases. By switching to a smarter, unbiased, tech-driven and experiential way of hiring.</p>
            </div>
          </div>

          <ul className={styles.listStyle}>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon1.svg" alt='image services' layout="fill" />
              </div>
              Elevate the candidate experience
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon2.svg" alt='image services' layout="fill" />
              </div>
              Improve the quality of hire
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon3.svg" alt='image services' layout="fill" />
              </div>
              Find the hidden gems
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon4.svg" alt='image services' layout="fill" />
              </div>
              Hire faster and efficiently
            </li>
          </ul>
        </div>

        <div className={styles.formSection}>
          <DemoForm id="bookDemo" />
        </div>
      </div>
    </>
  )
}
