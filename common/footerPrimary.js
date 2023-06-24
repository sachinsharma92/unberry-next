import Image from 'next/image';
import React from 'react';
import ImageCustom from './ImageCustom';

export default function FooterPrimary(props) {
  return (
    <div className="footer-primary">
      <div className='container-width'>
        <div className='footer'>
          <div className="logo-white">
            <Image src="https://assets.unberry.com/media/images/logo-black.svg" width={150} height={50} alt="Unberry Talent Intelligence Platform" />
          </div>

          {/* <nav className={`menu-footer`}>
            <Link href="/">Sectors</Link>
            <Link href="/">Explore Suite</Link>
            <Link href="/blog">Blogs</Link>
            <Link href="/">Contact Us</Link>
          </nav> */}

          <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon' alt="contact Unberry on LinkedIn" src="linkedin.svg" width="18" height="17" />
            </a>
            <a href="mailto:contact@unberry.com" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon img-white' src="mail.png" alt="social icons" width="22" height="22" />
            </a>
            <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'>
              <ImageCustom className='icon img-white' src="twitter.svg" alt="contact Unberry on Twitter" width="12" height="16" />
            </a>
            <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank">
              <ImageCustom className='icon' src="instagram.svg" alt="contact Unberry on Instagram" width="19" height="19" />
            </a>
          </div>
        </div>
        <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved</p>
      </div>
    </div>
  )
}
