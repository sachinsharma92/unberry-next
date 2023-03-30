import { Layout } from 'antd';
import Image from 'next/image';
import React from 'react';
import logoFooter from "../assets/logo-brown.svg";

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
            <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved.</p>
          </div>

          {/* <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/"  rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' alt="social icons" src={linkedin} /></a>
            <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image  className='icon' src={instagram}  alt="social icons" /></a>
            <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><Image  className='icon' src={twitter}  alt="social icons" /></a>
          </div> */}
        </div>
      </Footer>}
    </Layout>
  )
}
