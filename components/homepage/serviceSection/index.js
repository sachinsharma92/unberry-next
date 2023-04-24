/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import image1 from "../../../assets/new/service-card1.jpg";
import styles from './styles.module.scss';

// Styles here

export default function ServiceSection() {

  const serviceCardList = [
    1, 2, 3
  ]

  const badgeList = ['Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking']

  return (
    <div className={styles.serviceSectionStyle}>
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
  )
}
