/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';
import ImageCustom from '../../../common/ImageCustom';

export default function SpokenCommunicationSection(props) {

  const serviceCardList = [
    {
      title: 'Scripted Communication',
      description: 'Evaluate test taker’s ability to communicate basis how they respond to different scripted prompts',
      cardData: [
        {
          imgUrl: 'spoken1.png',
          title: 'Word Pronunciation',
        },
        {
          imgUrl: 'spoken2.png',
          title: 'Sentence Pronunciation',
        },
        {
          imgUrl: 'spoken6.png',
          title: 'Paragraph Pronunciation',
        }
      ]
    },
    {
      title: 'Spontaneous Communication',
      description: 'Hand crafted open ended contextual questions that assess a test taker’s ability to speak spontaneously',
      cardData: [
        {
          imgUrl: 'spoken3.png',
          title: 'Word Pronunciation',
        },
        {
          imgUrl: 'spoken4.png',
          title: 'Sentence Pronunciation',
        },
        {
          imgUrl: 'spoken5.png',
          title: 'Paragraph Pronunciation',
        }
      ]
    },
  ]
  return (
    <div>
      <div className={`${styles.spokenCommunicationStyle}`}>
        <div className='container-width'>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              Spoken Communication
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
            <section key={index} className={`${styles.serviceCard}`}>
              <div className={styles.contentLeft}>
                <h1 className={`${styles.title1}`}>
                  {item.title}
                </h1>
                <p className={`${styles.description} description`}>
                  {item.description}
                </p>
                <div className={styles.cardSection}>
                  {item.cardData.map((item, index) => (
                    <div key={index} className={styles.cardItem}>
                      <div className={`${styles.cardImage}`}>
                        <ImageCustom src={item.imgUrl} alt="" layout="fill" />
                      </div>
                      <h4 className={styles.title4}>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
