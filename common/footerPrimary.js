import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoFooter from "../assets/logo-black.svg";
import dribbble from "../assets/new/social/dribbble.svg";
import instagram from "../assets/new/social/instagram.svg";
import linkedin from "../assets/new/social/linkedin.svg";
import whtsp from "../assets/new/social/whatsapp.svg";
import SubscribeCard from './subscribe';

export default function FooterPrimary(props) {
  return (
    <div className="footer-primary">
      <div className='container-width'>
        <SubscribeCard />
        <div className='footer'>
          <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' alt="social icons" src={linkedin} /></a>
            <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={whtsp} alt="social icons" /></a>
            <a href="https://twitter.com/UnberryHQ" target="_blank" rel="noreferrer" className='icon-link'><Image className='icon' src={dribbble} alt="social icons" /></a>
            <a href="https://www.instagram.com/unberry_official/" rel="noreferrer" className='icon-link' target="_blank"><Image className='icon' src={instagram} alt="social icons" /></a>
          </div>
          <div className="logo-white"><Image src={logoFooter} alt="logo-footer" /></div>
          <p className='copyright'>© Copyright 2023. UNBERRY. All Rights Reserved. | <Link href="/privacy-policy"><a className="privacy-link">Privacy Policy</a></Link> </p>
        </div>
      </div>
    </div>
  )
}
