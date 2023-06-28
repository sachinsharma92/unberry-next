import { Layout } from 'antd';
import React from 'react';

const BookADemo = dynamic(() => import('../components/homepage/bookADemo'))
const FooterPrimary = dynamic(() => import('./footerPrimary'))
const HeaderPrimary = dynamic(() => import('./headerPrimary'))

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
