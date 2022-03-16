import React from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({data, currentPath}) => {
  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
        {data?.map((item) => (
          <Link to={`/blog/${item.id}`} state={{backTo: currentPath}}>
            <div className='box-style'>
              <div className='img-sec'>
                <Image height={250} width={250} src={item.bannerImage} alt="" />
              </div>
              <div className='title'>
                {item.heading}
              </div>
              <div className='read-more-link'>Read More</div>
            </div>
          </Link>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel>
          {data?.map((item) => (
            <Link to={`/blog/${item.id}`}>
              <div className='box-style'>
                <div className='img-sec'>
                  <Image height={250} width={250} src={item.bannerImage} alt="" />
                </div>
                <div className='title'>
                  {item.heading}
                </div>
                <div className='read-more-link'>Read More</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  )
}


export default BlogCard;