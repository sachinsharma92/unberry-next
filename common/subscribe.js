/* eslint-disable @next/next/no-img-element */
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import ThankModal from '../components/thankModal';
import ImageCustom from './ImageCustom';

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
            <ImageCustom className='icon-img' alt="social icons" src="envelope-color.svg" width="60" height="60" />
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
              <Input placeholder='Enter your email' />
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
                  Subscribe
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>

        {props.socialShow && <div className='social-sec'>
          <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank"><ImageCustom className='icon' alt="social icons" src="linkedin-purple.svg" width="18" height="17" /></a>
          <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><ImageCustom className='icon' src="twitter.svg" alt="social icons" width="12" height="16" /></a>
          <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><ImageCustom className='icon' src="instagram-purple.svg" alt="social icons" width="19" height="19" /></a>
        </div>}
      </div>


      <ThankModal visible={isThankModal} onCancel={thankToggleModal} />
    </div>
  )
}


