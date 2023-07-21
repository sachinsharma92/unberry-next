/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

// Styles here
import styles from "./styles.module.scss";

export default function TechSkillsSection(props) {
  const tagData = ['Python', 'React JS', 'Flutter', '.NET', 'SQL', 'NodeJS', 'PHP', 'CSS', 'HTML', 'Python', 'React JS', 'Flutter', '.NET', 'SQL', 'NodeJS', 'PHP', 'CSS', 'HTML']
  const tagData2 = ['Python', 'React JS', 'Flutter', '.NET', 'SQL', 'NodeJS', 'PHP', 'CSS', 'HTML', 'Python', 'React JS', 'Flutter', '.NET', 'SQL', 'NodeJS', 'PHP', 'CSS', 'HTML']
  return (
    <div className={styles.techSkillsStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <h2 className={styles.titleMain}>
          Measure candidates across all tech skills
        </h2>
      </div>
      <Marquee speed={20} gradient={false} className={styles.tagStyle}>
        {tagData.map((item) => (
          <div key={item} className={styles.tagItem}>
            {item}
          </div>
        ))}
      </Marquee>

      <Marquee speed={20} direction="right" gradient={false} className={styles.tagStyle}>
        {tagData2.map((item) => (
          <div key={item} className={styles.tagItem}>
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
