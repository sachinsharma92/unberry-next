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
import Head from 'next/head';

// Videos here


export default function HomeScreen() {

  const [blogs, setBlogs] = useState([]);

  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const { asPath } = useRouter();

  useEffect(() => {
    document.title = 'Unberry'
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

  return (
    <div className='home-section-style'>
      <Head>
        <title>Unberry - Transforming the future of hiring and developing talent.</title>
        <meta name="title" content="Unberry - Transforming the future of hiring and developing talent." />
        <meta name="description" content="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent" />
      </Head>
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
            <Link href="">Intro 01</Link>
            <a href="#bookDemo" className='link-btn-demo d-xs-none'>BOOK DEMO</a>
          </div>
          <div className='content-section'>

            <div className='heading-section'>
              <div className='d-flex'>
                <h1 className='title1 text-gradient'>
                  <span>Bury Biases</span>
                </h1>
                <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
              </div>
            </div>

            <div className='heading-section'>
              <div className='d-flex'>
                <h1 className='title1 bold text-gradient'>
                  <span>Unbury</span>
                  <div className='border-style' />
                  <span>Potential</span>
                </h1>
              </div>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining game technology, data science & neuroscience to disrupt the way companies recruit, retain and develop talent.</p>
              <div className='banner-lottie' id="lottie-banner" />
            </div>
          </div>
        </section>

        {/* ======= Section Why Unberry ======= */}
        <section className='section-style why-unberry'>
          <div className='menu-section'>
            <Link href="">02 Why Unberry</Link>
          </div>
          <div className='content-section'>
            <div className='header-section'>
              <h2 className="title-lg text-gradient">“The hiring landscape is rapidly evolving.”</h2>
            </div>
            <div className='boxes-style'>
              <Row>
                <Col sm={8}>
                  <div className='icon-box-sec'>
                    {/* <img src={potentialImage} alt="" /> */}
                    <div className='jsonIcon icon1' id="focus1" />
                    <h4 className='title4'>Focus on potential</h4>
                    <p className='description'>Widen your sourcing pool with an unbiased way of hiring. Increase diversity by 56%</p>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className='icon-box-sec border-section'>
                    {/* <img src={hiresImage} alt="" /> */}
                    <div className='jsonIcon icon2' id="hires2" />
                    <h4 className='title4'>Avoid bad hires</h4>
                    <p className='description'>Improve the efficiency in Hiring. Reduce time to hire by 45% and cost to hire by 28%</p>
                  </div>
                </Col>

                <Col sm={8}>
                  <div className='icon-box-sec'>
                    {/* <img src={bestfitImage} alt="" /> */}
                    <div className='jsonIcon icon3' id="bestfit3" />
                    <h4 className='title4'>Identify your best-fit</h4>
                    <p className='description'>Top Performers yields up to 67% more productivity and profit. Know the key traits required for successful teams.</p>
                  </div>
                </Col>
              </Row>
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
                <Col xs={24} sm={17}>
                  <div className='heading-section'>
                    <div className='description'>Meet Unberry</div>
                    <h3 className='title1'>Game based assessments for high performing teams</h3>
                  </div>
                </Col>
                <Col xs={24} sm={7}>
                  <div className='game-json-sec'>
                    <div className='jsonIcon gameJson' id="gameCircles" />
                  </div>
                </Col>
              </Row>
            </div>

            <Row>
              <Col sm={17}>
                <div className='video-image'>
                  <video muted autoPlay loop playsInline width="100%" height="100%">
                    <source src="../../static/video/unberry-mix.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Image src={videoImage1} className='img-full' alt="" />
                </div>
              </Col>
              <Col sm={7}>
                <div className="img-list">
                  <div className='list'>
                    <div className='img-icon' id="dynamic" />
                    <p className='description'>Dynamic Scenarios & Authentic responses</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="beyond" />
                    <p className='description'>Beyond consciously self reported data</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="exhaustive" />
                    <p className='description'>Exhaustive & Extensive Data Points</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="psychology" />
                    <p className='description'>Based on validated principles of psychology</p>
                  </div>
                </div>
              </Col>
            </Row>
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
  )
}
