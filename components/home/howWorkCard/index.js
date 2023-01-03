import { Button } from 'antd';
import lottie from "lottie-web";
import React, { useEffect } from 'react';

import customBenchmarks from "../../../assets/json/custom-benchmarks.json";
import detailedReports from "../../../assets/json/detailed-reports.json";
import playRemotely from "../../../assets/json/play-remotely.json";

import customBenchmarksIcon from "../../../assets/json/custom-benchmarks.gif";
import detailedReportsIcon from "../../../assets/json/detailed-reports.gif";
import playRemotelyIcon from "../../../assets/json/play-remotely.gif";


export default function HowWorkCard() {
  const mediaboxData = [
    {
      title: 'Tech Operations',
      description: 'Identify and hire the smartest tech talent by assessing them on a combination of various key role relevant traits along with their technical skills through our automated coding solution ',
      lottieID: "playRemotely",
      mobileIcon: playRemotelyIcon,
    },
    {
      title: 'Sales & Operations',
      description: 'Hire the best fit candidates while managing your huge churn through our highly customised assessment for each role, measuring across traits that really matter for high performing employees',
      lottieID: "customBenchmarks",
      mobileIcon: customBenchmarksIcon,
    },
    {
      title: 'Grey Collar Workforce',
      description: 'Conduct specialised mass hiring drives for a variety of roles in the workforce, with localised context adaptations, low-end smartphone support and regional language support',
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
      <div className='media-section'>
        {mediaboxData.map((item, index) => (
          <div className='media-box' key={index}>
            <ul className={`list-sec ${item.listStyle}`}>
              <li>Warehouse Operator</li>
              <li>Customer Service</li>
              <li>Data Entry Operators</li>
              <li>Fleet on Street</li>
              <li>Team Leads</li>
              <li>Delhivery Partners</li>
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
    </div>
  )
}
