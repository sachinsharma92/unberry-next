/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// Styles here
import ImageCustom from "../../../common/ImageCustom";
import styles from "./styles.module.scss";

export default function CommunicationsHolistically() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.communicationsHolisticallyStyle}>
      <div className="container-width">
        <div className={styles.contentSection}>
          <h1 className={`${styles.title1}`}>
            Holistically evaluate a candidate’s communication skills using <span>deep tech</span>
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
            <ImageCustom src="button.svg" alt="image services" layout="fill" />
          </button>
        </div>

        <Modal
          open={isModalOpen}
          onClose={modalToggle}
          center
          classNames={{
            overlay: "better-custom-overlay",
            modal: "better-talent-modal",
          }}
        >
          <div className={styles.videoBox}>
            <iframe src="https://player.vimeo.com/video/829402047?h=4737ae2397&autoplay=1&loop=1&title=0&byline=0&portrait=0"
              width="100%" height="100%"
              frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
        </Modal>
      </div>
    </div>
  );
}
