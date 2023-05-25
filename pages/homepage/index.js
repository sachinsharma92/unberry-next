/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import SubscribeCard from '../../common/subscribe';
import BetterTalent from '../../components/homepage/betterTalent';
import BlogSection from '../../components/homepage/blogSection';
import CandidatesAbsolutely from '../../components/homepage/candidatesAbsolutely';
import EndAutomation from '../../components/homepage/endAutomation';
import HeroSection from '../../components/homepage/heroSection';
import ServeCustomersAcross from '../../components/homepage/serveCustomersAcross';
import ServiceSection from '../../components/homepage/serviceSection';
import WinningChoice from '../../components/homepage/winningChoice';

// Styles here
import styles from './styles.module.scss';

export default function HomePageScreen() {
  const [headerColor, setHeaderColor] = useState("white")

  // Menu Color change after scroll 360
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setHeaderColor("home-menu-white")
      : setHeaderColor("")
  }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
  })
  return (
    <>
      <Head>
        <title>Transforming the future of hiring and developing talent.</title>

        {/* Main Title */}
        <meta name="title" content="Transforming the future of hiring and developing talent." />
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" key="description" />

        {/* OG Section  */}
        <meta prefix="og: http://ogp.me/ns#" name="title" property="og:title" content="Transforming the future of hiring and developing talent." />
        <meta prefix="og: http://ogp.me/ns#" name="description" property="og:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content="https://www.unberry.com/ogImage.png" />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://www.unberry.com/ogImage.png" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta property="fb:app_id" content="546555445835110" />
        <meta property="og:image" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="author" content="Unberry" />

        {/* Twitter OG Section  */}
        <meta name="twitter:image" content="https://www.unberry.com/ogImage.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <LayoutPrimary className={`${styles.homepageStyle} ${headerColor}`}>
        <HeroSection />
        <BetterTalent />
        <CandidatesAbsolutely />
        <ServiceSection />
        <EndAutomation />
        <ServeCustomersAcross />
        <WinningChoice />
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}
