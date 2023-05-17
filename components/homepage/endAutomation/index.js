/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect } from 'react';
import icon1 from "../../../assets/new/icons/snapshots.svg";
import icon2 from "../../../assets/new/icons/switching.svg";
import icon3 from "../../../assets/new/icons/copy-paste.svg";
import icon4 from "../../../assets/new/icons/prohibit.svg";

import icon5 from "../../../assets/new/icons/cursor-click.svg";
import icon6 from "../../../assets/new/icons/clock-countdown.svg";
import icon7 from "../../../assets/new/icons/chart.svg";
import icon8 from "../../../assets/new/icons/repeat.svg";

import icon9 from "../../../assets/new/icons/envelope.svg";
import icon10 from "../../../assets/new/icons/note.svg";
import icon11 from "../../../assets/new/icons/device.svg";
import icon12 from "../../../assets/new/icons/chats.svg";

import iconPlus from "../../../assets/new/plus.svg";


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
                  <h2 className="heading">Advanced Proctoring</h2>
                  <div className="icon-plus">
                    <Image src={iconPlus} alt='image services' width="34" height="34" />
                  </div>
                </div>
              </div>
              <div className={`content-section ${styles.backgroundStyle1}`} style={{ backgroundImage: `url("/assets/automation1.png")` }}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Advanced Proctoring</h4>
                  <p className={styles.description}>Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon1} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Candidate Snapshots
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon2} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Disable Tab Switching
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon3} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Disable Copy Paste
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon4} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Curb Plagiarism
                        </div>
                      </td>
                    </tr>
                  </table>
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
                  <h2 className="heading">Real time dashboards</h2>
                </div>
              </div>
              <div className={`content-section ${styles.backgroundStyle2}`} style={{ backgroundImage: `url("/assets/automation2.png")` }}>
                <div className={`${styles.contentSec}`}>
                  <h4 className={styles.title4}>Real time dashboards</h4>
                  <p className={styles.description}>View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon5} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          One click assessment launch
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon6} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Real-time Status
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon7} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Automated Instant Reports
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon8} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Unlimited Recruiter Desks
                        </div>
                      </td>
                    </tr>
                  </table>
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
              <div className={`content-section ${styles.backgroundStyle3}`} style={{ backgroundImage: `url("/assets/automation3.png")` }}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Candidate Communication</h4>
                  <p className={styles.description}>Automated communication with candidates to engage with your top talent with automated reminders and notifications.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon9} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Email & Messages
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon10} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Automated Reminders
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon11} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Mobile-friendly
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <Image src={icon12} alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Dedicated Chat Support
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
