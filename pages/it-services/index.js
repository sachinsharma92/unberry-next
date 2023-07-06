/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const LayoutPrimary = dynamic(() => import('../../common/layoutPrimary'));
const SubscribeCard = dynamic(() => import('../../common/subscribe'));
const BlogSection = dynamic(() => import('../../components/homepage/blogSection'));
const CandidatesAbsolutely = dynamic(() => import('../../components/homepage/candidatesAbsolutely'));
const InsightSection = dynamic(() => import('../../components/itServices/InsightSection'));
const AdvancedTechnologieSection = dynamic(() => import('../../components/itServices/advancedTechnologies'));
const EndAutomationSection = dynamic(() => import('../../components/itServices/endAutomationSection'));
const MostModernSection = dynamic(() => import('../../components/itServices/mostModernSection'));
const ServiceHeroSection = dynamic(() => import('../../components/itServices/serviceHeroSection'));
const TechSkillsSection = dynamic(() => import('../../components/itServices/techSkills'));

// Styles here
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