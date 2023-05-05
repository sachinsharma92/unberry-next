/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import image1 from "../../../assets/new/service-card1.jpg";
import image2 from "../../../assets/new/service-card2.jpg";
import image3 from "../../../assets/new/service-card3.jpg";
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function ServiceSection(props) {

  const serviceCardList = [
    {
      imageUrl: image1,
      title: 'Games & Immersive Exercises',
      description: 'Dynamic environments modulating multiple pathways, generating exponentially more behavioural data, measuring the true potential of a candidate across modern workplace skills',
      videoUrl: '/video/service1.mp4',
      badgeList: [
        'Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking'
      ]
    },
    {
      imageUrl: image2,
      title: 'Skill assessments & live coding simulations',
      description: 'Helping evaluate the functional capabilities, domain knowledge and proficiency across a wide repository of modern day skills and coding languages across different functions & roles.',
      videoUrl: '/video/service2.mp4',
      badgeList: [
        'Technology', 'Sales', 'Learning Agility', 'Technology', 'Sales', 'Finance', 'Business Management'
      ]
    },
    {
      imageUrl: image3,
      title: 'AI based speech & writing tool',
      description: 'That automates meaningful conversations with candidates scoring them on their spoken & written communication skills and their ability to respond and react to different scenarios and situations.',
      videoUrl: '/video/service3.mp4',
      badgeList: [
        'Speaking', 'Listening', 'Writing', 'Reading', 'English Proficiency',
      ]
    }
  ]
  return (
    <div>
      <div className={`${styles.breakingExperienceStyle}`}>
        <div className='container-width'>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              Breaking down the experience
            </h1>
            <p className={`${styles.description} description`}>
              A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
            </p>
            <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
          </div>
        </div>
      </div>
      <div className={`${styles.serviceSectionStyle}`}>
        <div className={`container-width ${styles.serviceItemStyle}`}>
          {serviceCardList.map((item, index) => (
            <section key={index} className={styles.serviceCard}>
              <div className={styles.contentLeft}>
                <h1 className={`${styles.title1}`}>
                  {item.title}
                </h1>
                <p className={`${styles.description} description`}>
                  {item.description}
                </p>

                <div className={styles.tagSection}>
                  <h4 className={styles.title4}>WHAT IT MEASURES</h4>
                  <div className={styles.tagItems}>
                    {item.badgeList.map((item, index) => (
                      <span key={index} className={styles.badge}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.videoCard}>
                <video muted autoPlay loop playsInline width="100%" height="100%">
                  <source src={item.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
