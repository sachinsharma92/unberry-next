/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect } from 'react';
import image1 from "../../../assets/new/service-card1.jpg";
import ButtonPrimary from '../../../common/buttonPrimary';
import styles from './styles.module.scss';
import { gsap } from 'gsap';

// Styles here

export default function ServiceSection() {

  const serviceCardList = [
    1, 2, 3
  ]

  const badgeList = ['Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking']


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".container .panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".side-scrolling-wrapper",
        pin: true,
        start: "top +=10px",
        markers: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0
        },
        // Base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + (document.querySelector(".container"))
      }
    });
  }, [])


  return (
    <div className='side-scrolling-wrapper'>
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
      <div className={`${styles.serviceSectionStyle} panel`}>
        {serviceCardList.map((item, index) => (
          <div key={index} className={styles.serviceCard}>
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
          </div>
        ))}
      </div>
    </div>
  )
}
