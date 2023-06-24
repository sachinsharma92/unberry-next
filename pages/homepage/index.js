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
import WinningChoice from '../../components/winningChoice';
import ElevateCard from '../../components/elevateCard';

// Styles here
import styles from './styles.module.scss';

export default function HomePageScreen(props) {
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
        <title>Unberry - Modern Hiring Assessments Powered by AI and Gamification</title>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="unberry" />
        <meta property="og:title" content="Unberry - Modern Hiring Assessments Powered by AI and Gamification" />
        <meta property="og:url" content="https://www.unberry.com" />
        <meta property="og:image" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:url" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:alt" content="Unberry - Transforming the future of hiring and developing talent" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="images/png" />
        <meta property="og:description" content="Unberry offers AI-powered hiring assessments, for campus and lateral recruitment across tech and non tech roles. Candidate Rating of 9.1/10 and 90%+ completion Rates. Find the best talent efficiently, create the most differentiated candidate experience and make data-driven decisions with Unberry. Created by Second Time Founders, XLRI alumni and Operators across top Fortune-500 businesses" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter @Unberry" />
        <meta name="twitter:title" content="Unberry - Modern Hiring Assessments Powered by AI and Gamification" />
        <meta name="twitter:description" content="Unberry offers AI-powered hiring assessments, for campus and lateral recruitment across tech and non tech roles. Candidate Rating of 9.1/10 and 90%+ completion Rates. Find the best talent efficiently, create the most differentiated candidate experience and make data-driven decisions with Unberry. Created by Second Time Founders, XLRI alumni and Operators across top Fortune-500 businesses" />
        <meta name="twitter:image" content="https://www.unberry.com/ogImage.png" />


        <meta name="name" content="Unberry - Modern Hiring Assessments Powered by AI and Gamification" />
        <meta name="description" content="Unberry offers AI-powered hiring assessments, for campus and lateral recruitment across tech and non tech roles. Candidate Rating of 9.1/10 and 90%+ completion Rates. Find the best talent efficiently, create the most differentiated candidate experience and make data-driven decisions with Unberry. Created by Second Time Founders, XLRI alumni and Operators across top Fortune-500 businesses" />
        <meta name="image" content="https://www.unberry.com/ogImage.png" />
      </Head>

      <LayoutPrimary className={`${styles.homepageStyle} ${headerColor}`}>
        <HeroSection />
        <BetterTalent />
        <CandidatesAbsolutely />
        <ServiceSection />
        <EndAutomation />
        <ServeCustomersAcross />
        <WinningChoice>
          <ElevateCard className={styles.elevateCardStyle} />
        </WinningChoice>
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}