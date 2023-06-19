/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';
import ImageCustom from '../../../common/ImageCustom';

export default function WrittenCommunication(props) {

  const serviceCardList = [
    {
      title: 'Real-time Chat Simulations',
      description: 'Evaluate test taker’s ability to communicate basis how they respond to different scripted prompts',
      cardData: [
        {
          imgUrl: 'c-w1.png',
          title: 'Chat Simulations',
        },
        {
          imgUrl: 'c-w2.png',
          title: 'Reports',
        }
      ]
    },
    {
      title: 'Email Simulations',
      description: 'Evaluate test taker’s ability to communicate basis how they respond to different scripted prompts',
      cardData: [
        {
          imgUrl: 'c-w3.png',
          title: 'Email Simulations',
        },
        {
          imgUrl: 'c-w4.png',
          title: 'Reports',
        },
      ]
    },
  ]
  return (
    <div>
      <div className={`${styles.writtenCommunicationStyle}`}>
        <div className='container-width'>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
              Written Communication
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
