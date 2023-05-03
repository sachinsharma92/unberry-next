/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BlogCard from '../../blogCard';

// Styles here
import styles from './styles.module.scss';


export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const { asPath } = useRouter();
  // Integration here
  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
    };

    axios.get('https://cms-api.unberry.com/api/v1/article', { headers }).then(res => {
      setBlogs(res?.data?.data)
    }).catch(err => {
      console.log('blog data err', err)
    })
  }, [])

  return (
    <div className={`${styles.blogSectionStyle}`}>
      <div className='container-width'>
        <div className={styles.contentSection}>
          <div className={styles.headingSection}>
            <h1 className={`${styles.title1}`}>
              The wandering words
            </h1>
            <Link href="/blog" passHref>
              <a className={styles.title4}>
                View All
              </a>
            </Link>
          </div>
          <div className={styles.divider}></div>
        </div>

        <div className={styles.blogCardSection}>
          <BlogCard data={blogs} currentPath={asPath} />
        </div>
      </div>
    </div>
  )
}
