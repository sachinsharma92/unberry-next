import React from "react";

// Styles here
import styles from "./styles.module.scss";

export default function ServeCustomersAcross() {

  return (
    <div className={styles.customersAcrossSectionStyle}>
      <div className="container-width">
        <div className={styles.contentSection}>
          <h1 className={`${styles.title1}`}>
            We serve customers across a variety of sectors & functions
          </h1>
        </div>
      </div>

      <div className={`${styles.gradientSection} ${styles.roleSection}`}>
        <h4 className={styles.title4}>ROLES</h4>
        <div className={styles.badge}>
          <div className={styles.badgeItem}>Tech</div>
          <div className={styles.badgeItem}>Sales</div>
          <div className={styles.badgeItem}>Marketing</div>
          <div className={styles.badgeItem}>Operations</div>
          <div className={styles.badgeItem}>Tele-Calling</div>
          <div className={styles.badgeItem}>Frontline Staff</div>
          <div className={styles.badgeItem}>Customer Success</div>
          <div className={styles.badgeItem}>Warehouse Operations</div>
        </div>
      </div>

      <div className={`${styles.gradientSection} ${styles.sectorsSection}`}>
        <h4 className={styles.title4}>SECTORS</h4>
        <div className={styles.badge}>
          <div className={styles.badgeItem}>IT Services</div>
          <div className={styles.badgeItem}>BPO</div>
          <div className={styles.badgeItem}>Financing Services</div>
          <div className={styles.badgeItem}>Logistics</div>
          <div className={styles.badgeItem}>Manufacturing</div>
          <div className={styles.badgeItem}>Retail</div>
        </div>
      </div>

      <div className={`${styles.gradientSection} ${styles.needSection}`}>
        <h4 className={styles.title4}>NEEDS</h4>
        <div className={styles.badge}>
          <div className={styles.badgeItem}>High Volume Hiring</div>
          <div className={styles.badgeItem}>Campus Hiring</div>
          <div className={styles.badgeItem}>Lateral Hiring</div>
        </div>
      </div>
    </div>
  );
}
