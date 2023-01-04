import { Button, Col, Row } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import videoImageMobile from "../../../assets/video-img1.png";
import videoImage1 from "../../../assets/blank-laptop.png";

import productImage1 from "../../../assets/icons/the-product/game.svg"
import productImage2 from "../../../assets/icons/the-product/strategy.svg"
import productImage3 from "../../../assets/icons/the-product/cube.svg"
import productImage4 from "../../../assets/icons/the-product/chat.svg"
import productImage5 from "../../../assets/icons/the-product/code.svg"
import productImage6 from "../../../assets/icons/the-product/git.svg"
import Image from 'next/image';

export default function AssessmentSection() {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1025px)' })

  const producrCard = [
    {
      imgUrl: productImage1,
      title: 'Cognitive & Skill-based Games',
      description: 'Dynamic environments modulating multiple pathways, resulting in much more authentic responses'
    },
    {
      imgUrl: productImage2,
      title: 'Story-format Immersive Exercises',
      description: 'Complex real life scenarios requiring application of critical thinking, empathy & decision making skills'
    },
    {
      imgUrl: productImage3,
      title: 'Interactive Workplace Simulations',
      description: 'Generates exponentially more data than any test and builds a detailed, holistic soft skill map'
    },
    {
      imgUrl: productImage4,
      title: 'Instant AI Communication Check',
      description: 'Unbiased, comprehensive, engaging assessment for comprehension, listening skills and spoken communication',
    },
    {
      imgUrl: productImage5,
      title: 'Automated Coding Assessments',
      description: 'Real-time coding environments to test the coding & functional skills of candidates'
    },
    {
      imgUrl: productImage6,
      title: 'Functional Domain Knowledge',
      description: 'Testing domain knowledge or functional skills across IT, Marketing, Sales, CS, Basic Digital Skills and more'
    }
  ]

  // useEffect(() => {
  //   if (isBigScreen) {
  //     const leftController = new ScrollMagic.Controller();
  //     new ScrollMagic.Scene({
  //       duration: 1327,
  //       triggerElement: ".sticky-style",
  //       triggerHook: 0,
  //       offset: -50
  //     })
  //       .setPin(".sticky-style")
  //       .addTo(leftController)
  //   }
  // }, []);

  return (
    <section className='section-style assessment-section'>
      <div className='menu-section'>
        <Link href="">03 The product</Link>
      </div>
      <div className='content-section primary-width'>
        <div className='sec-first'>
          <Row className='h-100'>
            <Col xs={24} sm={12}>
              <div className="sticky-style">
                <div className='heading-section'>
                  <h3 className='title1'>The Assessment Suite</h3>
                  <p className="description">A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.</p>
                  <div className="button-section">
                    <Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
                  </div>
                </div>
                <div className='video-image'>
                  <video muted autoPlay loop playsInline width="100%" height="100%">
                    <source src="../../../static/video/unberry-mix.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="laptop-frame">
                    <Image src={videoImage1} className='img-full' alt="" />
                  </div>
                </div>

                <div className="mobile-frame">
                  <div className="mobile-laptop">
                    <Image src={videoImageMobile} className='img-full' alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <Link href="">
                <a className="card-grid">
                  {producrCard.map((data, index) => (
                    <div key={index} className={`${data.focusCard} p-card`}>
                      <div className="icon-sec">
                        <Image src={data.imgUrl} layout="fill" alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title"> {data.title}</h4>
                        <div className='hover-action'>
                          <p className="description">{data.description}</p>
                          <div className="explore">Explore</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </a>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}
