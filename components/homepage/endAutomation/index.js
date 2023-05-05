/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import background1 from "../../../assets/new/automation1.png";
import image2 from "../../../assets/new/automation2.png";
import image3 from "../../../assets/new/automation3.png";
import iconPlus from "../../../assets/new/plus.svg";
import icon1 from "../../../assets/new/icons/video.svg";
import icon2 from "../../../assets/new/icons/switching.svg";
import icon3 from "../../../assets/new/icons/reports.svg";
import icon4 from "../../../assets/new/icons/job.svg";
import icon5 from "../../../assets/new/icons/whtsp.svg";
import icon6 from "../../../assets/new/icons/email.svg";
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
      <div className='container-width'>
        <h1 className={`${styles.title1}`}>
          We use the most advanced technologies to provide a seamless experience
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
              <div className={`content-section ${styles.backgroundStyle}`} style={{ backgroundImage: `url("/assets/automation1.png")` }}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Advanced Proctoring</h4>
                  <p className={styles.description}>Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage.</p>

                  <ul className={styles.listStyle}>
                    <li className={styles.listItem}>
                      <Image src={icon1} alt='image services' width="30" height="30" />
                      Candidate Snapshots
                    </li>
                    <li className={styles.listItem}>
                      <Image src={icon2} alt='image services' width="30" height="30" />
                      Disable Tab Switching
                    </li>
                    <li className={styles.listItem}>
                      <Image src={icon2} alt='image services' width="30" height="30" />
                      Disable Copy Paste
                    </li>
                    <li className={styles.listItem}>
                      <Image src={icon2} alt='image services' width="30" height="30" />
                      Curb Plagiarism
                    </li>
                  </ul>
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
              <div className={`content-section ${styles.backgroundStyle}`} style={{ backgroundImage: `url("/assets/automation2.png")` }}>
                <div className={`${styles.contentSec}`}>
                  <h4 className={styles.title4}>Real time reporting</h4>
                  <p className={styles.description}>View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step.</p>
                  <ul className={styles.listStyle}>
                    <li className={styles.listItem}>
                      <Image src={icon3} alt='image services' width="20" height="20" />
                      Detailed Reports
                    </li>
                    <li className={styles.listItem}>
                      <Image src={icon4} alt='image services' width="20" height="20" />
                      Custom Job Profiles
                    </li>
                  </ul>
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
              <div className={`content-section ${styles.backgroundStyle}`} style={{ backgroundImage: `url("/assets/automation3.png")` }}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Candidate Communication</h4>
                  <p className={styles.description}>Automated communication with candidates to engage with your top talent with automated reminders and notifications.</p>

                  <ul className={styles.listStyle}>
                    <li className={styles.listItem}>
                      <Image src={icon5} alt='image services' width="20" height="20" />
                      Detailed Reports
                    </li>
                    <li className={styles.listItem}>
                      <Image src={icon6} alt='image services' width="20" height="20" />
                      Custom Job Profiles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
