/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SeoHead from '../../components/seoHead';
import logoTheme from "../../assets/logo-black.svg";

// Styles here
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import DemoForm from '../../components/demoForm';


export default function BookDemoScreen() {

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent."
        title="Unberry - Transforming the future of hiring and developing talent."
        description="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent"
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
            <li className={styles.listItem}>Need one USP to write here</li>
            <li className={styles.listItem}>Need one USP to write here</li>
            <li className={styles.listItem}>Need one USP to write here</li>
          </ul>
        </div>

        <div className={styles.formSection}>
          <DemoForm id="bookDemo" />
        </div>
      </div>
    </>
  )
}
