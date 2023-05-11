import lottie from "lottie-web";
import React, { useEffect } from "react";

import { Carousel } from "antd";
import behavior from "../../../assets/json/hero-section/behavior-personality.json";
import cognition from "../../../assets/json/hero-section/cognition-intelligence.json";
import communication from "../../../assets/json/hero-section/communication-skills.json";
import jobKnowledge from "../../../assets/json/hero-section/job-knowledge.json";
import ButtonPrimary from "../../../common/buttonPrimary";

import binoculars from "../../../assets/new/icons/binoculars.svg";
import eyeClosed from "../../../assets/new/icons/eye-closed.svg";
import trendUp from "../../../assets/new/icons/trend-up.svg";
import magnet from "../../../assets/new/icons/magnet.svg";

// Styles here
import styles from "./styles.module.scss";
import Image from "next/image";

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

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div className={styles.winningChoiceStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={styles.rowSection}>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              A winning choice for HR teams
            </h1>
            <div className={`${styles.boxDesktop} ${styles.greenBox}`}>
              <div className={styles.largeNumber}>60%</div>
              <p className={styles.boxDescription}>Reduced Screening Time</p>
            </div>

            <div className={`${styles.boxDesktop} ${styles.violetBox}`}>
              <div className={styles.largeNumber}>40%</div>
              <p className={styles.boxDescription}>Reduce In Cost To Hire</p>
            </div>


            {/* For Mobile */}
            <div className={`${styles.boxMobile} ${styles.greenBox}`}>
              <div className={styles.largeNumber}>60%</div>
              <p className={styles.boxDescription}>Reduced Screening Time</p>
            </div>
          </div>

          <div className={styles.grayBoxSection}>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon1" />
              </div>
              <div>
                <h4 className={styles.title4}>
                  Elevate the candidate experience
                </h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon2" />
              </div>
              <div>
                <h4 className={styles.title4}>Improve the quality of hire</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon3" />
              </div>
              <div>
                <h4 className={styles.title4}>Find the hidden gems</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.jsonItemBox}>
                <div className={styles.jsonItem} id="icon4" />
              </div>
              <div>
                <h4 className={styles.title4}>Hire faster and efficiently</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className={`${styles.boxMobile} ${styles.violetBox}`}>
            <div className={styles.largeNumber}>40%</div>
            <p className={styles.boxDescription}>Reduce In Cost To Hire</p>
          </div>
        </div>

        {/* Elevate your campus section */}
        <div className={styles.hiringCard}>
          <div className={styles.content}>
            <h3 className={styles.title3}>
              Elevate your campus hiring program with the most engaging & data
              backed assessment solution
            </h3>
            <ButtonPrimary
              className={styles.btnStyle}
              href="/book-demo"
              title="BOOK A DEMO"
            />
          </div>


          {/* curve Line Section */}
          <div className={styles.curveLineSection}>
            <div className={styles.gridSection}>
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <Image src={binoculars} alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Find high potential candidates
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <Image src={eyeClosed} alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Increase your employer branding
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <Image src={trendUp} alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Reach untapped talent pools
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <Image src={magnet} alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Attract & hire diverse talent
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.sliderCard} wining-slider`}>
          <Carousel afterChange={onChange}>
            <div>
              <h3 className={styles.title3}>
                “I never had this much fun during any recruitment process for a
                sec I almost forgot that I’m giving an exam.”
              </h3>
            </div>
            <div>
              <h3 className={styles.title3}>
                “I never had this much fun during any recruitment process for a
                sec I almost forgot that I’m giving an exam.”
              </h3>
            </div>
            <div>
              <h3 className={styles.title3}>
                “I never had this much fun during any recruitment process for a
                sec I almost forgot that I’m giving an exam.”
              </h3>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
