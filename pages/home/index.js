/* eslint-disable @next/next/no-img-element */
import { Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';

import axios from "axios";
import DemoForm from '../../components/demoForm';
import BlogCard from '../../components/home/blogCard';
import ThankModal from '../../components/thankModal';
import { Mixpanel } from '../../services/mixpanel';
import Image from 'next/image';
import AssessmentSection from '../../components/home/assessmentSection';
import AutomationSection from '../../components/home/automationSection';
import HomeHeroSection from '../../components/home/heroSection';
import HowWorkSection from '../../components/home/howWorkSection';
import WhyUnberrySection from '../../components/home/whyUnberrySection';
import SeoHead from '../../components/seoHead';

// Images
import logoTheme from "../../assets/logo-brown.svg";
import CompetencySection from '../../components/home/competencySection';


export default function HomeScreen() {
  const [blogs, setBlogs] = useState([]);
  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const { asPath } = useRouter();

  useEffect(() => {
    document.title = 'Unberry - Transforming the future of hiring and developing talent.'
    Mixpanel.track('Unberry Home Page Opened, Path: /')
  }, []);


  // Integration here
  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
      // 'Access-Control-Allow-Origin': '*'
    };

    axios.get('https://cms-api.unberry.com/api/v1/article', { headers }).then(res => {
      setBlogs(res?.data?.data)
    }).catch(err => {
      console.log('blog data err', err)
    })
  }, [])

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent."
        title="Unberry - Transforming the future of hiring and developing talent."
        description="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent"
      />

      <div className='home-section-style'>
        <LayoutPrimary footer>
          <div className='mobile-header'>
            <Link href="/">
              <a className='logo-white'>
                <Image src={logoTheme} className="logo-white" alt="logo" />
              </a>
            </Link>
            <Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
          </div>

          <HomeHeroSection />

          <WhyUnberrySection />

          <AssessmentSection />

          <CompetencySection />

          <HowWorkSection />

          <AutomationSection />

          {/* ======= Section Blog ======= */}
          <section className='section-style blog-section'>
            <div className='menu-section'>
              <Link href="">07 Blogs</Link>
            </div>

            <div className='content-section primary-width'>
              <div className='heading-section'>
                <h3 className='title1'>Inside Unberry</h3>
                <div className='view-all'><Link href="/blog">View All</Link></div>
              </div>
              <BlogCard data={blogs} currentPath={asPath} />
            </div>
          </section>

          {/* ======= Section Contact ======= */}
          <DemoForm id="bookDemo" />
        </LayoutPrimary>
        <ThankModal visible={isThankModal} onCancel={thankToggleModal} />
      </div>
    </>
  )
}
