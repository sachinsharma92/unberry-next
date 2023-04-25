/* eslint-disable @next/next/no-img-element */
import React from 'react';
import image1 from "../../../assets/new/dummy.jpg";

// Styles here
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Carousel } from 'antd';


export default function BlogSection() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    className: "center",
    centerPadding: "0px",
    centerMode: true,
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const blogCard = [
    1, 2, 3, 4, 5, 6, 7, 8
  ]


  return (
    <div className={`${styles.blogSectionStyle} blog-carousel`}>
      <div className={styles.contentSection}>
        <h1 className={`${styles.title1}`}>
          The wandering words
        </h1>
        <div>
          <h4 className={styles.title4}> View All Blogs</h4>
        </div>
      </div>

      <div className={styles.blogCardSection}>
        <Carousel afterChange={onChange} {...settings}>
          {blogCard.map((index) => (
            <div key={index} className={styles.blogCard}>
              <div>
                <h3 className={styles.title3}>Traits we measure - measure what really matters</h3>
                <Link href="/"><a className={`${styles.linkStyle} font-condensed`}>Read More</a></Link>
              </div>
              <div className={styles.imageCard}>
                <Image src={image1} alt='image services' className={styles.imgStyle} layout="fill" />
              </div>
            </div>
          ))}

        </Carousel>
      </div>
    </div>
  )
}
