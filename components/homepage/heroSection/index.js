/* eslint-disable @next/next/no-img-element */
import lottie from "lottie-web";
import React, { useEffect, useState } from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';
import Link from "next/link";
import Marquee from 'react-fast-marquee';
import behavior from "../../../assets/json/behavior-personality.json";
import cognition from "../../../assets/json/cognition-intelligence.json";
import communication from "../../../assets/json/communication-skills.json";
import jobKnowledge from "../../../assets/json/job-knowledge.json";
import ImageCustom from "../../../common/ImageCustom";

// Styles here
import styles from './styles.module.scss';

export default function HeroSection(props) {
  const [showCookies, setShowCookies] = useState(true)

  const onClickCookies = () => {
    localStorage.setItem('cookiesPopup', true);
    setShowCookies(true)
  };

  useEffect(() => {
    const storage = localStorage.getItem('cookiesPopup');
    setShowCookies(storage)
  }, [])


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


  const companyLogo = [
    {
      imgUrl: 'h-logo1.svg',
      width: 172,
      height: 35
    },
    {
      imgUrl: 'h-logo2.svg',
      width: 140,
      height: 22
    },
    {
      imgUrl: 'h-logo3.svg',
      width: 120,
      height: 30
    },
    {
      imgUrl: 'h-logo4.svg',
      width: 231,
      height: 43
    },
    {
      imgUrl: 'h-logo5.svg',
      width: 96,
      height: 39
    },
    {
      imgUrl: 'h-logo6.svg',
      width: 185,
      height: 33
    },
    {
      imgUrl: 'h-logo7.svg',
      width: 208,
      height: 25
    },
    {
      imgUrl: 'h-logo8.svg',
      width: 104,
      height: 43
    },
  ]

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

        <div className={`${styles.companyLogo} company-logos`}>
          <Marquee speed={40}>
            {companyLogo.map((item, index) => (
              <div key={index} className={styles.logoBox}>
                <ImageCustom src={item.imgUrl} alt='image services' width={item.width} height={item.height} />
              </div>
            ))}
          </Marquee>
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

      {!showCookies && <div className={styles.cookiePopup}>
        <p className={styles.text}> <span>🍪</span> This website uses cookies to personalise your experience. <Link href="/cookie-policy">Learn More</Link></p>
        <button className={styles.btnAccept} onClick={onClickCookies}>ACCEPT</button>
      </div>
      }
    </div>
  )
}