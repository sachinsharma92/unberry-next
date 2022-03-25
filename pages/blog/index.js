import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import LayoutPrimary from '../../common/layoutPrimary';
import { Mixpanel } from '../../services/mixpanel';
import DemoForm from '../../components/demoForm';
import Link from 'next/link';
import Image from 'next/image';

// Images
import logoTheme from "../../assets/logo-brown.svg"

export default function BlogScreen() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { pathname } = useRouter();


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
      // setBlogs(res?.data?.data)
      setIsLoading(false)
    }).catch(err => {
      console.log('blog data err', err)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='blog-page-style'>
      <LayoutPrimary footer>
        <div className='mobile-header'>
          <Link href="/">
            <a><Image src={logoTheme} className='logo-white' alt="logo" /></a>
          </Link>
          <Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
        </div>

        {/* ======= Section Bury Biases ======= */}
        <section className='section-style section-bury'>
          <div className='menu-section'>
            <Link href="/">
              <a className='logo-style d-xs-none'>
                <Image height={24} width={84} src={logoTheme} alt="logo" />
              </a>
            </Link>
          </div>
          <div className='content-section'>
            <div className='border-section border-bottom-first'>
              <div className='heading-section'>
                <h1 className='title1 text-gradient'><span className='mob-space'>Inside Unberry</span></h1>
              </div>
              <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent</p>
            </div>
          </div>
        </section>

        {/* ======= Section Why Unberry ======= */}
        <section className='section-style blog-unberry'>

          {blogs.map((item, index) => (
            <div key={index} className='border-section'>
              <div className='menu-section' />
              <div className='content-section'>
                <Row gutter={28} align="middle">
                  <Col xs={24} sm={8}>
                    <div className='blog-thumb-image'>
                      <Image itemprop='url' src={item.bannerImage} alt={item.heading} />
                    </div>
                  </Col>
                  <Col xs={24} sm={16}>
                    <div className='blog-content-item'>
                      <div className='title'>{item.heading}</div>
                      <div className='description'>{item.content}</div>
                      <Link to={`/blog/${item.id}`} state={{ backTo: pathname }}><a>Read More</a></Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </section>
        <DemoForm id="bookDemo" />
      </LayoutPrimary>
    </div>
  )
}
