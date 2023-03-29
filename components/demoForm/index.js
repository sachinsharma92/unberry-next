import { Button, Form, Input, notification, Select } from 'antd';
import axios from "axios";
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import demoGroup from "../../assets/demo-group.png";
import { Mixpanel } from '../../services/mixpanel';
import ThankModal from '../thankModal';

const { Option } = Select;

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

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const bookADemo = (values) => {
    const { email, name, phone, message, employeesCount, hiringCount } = values;
    let employeesCountArray = employeesCount?.split("-");
    let hiringCountArray = hiringCount?.split("-");
    let numberOfEmployees = {
      min: +employeesCountArray[0],
      max: +employeesCountArray[1]
    };
    let numberOfPlannedHiring = {
      min: +hiringCountArray[0],
      max: +hiringCountArray[1]
    }

    let payload = {
      name,
      email,
      phone,
      message,
      numberOfPlannedHiring,
      numberOfEmployees
    }
    axios
      .post(
        "https://prod-api.unberry.com/api/query/v1/create-query",
        payload, // the data to post'
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
                email: '',
                name: '',
                phone: '',
                employeesCount: '',
                hiringCount: '',
                message: '',
              }}
            >

              <Form.Item
                name="email"
                rules={[{ type: "email", required: true, }]}
              >
                <Input placeholder='Company Email*'
                />
              </Form.Item>

              <div className="grid-form">
                <Form.Item
                  name="name"
                  rules={[{ required: true, }]}
                >
                  <Input placeholder='Enter Name*'
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[{ required: true, }]}
                >
                  <Input type="number" placeholder='Phone*'
                  />
                </Form.Item>
              </div>

              <Form.Item
                // name="employeesCount"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Number of employees *"
                  onChange={handleChange}
                >
                  <Option value="1-10">1-10</Option>
                  <Option value="11-50">11-50</Option>
                  <Option value="51-200">51-200</Option>
                  <Option value="201-500">201-500</Option>
                  <Option value="501-1000">501-1000</Option>
                  <Option value="1001-5000">1001-5000</Option>
                  <Option value="10000-Infinity">10000-Infinity</Option>
                </Select>
              </Form.Item>

              <Form.Item
                // name="hiringCount"
                rules={[{ required: true }]}
              >

                <Select
                  placeholder="How many hires are you planning to make in the next year?*"
                  onChange={handleChange}
                >
                  <Option value="1-200">1-200</Option>
                  <Option value="201-500">201-500</Option>
                  <Option value="501-1000">501-1000</Option>
                  <Option value="1001-5000">1001-5000</Option>
                  <Option value="5001-10000">5001-10000</Option>
                  <Option value="1001-5000">1001-5000</Option>
                  <Option value="10000-Infinity">10,000+</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="message"
              >
                <Input placeholder='message (optional)' />
              </Form.Item>



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
