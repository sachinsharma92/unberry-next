import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'
import WorkforceCard from '../workforceCard'

export default function WhyUnberrySection() {
  return (
    <section className='section-style why-unberry'>
      <div className='menu-section'>
        <Link href="">06 Why Unberry</Link>
      </div>
      <div className='content-section'>
        <Row>
          <Col xs={24} sm={9}>
            <div className='heading-section'>
              <h3 className='title1'>We urge companies to make a real effort towards how they can see more in people.</h3>
            </div>
          </Col>
          <Col xs={24} sm={15}>
            <WorkforceCard />
          </Col>
        </Row>
      </div>
    </section>
  )
}
