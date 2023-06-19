/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import SubscribeCard from '../../common/subscribe';
import CommunicationHeroSection from '../../components/communications/communicationHeroSection';
import CommunicationService from '../../components/communications/communicationService';
import CommunicationsHolistically from '../../components/communications/communicationsHolistically';
import CommunicationsAutomationSection from '../../components/communications/endAutomationSection';
import InstantScoreSection from '../../components/communications/instantScore';
import MostAdvancedAiTool from '../../components/communications/mostAdvancedAiTool';
import SpokenCommunicationSection from '../../components/communications/spokenCommunication';
import WrittenCommunicationSection from '../../components/communications/writtenCommunication';
import ElevateCard from '../../components/elevateCard';
import BlogSection from '../../components/homepage/blogSection';
import WinningChoice from '../../components/winningChoice';

// Styles here
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
        <CommunicationService />
        <WrittenCommunicationSection />
        <WinningChoice className={styles.paddingLarge} />
        <CommunicationsHolistically />
        <ElevateCard className={styles.paddingLarge} />
        <BlogSection />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  )
}