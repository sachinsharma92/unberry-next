/* eslint-disable @next/next/no-img-element */
import React from 'react';
import image1 from "../../../assets/new/automation1.png";

// Styles here
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

export default function BlogSection() {

  return (
    <div className={styles.blogSectionStyle}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          The wandering words
        </h1>
        <div>
          <h4 className={styles.title4}> View All Blogs</h4>
        </div>
      </div>

      <div className={styles.blogCardSection}>

        <div className={styles.blogCard}>
          <h3 className={styles.title3}>Traits we measure - measure what really matters</h3>
          <Link href="/"><a className={`${styles.linkStyle} font-condensed`}>Read More</a></Link>
          <div className={styles.imageCard}>
            <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
          </div>
        </div>

        <div className={styles.blogCard}>
          <h3 className={styles.title3}>Traits we measure - measure what really matters</h3>
          <Link href="/"><a className={`${styles.linkStyle} font-condensed`}>Read More</a></Link>
          <div className={styles.imageCard}>
            <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
          </div>
        </div>

        <div className={styles.blogCard}>
          <h3 className={styles.title3}>Traits we measure - measure what really matters</h3>
          <Link href="/"><a className={`${styles.linkStyle} font-condensed`}>Read More</a></Link>
          <div className={styles.imageCard}>
            <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
          </div>
        </div>
      </div>
    </div>
  )
}
