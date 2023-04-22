import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoTheme from "../assets/logo-black.svg";

export default function HeaderPrimary(props) {
  return (
    <div className="header-primary">
      <Link href="/">
        <a className='logo-black'>
          <Image src={logoTheme} width="124" height="34" alt="logo" />
        </a>
      </Link>

      <nav className='menu-header'>
        <Link href="/">Sectors</Link>
        <Link href="/">Explore Suite</Link>
        <Link href="/">Blogs</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/"><a className='btn-primary'>BOOK DEMO</a></Link>
      </nav>
    </div>
  )
}
