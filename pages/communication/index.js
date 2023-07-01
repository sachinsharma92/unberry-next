/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const LayoutPrimary = dynamic(() => import("../../common/layoutPrimary"));
const SubscribeCard = dynamic(() => import("../../common/subscribe"));
const CommunicationHeroSection = dynamic(() =>
  import("../../components/communications/communicationHeroSection")
);
const CommunicationService = dynamic(() =>
  import("../../components/communications/communicationService")
);
const CommunicationsHolistically = dynamic(() =>
  import("../../components/communications/communicationsHolistically")
);
const CommunicationsAutomationSection = dynamic(() =>
  import("../../components/communications/endAutomationSection")
);
const InstantScoreSection = dynamic(() =>
  import("../../components/communications/instantScore")
);
const MostAdvancedAiTool = dynamic(() =>
  import("../../components/communications/mostAdvancedAiTool")
);
const SpokenCommunicationSection = dynamic(() =>
  import("../../components/communications/spokenCommunication")
);
const WrittenCommunicationSection = dynamic(() =>
  import("../../components/communications/writtenCommunication")
);
const ElevateCard = dynamic(() => import("../../components/elevateCard"));
const BlogSection = dynamic(() =>
  import("../../components/homepage/blogSection")
);
const WinningChoice = dynamic(() => import("../../components/winningChoice"));

// Styles here
import styles from "./styles.module.scss";

export default function CommunicationScreen(props) {
  const [headerColor, setHeaderColor] = useState("white");

  // Menu Color change after scroll 360
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setHeaderColor("home-menu-white")
      : setHeaderColor("");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
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
        <ElevateCard className={styles.elevateCardStyle} />
        <BlogSection className={styles.blogStyle} />
        <SubscribeCard />
      </LayoutPrimary>
    </>
  );
}
