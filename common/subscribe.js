
import { Button, Form, Input } from 'antd';
import React from 'react';
import dribbble from "../assets/new/social/dribbble-purple.svg";
import instagram from "../assets/new/social/instagram-purple.svg";
import linkedin from "../assets/new/social/linkedin-purple.svg";
import Image from 'next/image';

export default function SubscribeCard(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="subscribe-card">
      <h4 className="title4">Subscribe to our newsletter</h4>
      <p className="description">Don’t miss out on the updates of unberry.</p>
      <div className="subscribe-form">
        <Form
          name="basic"
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

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>

      {props.socialShow && <div className='social-sec'>
        <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' alt="social icons" src={linkedin} /></a>
        <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><Image className='icon' src={dribbble} alt="social icons" /></a>
        <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={instagram} alt="social icons" /></a>
      </div>}
    </div>
  )
}


