import React, { useEffect } from 'react';
import lottie from "lottie-web";

import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";

// Styles here
import styles from './styles.module.scss';
import ButtonPrimary from '../../../common/buttonPrimary';

export default function WinningChoice() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#icon1"),
      animationData: behavior,
    });
    lottie.loadAnimation({
      container: document.querySelector("#icon2"),
      animationData: cognition,
    });
    lottie.loadAnimation({
      container: document.querySelector("#icon3"),
      animationData: communication,
    });
    lottie.loadAnimation({
      container: document.querySelector("#icon4"),
      animationData: jobKnowledge,
    });
  }, []);
  return (
    <div className={styles.winningChoiceStyle}>
      <div className={`container-width`}>
        <div className={styles.rowSection}>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              A winning choice for HR teams
            </h1>

            <div className={`${styles.box} ${styles.greenBox}`}>
              <div className={styles.largeNumber}>60%</div>
              <p className={styles.description}>Reduced Screening Time</p>
            </div>

            <div className={`${styles.box} ${styles.violetBox}`}>
              <div className={styles.largeNumber}>40%</div>
              <p className={styles.description}>Reduce In Cost To Hire</p>
            </div>
          </div>
          <div className={styles.grayBoxSection}>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon1" />
              </div>
              <div>
                <h4 className={styles.title4}>Elevate the candidate experience</h4>
                <p className={styles.description}>Offer a memorable candidate-driven experience, that people talk about</p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon2" />
              </div>
              <div>
                <h4 className={styles.title4}>Improve the quality of hire</h4>
                <p className={styles.description}>Offer a memorable candidate-driven experience, that people talk about</p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon3" />
              </div>
              <div>
                <h4 className={styles.title4}>Find the hidden gems</h4>
                <p className={styles.description}>Offer a memorable candidate-driven experience, that people talk about</p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon4" />
              </div>
              <div>
                <h4 className={styles.title4}>Hire faster and efficiently</h4>
                <p className={styles.description}>Offer a memorable candidate-driven experience, that people talk about</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.hiringCard}>
          <h3 className={styles.title3}>Elevate your campus hiring program with the most engaging & data backed assessment solution</h3>
          <ButtonPrimary className={styles.btnStyle} href="/book-demo" title="BOOK A DEMO" />
        </div>

        <div className={styles.sliderCard}>
          <h3 className={styles.title3}>“I never had this much fun during any recruitment process for a sec I almost forgot that I’m giving an exam.”</h3>
        </div>
      </div>
    </div>
  )
}
