import { Button, Form, Input, Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoFooter from "../assets/logo-black.svg";
import dribbble from "../assets/new/social/dribbble.svg";
import instagram from "../assets/new/social/instagram.svg";
import linkedin from "../assets/new/social/linkedin.svg";
import whtsp from "../assets/new/social/whatsapp.svg";

const { Option } = Select;

export default function FooterPrimary(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="footer-primary">
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
      </div>
      <div className='footer'>
        <div className='social-sec'>
          <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' alt="social icons" src={linkedin} /></a>
          <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={whtsp} alt="social icons" /></a>
          <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><Image className='icon' src={dribbble} alt="social icons" /></a>
          <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={instagram} alt="social icons" /></a>
        </div>
        <div className="logo-white"><Image src={logoFooter} alt="logo-footer" /></div>
        <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved. | <Link href="/privacy-policy"><a className="privacy-link">Privacy Policy</a></Link> </p>
      </div>
    </div>
  )
}
