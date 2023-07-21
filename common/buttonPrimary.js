import Link from 'next/link';
import React from 'react';

export default function ButtonPrimary({ href, className = "", title }) {
  return (
    <Link href={href || '/'}>
      <a className={`btn-primary ${className || ''}`}>
        {title}
      </a>
    </Link>
  )
}
