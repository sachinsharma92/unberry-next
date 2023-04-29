/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import image1 from "../../../assets/new/automation1.png";
import iconPlus from "../../../assets/new/plus.svg";
import icon2 from "../../../assets/new/switching.svg";
import icon1 from "../../../assets/new/video.svg";
import Image from 'next/image';


// Styles here
import styles from './styles.module.scss';

export default function EndAutomation() {

  useEffect(() => {
    const panels = document.querySelectorAll('.panel');
    const removeActiveClasses = () => {
      panels.forEach(panel => {
        panel.classList.remove('active')
      })
    }
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
      })
    })


  }, [])

  return (
    <div className={styles.endAutomationStyle}>
      <h1 className={`${styles.title1}`}>
        End to end automation
      </h1>

      <div className="container-panel">
        <div className="panel gray active">
          <div className={styles.accordianCard}>
            <div className="head">
              <div className='head-wrap'>
                <h2 className="heading">Proctoring</h2>
                <div className="icon-plus">
                  <Image src={iconPlus} alt='image services' width="34" height="34" />
                </div>
              </div>
            </div>
            <div className='content-section'>
              <div className={styles.contentSec}>
                <h4 className={styles.title4}>Proctoring</h4>
                <p className={styles.description}>Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage.</p>

                <ul className={styles.listStyle}>
                  <li className={styles.listItem}>
                    <Image src={icon1} alt='image services' width="20" height="20" />
                    Video Proctoring
                  </li>
                  <li className={styles.listItem}>
                    <Image src={icon2} alt='image services' width="20" height="20" />
                    Tabs Switching
                  </li>
                </ul>
              </div>
              <div className={styles.imageCard}>
                <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel purple">
          <div className={styles.accordianCard}>
            <div className="head">
              <div className='head-wrap'>
                <div className="icon-plus">
                  <Image src={iconPlus} alt='image services' width="34" height="34" />
                </div>
                <h2 className="heading">Real time reporting</h2>
              </div>
            </div>
            <div className='content-section'>
              <div className={styles.contentSec}>
                <h4 className={styles.title4}>Real time reporting</h4>
                <p className={styles.description}>View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step.</p>

                <ul className={styles.listStyle}>
                  <li className={styles.listItem}>
                    <Image src={icon1} alt='image services' width="20" height="20" />
                    Video Proctoring
                  </li>
                  <li className={styles.listItem}>
                    <Image src={icon2} alt='image services' width="20" height="20" />
                    Video Proctoring
                  </li>
                </ul>
              </div>
              <div className={styles.imageCard}>
                <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className="panel orange">
          <div className={styles.accordianCard}>
            <div className="head">
              <div className='head-wrap'>
                <h2 className="heading">Candidate Communication</h2>
                <div className="icon-plus">
                  <Image src={iconPlus} alt='image services' width="34" height="34" />
                </div>
              </div>
            </div>
            <div className='content-section'>
              <div className={styles.contentSec}>
                <h4 className={styles.title4}>Candidate Communication</h4>
                <p className={styles.description}>Automated communication with candidates to engage with your top talent with automated reminders and notifications.</p>

                <ul className={styles.listStyle}>
                  <li className={styles.listItem}>
                    <Image src={icon1} alt='image services' width="20" height="20" />
                    Video Proctoring
                  </li>
                  <li className={styles.listItem}>
                    <Image src={icon2} alt='image services' width="20" height="20" />
                    Video Proctoring
                  </li>
                </ul>
              </div>
              <div className={styles.imageCard}>
                <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
              </div>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
