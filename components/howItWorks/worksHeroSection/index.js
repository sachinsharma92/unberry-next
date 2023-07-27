/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import React, { useEffect, useState } from 'react';
import ImageCustom from "../../../common/ImageCustom";
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function WorksHeroSection(props) {
  const [count, setCount] = useState(3);
  const [activeTitle, setActiveTitle] = useState(1)

  const dataList = [
    {
      imgUrl: "h-1.png",
      title: "Data",
      description: "We leverage a vast data network, contextual industry models, and deep learning to empower of dynamic platform.",
      id: 1,
    },
    {
      imgUrl: "score-1.svg",
      title: "Intelligence",
      description: "Dynamic system of intelligence that bridges the gap between people, data, and interactions.",
      id: 2,
    },
    {
      imgUrl: "score-2.svg",
      title: "Experience",
      description: "Integrating AI, automation, and personalisation for extraordinary talent experiences.",
      id: 3
    },
  ];


  const [imageSource, setImageSource] = useState(dataList[0].imgUrl);

  useEffect(() => {
    let ImageSourceInterval;
    if (count < dataList.length) {
      ImageSourceInterval = setInterval(() => setCount(count + 1), 3000);
    }
    if (count >= dataList.length) {
      setCount(0);
    }
    setImageSource(dataList[count]?.imgUrl);
    setActiveTitle(dataList[count]?.id)
    return () => clearInterval(ImageSourceInterval);
  }, [dataList]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-how-work", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#howWeWork',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <div className={styles.workHeroStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <div className={`${styles.contentSection}`}>
            <h1 className={`${styles.titleDesktop} title1`}>
              Immerse yourself <br />
              in the unberry experience
            </h1>
            <p className={`${styles.descriptionText} description`}>
              The most modern & experiential talent assessment suite, that can measure job-relevant skills and proficiencies in just a few minutes
            </p>

            <div className={`${styles.btnSection}`}>
              <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
            </div>
          </div>

          <div className={styles.timelineSection}>
            <h4 className={styles.titleMedium}>Geared for Rapidity. Optimized for Expansion. <span>Fueled by AI</span></h4>
            <div className={styles.timelineBox}>
              {imageSource && (<div className={styles.imgBox}>
                <ImageCustom
                  key={imageSource}
                  src={imageSource}
                  alt="Unberry"
                  layout="fill"
                />
              </div>
              )}
              <div className={`${styles.contentSection} ${styles.contentTimeline}`} id="contentSection">
                <div>
                  {dataList.map((data, index) => (
                    <div
                      key={index}
                      className={`${styles.itemStyle} ${data.id === activeTitle ? styles.active : ''}`}
                      id={`item${index + 1}`}
                    >
                      <h4 className={`${styles.titleSM} title1`}>
                        {data.title}
                      </h4>
                      <p className={`${styles.description} description`}>
                        {data.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}