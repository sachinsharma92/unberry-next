/* eslint-disable @next/next/no-img-element */
import lottie from "lottie-web";
import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";

// Styles here
import styles from './styles.module.scss';

export default function ServiceHeroSection(props) {

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
    <div className={styles.itServiceHeroStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={`${styles.contentSection} animation-block`}>
          <h1 className={`${styles.titleDesktop} title1 animation-heading`}>
            The better, smarter & faster way <br />
            to attract, hire and develop <br /> <span className={styles.color1}>exceptional tech talent</span>
          </h1>
          <h1 className={`${styles.titleMobile} title1 animation-heading`}>
            The better, <br /> smarter & faster way to attract, <br /> hire and develop
            <div className={styles.mobileStyle}>
              <span className={styles.color2}>smarter</span>
            </div>
          </h1>
          <p className={`${styles.descriptionText} description animation-heading`}>
            Dive into the rise of live chat, the skills and characteristics of top performing agents, and how to best assess them to reduce attrition and guarantee top notch customer service.
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
              <h4 className={styles.title4}>Coding Skills</h4>
              <p>Offer a memorable candidate-driven experience, that people talk about</p>
            </div>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="cognition" />
              </div>
              <h4 className={styles.title4}>Cognitive Skills</h4>
              <p>Get much more precise signal with clear actionable people insights</p>
            </div>
            <div className={styles.imgBoxStyle}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="communication" />
              </div>
              <h4 className={styles.title4}>Communication <br /> Skills</h4>
              <p>Offer a memorable candidate-driven experience, that people talk about</p>
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