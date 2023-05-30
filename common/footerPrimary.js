import Image from 'next/image';
import React from 'react';
import logoFooter from "../assets/logo-black.svg";
import ImageCustom from './ImageCustom';

export default function FooterPrimary(props) {
  return (
    <div className="footer-primary">
      <div className='container-width'>
        <div className='footer'>
          <div className="logo-white"><Image src={logoFooter} alt="logo-footer" /></div>

          {/* <nav className={`menu-footer`}>
            <Link href="/">Sectors</Link>
            <Link href="/">Explore Suite</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/">Contact Us</Link>
          </nav> */}

          <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon' alt="social icons" src="linkedin.svg" width="18" height="17" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=9891127771" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon' src="whatsapp.svg" alt="social icons" width="22" height="22" />
            </a>
            <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'>
              <ImageCustom className='icon img-white' src="twitter.svg" alt="social icons" width="12" height="16" />
            </a>
            <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon' src="instagram.svg" alt="social icons" width="19" height="19" />
            </a>
          </div>
        </div>
        <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved</p>
      </div>
    </div>
  )
}
