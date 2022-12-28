import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

export default function AutomationSection() {
  return (
    <section className='section-style automation-section'>
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
  )
}
