/* eslint-disable @next/next/no-img-element */
import React from 'react';
import ImageCustom from "../../../common/ImageCustom";
import Marquee from "react-fast-marquee";

// Styles here
import styles from './styles.module.scss';
import ButtonPrimary from '../../../common/buttonPrimary';

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


        <div className={styles.lightSection}>

          <section className={styles.sectionOne}>
            <div className={styles.headStyle}>
              <div>
                <h3 className={styles.title3}>Job Knowledge & Functional Skills</h3>
                <p className={styles.description}>How proficient they are on their domain centric knowledge</p>
              </div>
              <div className={`${styles.btnSection}`}>
                <ButtonPrimary href="/book-demo" title="Try For Free" />
              </div>
            </div>

            <div className={styles.badgeSection}>
              <div className={styles.badgeStyle}>Engineering</div>
              <div className={styles.badgeStyle}>Product</div>
              <div className={styles.badgeStyle}>Customer Service</div>
              <div className={styles.badgeStyle}>Marketing</div>
              <div className={styles.badgeStyle}>Sales</div>
              <div className={styles.badgeStyle}>Finance</div>
            </div>

            <div className={styles.imgBox}>
              <ImageCustom src="modren-2.jpg" alt="Unberry image" layout="fill" />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>500+ Technical & Non-technical Skills</h4>
                  <p className={styles.description}>Across tech, sales, customer success, finance, business management & more</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Fully automated Coding Environment</h4>
                  <p className={styles.description}>Real-time simulator supporting 70+ languages across a wide range.</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Highly customisable to different roles</h4>
                  <p className={styles.description}>Each skill being measured at beginner, intermediate & advanced levels</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionTwo}>
            <div className={styles.headStyle}>
              <div>
                <h3 className={styles.title3}>Communication Skills</h3>
                <p className={styles.description}>How they understand speech and express themselves</p>
              </div>
            </div>

            <div className={styles.badgeSection}>
              <div className={styles.badgeStyle}>Speaking</div>
              <div className={styles.badgeStyle}>Listening</div>
              <div className={styles.badgeStyle}>Writing</div>
              <div className={styles.badgeStyle}>English Proficiency</div>
              <div className={styles.badgeStyle}>Soft Skills</div>
            </div>

            <div className={styles.imgBox}>
              <ImageCustom src="modren-2.jpg" alt="Unberry image" layout="fill" />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Instant AI Speech Tool</h4>
                  <p className={styles.description}>Measures English speaking skills using global standards like <span> IELTS, CEFT, TOEFL</span></p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>AI Written Communication</h4>
                  <p className={styles.description}>Generative AI tool simulating conversations that measures written communication</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Audio based Spontaneous Questions</h4>
                  <p className={styles.description}>Gauging proficiency across different competencies based on real-time answers <span>(also vernacular!)</span></p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionThree}>
            <div className={styles.headStyle}>
              <div>
                <h3 className={styles.title3}>Cognition & Intelligence</h3>
                <p className={styles.description}>How they process information & knowledge, learn new concepts & navigate problems</p>
              </div>
            </div>

            <div className={styles.badgeSection}>
              <div className={styles.badgeStyle}>Tolerance To Ambiguity</div>
              <div className={styles.badgeStyle}>Efficiency</div>
              <div className={styles.badgeStyle}>Writing</div>
              <div className={styles.badgeStyle}>Learning Agility</div>
              <div className={styles.badgeStyle}>Processing Speed</div>
              <div className={styles.badgeStyle}>Attention Span</div>
            </div>

            <div className={styles.imgBox}>
              <ImageCustom src="modren-2.jpg" alt="Unberry image" layout="fill" />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Games & Immersive Exercises</h4>
                  <p className={styles.description}>Dynamic environment, modulating multiple pathways resulting in more authentic data & engaging experience</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Principles of Neuroscience</h4>
                  <p className={styles.description}>Backed by validated neuroscience tasks that have existing for decades to measure human cognition & intelligence</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Measures proof of potential</h4>
                  <p className={styles.description}>Skills like problem solving, learning agility, sustained attention are far better predictors of workplace performance</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionFour}>
            <div className={styles.headStyle}>
              <div>
                <h3 className={styles.title3}>Behavioural & Personality</h3>
                <p className={styles.description}>How they control & conduct themselves, and react to social situations</p>
              </div>
            </div>

            <div className={styles.badgeSection}>
              <div className={styles.badgeStyle}>Planning</div>
              <div className={styles.badgeStyle}>Resilience</div>
              <div className={styles.badgeStyle}>Cooperation</div>
              <div className={styles.badgeStyle}>Integrity</div>
              <div className={styles.badgeStyle}>Decision Making</div>
              <div className={styles.badgeStyle}>Emotional Intelligence</div>
            </div>

            <div className={styles.imgBox}>
              <ImageCustom src="modren-2.jpg" alt="Unberry image" layout="fill" />
            </div>

            <div className={styles.infoSection}>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Story Format Immersive Exercises</h4>
                  <p className={styles.description}>Complex real life scenarios requiring application of critical thinking, empathy & decision making skills</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Interactive Workplace Simulations</h4>
                  <p className={styles.description}>Generates exponentially more data than any test and builds a detailed, holistic soft skill map</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div>
                  <h4 className={styles.title4}>Dynamic & Demonstrable</h4>
                  <p className={styles.description}>Authentic responses that go beyond consciously self reported data</p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}