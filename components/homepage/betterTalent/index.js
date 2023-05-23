/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import buttonIcon from "../../../assets/new/button.svg";

// Styles here
import styles from "./styles.module.scss";

export default function BetterTalent() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1023px)' })
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.betterTalentSectionStyle}>
      <div className="container-width">
        <div className={styles.contentSection}>
          <h1 className={`${styles.title1}`}>
            We urge companies to make a real effort in how they can{" "}
            <span>see more in people.</span>
          </h1>
        </div>

        <div className={styles.imgbox}>
          <video
            className={`${styles.videoSection}`}
            muted
            autoPlay
            loop
            playsInline
            width="100%"
            height="100%"
            poster="https://assets.unberry.com/media/images/poster.png"
          >
            <source
              src="https://assets.unberry.com/media/bg.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>

        <div className={styles.buttonSection}>
          <button className={styles.buttonStyle} onClick={modalToggle}>
            <Image src={buttonIcon} alt="image services" layout="fill" />
          </button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={modalToggle}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "better-talent-modal",
          }}
        >
          <div className={styles.videoBox}>

            {isBigScreen ?
              <video
                autoPlay
                playsInline
                id="team-video"
                poster="https://assets.unberry.com/media/images/poster.png"
              >
                <source
                  src="https://assets.unberry.com/media/intro.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
              :
              <iframe src="https://player.vimeo.com/video/829402047?h=4737ae2397&autoplay=1&loop=1&title=0&byline=0&portrait=0"
                width="100%" height="100%"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen>
              </iframe>
            }
          </div>
        </Modal>
      </div>
    </div>
  );
}
