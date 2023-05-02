import { Col, Row } from 'antd';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import { Mixpanel } from '../../services/mixpanel';

// Images
import HeaderPrimary from '../../common/headerPrimary';
import BookADemo from '../../components/homepage/bookADemo';
import FooterPrimary from '../../common/footerPrimary';

export default function BlogScreen() {
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
    <div className='blog-page-style'>
      <Head>
        <title>Blog | Unberry</title>
      </Head>
      <LayoutPrimary>
        <section className='blog-list-page'>
          <h1 className='title1'>The wandering words</h1>
          <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent</p>
        </section>

        <section className='blog-unberry'>
          {[...blogs].reverse().map((item, index) => (
            <div key={index} className='border-section'>
              <div className='blog-thumb-image'>
                <div className='img-style' style={{ backgroundImage: `url(${item.bannerImage})` }} />
              </div>
              <div className='blog-content-item'>
                <div className='title'>{item.heading}</div>
                <div className='description'>{item.content}</div>
                <Link
                  href={{
                    pathname: `/blog/${item.slug}`,
                    query: { backTo: asPath },
                  }}
                  as={`/blog/${item.slug}`}
                >
                  <a>Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </section>

      </LayoutPrimary>
    </div>
  )
}
