import { Col, Row } from 'antd';
import Lottie from 'lottie-web';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import spiderGraph from "../../../assets/json/spider-graph.json";

export default function CompetencySection() {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#jsonSpider"),
      animationData: spiderGraph
    });
    Lottie.loadAnimation({
      container: document.querySelector("#jsonSpider2"),
      animationData: spiderGraph
    });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#cognitiveJson"),
    //     animationData: cognitiveJson
    //   });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#thinkingJson"),
    //     animationData: behaviouralJson
    //   });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#intelligenceJson"),
    //     animationData: intelligenceJson
    //   });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#behaviouralJson"),
    //     animationData: thinkingJson
    //   });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#communicationJson"),
    //     animationData: intelligenceJson
    //   });
    //   lottie.loadAnimation({
    //     container: document.querySelector("#functionalJson"),
    //     animationData: thinkingJson
    //   });
  }, [])

  const profileBoxData = [
    {
      imgUrl: "/assets/icons/traits/cognitive.svg",
      title: 'Cognitive Traits',
      description: 'How people process information & knowledge mentally',
      tagSection: [
        "Sustained Attention", "Working Memory", "Processing Speed", "Multi-tasking"
      ]
    },
    {
      imgUrl: '/assets/icons/traits/intelligence.svg',
      title: 'Intelligence Traits',
      description: 'How people isolate & navigate complex problems',
      tagSection: [
        "Fluid Intelligence", "Ambiguity", "Tolerance", "Learning Agility"
      ]
    },
    {
      imgUrl: '/assets/icons/traits/behavioural.svg',
      title: 'Behavioural Traits',
      description: 'How people control and conduct themseleves',
      tagSection: [
        "Tactical Planning", "Patience", "Decision Making", "Emotional Intelligence"
      ]
    },
    {
      imgUrl: '/assets/icons/traits/social.svg',
      title: 'Social Traits',
      description: 'How people work with others and react to social situations',
      tagSection: [
        "Cooperation", "Reciprocity", "Integrity", "People Management"
      ]
    },
    {
      imgUrl: '/assets/icons/traits/communication.svg',
      title: 'Communication Skills',
      description: 'How people understand speech and express themselves',
      tagSection: [
        "Learning", "Listening", "Reading", "Writing", "Basic Comprehension"
      ]
    },
    {
      imgUrl: '/assets/icons/traits/functional.svg',
      title: 'Functional Skills',
      description: 'How people demonstrate domain specific knowledge',
      tagSection: [
        "Coding Assessments", "Skill Assessment", "Domain Knowledge"
      ]
    }
  ]

  return (
    <section className='section-style competency-section'>
      <div className='menu-section'>
        <Link href="">04 The Competency Traits</Link>
      </div>
      <div className='content-section primary-width'>
        <Row>
          <Col xs={24} sm={17}>
            <div className='heading-section'>
              <div className='text-sec'>
                <h3 className='title1'>New age traits for modern workplace traits</h3>
                <p className='description'>We report cognitive and personality traits to predict real-world outcomes, all based on neuroscience and psychology principles.</p>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={7}>
            <div className='show-on-desktop'>
              <div className='json-frame'>
                <div className='jsonSpider' id="jsonSpider" />
              </div>
            </div>
          </Col>
        </Row>

        <div className='gradient-section'>
          <Row>
            <Col sm={24}>
              <div className='profile-boxes'>
                {profileBoxData.map((item, index) => (
                  <div key={index} className='profile-box-style'>
                    <div className="flex-sec">
                      <div className="icon-style">
                        <Image layout='fill' src={item.imgUrl} alt="" />
                      </div>
                      <div className='text-sec'>
                        <h4 className='title4'> {item.title}</h4>
                        <p className='description'> {item.description}</p>
                      </div>
                    </div>
                    <div className="tag-section">
                      {item.tagSection.map((listItems, index) => (
                        <span key={index} className='tag-item'>{listItems}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        <div className='show-on-mobile'>
          <div className='json-frame'>
            <div className='jsonSpider' id="jsonSpider2" />
          </div>
        </div>
      </div>
    </section>
  )
}
