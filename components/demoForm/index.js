import { Button, Form, Input, notification } from 'antd';
import axios from "axios";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import demoGroup from "../../assets/demo-group.png";
import { Mixpanel } from '../../services/mixpanel';
import ThankModal from '../thankModal';

export default function DemoForm(props) {
  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };

  const formRef = useRef(null);
  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Error',
      description:
        'Oops! Something went wrong',
    });
  };

  const bookADemo = (values) => {
    axios
      .post(
        "https://prod-api.unberry.com/api/query/v1/create-query",
        values, // the data to post'
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        // handleClick();
        formRef.current.resetFields();
        setThankModal(true);
        Mixpanel.track('Demo Booked');
        window.dataLayer.push({
          event: 'demoBooked',
        })
      })
      .catch((err) => {
        openNotificationWithIcon('error');
      });
  }

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);


  // const handleClick = () => {
  //   window.open('https://calendly.com/unberry/product-demo');
  // }

  return (
    <section className='section-style contact-section' id={props.id} >
      <div className='menu-section'></div>
      <div className="primary-width">

        <div className="show-on-mobile">
          <div className='gradint-section'>
            <Image src={demoGroup} className='img-full' alt="" />
          </div>
        </div>
        <div className='header-style'>
          <div className="heading-first">
            <div className="show-on-desktop">
              <h4 className='title4'>Take the guesswork out…</h4>
            </div>
            <div className="show-on-mobile">
              <h4 className='title4'>Take the</h4>
              <span className='border-style' />
              <h4 className='title4'> guesswork out…</h4>
            </div>
            <div className='border-style' />
          </div>
          <div className="heading-second">
            <div className='text-demo'>Book A Demo</div>
            <div className='border-style' />
          </div>
        </div>

        <div className="grid-style">
          <div className='contact-form-section'>
            <div className='content'>
              <p className='description'>Transform the way you hire - by taking out inefficiencies and biases. By switching to a smarter, unbiased, tech-driven and experiential way of hiring.</p>
            </div>

            <Form
              name="basic"
              autoComplete="off"
              layout="vertical"
              className='form-style'
              onFinish={bookADemo}
              preserve={false}
              ref={formRef}
              initialValues={{
                name: '',
                email: '',
                phone: '',
                designation: ''
              }}
            >

              <div className="grid-form">
                <Form.Item
                  name="name"
                  rules={[{ required: true, }]}
                >
                  <Input placeholder='Enter Name'
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, }]}
                >
                  <Input type="number" placeholder='Enter Phone'
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[{ type: 'email', required: true, }]}
                >
                  <Input placeholder='Enter Email' />
                </Form.Item>

                <Form.Item
                  name="designation"
                  rules={[{ required: true, }]}
                >
                  <Input placeholder='Role at company' />
                </Form.Item>
              </div>

              <Button type="primary" htmlType="submit" >
                Get Started
              </Button>
            </Form>
          </div>
          <div className="show-on-desktop">
            <div className='gradint-section'>
              <Image
                src={demoGroup}
                quality={70}
                priority
                // layout="fill"
                className='img-full'
                alt=""

              />
            </div>
          </div>
        </div>
      </div>

      <ThankModal visible={isThankModal} onCancel={thankToggleModal} />
    </section>
  )
}
