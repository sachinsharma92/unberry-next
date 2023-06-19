import React from "react";
import ImageCustom from "../../common/ImageCustom";
import ElevateCard from "../elevateCard";

// Styles here
import styles from "./styles.module.scss";

export default function WinningChoice(props) {
  return (
    <div className={`${styles.winningChoiceStyle} ${props.className}`}>
      <div className={`container-width ${styles.containerStyle} ${styles.lSpace}`}>
        <div className={styles.rowSection}>
          <div className={styles.contentSection}>
            <h1 className={styles.title1}>
              A winning choice for HR teams
            </h1>

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
                <ImageCustom src="icon1.svg" alt='image services' layout="fill" />
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
                <ImageCustom src="icon2.svg" alt='image services' layout="fill" />
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
                <ImageCustom src="icon3.svg" alt='image services' layout="fill" />
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
                <ImageCustom src="icon4.svg" alt='image services' layout="fill" />
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

      <ElevateCard className={styles.winningPageStyle} />
    </div>
  );
}
