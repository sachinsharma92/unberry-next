import { Button, Col, Image, Row } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import videoImage1 from "../../../assets/video-img1.png";

import productImage1 from "../../../assets/icons/the-product/game.svg"
import productImage2 from "../../../assets/icons/the-product/strategy.svg"
import productImage3 from "../../../assets/icons/the-product/cube.svg"
import productImage4 from "../../../assets/icons/the-product/chat.svg"
import productImage5 from "../../../assets/icons/the-product/code.svg"
import productImage6 from "../../../assets/icons/the-product/git.svg"

export default function AssessmentSection() {


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

  useEffect(() => {
    const leftController = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      duration: '50%',
      triggerElement: ".sticky-style",
      triggerHook: 0,
    })
      .setPin(".sticky-style")
      .addTo(leftController)
      .addIndicators({ name: "pin scene", colorEnd: "#000" })
  }, []);

  return (
    <section className='section-style product-section'>
      <div className='menu-section'>
        <Link href="">03 The product</Link>
      </div>
      <div className='content-section'>
        <div className='sec-first'>
          <Row className='h-100'>
            <Col xs={24} sm={12}>
              <div className="sticky-style">
                <div className='heading-section'>
                  <h3 className='title1'>The Assessment Suite</h3>
                  <p className="description">A suite of multi-dimensional, psychometrically-rigorous, gamified assessments that demand exploration and hands-on problem solving from the players to progress.</p>
                  <div className="button-section">
                    <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
                  </div>
                </div>
                <div className='video-image'>
                  <video muted autoPlay loop playsInline width="100%" height="100%">
                    <source src="../../../static/video/unberry-mix.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <Image src={videoImage1} className='img-full' alt="" />
                </div>
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
  )
}
