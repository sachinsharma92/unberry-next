/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';
import { gsap } from 'gsap';
import Image from 'next/image';

import icon4 from "../../../assets/new/behavioural-personality.svg";
import icon2 from "../../../assets/new/cognition-Intelligence.svg";
import icon3 from "../../../assets/new/communication-skills.svg";
import icon1 from "../../../assets/new/job-knowledge.svg";

// Styles here
import styles from './styles.module.scss';

export default function HeroSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-text", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#workplaceSection',
        start: 'top center',
        markers: false
      },
    })
  }, [])

  return (
    <div className={styles.heroSectionStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1} title1`}>
          Building Talent Intelligence For
          The Modern Workplace
        </h1>
        <p className={`${styles.descriptionText} description`}>
          Modern, next-gen talent assessment suite, that can measure job-relevant skills and proficiencies, to build and scale teams.
        </p>

        <div className={styles.btnSection}>
          <ButtonPrimary href="/" title="BOOK DEMO" />
        </div>
      </div>

      <div className={`${styles.headingMobile}`}>
        <h3 className={`${styles.title3}`}>
          Mapping the holistic workplace footprint of a candidate
        </h3>
      </div>

      <div className={styles.workplaceSection} id='workplaceSection'>
        <div className={styles.gridSection}>
          <div className={styles.imgBoxStyle}>
            <Image src={icon1} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Job Knowledge & Functional Skills</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon2} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Cognition & <br /> Intelligence</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon3} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Communication <br /> Skills</h4>
          </div>
          <div className={styles.imgBoxStyle}>
            <Image src={icon4} alt="" width="94" height="60" />
            <h4 className={styles.title4}>Behavioural & Personality</h4>
          </div>
        </div>
      </div>

      <div className={`${styles.headingDesktop} animation-block`}>
        <div className='animation-text'>
          <h3 className={`${styles.title3}`}>
            Mapping the holistic workplace footprint of a candidate
          </h3>
        </div>
      </div>
    </div>
  )
}
