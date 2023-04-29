import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logoTheme from "../assets/logo-black.svg";

export default function HeaderPrimary(props) {
  const [menuShow, setMenuShow] = useState(false);

  const menuToggle = () => {
    setMenuShow(!menuShow)
  }

  return (
    <div className="header-primary">
      <Link href="/">
        <a className='logo-black'>
          <Image src={logoTheme} width="124" height="34" alt="logo" />
        </a>
      </Link>

      <nav className={`menu-header ${menuShow && 'menu-active'}`}>
        <Link href="/">Sectors</Link>
        <Link href="/">Explore Suite</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/"><a className='btn-primary'>BOOK DEMO</a></Link>
      </nav>

      <div className='mobile-section'>
        <Link href="/"><a className='btn-primary'>BOOK DEMO</a></Link>

        <button className='btn-toggle' onClick={menuToggle}>
          <div className={`bar ${menuShow && 'animate'}`}></div>
        </button>
      </div>
    </div>
  )
}
