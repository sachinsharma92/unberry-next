/* eslint-disable @next/next/no-img-element */
import { Button, Form, Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import instagram from "../assets/new/social/instagram-purple.svg";
import linkedin from "../assets/new/social/linkedin-purple.svg";
import twitter from "../assets/new/social/twitter.svg";
import ThankModal from '../components/thankModal';

import Image from 'next/image';

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
  }, [values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

export default function SubscribeCard(props) {
  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const onFinish = () => {
    setThankModal(!isThankModal);
    setSubmittable(true)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);


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
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{
              email: ''
            }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Enter your email!' }]}
            >
              <Input placeholder='Enter your email!' />
            </Form.Item>

            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                >
                  Log in
                </Button>
              )}
            </Form.Item>
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


