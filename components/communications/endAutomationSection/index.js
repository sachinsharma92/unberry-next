/* eslint-disable @next/next/no-img-element */
import { gsap } from 'gsap';
import React, { useEffect } from 'react';
import ImageCustom from '../../../common/ImageCustom';
import { useMediaQuery } from 'react-responsive'

// Styles here
import styles from './styles.module.scss';

export default function CommunicationsAutomationSection() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

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


  useEffect(() => {
    if (!isSmallScreen) {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards",
          pin: true,
          pinSpacing: true,
          // markers: true,
          start: "top-=120px top", // when the top of the trigger hits the top of the viewport
          end: "+=2000", // end after scrolling 1000px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        }
      });
      tl.addLabel("card1");
      tl.to('.card1', {
        yPercent: 0,
      })

      tl.from('.card2', {
        yPercent: 300,
      })
      tl.addLabel("card2");
      // set the active section based on the direction, and position it part-way through the transition because that's more intuitive
      tl.add(() => setActiveNav(tl.scrollTrigger.direction > 0 ? 1 : 0), "-=0.15");
      tl.to('.card1', {
        scale: 0.95,
        yPercent: -0.5,
      }, "-=0.3")

      tl.to('.card2', {
        yPercent: 0,
      })

      tl.from('.card3', {
        yPercent: 300,
      })
      tl.addLabel("card3");
      tl.add(() => setActiveNav(tl.scrollTrigger.direction > 0 ? 2 : 1), "-=0.15");

      tl.to('.card2', {
        scale: 0.98,
        yPercent: -0.4,
      }, "-=0.3")

      tl.to('.card3', {
        yPercent: 0,
      })

      tl.to('.card3', {});

      gsap.utils.toArray(".nav a").forEach((a, i) => {
        a.addEventListener("click", e => {
          e.preventDefault();
          let pad = i === 0 ? 0 : tl.scrollTrigger.direction > 0 ? 2 : -2;
          gsap.to(window, { scrollTo: labelToScroll(tl, "card" + (i + 1)) + pad })
        });
      });
      function labelToScroll(timeline, label) {
        let st = timeline.scrollTrigger,
          progress = timeline.labels[label] / timeline.duration();
        return st.start + (st.end - st.start) * progress;
      }
      let circles = gsap.utils.toArray(".nav .circle");
      function setActiveNav(index) {
        circles.forEach((circle, i) => circle.classList[i === index ? "add" : "remove"]("active"));
      }
    }

  }, [isSmallScreen])

  const serviceCardList = [
    {
      title: 'Invite a candidate',
      description: 'via a unique or public link',
      imgUrl: 'reporting1.png'
    },
    {
      title: 'Candidate completes the assessment',
      description: 'on a desktop or mobile device',
      imgUrl: 'reporting2.png'
    },
    {
      title: 'Vernacular',
      description: 'Lorem ipsum dolores',
      imgUrl: 'reporting1.png'
    },
  ]


  return (
    <div className={styles.endAutomationSectionStyle}>
      <div className='container-width'>
        <h1 className={`${styles.title1}`}>
          Dashboard & Real-time reporting
        </h1>

        <div className={styles.reportingCard}>
          {serviceCardList.map((item, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={`${styles.cardImage}`}>
                <ImageCustom src={item.imgUrl} alt="" layout="fill" />
              </div>
              <h1 className={`${styles.title}`}>
                {item.title}
              </h1>
              <p className={`${styles.description} description`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`${styles.cardStyles} card-styles`}>
          <div className="cards">
            <div className="custom-card card1" id="1">
              <div className={styles.contentSec}>
                <div className={styles.leftSection}>
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
                </div>
                <div className={styles.bgMobileBoxStyle3}>
                  <ImageCustom src="m-automation1.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                </div>
              </div>
            </div>
            <div className="custom-card card2" id="2">
              <div className={`${styles.contentSec}`}>
                <div className={styles.leftSection}>
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
                </div>
                <div className={styles.bgMobileBoxStyle2}>
                  <ImageCustom src="m-automation2.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                </div>
              </div>
            </div>
            <div className="custom-card card3" id="3">
              <div className={styles.contentSec}>
                <div className={styles.leftSection}>
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
                </div>
                <div className={styles.bgMobileBoxStyle1}>
                  <ImageCustom src="m-automation3.png" alt='image services' layout='fill' className={styles.bgMobileStyle} />
                </div>
              </div>
            </div>


            {/* FOr Right SPace */}
            <div className={styles.accordianCardLast} />
          </div>
        </div>

      </div>
    </div>
  )
}
