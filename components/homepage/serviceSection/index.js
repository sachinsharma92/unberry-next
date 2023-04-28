/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import image1 from "../../../assets/new/service-card1.jpg";
import image2 from "../../../assets/new/service-card2.jpg";
import image3 from "../../../assets/new/service-card3.jpg";
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function ServiceSection() {

  const serviceCardList = [
    {
      imageUrl: image1,
      title: 'Mini-games & immersive exercises',
      description: 'That measures the true potential of a candidate across modern workplace skills. '
    },
    {
      imageUrl: image2,
      title: 'Skill assessments & live coding simulations',
      description: 'Helping evaluate the functional capabilities and proficiency across a wide repository of modern day skills and coding languages across different roles.'
    },
    {
      imageUrl: image3,
      title: 'AI based speech & writing tool',
      description: 'That automates meaningful conversations with candidates scoring them on their spoken & written communication skills and their ability to respond and react to different scenarios and situations.'
    }
  ]
  const badgeList = ['Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking']

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
                {item.title}
              </h1>
              <p className={styles.description}>
                {item.description}
              </p>

              <div className={styles.tagSection}>
                {badgeList.map((item, index) => (
                  <span key={index} className={styles.badge}>{item}</span>
                ))}
              </div>
            </div>

            <div className={styles.contentRight}>
              <Image src={item.imageUrl} alt='image services' className={styles.imgStyle} layout="fill" />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
