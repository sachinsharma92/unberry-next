/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import ImageCustom from '../../../common/ImageCustom';

// Styles here
import styles from './styles.module.scss';

export default function CandidatesSpecificRoleSection(props) {
  const cardData = [
    {
      title: "Software Developer",
      description: 'Explore the competencies we measure for a software developer'
    },
    {
      title: "Sales Manager",
      description: 'Explore the competencies we measure for a software developer'
    },
    {
      title: "Customer Service",
      description: 'Explore the competencies we measure for a software developer'
    },
    {
      title: "Project Manager",
      description: 'Explore the competencies we measure for a software developer'
    },
    {
      title: "Account Manager",
      description: 'Explore the competencies we measure for a software developer'
    },
    {
      title: "HR Manager",
      description: 'Explore the competencies we measure for a software developer'
    }
  ]
  return (
    <div className={styles.candidatesSpecificRoleStyle}>
      <div className="container-width">
        <div className={`${styles.containerStyle}`}>
          <h1 className={`${styles.titleDesktop} title1`}>
            See how we measure the candidates for specific roles
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
            <Link href="/">Explore</Link>
          </div>
        ))}
      </div>
    </div>
  )
}