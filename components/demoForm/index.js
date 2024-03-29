import { Button, Checkbox, Form, Input, notification, Select } from 'antd';
import axios from "axios";
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import ImageCustom from '../../common/ImageCustom';
import { Mixpanel } from '../../services/mixpanel';
import ThankModal from '../thankModal';

// Styles here
import styles from './styles.module.scss';

const { Option } = Select;

export default function DemoForm(props) {
  const [disabledSave, setDisabledSave] = useState(true);
  const [isThankModal, setThankModal] = useState(false);
  const [form] = Form.useForm();
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
    const { email, name, phone, employeescount, hiringcount } = values;
    let employeesCountArray = employeescount?.split("-");
    let hiringCountArray = hiringcount?.split("-");
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
      numberOfPlannedHiring,
      numberOfEmployees,
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

  const handleFormChange = () => {
    const { name, email, phone, employeescount, hiringcount, remember } = form.getFieldsValue();
    const hasErrors = !(name && email && phone && employeescount && hiringcount && remember)
    setDisabledSave(hasErrors);
  }

  return (
    <section className={`${styles.demoFormStyle} demo-form-style`} id={props.id}>
      <Link href="/">
        <a className={`${styles.logoBlackStyle}`}>
          <ImageCustom src="logo-black.svg" width="124" height="34" alt="Unberry Talent Intelligence Platform" />
        </a>
      </Link>
      <h3 className={styles.title3}>Take the guesswork out...</h3>
      <Form
        form={form}
        name="basic"
        autoComplete="off"
        layout="vertical"
        className={styles.formStyle}
        onFinish={bookADemo}
        preserve={false}
        ref={formRef}
        onFieldsChange={handleFormChange}
        initialValues={{
          email: '',
          name: '',
          phone: '',
          employeesCount: '',
          hiringCount: '',
        }}
      >

        <Form.Item
          name="email"
          rules={[{ type: "email", required: true, }]}
        >
          <Input placeholder='Company Email*'
          />
        </Form.Item>

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

        <Form.Item
          name="employeescount"
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
            <Option value="10k">10k+</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="hiringcount"
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
            <Option value="10k">10k+</Option>
          </Select>
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" rules={[{ required: true }]} className='checkbox-style'>
          <Checkbox>
            <p className="checkbox-text">Your privacy matters to us. We’ll only contact you about relevant content or services, and you can unsubscribe at any time. <Link href="/privacy-policy">Privacy Policy</Link></p>
          </Checkbox>
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          disabled={disabledSave}
        >
          Request a Demo
        </Button>
      </Form>


      <ThankModal visible={isThankModal} onCancel={thankToggleModal} />
    </section>
  )
}
