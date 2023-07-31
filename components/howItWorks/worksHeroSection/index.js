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
              Unberry Assessments <br />
              Tailored Insights for Every Job Profile
            </h1>
            <p className={`${styles.descriptionText} description`}>
              The most modern & experiential talent assessment suite, that can measure job-relevant skills and proficiencies in just a few minutes
            </p>

            <div className={`${styles.btnSection}`}>
              <ButtonPrimary href="/book-demo" title="BOOK DEMO" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}