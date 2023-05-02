import { Layout } from 'antd';
import Image from 'next/image';
import React from 'react';
import logoFooter from "../assets/logo-brown.svg";
import Link from 'next/link';

const { Content, Footer } = Layout;

export default function LayoutPrimary(props) {
  return (
    <Layout className="layout layout-primary">
      <Content className={`main-content-section ${props.className}`}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      {props.footer && <Footer>
        <div className='footer'>
          <div className='copyright-section'>
            <div><Image src={logoFooter} alt="logo-footer" /></div>
            <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved. | <Link href="/privacy-policy"><a className="privacy-link">Privacy Policy</a></Link> </p>
          </div>
        </div>
      </Footer>}
    </Layout>
  )
}
