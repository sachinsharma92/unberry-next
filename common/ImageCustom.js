import Image from 'next/image';
import React from 'react';

export default function ImageCustom(props) {
  return (
    <Image
      src={`https://assets.unberry.com/media/images/${props.src}`}
      alt={props.alt}
      layout={props.layout}
      height={props.height}
      width={props.width}
      className={props.className}
    />
  )
}
