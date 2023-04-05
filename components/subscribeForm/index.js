import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const { Option } = Select;

export default function SubscribeForm(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='subscribe-form' >
      <h4>Subscribe to our weekly posts and newsletters.</h4>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder='Please input your email!' />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </section>
  )
}
