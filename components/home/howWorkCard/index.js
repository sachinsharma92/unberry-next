import { Button } from 'antd';
import lottie from "lottie-web";
import React, { useEffect } from 'react';

import customBenchmarks from "../../../assets/json/custom-benchmarks.json";
import detailedReports from "../../../assets/json/detailed-reports.json";
import playRemotely from "../../../assets/json/play-remotely.json";

import customBenchmarksIcon from "../../../assets/json/custom-benchmarks.gif";
import detailedReportsIcon from "../../../assets/json/detailed-reports.gif";
import playRemotelyIcon from "../../../assets/json/play-remotely.gif";
import gsap from 'gsap';


export default function HowWorkCard() {
  const mediaboxData = [
    {
      title: 'Tech Operations',
      description: 'Identify and hire the smartest tech talent by assessing them on a combination of various key role relevant traits along with their technical skills through our automated coding solution ',
      lottieID: "playRemotely",
      mobileIcon: playRemotelyIcon,
      listDataItems: [
        "Software Developers",
        "Campus Hiring",
        "Project Managers",
        "QA Engineers",
        "Technical Lead",
        "Product Managers",

        // Repeat
        "Software Developers",
        "Campus Hiring",
        "Project Managers",
        "QA Engineers",
        "Technical Lead",
        "Product Managers",

        // Repeat
        "Software Developers",
        "Campus Hiring",
        "Project Managers",
        "QA Engineers",
        "Technical Lead",
        "Product Managers",
      ]
    },
    {
      title: 'Sales & Operations',
      description: 'Hire the best fit candidates while managing your huge churn through our highly customised assessment for each role, measuring across traits that really matter for high performing employees',
      lottieID: "customBenchmarks",
      mobileIcon: customBenchmarksIcon,
      listDataItems: [
        "Business Development",
        "Inside Sales",
        "Account Manager",
        "Sales Manager",
        "Customer Success",
        "Account Executive",

        // Repeat
        "Business Development",
        "Inside Sales",
        "Account Manager",
        "Sales Manager",
        "Customer Success",
        "Account Executive",

        // Repeat
        "Business Development",
        "Inside Sales",
        "Account Manager",
        "Sales Manager",
        "Customer Success",
        "Account Executive"
      ]
    },
    {
      title: 'Grey Collar Workforce',
      description: 'Conduct specialised mass hiring drives for a variety of roles in the workforce, with localised context adaptations, low-end smartphone support and regional language support',
      lottieID: "detailedReports",
      mobileIcon: detailedReportsIcon,
      listDataItems: [
        "Warehouse Operator",
        "Customer Service",
        "Fleet on Street",
        "Team Leads",
        "Delhivery Partners",

        // Repeat
        "Warehouse Operator",
        "Customer Service",
        "Fleet on Street",
        "Team Leads",
        "Delhivery Partners",

        // Repeat
        "Warehouse Operator",
        "Customer Service",
        "Fleet on Street",
        "Team Leads",
        "Delhivery Partners",

        // Repeat
        "Warehouse Operator",
        "Customer Service",
        "Fleet on Street",
        "Team Leads",
        "Delhivery Partners",
      ]
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
            <div className={`list-sec ${item.listStyle}`}>
              <div className='list-items'>
                {item.listDataItems.map((listData) => (
                  <div key={index} className='list-item box'>{listData}</div>
                ))}
              </div>
            </div>
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
