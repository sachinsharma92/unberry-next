import { Layout } from 'antd';
import React from 'react';
import BookADemo from '../components/homepage/bookADemo';
import FooterPrimary from './footerPrimary';
import HeaderPrimary from './headerPrimary';

export default function LayoutPrimary(props) {
  return (
    <Layout className={props.className}>
      <HeaderPrimary backHander={props.backHander} />

      <div className="site-layout-content">
        {props.children}
      </div>

      <div className="footer-section">
        <BookADemo />
        <FooterPrimary />
      </div>
    </Layout>
  )
}
