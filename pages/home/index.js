/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'antd';
import LayoutPrimary from '../../common/layoutPrimary';
import lottie from "lottie-web";
import Link from 'next/link';
import { useRouter } from 'next/router';

import HowWorkCard from '../../components/home/howWork';
import WorkforceCard from '../../components/home/workforceCard';
import BlogCard from '../../components/home/blogCard';
import { Mixpanel } from '../../services/mixpanel';
import ThankModal from '../../components/thankModal';
import axios from "axios";
import DemoForm from '../../components/demoForm';

// Images
import logoTheme from "../../assets/logo-brown.svg"
import potentialImage from "../../assets/icons/potential.svg";
import videoImage1 from "../../assets/video-img1.png";
import heroImage from "../../assets/illustration/hero-img.svg";

import wIcon1 from "../../assets/icons/precise-signal.svg"
import wIcon2 from "../../assets/icons/fast-efficient.svg"
import wIcon3 from "../../assets/icons/w-3.svg"
import wIcon4 from "../../assets/icons/long-lasting.svg"

import productImage1 from "../../assets/icons/the-product/game.svg"
import productImage2 from "../../assets/icons/the-product/strategy.svg"
import productImage3 from "../../assets/icons/the-product/cube.svg"
import productImage4 from "../../assets/icons/the-product/chat.svg"
import productImage5 from "../../assets/icons/the-product/code.svg"
import productImage6 from "../../assets/icons/the-product/git.svg"

import cognitiveJson from "../../assets/json/cognitive.json";
import behaviouralJson from "../../assets/json/behavioural.json";
import intelligenceJson from "../../assets/json/intelligence.json";
import thinkingJson from "../../assets/json/thinking.json";
import gameCircles from "../../assets/json/game-circles.json";
import bannerJson from "../../assets/json/banner.json";
import focusJson from "../../assets/json/focus.json";
import hireJson from "../../assets/json/hire.json";
import bestfitJson from "../../assets/json/bestfit.json";
import spiderGraph from "../../assets/json/spider-graph.json";
import dynamicJson from "../../assets/json/dynamic.json";
import beyondJson from "../../assets/json/beyond.json";
import exhaustiveJson from "../../assets/json/exhaustive.json";
import psychology from "../../assets/json/psychology.json";
import Image from 'next/image';
import SeoHead from '../../components/seoHead';

// Videos here


