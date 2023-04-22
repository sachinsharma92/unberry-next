import Link from 'next/link';
import React from 'react';

export default function ButtonPrimary(props) {
  return (
    <Link href={props.href || '/'}>
      <a className='btn-primary'>
        {props.title}
      </a>
    </Link>
  )
}
