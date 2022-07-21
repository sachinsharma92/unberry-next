import React from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';

const BlogCard = ({ data, currentPath }) => {
  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
        {data?.reverse().map((item, index) => (
          <Link
            href={{
              pathname: `/blog/${item.slug}`,
              query: { backTo: currentPath},
            }}
            as={`/blog/${item.slug}`}
            key={index}>
            <div className='box-style'>
              <div className='img-sec'>
                <div className='img-style' style={{ backgroundImage: `url(${item.bannerImage})` }} />
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
          {data?.reverse().map((item, index) => (
            <Link
              href={{
                pathname: `/blog/${item.slug}`,
                query: { backTo: currentPath },
              }}
              as={`/blog/${item.slug}`}
              key={index}>
              <div className='box-style'>
                <div className='img-sec'>
                  <div className='img-style' style={{ backgroundImage: `url(${item.bannerImage})` }} />
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