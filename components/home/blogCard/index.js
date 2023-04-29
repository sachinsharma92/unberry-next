import { Carousel } from 'antd';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

const BlogCard = ({ data, currentPath }) => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 2.4,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className={`${styles.blogCardStyle} blog-carousel`}>
      <Carousel afterChange={onChange} {...settings}>
        {data?.reverse().map((item, index) => (
          <Link
            passHref
            href={{
              pathname: `/blog/${item.slug}`,
              query: { backTo: currentPath },
            }}
            as={`/blog/${item.slug}`}
            key={index}>
            <a className={styles.blogCard}>
              <div className={styles.boxItemstyle}>
                <div>
                  <div className={styles.title3}>
                    {item.heading}
                  </div>
                  <div className={`${styles.linkStyle} font-condensed`}>Read More</div>
                </div>

                <div className={styles.imageCard}>
                  <div className={styles.imgStyle} style={{ backgroundImage: `url(${item.bannerImage})` }} />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}


export default BlogCard;