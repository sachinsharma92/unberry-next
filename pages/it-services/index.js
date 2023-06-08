/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import SubscribeCard from '../../common/subscribe';
import BlogSection from '../../components/homepage/blogSection';
import CandidatesAbsolutely from '../../components/homepage/candidatesAbsolutely';

// Styles here
import InsightSection from '../../components/itServices/InsightSection';
import AdvancedTechnologieSection from '../../components/itServices/advancedTechnologies';
import EndAutomationSection from '../../components/itServices/endAutomationSection';
import MostModernSection from '../../components/itServices/mostModernSection';
import ServiceHeroSection from '../../components/itServices/serviceHeroSection';
import TechSkillsSection from '../../components/itServices/techSkills';
import styles from './styles.module.scss';

export default function ItServicesScreen(props) {
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
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="unberry" />
        <meta property="og:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta property="og:url" content="https://www.unberry.com" />
        <meta property="og:image" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:url" content="https://www.unberry.com/ogImage.png" />
        <meta property="og:image:alt" content="Unberry - Transforming the future of hiring and developing talent" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="images/png" />
        <meta property="og:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="Twitter @Unberry" />
        <meta name="twitter:title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="twitter:description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />
        <meta name="twitter:image" content="https://www.unberry.com/ogImage.png" />


        <meta name="name" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent" />
        <meta name="image" content="https://www.unberry.com/ogImage.png" />
      </Head>

      <LayoutPrimary className={`${styles.homepageStyle} ${headerColor}`}>
        <ServiceHeroSection />
        <MostModernSection />
        <CandidatesAbsolutely />
        <EndAutomationSection />
        <TechSkillsSection />
        <InsightSection />
        <AdvancedTechnologieSection />
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}