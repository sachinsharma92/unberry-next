/* eslint-disable @next/next/no-img-element */
import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import ImageCustom from "../../../common/ImageCustom";
import ButtonPrimary from "../../../common/buttonPrimary";

// Styles here
import styles from "./styles.module.scss";

export default function FootprintCandidateSection(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.footprintCandidateStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <h1 className={`${styles.titleLarge} title1`}>
            How we map the holistic <br /> workplace footprint of a candidate
          </h1>
        </div>

        <div className={styles.infoStyle}>
          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>
                Job Knowledge & Functional Skills
              </h4>
              <p className={styles.description}>
                How proficient they are on their domain centric knowledge
              </p>
            </div>
            <button onClick={toggleModal}>
              <a href="#section1">
                Explore More
              </a>
            </button>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Communication Skills</h4>
              <p className={styles.description}>
                How they understand speech and express themselves
              </p>
            </div>
            <button onClick={toggleModal}>
              <a href="#section2">
                Explore More
              </a>
            </button>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Cognition & Intelligence</h4>
              <p className={styles.description}>
                How they process information & knowledge, learn new concepts &
                navigate problems
              </p>
            </div>
            <button onClick={toggleModal}>
              <a href="#section3">
                Explore More
              </a>
            </button>
          </div>

          <div className={styles.cardBox}>
            <div>
              <h4 className={styles.titleSM}>Behavioural & Personality</h4>
              <p className={styles.description}>
                How they control & conduct themselves, and react to social
                situations
              </p>
            </div>
            <button onClick={toggleModal}>
              <a href="#section4">
                Explore More
              </a>
            </button>
          </div>
          <div className={styles.imgBox}>
            <ImageCustom
              src="h-footprint.svg"
              alt="Unberry - Know More in a Detailed Video "
              layout="fill"
            />
          </div>
        </div>
      </div>


      {/* Modal Here */}
      <Modal
        centered
        visible={isModalOpen}
        footer={null}
        onCancel={toggleModal}
        wrapClassName="skill-modal"
      >
        <div className={styles.lightSection}>
          <section className={styles.sectionOne} id="section1">
            <div className={styles.headStyle}>
              <div>
                <h3 className={styles.title3}>Job Knowledge & Functional Skills</h3>
                <p className={styles.description}>How proficient they are on their domain centric knowledge</p>
              </div>
              {/* <div className={`${styles.btnSection}`}>
                <ButtonPrimary href="/book-demo" title="Try For Free" />
              </div> */}
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

          <section className={styles.sectionTwo} id="section2">
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

          <section className={styles.sectionThree} id="section3">
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

          <section className={styles.sectionFour} id="section4">
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
      </Modal>
    </div>
  );
}
