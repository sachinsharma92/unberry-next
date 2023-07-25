import Link from 'next/link';
import React, { useState } from 'react';
import ImageCustom from './ImageCustom';

export default function HeaderPrimary(props) {
  const [menuShow, setMenuShow] = useState(false);

  // const menuToggle = () => {
  //   setMenuShow(!menuShow)
  // }

  return (
    <div className="header-primary">
      <div className='container-width'>
        <div className='logo-sec'>
          <Link href="/">
            <a className='logo-black'>
              <ImageCustom src="logo-black.svg" width="124" height="34" alt="Unberry Talent Intelligence Platform" />
            </a>
          </Link>
          {props.backHander && <button className="back-btn" onClick={props.backHander}>
            <ImageCustom src="back.svg" alt='Unberry - Know More in a Detailed Video ' width="24" height="24" />
          </button>}
        </div>

        <nav className={`menu-header ${menuShow && 'menu-active'}`}>
          <Link href="/book-demo"><a className='btn-primary'>BOOK DEMO</a></Link>
        </nav>

        <div className='mobile-section'>
          <Link href="/book-demo"><a className='btn-primary'>BOOK DEMO</a></Link>
        </div>
      </div>
    </div>
  )
}
