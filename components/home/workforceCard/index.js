import React, { useEffect } from 'react';
import lottie from "lottie-web";

import preciseSignal from "../../../assets/json/small/precise-signal.json";
import fastEfficient from "../../../assets/json/small/fast-efficient.json";
import hiddenPools from "../../../assets/json/small/hidden-pools.json";
import longImpact from "../../../assets/json/small/long-impact.json";
import Image from 'next/image';


export default function WorkforceCard() {

  const textBoxData = [
    {
      lottieID: "preciseSignal",
      mobileIcon: "/assets/icons/why-unberry/precise-signal.svg",
      description: <><span>Churn in human capital</span> has never been more. Skill sets are becoming obsolete very fast.</>,
    },
    {
      lottieID: "fastEfficient",
      mobileIcon: "/assets/icons/why-unberry/fast-efficient.svg",
      description: <><span>Salaries have spiralled out</span> of control. Conventional hiring is becoming unsustainable.</>,
      imgStyle: 'icon-style',
      iconStyle: 'icon-scale'
    },
    {
      lottieID: "hiddenPools",
      mobileIcon: "/assets/icons/why-unberry/hidden-pools.svg",
      description: <>Work 4.0 is going to be far more <span>diverse & distributed.</span> Remote hiring is the new normal.</>,
    },
    {
      lottieID: "longImpact",
      mobileIcon: "/assets/icons/why-unberry/bad-hiring.svg",
      description: <>Most admit to <span>bad hiring decisions.</span> Reliable people insights are the key to hiring the best.</>,
    }
  ]

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#preciseSignal"),
      animationData: preciseSignal
    });
    lottie.loadAnimation({
      container: document.querySelector("#fastEfficient"),
      animationData: fastEfficient
    });
    lottie.loadAnimation({
      container: document.querySelector("#hiddenPools"),
      animationData: hiddenPools
    });
    lottie.loadAnimation({
      container: document.querySelector("#longImpact"),
      animationData: longImpact
    });

  }, []);

  return (
    <div className='workforce-card'>
      <div className='grid-layout d-xs-none'>
        {textBoxData.map((item, index) => (
          <div className='box-style' key={index}>
            <div className='img-box'>
              <div className='jsonIcon icon-style' id={item.lottieID} />
            </div>
            <div className='description'>
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <div className='horizontal-scroll'>
          {textBoxData.map((item, index) => (
            <div className='box-style' key={index}>
              <div className='img-box'>
                <Image src={item.mobileIcon} layout="fill" className={`icon-style ${item.iconStyle}`} alt="" />
              </div>
              <div className='description'>
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
