import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoTheme from "../../../assets/logo-brown.svg"
import heroImage from "../../../assets/illustration/hero-img.svg";

export default function HomeHeroSection() {
  return (
    <section className='section-style section-bury'>
      <div className='menu-section'>
        <Link href="/">
          <a className='logo-style d-xs-none'>
            <Image height={24} width={84} src={logoTheme} alt="logo" />
          </a>
        </Link>
        <Link href="">01 Intro</Link>
        <a href="#bookDemo" className='link-btn-demo d-xs-none'>BOOK DEMO</a>
      </div>
      <div className='content-section'>
        <div className="button-section">
          <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
        </div>

        <div className='heading-section'>
          <div className='d-flex'>
            <h1 className='title1'>
              <span>Building People Analytics For</span>
            </h1>
          </div>
          <div className='border-style' />
        </div>

        <div className='heading-section heading-section2'>
          <div className='d-flex'>
            <h1 className='title1 bold text-gradient'>
              <span>The Modern Workplace</span>
            </h1>
          </div>
          <div className='border-style' />
        </div>

        <div className='illustration-section'>
          <p className='description'>A unique gamified assessment suite, that can measure job relevant traits in just a few minutes.</p>

          <div className="img-hero">
            <Image layout="fill" src={heroImage} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}
