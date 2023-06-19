/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';
import ImageCustom from '../../../common/ImageCustom';

export default function CommunicationService(props) {

  const serviceCardList = [
    {
      title: 'Games & Immersive Exercises',
      description: 'Dynamic environments modulating multiple pathways, generating exponentially more behavioural data, measuring the true potential of a candidate across modern workplace skills',
      imgUrl: 'c-service1.png',
      badgeList: [
        'Problem Solving', 'Tolerance To Ambiguity', 'Learning Agility', 'Attention Span', 'Processing Speed', 'Efficiency', 'Multitasking'
      ]
    },
    {
      title: 'Skill assessments & live coding simulations',
      description: 'Helping evaluate the functional capabilities, domain knowledge and proficiency across a wide repository of modern day skills and coding languages across different functions & roles.',
      imgUrl: 'c-service2.png',
      badgeList: [
        'Technology', 'Sales', 'Finance', 'Marketing', 'Customer Success', 'Business Management', "+500 Skills",
      ]
    },
  ]
  return (
    <div className={`${styles.communicationServiceStyle}`}>
      <div className={`container-width ${styles.serviceItemStyle}`}>
        {serviceCardList.map((item, index) => (
          <section key={index} className={styles.serviceCard}>
            <div className={styles.mediaCard}>
              <ImageCustom src={item.imgUrl} alt="" layout="fill" />
            </div>
            <div className={styles.contentLeft}>
              <h1 className={`${styles.title1}`}>
                {item.title}
              </h1>
              <div className={styles.tagSection}>
                <h4 className={styles.title4}>WHAT IT MEASURES</h4>
                <div className={styles.tagItems}>
                  {item.badgeList.map((item, index) => (
                    <span key={index} className={styles.badge}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
