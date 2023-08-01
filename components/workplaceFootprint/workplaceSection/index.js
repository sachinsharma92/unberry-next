/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Marquee from "react-fast-marquee";
import ImageCustom from "../../../common/ImageCustom";
import ButtonPrimary from '../../../common/buttonPrimary';

// Styles here
import styles from './styles.module.scss';

export default function WorksplaceSection(props) {
  const tagData = ['Engineering', 'Product', 'Speaking', 'Customer Service', 'Efficiency', 'Listening', 'Marketing', 'Sales', 'Engineering', 'Product', 'Speaking', 'Customer Service', 'Efficiency', 'Listening', 'Marketing', 'Sales',]
  const tagData2 = ['Engineering', 'Reciprocity', 'Multitasking', 'Learning Agility', 'Decision Making', 'Emotional Intelligence', 'Attention Span', 'Engineering', 'Reciprocity', 'Multitasking', 'Learning Agility', 'Decision Making', 'Emotional Intelligence', 'Attention Span',]
  return (
    <div className={styles.worksplaceStyle}>
      <div className={`${styles.containerStyle}`}>
        <div className="container-width">
          <div className={`${styles.contentSection}`}>
            <h1 className={`${styles.titleDesktop} title1`}>
              Holistic workplace footprint <br /> of a candidate
            </h1>
          </div>
        </div>
      </div>

      <div className={`${styles.darkSectionStyle}`}>
        <div className="container-width">
          <div className={styles.modernWorkplace}>
            <h4 className={styles.titleMedium}>Modern workplace needs modern ways to measure the candidates</h4>
            <div className={styles.modernListSection}>
              <div className={styles.imgBox}>
                <ImageCustom src="modren-1.png" alt="Unberry - Know More in a Detailed Video " layout="fill" />
              </div>
              <div className={styles.listStyle}>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className={styles.listSec}>
                  <ul className={styles.modernList}>
                    <li>Job & Functional Skills</li>
                    <li>Communication Skills</li>
                    <li>Cognition & Intelligence</li>
                    <li>Behavioural & Personality</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.techSkillsStyle}>
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

      </div>
    </div>
  )
}