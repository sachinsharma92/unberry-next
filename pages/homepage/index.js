/* eslint-disable @next/next/no-img-element */
import React from 'react';
import HeroSection from '../../components/homepage/heroSection';

// Images
import Head from 'next/head';

// Styles here
import styles from './style.module.scss';


export default function HomePageScreen() {

  return (
    <>
      <Head>
        <title>Unberry - Transforming the future of hiring and developing talent.</title>
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" key="desc" />
        <meta property="og:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta
          property="og:description"
          content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent."
        />
        <meta property="og:url" content="https://unberry.com/static/ogImage.png" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="546555445835110" />
        <meta property="og:image" content="https://unberry.com/static/ogImage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content="Unberry" />
        <meta
          property="og:image"
          content="https://unberry.com/static/ogImage.png"
        />

        {/* Twitter OG Section  */}
        <meta name="twitter:image" content="https://unberry.com/static/ogImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className={styles.homepageStyle}>
        <HeroSection />
      </div>
    </>
  )
}