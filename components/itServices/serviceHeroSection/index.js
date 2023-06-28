/* eslint-disable @next/next/no-img-element */
import lottie from "lottie-web";
import React, { useEffect } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';
import behavior from "../../../assets/json/behavior-personality.json";
import cognition from "../../../assets/json/cognition-intelligence.json";
import communication from "../../../assets/json/communication-skills.json";
import decisionMaking from "../../../assets/json/decision-making.json";
import jobKnowledge from "../../../assets/json/job-knowledge.json";
import newGeneration from "../../../assets/json/new-generation.json";
import rolesWorkplaces from "../../../assets/json/roles-workplaces.json";
import sameTalentPool from "../../../assets/json/same-talent-pool.json";

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
      container: document.querySelector("#rolesWorkplaces"),
      animationData: rolesWorkplaces,
    });
    lottie.loadAnimation({
      container: document.querySelector("#decisionMaking"),
      animationData: decisionMaking,
    });
    lottie.loadAnimation({
      container: document.querySelector("#sameTalentPool"),
      animationData: sameTalentPool,
    });
    lottie.loadAnimation({
      container: document.querySelector("#newGeneration"),
      animationData: newGeneration,
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
            Our talent assessment suite is designed to measure the entire spectrum of human personality and skills, as well as critical cognitive attributes, known to be reliable indicators of how someone is likely to perform in the workplace
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
            <div className={`${styles.jsonItemBox}`}>
              <div className={styles.jsonItem} id="rolesWorkplaces" />
            </div>
            <div>
              <h4 className={styles.title}>Roles & workplaces have evolved </h4>
              <p className={styles.desc}>Skill sets are becoming obsolete in as little as 18-24 months</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={`${styles.jsonItemBox}`}>
              <div className={styles.jsonItem} id="decisionMaking" />
            </div>
            <div>
              <h4 className={styles.title}>Decision making today is highly subjective</h4>
              <p className={styles.desc}>Leading to bad talent decisions, inefficiencies & high churn</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={`${styles.jsonItemBox}`}>
              <div className={styles.jsonItem} id="sameTalentPool" />
            </div>
            <div>
              <h4 className={styles.title}>We are all competing for the same talent pools</h4>
              <p className={styles.desc}>Restricted sourcing, highly competitive, spiralling salaries</p>
            </div>
          </div>

          <div className={styles.urgGridItem}>
            <div className={`${styles.jsonItemBox}`}>
              <div className={styles.jsonItem} id="newGeneration" />
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
                  <h4 className={styles.title4}>Technical Skills</h4>
                  <p className={styles.jsonDes}>Measure domain specific knowledge through coding simulations & skill assessments covering 500+ technologies</p>
                </div>
              </div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="cognition" />
                </div>
                <div>
                  <h4 className={styles.title4}>Cognitive Skills</h4>
                  <p className={styles.jsonDes}>Get much more precise signal on how someone processes information, manage situations & navigate through complex problems.</p>
                </div>
              </div>
              <div className={styles.imgBoxStyle}>
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="communication" />
                </div>
                <div>
                  <h4 className={styles.title4}>Communication Skills</h4>
                  <p className={styles.jsonDes}>Gauge speaking & writing abilities and understand how people comprehend communication in various formats and respond to them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}