import React, { useEffect } from 'react'
import { Col, Row } from 'antd'
import lottie from "lottie-web";
import Link from 'next/link'
import spiderGraph from "../../../assets/json/spider-graph.json";
import cognitiveJson from "../../../assets/json/cognitive.json";
import behaviouralJson from "../../../assets/json/behavioural.json";
import intelligenceJson from "../../../assets/json/intelligence.json";
import thinkingJson from "../../../assets/json/thinking.json";


export default function CompetencySection() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#jsonSpider"),
      animationData: spiderGraph
    });
    lottie.loadAnimation({
      container: document.querySelector("#cognitiveJson"),
      animationData: cognitiveJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#thinkingJson"),
      animationData: behaviouralJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#intelligenceJson"),
      animationData: intelligenceJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#behaviouralJson"),
      animationData: thinkingJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#communicationJson"),
      animationData: intelligenceJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#functionalJson"),
      animationData: thinkingJson
    });
  }, [])

  const profileBoxData = [
    {
      jsonID: 'cognitiveJson',
      title: 'Cognitive Traits',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Sustained Attention", "Working Memory", "Processing Speed", "Multi-tasking"
      ]
    },
    {
      jsonID: 'thinkingJson',
      title: 'Intelligence Traits',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Fluid Intelligence", "Ambiguity", "Tolerance", "Learning Agility"
      ]
    },
    {
      jsonID: 'intelligenceJson',
      title: 'Behavioural Traits',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Tactical Planning", "Patience", "Decision Making", "Emotional Intelligence"
      ]
    },
    {
      jsonID: 'behaviouralJson',
      title: 'Social Traits',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Cooperation", "Reciprocity", "Integrity", "People Management"
      ]
    },
    {
      jsonID: 'communicationJson',
      title: 'Communication Skills',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Learning", "Listening", "Reading", "Writing", "Basic Comprehension"
      ]
    },
    {
      jsonID: 'functionalJson',
      title: 'Functional Skills',
      description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ',
      tagSection: [
        "Coding Assessments", "Patience", "Functional Skill Assessments"
      ]
    }
  ]

  return (
    <section className='section-style competency-section'>
      <div className='menu-section'>
        <Link href="">04 The Competency Traits</Link>
      </div>
      <div className='content-section'>
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
            <div className='video-image'>
              <div className='jsonSpider' id="jsonSpider" />
            </div>
            <div className='boxes-description hide-on-desktop'>
              <p className='description'>We report performance on key workplace traits that predict job-fit and potential, backed by data and science.</p>
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
                      <div className='competency-json' id={item.jsonID} />
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
      </div>
    </section>
  )
}
