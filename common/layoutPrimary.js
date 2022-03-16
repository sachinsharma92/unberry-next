import React from 'react'
import { Layout, } from 'antd';
import Image from 'next/image';
import logoFooter from "../assets/logo-brown.svg";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

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
            <p className='copyright'>© Copyright 2021. UNBERRY. All Rights Reserved.</p>
          </div>

          <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/" className='icon' target="_blank"><Image width={30} height={30} src={linkedin} /></a>
            <a href="https://www.instagram.com/unberry_official/" className='icon' target="_blank"><Image width={30} height={30} src={instagram} /></a>
            <a href="https://twitter.com/UnberryHQ" target="_blank" className='icon'><Image width={30} height={30} src={twitter} /></a>
          </div>
        </div>
      </Footer>}
    </Layout>
  )
}
