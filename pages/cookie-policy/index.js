/* eslint-disable @next/next/no-img-element */
import { Footer } from 'antd/lib/layout/layout';
import Link from 'next/link';
import React from 'react';
import ImageCustom from '../../common/ImageCustom';
import SeoHead from '../../components/seoHead';

// Styles here
import styles from "./styles.module.scss";

export default function PrivacyPolicyScreen() {

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent."
        title="Unberry - Transforming the future of hiring and developing talent."
        description="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent"
      />

      <div className={styles.cookiePolicy}>
        <div className={styles.header}>
          <div className='max-wrap'>
            <Link href="/">
              <a className='logo-white'>
                <ImageCustom src="logo-brown.svg" alt="logo" width="200" height="22" />
              </a>
            </Link>

            <h2 className={styles.title2}>Cookie Policy</h2>
          </div>
        </div>

        <div className={styles.contentSection}>
          <div className={styles.title6}> Effective Date: June 01, 2023</div>
          <div className={styles.title6}>Last Updated on: June 01, 2023</div>
          <p className={styles.description}>
            This cookie policy (&quot;Policy&quot;) explains how Unberry (Hide Unhide Technologies Private Limited) or any of its affiliates or subsidiaries (hereby collectively referred to as (&quot;Scrut Automation&quot;, &quot;We&quot;,&quot;Us&quot;, &quot;Our&quot;) Processes Personal Data collected from You.
          </p>
          <p className={styles.description}>
            We use cookies, web beacons, and other technologies to improve and customize our Sites and Services your experience; to allow you to access and use the Services without re-entering your username or password; to understand the usage of our Services and the interests of our customers; to determine whether an email has been opened and acted upon, and to present you with advertising relevant to your interests. These cookies include:
          </p>
          <ul>
            <li>
              <span className={styles.bolder}> Essential website cookies.</span> These cookies and other technologies are essential in order to enable the Services to provide the feature you have requested, such as remembering you have logged in.
            </li>
            <li>
              <span className={styles.bolder}>Functionality cookies.</span>  These cookies and similar technologies remember choices you make such as language or search parameters. We use these cookies to provide you with an experience more appropriate with your selections and to make your use of the Services more tailored.
            </li>
            <li>
              <span className={styles.bolder}>Performance and analytics cookies.</span> These cookies and similar technologies collect information on how users interact with the Services and enable us to improve how the Services operate. For example, we use Google Analytics cookies to help us understand how visitors arrive at and browse our products and website to identify areas for improvement such as navigation, user experience, and marketing campaigns.
            </li>
            <li>
              <span className={styles.bolder}>Targeting or advertising cookies.</span> These cookies collect information about your browsing habits in order to make advertising relevant to you. They perform functions like preventing the same ad from continuously re-appearing, ensuring that ads are properly displayed for advertisers, and in some cases selecting advertisements that are based on your interests.
            </li>
            <li>
              <span className={styles.bolder}>Social networking cookies.</span> These cookies are used to enable you to share pages and content that you find interesting on our Sites and Services through third-party social networking and other websites. These cookies may also be linked to targeting/advertising activities.
            </li>
          </ul>
        </div>
      </div>

      <Footer>
        <div className='footer'>
          <div className='copyright-section'>
            <div><ImageCustom src="logo-brown.svg" alt="logo-footer" width="84" height="22" /></div>
            <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved. | <Link href="/privacy-policy"><a className="privacy-link">Privacy Policy</a></Link> </p>
          </div>
        </div>
      </Footer>
    </>
  )
}
