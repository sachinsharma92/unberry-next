import React from "react";
import ImageCustom from "../../../common/ImageCustom";

// Styles here
import styles from "./styles.module.scss";

export default function InsightSection(props) {
  return (
    <div className={styles.insightSectionStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={styles.rowSection}>
          <div className={styles.contentSection}>
            <h1 className={styles.title1}>
              Insights that empower you to take the best hiring decisions
            </h1>

            <div className={`${styles.boxDesktop} ${styles.orangeBox}`}>
              <div className={styles.largeNumber}>6x</div>
              <p className={styles.boxDescription}>increase in recruiter efficiency</p>
            </div>

            <div className={`${styles.boxDesktop} ${styles.greenBox}`}>
              <div className={styles.largeNumber}>60%</div>
              <p className={styles.boxDescription}>Reduced Screening Time</p>
            </div>

            <div className={`${styles.boxDesktop} ${styles.violetBox}`}>
              <div className={styles.largeNumber}>40%</div>
              <p className={styles.boxDescription}>Reduce In Cost To Hire</p>
            </div>


            {/* For Mobile */}
            <div className={`${styles.boxMobile} ${styles.greenBox}`}>
              <div className={styles.largeNumber}>60%</div>
              <p className={styles.boxDescription}>Reduced Screening Time</p>
            </div>
          </div>

          <div className={styles.grayBoxSection}>
            <div className={styles.grayBox}>
              <div className={styles.imgItemBox}>
                <ImageCustom src="icon1.svg" alt='Great Candidate Feedback' layout="fill" />
              </div>
              <div className={styles.grayContent}>
                <h4 className={styles.title4}>
                  Elevate the candidate experience
                </h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.imgItemBox}>
                <ImageCustom src="icon2.svg" alt='High Quality of Hire' layout="fill" />
              </div>
              <div className={styles.grayContent}>
                <h4 className={styles.title4}>Improve the quality of hire</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.imgItemBox}>
                <ImageCustom src="icon3.svg" alt='Improve Recruitment Metrics' layout="fill" />
              </div>
              <div className={styles.grayContent}>
                <h4 className={styles.title4}>Find the hidden gems</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
            <div className={styles.grayBox}>
              <div className={styles.imgItemBox}>
                <ImageCustom src="icon4.svg" alt='Faster Filling of Open Positions' layout="fill" />
              </div>
              <div className={styles.grayContent}>
                <h4 className={styles.title4}>Hire faster and efficiently</h4>
                <p className={styles.description}>
                  Offer a memorable candidate-driven experience, that people
                  talk about
                </p>
              </div>
            </div>
          </div>

          {/* For Mobile */}
          <div className={`${styles.boxMobile} ${styles.violetBox}`}>
            <div className={styles.largeNumber}>40%</div>
            <p className={styles.boxDescription}>Reduce In Cost To Hire</p>
          </div>
        </div>
      </div>
    </div>
  );
}
