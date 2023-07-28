/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import lottie from "lottie-web";
import React, { useEffect, useState } from 'react';
import sliderTimeline from "../../../assets/json/slider-timeline.json";
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
      ImageSourceInterval = setInterval(() => setCount(count + 1), 5000);
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

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#sliderTimeline"),
      animationData: sliderTimeline,
    });
  }, []);

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

          {/* For Desktop */}
          <div className={styles.timelineDesktopSection}>
            <h4 className={styles.titleMedium}>Geared for Rapidity. Optimized for Expansion.<span>Fueled by AI</span></h4>
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
                <div className={styles.jsonItemBox}>
                  <div className={styles.jsonItem} id="sliderTimeline" />
                </div>
                <div>
                  {dataList.map((data, index) => (
                    <div
                      key={index}
                      className={`${styles.itemStyle} ${data.id === activeTitle ? styles.active : styles.activeFill}`}
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

          {/* For Mobile */}
          <div className={styles.timelineMobileSection}>
            <h4 className={styles.titleMedium}>Geared for Rapidity. Optimized for Expansion.<span>Fueled by AI</span></h4>

            <div className={styles.mobileTimeline}>
              <div className={styles.timelineBox}>
                <div className={styles.imgBox}>
                  <ImageCustom
                    src="h-1.png"
                    alt="Unberry"
                    layout="fill"
                  />
                </div>
                <div className={`${styles.contentSection} ${styles.contentTimeline}`} id="contentSection">
                  <div>
                    <div className={`${styles.itemStyle}`}>
                      <h4 className={`${styles.titleSM} title1`}>
                        Data
                      </h4>
                      <p className={`${styles.description} description`}>
                        We leverage a vast data network, contextual industry models, and deep learning to empower of dynamic platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.timelineBox}>
                <div className={styles.imgBox}>
                  <ImageCustom
                    src="score-1.svg"
                    alt="Unberry"
                    layout="fill"
                  />
                </div>
                <div className={`${styles.contentSection} ${styles.contentTimeline}`} id="contentSection">
                  <div>
                    <div className={`${styles.itemStyle}`}>
                      <h4 className={`${styles.titleSM} title1`}>
                        Intelligence
                      </h4>
                      <p className={`${styles.description} description`}>
                        Dynamic system of intelligence that bridges the gap between people, data, and interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.timelineBox}>
                <div className={styles.imgBox}>
                  <ImageCustom
                    src="score-2.svg"
                    alt="Unberry"
                    layout="fill"
                  />
                </div>
                <div className={`${styles.contentSection} ${styles.contentTimeline}`} id="contentSection">
                  <div>
                    <div className={`${styles.itemStyle}`}>
                      <h4 className={`${styles.titleSM} title1`}>
                        Experience
                      </h4>
                      <p className={`${styles.description} description`}>
                        Integrating AI, automation, and personalisation for extraordinary talent experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}