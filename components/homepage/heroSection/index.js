/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import lottie from "lottie-web";

import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";

// Styles here
import styles from './styles.module.scss';
import Marquee from 'react-fast-marquee';

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

  return (
    <div className={styles.heroSectionStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={`${styles.contentSection} animation-block`}>
          <h1 className={`${styles.titleDesktop} title1 animation-heading`}>
            We help companies make <span className={styles.color1}> better</span> <br /> <span className={styles.color2}>smarter</span> & <span className={styles.color3}>faster</span> talent decisions
          </h1>
          <h1 className={`${styles.titleMobile} title1 animation-heading`}>
            We help <br /> companies make
            <Marquee speed={40} gradient={false} className='hero-marquee'>
              <div className={styles.mobileStyle}>
                <span className={styles.color1}>better</span>
                <span className={styles.color2}>smarter</span>
                <span className={styles.color3}>faster</span>
              </div>
            </Marquee>
            talent decisions
          </h1>
          <p className={`${styles.descriptionText} description animation-heading`}>
            The most modern & experiential talent assessment suite, that can measure job-relevant skills and <br /> proficiencies in just a few minutes
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
              <h4 className={styles.title4}>Job Knowledge &  <br /> Functional Skills</h4>
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
              <h4 className={styles.title4}>Behavioural &  <br /> Personality</h4>
            </div>
          </div>



          {/* Mobile */}
          <div className={styles.gridMobileSection}>
            <div className={styles.boxSet}>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="jobKnowledge4" />
                </div>
                <h4 className={styles.title4}>Job Knowledge & <br /> Functional Skills</h4>
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
