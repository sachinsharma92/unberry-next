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
        mainTitle="Unberry - Request your free product demo and unleash the power of data-driven hiring."
        title="Unberry - Request your free product demo and unleash the power of data-driven hiring."
        description="Most modern assessment stack for campus and lateral hiring. Ready to deploy hiring assessments for tech and non tech hiring across engineering, product, sales, customer service, frontline roles. Leverage generative AI, game tech, skill assessment and data science to create a comprehensive candidate footprint."
      />

      <div className={styles.bookDemoStyle}>
        <div className={styles.contentSection}>
          <div>
            <Link href="/">
              <a className={`logo-black ${styles.logoBlack}`}>
                <ImageCustom src="logo-black.svg" width="124" height="34" alt="Unberry Talent Intelligence Platform" />
              </a>
            </Link>

            <div className={styles.headSection}>
              <h2 className={styles.title2}>Make better talent decisions with unberry</h2>
              <p className={styles.description}>Transform the way you identify, hire and develop talent. Switch to a smarter, unbiased, tech-driven and experiential way of hiring.</p>
            </div>
          </div>

          <ul className={styles.listStyle}>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon1.svg" alt='Great Candidate Feedback' layout="fill" />
              </div>
              Elevate the candidate experience
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon2.svg" alt='High Quality of Hire' layout="fill" />
              </div>
              Improve the quality of hire
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon3.svg" alt='Improve Recruitment Metrics' layout="fill" />
              </div>
              Find the hidden gems
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <ImageCustom src="icon4.svg" alt='Faster Filling of Open Positions' layout="fill" />
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
