/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect } from 'react';
import image1 from "../../../assets/new/service-card1.jpg";
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function ServiceSection() {

  const serviceCardList = [
    1, 2, 3
  ]

  const badgeList = ['Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking']


  useEffect(() => {
    var controller = new ScrollMagic.Controller();
    var horizontalSlide = new TimelineMax()
    new ScrollMagic.Scene({
      triggerElement: "#js-wrapper",
      triggerHook: "onLeave",
      duration: "100%"
    })
      .setPin("#js-wrapper")
      .setTween(horizontalSlide)
      .addIndicators()
      .addTo(controller);

  }, [])


  return (
    <div id='js-wrapper'>
      <div className={`${styles.breakingExperienceStyle}`}>
        <div className={styles.contentSection}>
          <h1 className={`${styles.title1}`}>
            Breaking down the experience
          </h1>
          <p className={styles.description}>
            A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
          </p>
          <ButtonPrimary href="/" title="BOOK DEMO" />
        </div>
      </div>
      <div className={`${styles.serviceSectionStyle}`} id='js-slideContainer'>
        {serviceCardList.map((item, index) => (
          <section key={index} className={styles.serviceCard}>
            <div className={styles.contentLeft}>
              <h1 className={`${styles.title1}`}>
                Mini-games & immersive exercises
              </h1>
              <p className={styles.description}>
                That measures the true potential of a candidate across modern workplace skills.
              </p>

              <div className={styles.tagSection}>
                {badgeList.map((item, index) => (
                  <span key={index} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.contentRight}>
              <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
