/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import lottie from "lottie-web";

import Image from 'next/image';
import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import icon4 from "../../../assets/new/behavioural-personality.svg";
import icon2 from "../../../assets/new/cognition-Intelligence.svg";
import icon3 from "../../../assets/new/communication-skills.svg";
import icon1 from "../../../assets/new/job-knowledge.svg";

import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";

// Styles here
import styles from './styles.module.scss';

export default function HeroSection() {

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#behavior"),
      animationData: behavior,
    });
    lottie.loadAnimation({
      container: document.querySelector("#cognition"),
      animationData: cognition,
    });
    lottie.loadAnimation({
      container: document.querySelector("#communication"),
      animationData: communication,
    });
    lottie.loadAnimation({
      container: document.querySelector("#jobKnowledge"),
      animationData: jobKnowledge,
    });

    lottie.loadAnimation({
      container: document.querySelector("#behavior1"),
      animationData: behavior,
    });
    lottie.loadAnimation({
      container: document.querySelector("#cognition2"),
      animationData: cognition,
    });
    lottie.loadAnimation({
      container: document.querySelector("#communication3"),
      animationData: communication,
    });
    lottie.loadAnimation({
      container: document.querySelector("#jobKnowledge4"),
      animationData: jobKnowledge,
    });
  }, []);

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

  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(".animation-block .animation-heading", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
    })
  }, [tl])

  return (
    <div className={styles.heroSectionStyle}>
      <div className='container-width'>
        <div className={`${styles.contentSection} animation-block`}>
          <h1 className={`${styles.title1} title1 animation-heading`}>
            We help companies make better, smarter & faster talent decisions
          </h1>
          <p className={`${styles.descriptionText} description animation-heading`}>
            The most modern & experiential talent assessment suite, that can measure job-relevant skills and proficiencies in just a few minutes
          </p>

          <div className={`${styles.btnSection} animation-heading`}>
            <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
          </div>
        </div>
        <div className={`${styles.headingMobile}`}>
          <h3 className={`${styles.title3}`}>
            Mapping the holistic workplace footprint of a candidate
          </h3>
        </div>

        <div className={styles.workplaceSection} id='workplaceSection'>
          <div className={`${styles.gridDesktopSection}`}>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="jobKnowledge" />
              </div>
              <h4 className={styles.title4}>Job Knowledge & Functional Skills</h4>
            </div>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="cognition" />
              </div>
              <h4 className={styles.title4}>Cognition & <br /> Intelligence</h4>
            </div>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="communication" />
              </div>
              <h4 className={styles.title4}>Communication <br /> Skills</h4>
            </div>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="behavior" />
              </div>
              <h4 className={styles.title4}>Behavioural & Personality</h4>
            </div>
          </div>



          {/* Mobile */}
          <div className={styles.gridMobileSection}>
            <div className={styles.boxSet}>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="jobKnowledge4" />
                </div>
                <h4 className={styles.title4}>Job Knowledge & Functional Skills</h4>
              </div>
              <div className={styles.mobileDivider}></div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="cognition2" />
                </div>
                <h4 className={styles.title4}>Cognition & <br /> Intelligence</h4>
              </div>
            </div>
            <div className={styles.boxSet}>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="communication3" />
                </div>
                <h4 className={styles.title4}>Communication <br /> Skills</h4>
              </div>
              <div className={`${styles.mobileDivider} ${styles.mobileDivider2}`}></div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="behavior1" />
                </div>
                <h4 className={styles.title4}>Behavioural & Personality</h4>
              </div>
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
    </div>
  )
}
