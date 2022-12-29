import React, { useEffect } from 'react';
import { Button, Carousel } from 'antd';
import lottie from "lottie-web";

import playRemotely from "../../../assets/json/play-remotely.json";
import customBenchmarks from "../../../assets/json/custom-benchmarks.json";
import detailedReports from "../../../assets/json/detailed-reports.json";

import playRemotelyIcon from "../../../assets/json/play-remotely.gif";
import customBenchmarksIcon from "../../../assets/json/custom-benchmarks.gif";
import detailedReportsIcon from "../../../assets/json/detailed-reports.gif";
import Image from 'next/image';


export default function HowWorkCard() {
  const mediaboxData = [
    {
      title: 'Tech Operations',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      lottieID: "playRemotely",
      mobileIcon: playRemotelyIcon,
    },
    {
      title: 'Sales & Operations',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      lottieID: "customBenchmarks",
      mobileIcon: customBenchmarksIcon,
      listStyle: 'focusStyle'
    },
    {
      title: 'Grey Collar Workforce',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      lottieID: "detailedReports",
      mobileIcon: detailedReportsIcon,
    }
  ]
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#playRemotely"),
      animationData: playRemotely
    });
    lottie.loadAnimation({
      container: document.querySelector("#customBenchmarks"),
      animationData: customBenchmarks
    });
    lottie.loadAnimation({
      container: document.querySelector("#detailedReports"),
      animationData: detailedReports
    });

  }, []);
  return (
    <div className='how-work-card'>
      <div className='media-section d-xs-none'>
        {mediaboxData.map((item, index) => (
          <div className='media-box' key={index}>
            <ul className={`list-sec ${item.listStyle}`}>
              <li>Privacy Engineer</li>
              <li>Research Scientist</li>
              <li>On-ground Sales Forse</li>
              <li>Privacy Engineer</li>
              <li>Research Scientist</li>
            </ul>
            <div className="content-box">
              <div className='title'>
                {item.title}
              </div>
              <div className='description'>
                {item.description}
              </div>
              <Button type="primary" className='btn-demo btn-demo-lg'>Book Demo</Button>
            </div>
          </div>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel autoplay>
          {mediaboxData.map((item, index) => (
            <div className='media-box' key={index}>
              <div className='number'>
                {item.number}
              </div>
              <div className='title'>
                {item.title}
              </div>
              <div className='description'>
                {item.description}
              </div>
              <div className='img-sec'>
                <Image src={item.mobileIcon} className='jsonIcon icon-style' alt="" id={item.lottieID} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
