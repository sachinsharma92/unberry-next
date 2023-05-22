/* eslint-disable @next/next/no-img-element */
import React from 'react';
import SeoHead from '../../components/seoHead';
import Image from 'next/image';
import Link from 'next/link';
import logoTheme from "../../assets/logo-brown.svg";
import { Footer } from 'antd/lib/layout/layout';
import logoFooter from "../../assets/logo-brown.svg";

export default function PrivacyPolicyScreen() {

  return (
    <>
      <SeoHead
        mainTitle="Unberry - Transforming the future of hiring and developing talent."
        title="Unberry - Transforming the future of hiring and developing talent."
        description="Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and develop talent"
      />

      <div className='privacy-section-style'>
        <div className="header">
          <div className='max-wrap'>
            <Link href="/">
              <a className='logo-white'>
                <Image src={logoTheme} alt="logo" width="200" />
              </a>
            </Link>

            <h2 className="title2">Privacy Policy</h2>
            <p className="description">Last Updated April 2023</p>
          </div>
        </div>

        <div className="content max-wrap">
          <p className="description">For Unberry and its affiliates <span className='bold'>(“Unberry”)</span>, protecting your personal information <span className='bold'>(“Personal Information” or “Personal Data” as defined below)</span> is our priority.</p>
          <p className="description">
            We have prepared this privacy policy <span className='bold'>(“Privacy Policy”)</span> to describe to you (“you” or the “candidate”) our practices regarding the Personal Information we collect from you as candidate (of our website, located at Unberry.com, our mobile application <span className='bold'>(“Application(s)”)),</span> and our widgets (collectively, the <span className='bold'>“Site”)</span> and all online services of Unberry and its affiliates <span className='bold'>(“Services”)</span>.
          </p>
          <p className="description">
            For the purposes of this privacy policy, unless otherwise noted, all references to Unberry include Unberry.com, Hide Unhide Technologies Private Limited and its affiliates.
          </p>
          <p className="description">
            We respect each individual’s right to personal privacy. We will collect and use information we receive directly from you through our website only in the ways disclosed in this privacy policy. Information provided to Unberry by our customers is collected by those customers under their own privacy policies. This policy does not apply to practices that Unberry does not own or control, or to individuals that Unberry does not employ or manage. By using Unberry, you agree to the data practices described in this statement and you expressly consent to the collection, use and disclosure of your personal information in accordance with this privacy policy. You can withdraw your consent at any time.
          </p>
          <h4 className="title4">What is the purpose of collecting your Personal Information?</h4>
          <p className="description">
            Unberry provides talent acquisition and saas services to the customers, however if the client permits we can use the information to directly connect and promote other opportunities with the candidate. Alternatively, if the candidate signs up with Unberry&apos;s website directly, we may use their information to share with other companies for employment opportunities.
          </p>
          <p className="description">
            Unberry is not a headhunting company, we only provide talent acquisition technology and SaaS services to our Customers.
          </p>
          <p className="description">
            Information about your computer hardware and software may be automatically collected by Unberry. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the services, to maintain and the improve quality of the services, and to provide general statistics regarding use of Unberry.com. Unberry may collect and retain candidate&apos;s name, email id, phone number, linkedin profiles, educational qualifications, college details, employment history, job application details and any other information that is relevant to have a record of their candidature, while taking a job or skill assessment. Unberry can also collect and retain candidate&apos;s data in form of clicked selected responses to questions, voice, images, written text and/or video, as a part of their assessment process. This information is collected as a part of a candidate&apos;s assessment for job or skill evaluation and may or may not necessarily result in employment.
          </p>
          <p className="description">
            Unberry encourages you to review the privacy statements of websites to which you choose to link from Unberry.com so that you can understand how those websites collect, use and share your information. Unberry is not responsible for the privacy statements or other content on websites outside of Unberry.com.
          </p>
          <h4 className="title4">How will your data be used?</h4>

          <p className="description">
            Unberry collects your personal information to operate its website and deliver the Services you have requested as set forth above. Unberry may also contact you via surveys to conduct research about your opinion of current Services or of potential new services that may be offered.
          </p>
          <p className="description">
            Unberry does not sell, rent or lease the collected personal information and its customer lists to third parties.
          </p>
          <p className="description">
            Unberry may share usage data with trusted partners to help to perform usage statistical analysis, customer support and technical operations and provide data hosting services. All such third parties are required to maintain the confidentiality of your information. Unberry can use the responses and data collected in any form to conduct analysis and generate predictive results. Unberry is not liable to share any data or analysis or reports, for the information collected before or during the assessment, with the candidate. Unberry may conducts pre employment assessments or skill evaluations as an independent entity. Unberry holds the right to analyse the data and share data and predictive insights with companies.  Unberry is not responsible for decisions made by a company for a candidate&apos;s application for an employment opportunity.
          </p>
          <p className="description">
            Unberry may keep track of the websites and pages our users visit within Unberry, in order to improve your user experience.
          </p>
          <p className="description">
            Unberry may use the personal data to improve and develop its website, its services and products to the extent this is necessary for its legitimate interests. Unberry may also use your personal information to inform you of other products, services or job opportunities available from and through Unberry.
          </p>
        </div>
      </div>

      <Footer>
        <div className='footer'>
          <div className='copyright-section'>
            <div><Image src={logoFooter} alt="logo-footer" /></div>
            <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved. | <Link href="/privacy-policy"><a className="privacy-link">Privacy Policy</a></Link> </p>
          </div>
        </div>
      </Footer>
    </>
  )
}
