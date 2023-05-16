/* eslint-disable @next/next/no-img-element */
import React from 'react';
import logoTheme from "../../assets/logo-black.svg";
import SeoHead from '../../components/seoHead';

import icon1 from "../../assets/icons/icon1.svg";
import icon2 from "../../assets/icons/icon2.svg";
import icon3 from "../../assets/icons/icon3.svg";
import icon4 from "../../assets/icons/icon4.svg";

// Styles here
import Image from 'next/image';
import Link from 'next/link';
import DemoForm from '../../components/demoForm';
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
          <Link href="/">
            <a className='logo-black'>
              <Image src={logoTheme} width="124" height="34" alt="logo" />
            </a>
          </Link>

          <div className={styles.headSection}>
            <h2 className={styles.title2}>Make better talent decisions with unberry</h2>
            <p className={styles.description}>Transform the way you hire - by taking out inefficiencies and biases. By switching to a smarter, unbiased, tech-driven and experiential way of hiring.</p>
          </div>

          <ul className={styles.listStyle}>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <Image src={icon1} alt='image services' layout="fill" />
              </div>
              Elevate the candidate experience
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <Image src={icon2} alt='image services' layout="fill" />
              </div>
              Improve the quality of hire
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <Image src={icon3} alt='image services' layout="fill" />
              </div>
              Find the hidden gems
            </li>
            <li className={styles.listItem}>
              <div className={styles.imgBox}>
                <Image src={icon4} alt='image services' layout="fill" />
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
