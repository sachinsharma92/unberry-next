/* eslint-disable @next/next/no-img-element */
import lottie from "lottie-web";
import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";

import icon1 from "../../../assets/urge1.svg"
import icon2 from "../../../assets/urge2.svg"
import icon3 from "../../../assets/urge3.svg"
import icon4 from "../../../assets/urge4.svg"

// Styles here
import styles from './styles.module.scss';
import Image from "next/image";

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
      </div>

      <div className={styles.weUrgSection}>
        <div className={`container-width ${styles.containerStyle}`}>
          <div className={styles.urgTitle}>
            We urge to <br /> companies <br /> to see more <br /> in people
          </div>
        </div>

        <div className={styles.urgGridStyle}>
          <div className={styles.urgGridItem}>
            <div className={styles.imgBox}>
              <Image src={icon1} alt="" layout="fill" />
            </div>
            <div>
              <h4 className={styles.title}>Roles & workplaces have evolved </h4>
              <p className={styles.desc}>Skill sets are becoming obsolete in as little as 18-24 months</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={styles.imgBox}>
              <Image src={icon2} alt="" layout="fill" />
            </div>
            <div>
              <h4 className={styles.title}>Decision making today is highly subjective</h4>
              <p className={styles.desc}>Leading to bad talent decisions, inefficiencies & high churn</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={styles.imgBox}>
              <Image src={icon3} alt="" layout="fill" />
            </div>
            <div>
              <h4 className={styles.title}>We are all competing for the same talent pools</h4>
              <p className={styles.desc}>Restricted sourcing, highly competitive, spiralling salaries</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={styles.imgBox}>
              <Image src={icon4} alt="" layout="fill" />
            </div>
            <div>
              <h4 className={styles.title}>We’re dealing with a new generation of employees </h4>
              <p className={styles.desc}>Much more diverse - seeking personalisation & experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`container-width ${styles.containerStyle}`}>
        <div>
          <h4 className={styles.titleMedium}>Measure what matters to be a great coder <br /> all in one experience</h4>
          <div className={styles.workplaceSection} id='workplaceSection'>
            <div className={`${styles.gridSection}`}>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="jobKnowledge" />
                </div>
                <div>
                  <h4 className={styles.title4}>Coding Skills</h4>
                  <p className={styles.jsonDes}>Offer a memorable candidate-driven experience, that people talk about</p>
                </div>
              </div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="cognition" />
                </div>
                <div>
                  <h4 className={styles.title4}>Cognitive Skills</h4>
                  <p className={styles.jsonDes}>Get much more precise signal with clear actionable people insights</p>
                </div>
              </div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="communication" />
                </div>
                <div>
                  <h4 className={styles.title4}>Communication Skills</h4>
                  <p className={styles.jsonDes}>Offer a memorable candidate-driven experience, that people talk about</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}