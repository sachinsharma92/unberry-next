/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import lottie from "lottie-web";

// Json File
import content from "../../../assets/json/emoticon/content.json";
import delighted from "../../../assets/json/emoticon/delighted.json";
import eager from "../../../assets/json/emoticon/eager.json";
import relieved from "../../../assets/json/emoticon/relieved.json";


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
      lottieID: 'delighted1',
      title: 'Mind Blown'
    },
    {
      lottieID: 'delighted2',
      title: 'Delighted 1'
    },
    {
      lottieID: 'delighted3',
      title: 'Delighted 2'
    },
    {
      lottieID: 'delighted4',
      title: 'Delighted 3'
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

    // ====================
    lottie.loadAnimation({
      container: document.querySelector("#delighted1"),
      animationData: delighted
    });
    lottie.loadAnimation({
      container: document.querySelector("#delighted2"),
      animationData: eager
    });
    lottie.loadAnimation({
      container: document.querySelector("#delighted3"),
      animationData: relieved
    });
    lottie.loadAnimation({
      container: document.querySelector("#delighted4"),
      animationData: relieved
    });
  }, []);

  return (
    <div className={`${styles.emojiSectionStyle} ${styles.emojiUnberryStyle}`}>
      <div className={styles.headerStyle}>
        <h3 className={styles.title3}>Unberry</h3>
      </div>
      {iconsData.map((item) => (
        <div key={item} className={styles.emojiStyle}>
          <div className={styles.jsonItemBox}>
            <div className={styles.jsonItem} id={item.lottieID} />
          </div>
          <h4 className={styles.title4}>{item.title}</h4>
        </div>
      ))}
    </div>
  )
}
