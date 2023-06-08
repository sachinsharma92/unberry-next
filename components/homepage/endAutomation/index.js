/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import ImageCustom from '../../../common/ImageCustom';

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
        <div className={`container-panel ${styles.containerPanel}`}>
          <div className="panel gray active">
            <div className={styles.accordianCard}>
              <div className="head head1">
                <div className='head-wrap'>
                  <h2 className="heading">Advanced Proctoring</h2>
                  <div className="icon-plus">
                    <ImageCustom src="plus.svg" alt='image services' width="34" height="34" />
                  </div>
                </div>
              </div>
              <div className={`content-section`}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Advanced Proctoring</h4>
                  <p className={styles.description}>Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="snapshots.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Candidate Snapshots
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="switching.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Disable Tab Switching
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="copy-paste.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Disable Copy Paste
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="prohibit.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Curb Plagiarism
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div className={styles.bgMobileBoxStyle1}>
                    <ImageCustom src="m-automation1.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel purple">
            <div className={styles.accordianCard}>
              <div className="head head2">
                <div className='head-wrap'>
                  <div className="icon-plus">
                    <ImageCustom src="plus.svg" alt='image services' width="34" height="34" />
                  </div>
                  <h2 className="heading">Real Time Dashboards</h2>
                </div>
              </div>
              <div className={`content-section`}>
                <div className={`${styles.contentSec}`}>
                  <h4 className={styles.title4}>Real Time Dashboards</h4>
                  <p className={styles.description}>View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="cursor-click.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          One click assessment launch
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="clock-countdown.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Real-time Status
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="chart.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Automated Instant Reports
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="repeat.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Unlimited Recruiter Desks
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div className={styles.bgMobileBoxStyle2}>
                    <ImageCustom src="m-automation2.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="panel orange">
            <div className={styles.accordianCard}>
              <div className="head head3">
                <div className='head-wrap'>
                  <h2 className="heading">Candidate Communication</h2>
                  <div className="icon-plus">
                    <ImageCustom src="plus.svg" alt='image services' width="34" height="34" />
                  </div>
                </div>
              </div>
              <div className={`content-section`}>
                <div className={styles.contentSec}>
                  <h4 className={styles.title4}>Candidate Communication</h4>
                  <p className={styles.description}>Automated communication with candidates to engage with your top talent with automated reminders and notifications.</p>

                  <table className={styles.listStyle}>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="envelope.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Email & Messages
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="note.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Automated Reminders
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="device.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Mobile-friendly
                        </div>
                      </td>
                      <td>
                        <div className={styles.listItem}>
                          <ImageCustom src="chats.svg" alt='image services' width="30" height="30" className={styles.imgIcon} />
                          Dedicated Chat Support
                        </div>
                      </td>
                    </tr>
                  </table>

                  <div className={styles.bgMobileBoxStyle3}>
                    <ImageCustom src="m-automation3.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOr Right SPace */}
          <div className={styles.accordianCardLast} />
        </div>
      </div>
    </div>
  )
}
