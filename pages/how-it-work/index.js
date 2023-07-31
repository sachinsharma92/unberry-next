/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const LayoutPrimary = dynamic(() => import("../../common/layoutPrimary"));

const ExperienceLooksSection = dynamic(() =>
  import("../../components/howItWorks/experienceLooks")
);
const WorksHeroSection = dynamic(() =>
  import("../../components/howItWorks/worksHeroSection")
);
const FootprintCandidateSection = dynamic(() =>
  import("../../components/howItWorks/footprintCandidate")
);
const CandidatesSpecificRoleSection = dynamic(() =>
  import("../../components/howItWorks/candidatesSpecificRoles")
);
const RapiditySection = dynamic(() =>
  import("../../components/howItWorks/rapiditySection")
);

// Styles here
import styles from "./styles.module.scss";

export default function HowItWorksScreen(props) {
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

      <LayoutPrimary className={`${styles.homepageStyle} ${headerColor}`}>
        <WorksHeroSection />
        <FootprintCandidateSection />
        <ExperienceLooksSection />
        <CandidatesSpecificRoleSection />
        <RapiditySection />
      </LayoutPrimary>
    </>
  );
}