export default function HomeScreen() {

  const [blogs, setBlogs] = useState([]);

  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const { asPath } = useRouter();

  useEffect(() => {
    document.title = 'Unberry | Transforming the future of hiring and developing talent!!!'
    Mixpanel.track('Unberry Home Page Opened, Path: /')

    lottie.loadAnimation({
      container: document.querySelector("#lottie-banner"),
      animationData: bannerJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#focus1"),
      animationData: focusJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#hires2"),
      animationData: hireJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#bestfit3"),
      animationData: bestfitJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#bestfit4"),
      animationData: bestfitJson
    });

    lottie.loadAnimation({
      container: document.querySelector("#dynamic"),
      animationData: dynamicJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#beyond"),
      animationData: beyondJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#exhaustive"),
      animationData: exhaustiveJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#psychology"),
      animationData: psychology
    });
    lottie.loadAnimation({
      container: document.querySelector("#jsonSpider"),
      animationData: spiderGraph
    });

    lottie.loadAnimation({
      container: document.querySelector("#cognitiveJson"),
      animationData: cognitiveJson
    });

    lottie.loadAnimation({
      container: document.querySelector("#thinkingJson"),
      animationData: behaviouralJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#intelligenceJson"),
      animationData: intelligenceJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#behaviouralJson"),
      animationData: thinkingJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#gameCircles"),
      animationData: gameCircles
    });
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


  const producrCard = [
    {
      imgUrl: productImage1,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      imgUrl: productImage2,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      imgUrl: productImage3,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      imgUrl: productImage4,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      imgUrl: productImage5,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    },
    {
      imgUrl: productImage6,
      title: 'Cognitive & Skill-based Games',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
    }
  ]

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent!!!"
        title="Unberry - Transforming the future of hiring and developing talent!!!"
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

          {/* ======= Section Bury Biases ======= */}
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

          {/* ======= Section Why Unberry ======= */}
          <section className='section-style why-unberry'>
            <div className='menu-section'>
              <Link href="">02 Why Unberry</Link>
            </div>
            <div className='content-section-why'>
              <div className='header-section'>
                <h2 className="title-lg text-gradient">We urge companies to make a real effort towards how they can see more in people.</h2>
              </div>
              <div className='boxes-style'>
                <div className='icon-box-sec'>
                  {/* <div className='jsonIcon icon1' id="focus1" /> */}
                  <div className='img-box'>
                    <Image src={wIcon1} alt="" layout="fill" />
                  </div>
                  <p className='description'><span>Churn in human capital</span> has never been more. Skill sets are becoming obsolete very fast.</p>
                </div>
                <div className='icon-box-sec border-section'>
                  {/* <div className='jsonIcon icon2' id="hires2" /> */}
                  <div className='img-box'>
                    <Image src={wIcon2} alt="" layout="fill" />
                  </div>
                  <p className='description'><span>Salaries have spiralled out</span> of control. Conventional hiring is becoming unsustainable.</p>
                </div>

                <div className='icon-box-sec'>
                  {/* <div className='jsonIcon icon3' id="bestfit3" /> */}
                  <div className='img-box'>
                    <Image src={wIcon3} alt="" layout="fill" />
                  </div>
                  <p className='description'>Work 4.0 is going to be far more <span>diverse & distributed.</span> Remote hiring is the new normal.</p>
                </div>

                <div className='icon-box-sec'>
                  {/* <div className='jsonIcon icon3' id="bestfit4" /> */}
                  <div className='img-box'>
                    <Image src={wIcon4} alt="" layout="fill" />
                  </div>
                  <p className='description'>Most admit to <span>bad hiring decisions.</span> Reliable people insights are the key to hiring the best.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ======= Section Product  ======= */}
          <section className='section-style product-section'>
            <div className='menu-section'>
              <Link href="">03 The product</Link>
            </div>
            <div className='content-section'>
              <div className='sec-first'>
                <Row className='h-100'>
                  <Col xs={24} sm={12}>
                    <div className='heading-section'>
                      <h3 className='title1'>The Assessment Suite</h3>
                      <p className="description">A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.</p>
                      <div className="button-section">
                        <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
                      </div>
                    </div>
                    <div className='video-image'>
                      <video muted autoPlay loop playsInline width="100%" height="100%">
                        <source src="../../static/video/unberry-mix.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <Image src={videoImage1} className='img-full' alt="" />
                    </div>
                  </Col>
                  <Col xs={24} sm={12}>
                    <div className="card-grid">
                      {producrCard.map((data, index) => (
                        <div key={index} className="p-card">
                          <div className="icon-sec">
                            <Image src={data.imgUrl} layout="fill" alt="" />
                          </div>
                          <div className="content">
                            <h4 className="title"> {data.title}</h4>
                            <p className="description">{data.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>

          {/* ======= Section Competency ======= */}
          <section className='section-style competency-section'>
            <div className='menu-section'>
              <Link href="">04 The Competency Traits</Link>
            </div>
            <div className='content-section'>
              <Row>
                <Col xs={24} sm={17}>
                  <div className='heading-section'>
                    <div className='text-sec'>
                      <p className='description'>The Competency Traits</p>
                      <h3 className='title1'>New age traits for <br /> modern workplaces</h3>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={7}>
                  <div className='video-image'>
                    <div className='jsonSpider' id="jsonSpider" />
                  </div>

                  <div className='boxes-description hide-on-desktop'>
                    <p className='description'>We report performance on key workplace traits that predict job-fit and potential, backed by data and science.</p>
                  </div>
                </Col>
              </Row>

              <div className='gradient-section'>
                <Row>
                  <Col sm={17}>
                    <div className='profile-boxes'>
                      <div className='profile-box-style'>
                        <div className='competency-json' id="cognitiveJson" />
                        <div className='text-sec'>
                          <h4 className='title4'>Cognitive Profile</h4>
                          <p className='description'>How they process information & knowledge mentally</p>
                        </div>
                      </div>
                      <div className='profile-box-style'>
                        <div className='competency-json' id="thinkingJson" />
                        <div className='text-sec'>
                          <h4 className='title4'>Thinking Profile</h4>
                          <p className='description'>How they learn concepts & organise their thoughts </p>
                        </div>
                      </div>
                      <div className='profile-box-style'>
                        <div className='competency-json' id="intelligenceJson" />
                        <div className='text-sec'>
                          <h4 className='title4'>Intelligence Profile</h4>
                          <p className='description'>How they isolate & navigate complex problems</p>
                        </div>
                      </div>
                      <div className='profile-box-style'>
                        <div className='competency-json' id="behaviouralJson" />
                        <div className='text-sec'>
                          <h4 className='title4'>Behavioural Profile</h4>
                          <p className='description'>How they control and conduct themselves </p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={7}>
                    <div className='boxes-description hide-on-mobile'>
                      <p className='description'>We report performance on key workplace traits that predict job-fit and potential, backed by data and science.</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </section>

          {/* ======= Section How works ======= */}
          <section className='section-style how-works'>
            <div className='menu-section'>
              <Link href="">05 How it works</Link>
            </div>

            <div className='content-section'>
              <div className='heading-section'>
                <h3 className='title1 text-gradient'>“Here&rsquo;s how Unberry works and it&rsquo;s simply a game changer”</h3>
              </div>

              <HowWorkCard />
            </div>
          </section>

          {/* ======= Section Your Workforce ======= */}
          <section className='section-style your-workforce'>
            <div className='menu-section'>
              <Link href="">06 Why Unberry</Link>
            </div>
            <div className='content-section'>
              <Row>
                <Col xs={24} sm={7}>
                  <div className='heading-section'>
                    <div className='img-icon'>
                      <Image src={potentialImage} alt="" />
                    </div>
                    <h3 className='title1 text-gradient'>Find the <br /> Perfect <br /> Talent for <br /> Your <br /> Workforce</h3>
                  </div>
                </Col>
                <Col xs={24} sm={17}>
                  <WorkforceCard />
                </Col>
              </Row>
            </div>
          </section>

          {/* ======= Section Blog ======= */}
          <section className='section-style blog-section'>
            <div className='menu-section'>
              <Link href="">07 Blogs</Link>
            </div>

            <div className='content-section'>
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
