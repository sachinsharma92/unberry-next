import React, { useEffect } from 'react'
import { Button, Col, Row } from 'antd'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import Link from 'next/link'
import lottie from "lottie-web";
import focusJson from "../../../assets/json/focus.json";
import hireJson from "../../../assets/json/hire.json";
import bestfitJson from "../../../assets/json/bestfit.json";
import laptop1 from "../../../assets/automation-l1.png";

export default function AutomationSection() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })

  useEffect(() => {
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
  }, [])

  return (
    <section className='section-style automation-section'>
      <div className='menu-section'>
        <Link href="">02 Why Unberry</Link>
      </div>
      {isSmallScreen ? <div className='content-section'>
        <div className='header-section'>
          <h2 className="title-lg text-gradient">End to end automation</h2>
        </div>
        <div className='boxes-style'>
          <Row>
            <Col sm={8}>
              <div className='icon-box-sec'>
                <div className='jsonIcon icon1' id="focus1" />
                <h4 className='title4'>Focus on potential</h4>
                <p className='description'>Widen your sourcing pool with an unbiased way of hiring. Increase diversity by 56%</p>
              </div>
            </Col>
            <Col sm={8}>
              <div className='icon-box-sec border-section'>
                <div className='jsonIcon icon2' id="hires2" />
                <h4 className='title4'>Avoid bad hires</h4>
                <p className='description'>Improve the efficiency in Hiring. Reduce time to hire by 45% and cost to hire by 28%</p>
              </div>
            </Col>

            <Col sm={8}>
              <div className='icon-box-sec'>
                <div className='jsonIcon icon3' id="bestfit3" />
                <h4 className='title4'>Identify your best-fit</h4>
                <p className='description'>Top Performers yields up to 67% more productivity and profit. Know the key traits required for successful teams.</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

        :

        <div className='content-section'>

          <div className='boxes-style'>
            <Row>
              <Col sm={11}>
                <div className='header-section'>
                  <h2 className="title-lg">End to end <br /> automation</h2>
                </div>
                <div className='icon-box-sec'>
                  <div className='jsonIcon icon1' id="focus1" />
                  <h4 className='title4'>Real Time Reporting</h4>
                  <p className='description'>Evidence suggests that nearly 50% applicants embellish their CVs, reducing the utility of résumés as initial screening tools.</p>

                  <div className="title-faded">Candidate Communication</div>
                  <div className="title-faded">Proctoring</div>
                  <Button type="primary" className='btn-demo btn-demo-lg'>Book Demo</Button>
                </div>
              </Col>
              <Col sm={13}>
                <div className="asset-section">
                  <div className='img-box'>
                    <Image src={laptop1} layout="fill" alt='' />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>


      }
    </section>
  )
}
