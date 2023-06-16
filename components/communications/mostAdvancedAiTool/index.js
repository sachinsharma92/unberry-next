/* eslint-disable @next/next/no-img-element */
import React from 'react';


import ButtonPrimary from '../../../common/buttonPrimary';
import ImageCustom from '../../../common/ImageCustom';

// Styles here
import styles from './styles.module.scss';

export default function MostAdvancedAiTool(props) {
  const cardSection = [
    {
      imgUrl: 'ai-1.png',
      title: 'AI-based Live Speech Tool',
      description: 'Intelligent voice assessment tool to evaluate candidates on the nuances of speech'
    },
    {
      imgUrl: 'ai-2.png',
      title: 'AI-based Writing Simulator',
      description: `Assess the candidate's ability to express their thoughts and ideas on various topics, such as business and technology`
    },
    {
      imgUrl: 'ai-2.png',
      title: 'Active Listening Assessments',
      description: `Assess the candidate's ability to express their thoughts and ideas on various topics, such as business and technology`
    },
    {
      imgUrl: 'ai-2.png',
      title: 'Reading Comprehension & Grammar',
      description: `Assess the candidate's ability to express their thoughts and ideas on various topics, such as business and technology`
    }
  ]
  return (
    <div className={styles.mostAdvancedAiToolStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={styles.gridSection}>

          <div className={styles.header}>
            <h3 className={styles.title}>Powered by the most advanced AI tools</h3>
            <div className={`${styles.btnSection} animation-heading`}>
              <ButtonPrimary href="/book-demo" title="TRY FOR FREE" />
            </div>
          </div>

          <div className={styles.cardSection}>
            {cardSection.map((item) => (
              <div key={item} className={styles.detailCard}>
                <div className={styles.contentSection}>
                  <h4 className={styles.title4}>
                    {item.title}
                  </h4>
                  <p className={`${styles.description} description`}>
                    {item.description}
                  </p>
                </div>
                <div className={styles.imgBox}>
                  <ImageCustom src={item.imgUrl} alt="" layout="fill" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}