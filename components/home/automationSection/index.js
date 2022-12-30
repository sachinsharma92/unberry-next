import React, { useEffect, useState } from 'react'
import { Button, Col, Collapse, Row } from 'antd'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image';
import Link from 'next/link'
import lottie from "lottie-web";

import focusJson from "../../../assets/json/focus.json";
import hireJson from "../../../assets/json/hire.json";
import bestfitJson from "../../../assets/json/bestfit.json";
import laptop1 from "../../../assets/automation-l1.png";
import laptop2 from "../../../assets/video-img1.png";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function AutomationSection() {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' })
  const [count, setCount] = useState(5);
  const [activeTitle, setActiveTitle] = useState(1)

  const dataList = [
    {
      jsonID: "focus1",
      title: "Real Time Reporting",
      description: "Evidence suggests that nearly 50% applicants embellish their CVs, reducing the utility of résumés as initial screening tools.",
      imgUrl: laptop1,
      id: 1,
    },
    {
      jsonID: "hires2",
      title: "Candidate Communication",
      description: "With the help of our tech-savvy team, we produce/create outlines that are specifically tailored to your business's demands.",
      id: 2,
      imgUrl: laptop2,
    },
    {
      jsonID: "bestfit3",
      title: "Proctoring",
      description: "In this phase, we get the tech work started and create the application in accordance with the earlier design outline and laid-out specifications.",
      id: 3,
      imgUrl: laptop1,
    },
  ];

  useEffect(() => {
    let ImageSourceInterval;
    if (count < dataList.length) {
      ImageSourceInterval = setInterval(() => setCount(count + 1), 2500);
    }
    if (count >= dataList.length) {
      setCount(0);
    }
    setImageSource(dataList[count]?.imgUrl);
    setActiveTitle(dataList[count]?.id)
    return () => clearInterval(ImageSourceInterval);
  }, [count]);

  const [imageSource, setImageSource] = useState(dataList[0].imgUrl);

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
                <ul className='icon-list-section'>
                  {dataList.map((data, index) => (
                    <li
                      key={index}
                      className={`list ${data.id === activeTitle ? 'active-style' : ''}`}
                      id={`item${index + 1}`}
                    >
                      <div className='icon-box-sec'>
                        <div className='jsonIcon icon1' id={data.jsonID} />
                        <div className={`title4`}>{data.title}</div>
                        <p className="description">{data.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="button-section">
                  <Button type="primary" className='btn-demo btn-demo-lg'>Book Demo</Button>
                </div>
              </Col>
              <Col sm={13}>
                <div className="asset-section">
                  <div className='img-box' id="imageSection">
                    {imageSource && (
                      <div>
                        <Image
                          key={imageSource}
                          src={imageSource}
                          alt="Picture of the author"
                          layout="fill"
                        />
                      </div>
                    )}
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
