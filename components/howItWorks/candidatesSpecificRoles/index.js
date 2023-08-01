/* eslint-disable @next/next/no-img-element */
import { Modal } from 'antd';
import React, { useState } from 'react';
import ImageCustom from '../../../common/ImageCustom';

// Styles here
import styles from './styles.module.scss';

export default function CandidatesSpecificRoleSection(props) {
  const [isTechModalOpen, setIsTechModalOpen] = useState(false);

  const techToggleModal = () => {
    setIsTechModalOpen(!isTechModalOpen);
  };

  const cardData = [
    {
      title: "Software Developer",
      description: 'Know what it takes to identify the star coder - your highest paid hires cannot be identified via knowing basics of Java or solving random arithmetic MCQs!'
    },
    {
      title: "Sales Manager",
      description: 'Sales assessments that are closest to what you really want to evaluate in the folks! See why you need to bid goodbye to archaic, unreliable tests.'
    },
    {
      title: "Customer Service",
      description: 'Identify hiring trainable and high performing customer service reps in just 20 minutes - use GPT4 to evaluate candidates on international rubrics and save tons of bucks!'
    },
    {
      title: "Project Manager",
      description: 'Know what it takes to identify the star coder - your highest paid hires cannot be identified via knowing basics of Java or solving random arithmetic MCQs!'
    },
    {
      title: "Account Manager",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500'
    },
    {
      title: "HR Manager",
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500'
    }
  ]
  return (
    <div className={styles.candidatesSpecificRoleStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <h1 className={`${styles.titleDesktop} title1`}>
            {props.title || `How do actual Unberry assessments look like?`}
          </h1>
        </div>
      </div>
      <div className={styles.infoStyle}>
        {cardData.map((item) => (
          <div key={item} className={styles.cardBox}>
            <div>
              <div className={styles.designation}>TEAM LEAD | ENGINEERING</div>
              <h4 className={styles.titleSM}>{item.title}</h4>
              <p className={styles.description}>{item.description}</p>
            </div>
            <button onClick={techToggleModal}>
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* Modal Here */}
      <Modal
        centered
        visible={isTechModalOpen}
        footer={null}
        onCancel={techToggleModal}
        wrapClassName="skill-modal"
      >
        <div className={styles.lightSection}>
          <div className={styles.header}>
            <h4 className={styles.title4}>Software Developer</h4>
            <p className={styles.description}>Explore the competencies we measure for a software developer</p>
          </div>

          <section className={styles.sectionStyle}>
            <div className={styles.headStyle}>
              <h3 className={styles.title3}>Job Knowledge & Functional Skills</h3>
            </div>

            <div className={styles.gridCard}>
              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-01.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Programming Concepts</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-02.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Coding Simulator</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionStyle}>
            <div className={styles.headStyle}>
              <h3 className={styles.title3}>Communication Skills</h3>
            </div>

            <div className={styles.gridCard}>
              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-03.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Reading</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-04.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Speaking</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionStyle}>
            <div className={styles.headStyle}>
              <h3 className={styles.title3}>Cognition & Intelligence</h3>
            </div>

            <div className={styles.gridCard}>
              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-05.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Clearberry</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-06.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Toothberry</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-6.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Botberry</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-08.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Colorberry</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-09.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Freeberry</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionStyle}>
            <div className={styles.headStyle}>
              <h3 className={styles.title3}>Behavioural & Personality</h3>
            </div>

            <div className={styles.gridCard}>
              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-10.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Story of the Voyage</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.imgBox}>
                  <ImageCustom src="sd-11.png" alt="Unberry image" layout="fill" />
                </div>
                <div className={styles.infoItem}>
                  <div className={styles.badgeSection}>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                    <div className={styles.badgeStyle}>Tag 1 heading</div>
                  </div>
                  <h4 className={styles.title4}>Workplace Simulation</h4>
                  <p className={styles.description}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Modal>
    </div>
  )
}