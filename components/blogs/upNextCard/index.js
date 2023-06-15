/* eslint-disable @next/next/no-img-element */
import { Carousel } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-modal/styles.css';
import { Mixpanel } from '../../../services/mixpanel';

// Styles here
import styles from './styles.module.scss';


export default function UpNextCard() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' })
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { asPath } = useRouter();

  console.log(asPath, 'check asPath');

  useEffect(() => {
    document.title = "Unberry | Blogs"
    Mixpanel.track('All Blogs Opened, Path: /blog')
  }, [])


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios.get('https://cms-api.unberry.com/api/v1/article').then(res => {
      setBlogs(res?.data?.data)
      setIsLoading(false)
    }).catch(err => {
      console.log('blog data err', err)
      setIsLoading(false)
    })
  }, [asPath])

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: isBigScreen ? 3 : 3.2,
    slidesToScroll: 3,

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
          slidesToScroll: 1,
          centerPadding: '20px',
        }
      },
    ],
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.upNextCardStyle} key={asPath}>
      <div className='container-width'>
        <div className={styles.contentSection}>
          <div className={styles.headingSection}>
            <h3 className={`${styles.heading}`}>Up next for you</h3>
            <Link href="/blog" passHref>
              <a className={styles.title4}>
                View All
              </a>
            </Link>
          </div>
          <div className={styles.divider}></div>
        </div>

        <div className={`${styles.cardGrid} blog-carousel upNext-blog-carousel`}>
          <Carousel afterChange={onChange} {...settings}>
            {[...blogs].reverse().map((item, index) => (
              <div key={index} className={styles.blogCards}>
                <div className={styles.imgbox}>
                  <div className={styles.imgStyle} style={{ backgroundImage: `url(${item.bannerImage})` }} />
                </div>
                <h4 className={`${styles.title1}`}>
                  {item.heading}
                </h4>

                <Link href={{
                  pathname: `/blog/${item.slug}`,
                  query: { backTo: asPath },
                }}
                  as={`/blog/${item.slug}`}>
                  <a>Read More</a>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
