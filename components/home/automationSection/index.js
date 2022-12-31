import { Button, Col, Row } from 'antd';
import lottie from "lottie-web";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import laptop1 from "../../../assets/automation-l1.png";
import bestfitJson from "../../../assets/json/bestfit.json";
import focusJson from "../../../assets/json/focus.json";
import hireJson from "../../../assets/json/hire.json";
import laptop2 from "../../../assets/automation-l2.png";
import fullLaptop from "../../../assets/video-img1.png";



export default function AutomationSection() {

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
      ImageSourceInterval = setInterval(() => setCount(count + 1), 3000);
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
        {/* <Link href="">02 Why Unberry</Link> */}
      </div>

      <div className="show-on-desktop w-full">
        <div className='content-section primary-width'>
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
                  <Button type="primary" href="#bookDemo" className='btn-demo btn-demo-lg'>Book Demo</Button>
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
      </div>

      <div className="show-on-mobile">
        <div className='content-section mobile-layout primary-width'>
          <div className='header-section'>
            <h2 className="title-lg text-gradient">End to end automation</h2>
          </div>
          <div className='horizontal-card'>
            {dataList.map((data, index) => (
              <div className='icon-box-sec' key={index}>
                <div className="img-box">
                  <Image
                    src={fullLaptop}
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
                <div className='jsonIcon icon1' id={data.jsonID} />
                <h4 className='title4'>{data.title}</h4>
                <p className='description'>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}