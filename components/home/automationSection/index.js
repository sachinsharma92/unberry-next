import { Button, Col, Row } from 'antd';
import lottie from "lottie-web";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import bestfitJson from "../../../assets/json/bestfit.json";
import focusJson from "../../../assets/json/focus.json";
import hireJson from "../../../assets/json/hire.json";

export default function AutomationSection() {
  const [count, setCount] = useState(3);
  const [activeTitle, setActiveTitle] = useState(1)

  const dataList = [
    {
      jsonID: "focus1",
      title: "Real Time Reporting",
      description: "View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step",
      imgUrl: "/assets/automation/real-time-reporting.png",
      id: 1,
    },
    {
      jsonID: "hires2",
      title: "Candidate Communication",
      description: "Automated communication with candidates to engage with your top talent with automated reminders and notifications",
      id: 2,
      imgUrl: "/assets/automation/candidate-communication.png",
    },
    {
      jsonID: "bestfit3",
      title: "Proctoring",
      description: "Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage",
      id: 3,
      imgUrl: "/assets/automation/proctoring.png",
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

  const dataListMobile = [
    {
      jsonMobileId: "focusM1",
      title: "Real Time Reporting",
      description: "View detailed  reports in real time as soon as the candidate finishes, and have complete visibility and control of each step",
      imgUrl: "/assets/automation/real-time-reporting-sm.png",
      id: 1,
    },
    {
      jsonMobileId: "hiresM2",
      title: "Candidate Communication",
      description: "Automated communication with candidates to engage with your top talent with automated reminders and notifications",
      id: 2,
      imgUrl: "/assets/automation/candidate-communication.png",
    },
    {
      jsonMobileId: "bestfitM3",
      title: "Proctoring",
      description: "Prevent cheating and unethical practices with our advanced remote and live proctoring, flagging suspicious usage",
      id: 3,
      imgUrl: "/assets/automation/proctoring-sm.png",
    },
  ];

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#focusM1"),
      animationData: focusJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#hiresM2"),
      animationData: hireJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#bestfitM3"),
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
                      <Image
                        key={imageSource}
                        src={imageSource}
                        alt={imageSource}
                        // blurDataURL={imageSource}
                        // placeholder="blur"
                        quality={70}
                        priority
                        layout="fill"
                        width={500}
                        height={500}
                        className={count === 1 ? "img-fit" : "img-fit-no"}
                      />
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
            {dataListMobile.map((data, index) => (
              <div className='icon-box-sec' key={index}>
                <div className="img-box">
                  <Image
                    src={data.imgUrl}
                    alt="Picture of the author"
                    layout="fill"
                  />
                </div>
                <div className='jsonIcon icon1' id={data.jsonMobileId} />
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
