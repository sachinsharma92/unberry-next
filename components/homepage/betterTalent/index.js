/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import image1 from "../../../assets/new/across.png";
import buttonIcon from "../../../assets/new/button.svg";

// Styles here
import styles from "./styles.module.scss";

export default function BetterTalent() {
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
            autoPlay
            loop
            muted
            playsInline
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
            <div
              className="safari_only"
              dangerouslySetInnerHTML={{
                __html: `
              <video className={styles.videoSection} playsinline autoplay loop muted>
                  <source src="https://assets.unberry.com/media/Unberry-Video.mp4" type="video/mp4"/>
              </video>`,
              }}
            />

            <video
              className={`${styles.videoSection}`}
              autoPlay
              loop
              id="team-video"
            >
              <source
                src="https://assets.unberry.com/media/Unberry-Video.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </Modal>
      </div>
    </div>
  );
}
