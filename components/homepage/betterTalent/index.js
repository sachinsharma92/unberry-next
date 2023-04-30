/* eslint-disable @next/next/no-img-element */
import { Modal } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import image1 from "../../../assets/new/across.png";
import buttonIcon from "../../../assets/new/button.svg";

// Styles here
import styles from './styles.module.scss';


export default function BetterTalent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={styles.betterTalentSectionStyle}>
      <div className='container-width'>
        <div className={styles.contentSection}>
          <h1 className={`${styles.title1}`}>
            We enable companies to <span> make better talent decisions </span> by seeing more in people.
          </h1>
        </div>

        <div className={styles.imgbox}>
          <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />

          <button className={styles.buttonStyle} onClick={modalToggle}>
            <Image src={buttonIcon} alt='image services' layout="fill" />
          </button>
        </div>

        <Modal visible={isModalOpen} onCancel={modalToggle} wrapClassName="better-talent-modal" centered footer={false}>
          <div className={styles.videoBox}>
            <video className={styles.videoSection} playsinline autoPlay muted loop>
              <source src="https://s3.ap-south-1.amazonaws.com/grappus-website/GrappusVideo-Feb17th+(online-video-cutter.com).mp4" type="video/mp4" />
            </video>
          </div>
        </Modal>
      </div>
    </div>
  )
}
