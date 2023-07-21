/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const LayoutPrimary = dynamic(() => import("../../common/layoutPrimary"));

const WorksplaceSection = dynamic(() =>
  import("../../components/workplaceFootprint/workplaceSection")
);
const CandidatesSpecificRoleSection = dynamic(() =>
  import("../../components/howItWorks/candidatesSpecificRoles")
);

// Styles here
import styles from "./styles.module.scss";

export default function WorkplaceFootprintScreen(props) {
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
        <WorksplaceSection />
        <CandidatesSpecificRoleSection
          title="Framework that can be customised for any specific role or position"
        />
      </LayoutPrimary>
    </>
  );
}
