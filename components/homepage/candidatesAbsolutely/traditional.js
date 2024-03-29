/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import lottie from "lottie-web";

// Json File
import annoyed from "../../../assets/json/annoyed.json";
import anxious from "../../../assets/json/anxious.json";
import bored from "../../../assets/json/bored.json";
import dull from "../../../assets/json/dull.json";
import stressed from "../../../assets/json/stressed.json";
import weary from "../../../assets/json/weary.json";
import glum from "../../../assets/json/glum.json";

// Styles here
import styles from "./styles.module.scss";

export default function TraditionalEmoticon() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#annoyed"),
      animationData: annoyed,
    });
    lottie.loadAnimation({
      container: document.querySelector("#stressed"),
      animationData: stressed,
    });
    lottie.loadAnimation({
      container: document.querySelector("#weary"),
      animationData: weary,
    });
    lottie.loadAnimation({
      container: document.querySelector("#anxious"),
      animationData: anxious,
    });
    lottie.loadAnimation({
      container: document.querySelector("#bored"),
      animationData: bored,
    });
    lottie.loadAnimation({
      container: document.querySelector("#dull"),
      animationData: dull,
    });
    lottie.loadAnimation({
      container: document.querySelector("#glum"),
      animationData: glum,
    });
  }, []);

  const iconsData = [
    {
      lottieID: "dull",
      title: "Dull",
    },
    {
      lottieID: "stressed",
      title: "Stressed",
    },
    {
      lottieID: "weary",
      title: "Weary",
    },
    {
      lottieID: "bored",
      title: "Bored",
    },
    {
      lottieID: "annoyed",
      title: "Annoyed",
    },
    {
      lottieID: "anxious",
      title: "Anxious",
    },
    {
      lottieID: "glum",
      title: "Glum",
    },
  ];
  return (
    <div className={`${styles.emojiSectionStyle} ${styles.emojiTraditionalStyle}`}>
      <div className={styles.headerStyle}>
        <h3 className={styles.title3}>Traditional Assessments</h3>
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
  );
}
