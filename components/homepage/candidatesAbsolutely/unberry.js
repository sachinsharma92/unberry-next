/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import lottie from "lottie-web";

// Json File
import content from "../../../assets/json/emoticon/content.json";
import delighted from "../../../assets/json/emoticon/delighted.json";
import eager from "../../../assets/json/emoticon/eager.json";
import relieved from "../../../assets/json/emoticon/relieved.json";

import mind from "../../../assets/json/emoticon/mind.json";
import happy from "../../../assets/json/emoticon/happy.json";
import excited from "../../../assets/json/emoticon/excited.json";
import engaged from "../../../assets/json/emoticon/engaged.json";


// Styles here
import styles from './styles.module.scss';

export default function UnberryEmoticon() {
  const iconsData = [
    {
      lottieID: 'content',
      title: 'Content'
    },
    {
      lottieID: 'delighted',
      title: 'Delighted'
    },
    {
      lottieID: 'eager',
      title: 'Eager'
    },
    {
      lottieID: 'relieved',
      title: 'Relieved'
    },
    {
      lottieID: 'mind',
      title: 'Mind Blown',
      jsonStyle: styles.mindBlown
    },
    {
      lottieID: 'happy',
      title: 'Happy'
    },
    {
      lottieID: 'excited',
      title: 'Excited'
    },
    {
      lottieID: 'engaged',
      title: 'Engaged'
    },
  ]

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#content"),
      animationData: content
    });
    lottie.loadAnimation({
      container: document.querySelector("#delighted"),
      animationData: delighted
    });
    lottie.loadAnimation({
      container: document.querySelector("#eager"),
      animationData: eager
    });
    lottie.loadAnimation({
      container: document.querySelector("#relieved"),
      animationData: relieved
    });
    lottie.loadAnimation({
      container: document.querySelector("#mind"),
      animationData: mind
    });
    lottie.loadAnimation({
      container: document.querySelector("#happy"),
      animationData: happy
    });
    lottie.loadAnimation({
      container: document.querySelector("#excited"),
      animationData: excited
    });
    lottie.loadAnimation({
      container: document.querySelector("#engaged"),
      animationData: engaged
    });
  }, []);

  return (
    <div className={`${styles.emojiSectionStyle} ${styles.emojiUnberryStyle}`}>
      {iconsData.map((item) => (
        <div key={item} className={styles.emojiStyle}>
          <div className={`${styles.jsonItemBox} ${item.jsonStyle}`}>
            <div className={styles.jsonItem} id={item.lottieID} />
          </div>
          <h4 className={styles.title4}>{item.title}</h4>
        </div>
      ))}
    </div>
  )
}
