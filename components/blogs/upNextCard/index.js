/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Mixpanel } from '../../../services/mixpanel';

// Styles here
import styles from './styles.module.scss';


export default function UpNextCard() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { asPath } = useRouter();


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
  }, [])

  return (
    <div className={styles.upNextCardStyle}>
      <div className='container-width'>
        <h3 className={`${styles.heading}`}>Up next for you</h3>
        <div className={styles.cardGrid}>
          {[...blogs].reverse().map((item, index) => (
            <div key={index} className={styles.blogCards}>
              <div className={styles.imgbox}>
                <div className={styles.imgStyle} style={{ backgroundImage: `url(${item.bannerImage})` }} />
              </div>
              <h4 className={`${styles.title1}`}>
                {item.heading}
              </h4>
              <a
                href={`/blog/${item.slug}`}>
                <a>Read More</a>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
