/* eslint-disable @next/next/no-img-element */
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import twitter from "../assets/new/social/twitter.svg";
import instagram from "../assets/new/social/instagram-purple.svg";
import linkedin from "../assets/new/social/linkedin-purple.svg";
import ThankModal from '../components/thankModal';

import Image from 'next/image';

export default function SubscribeCard(props) {
  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="subscribe-main-card">
      <div className='subscribe-card'>
        <div className='content-sec'>
          <div className='icon-box'>
            <img className='icon-img' alt="social icons" src="/assets/envelope-color.svg" />
          </div>
          <div>
            <h4 className="title4">Subscribe to our newsletter</h4>
            <p className="description">Don’t miss out on the updates of unberry.</p>
          </div>
        </div>

        <div className="subscribe-form">
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Enter your email!' }]}
            >
              <Input placeholder='Enter your email!' />
            </Form.Item>

            <Button type="primary" htmlType="submit" onClick={thankToggleModal}>
              Submit
            </Button>
          </Form>
        </div>

        {props.socialShow && <div className='social-sec'>
          <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' alt="social icons" src={linkedin} /></a>
          <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><Image className='icon' src={twitter} alt="social icons" /></a>
          <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={instagram} alt="social icons" /></a>
        </div>}
      </div>


      <ThankModal visible={isThankModal} onCancel={thankToggleModal} />
    </div>
  )
}


