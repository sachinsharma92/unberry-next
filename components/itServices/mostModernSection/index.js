/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function MostModernSection(props) {

  const serviceCardList = [
    {
      title: 'Real-time coding simulators',
      description: 'Dynamic environments modulating multiple pathways, generating exponentially more behavioural data, measuring the true potential of a candidate across modern workplace skills',
      videoUrl: 'https://assets.unberry.com/media/service3.mp4',
      badgeList: [
        'Code Accuracy', 'Code Quality', 'Code Optimisation', 'Code Performance', ,
      ]
    },
    {
      title: 'Skill assessments',
      description: 'Helping evaluate the functional capabilities, domain knowledge and proficiency across a wide repository of modern day skills and coding languages across different functions & roles.',
      videoUrl: 'https://assets.unberry.com/media/service2.mp4',
      badgeList: [
        'Technology', 'Sales', 'Finance', 'Marketing', 'Customer Success', 'Business Management', "+500 Skills",
      ]
    },
    {
      title: 'Games & Immersive Exercises',
      description: 'Dynamic environments modulating multiple pathways, generating exponentially more behavioural data, measuring the true potential of a candidate across modern workplace skills',
      videoUrl: 'https://assets.unberry.com/media/service1.mp4',
      badgeList: [
        'Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking'
      ]
    },
    {
      title: 'Communication Tools',
      description: 'That automates meaningful conversations with candidates scoring them on their spoken & written communication skills and their ability to respond and react to different scenarios and situations.',
      videoUrl: 'https://assets.unberry.com/media/service3.mp4',
      badgeList: [
        'Speaking', 'Listening', 'Writing', 'Reading', 'English Proficiency',
      ]
    }
  ]
  return (
    <div>
      <div className={`${styles.mostModernSectionStyle}`}>
        <div className='container-width'>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              Most modern & holistic assessments
            </h1>
            <p className={`${styles.description} description`}>
              A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.
            </p>
            <ButtonPrimary className={styles.btnStyle} href="/book-demo" title="BOOK DEMO" />
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
