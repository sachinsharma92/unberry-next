import React from "react";
import { Carousel } from "antd";
import ImageCustom from "../../../common/ImageCustom";
import ButtonPrimary from "../../../common/buttonPrimary";

// Styles here
import styles from "./styles.module.scss";

export default function WinningChoice() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const testimonialsData = [
    "I was really excited for such an entertaining placement and this is for the first time I have been doing this kind of an amazing round.",
    "It was so nice. I didn’t know that recruitment can be this much fun.",
    "I am very happy after playing this game. It was a tremendous experience. Totally loved it. Thank you for giving this opportunity.",
    "Very innovative way of analyzing the caliber of the candidate. Thoroughly enjoyed it.",
    "I never had this much fun during any recruitment process for a sec I almost forgot that I’m giving an exam.",
    "Overall, I found this assessment was challenging and thought-provoking and very engaging. The graphics were great.",
  ]
  return (
    <div className={styles.winningChoiceStyle}>
      <div className={`container-width ${styles.containerStyle}`}>
        <div className={styles.rowSection}>
          <div className={styles.contentSection}>
            <h1 className={`${styles.title1}`}>
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

        {/* Elevate your campus section */}
        <div className={styles.hiringCard}>
          <div className={styles.content}>
            <h3 className={styles.title3}>
              Elevate your campus hiring program with the most engaging & data
              backed assessment solution
            </h3>
            <ButtonPrimary
              className={styles.btnStyle}
              href="/book-demo"
              title="BOOK A DEMO"
            />
          </div>


          {/* curve Line Section */}
          <div className={styles.curveLineSection}>
            <ImageCustom src="dotted-curve-line.svg" alt='image services' layout="fill" />
          </div>

          {/* For Mobile */}
          <div className={styles.iconBoxes}>
            <div className={styles.gridSection}>
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <ImageCustom src="binoculars.svg" alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Find high potential candidates
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <ImageCustom src="eye-closed.svg" alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Increase your employer branding
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <ImageCustom src="trend-up.svg" alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Reach untapped talent pools
                </h4>
              </div>

              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <ImageCustom src="magnet.svg" alt='image services' layout="fill" />
                </div>
                <h4 className={styles.title4}>
                  Attract & hire diverse talent
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.sliderCard} wining-slider`}>
          <Carousel afterChange={onChange} autoplay>
            {testimonialsData.map((item, index) => (
              <div key={index}>
                <h3 className={styles.title3}>
                  {item}
                </h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
