import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import { Mixpanel } from '../../services/mixpanel';
import { gsap } from 'gsap';

export default function BlogScreen() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { asPath } = useRouter();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".animation-block .heading-text", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 0.1,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
    })
  }, [])

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
      <LayoutPrimary className="blog-list-container">
        <section className='blog-list-page animation-block'>
          <h1 className='title1 heading-text'>The wandering words</h1>
          <p className='description heading-text'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent</p>
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
