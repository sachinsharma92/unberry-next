/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import SubscribeCard from '../../common/subscribe';
import BlogSection from '../../components/homepage/blogSection';
import CandidatesAbsolutely from '../../components/homepage/candidatesAbsolutely';
import CommunicationHeroSection from '../../components/communications/communicationHeroSection';
import InsightSection from '../../components/itServices/InsightSection';
import AdvancedTechnologieSection from '../../components/itServices/advancedTechnologies';
import EndAutomationSection from '../../components/itServices/endAutomationSection';
import MostModernSection from '../../components/itServices/mostModernSection';
import TechSkillsSection from '../../components/itServices/techSkills';

// Styles here
import styles from './styles.module.scss';
import MostAdvancedAiTool from '../../components/communications/mostAdvancedAiTool';

export default function CommunicationScreen(props) {
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
      </Head>

      <LayoutPrimary className={`${styles.communicationtyle} ${headerColor}`}>
        <CommunicationHeroSection />
        <MostAdvancedAiTool />
        <EndAutomationSection />
        <TechSkillsSection />
        <InsightSection />
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}