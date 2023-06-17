/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import SubscribeCard from '../../common/subscribe';
import CommunicationHeroSection from '../../components/communications/communicationHeroSection';
import BlogSection from '../../components/homepage/blogSection';
import InsightSection from '../../components/itServices/InsightSection';
import TechSkillsSection from '../../components/itServices/techSkills';

// Styles here
import CommunicationsAutomationSection from '../../components/communications/endAutomationSection';
import InstantScoreSection from '../../components/communications/instantScore';
import MostAdvancedAiTool from '../../components/communications/mostAdvancedAiTool';
import SpokenCommunicationSection from '../../components/communications/spokenCommunication';
import styles from './styles.module.scss';

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
        <InstantScoreSection />
        <SpokenCommunicationSection />
        <CommunicationsAutomationSection />
        <TechSkillsSection />
        <InsightSection />
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}