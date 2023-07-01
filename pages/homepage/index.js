/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const LayoutPrimary = dynamic(() => import('../../common/layoutPrimary'));
const SubscribeCard = dynamic(() => import('../../common/subscribe'));
const ElevateCard = dynamic(() => import('../../components/elevateCard'));
const BetterTalent = dynamic(() => import('../../components/homepage/betterTalent'));
const BlogSection = dynamic(() => import('../../components/homepage/blogSection'));
const CandidatesAbsolutely = dynamic(() => import('../../components/homepage/candidatesAbsolutely'));
const EndAutomation = dynamic(() => import('../../components/homepage/endAutomation'));
const HeroSection = dynamic(() => import('../../components/homepage/heroSection'));
const ServeCustomersAcross = dynamic(() => import('../../components/homepage/serveCustomersAcross'));
const ServiceSection = dynamic(() => import('../../components/homepage/serviceSection'));
const WinningChoice = dynamic(() => import('../../components/winningChoice'));

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