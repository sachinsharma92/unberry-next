import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function CompetencySection() {
  return (
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
  )
}
