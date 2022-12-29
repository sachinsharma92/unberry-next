import Link from 'next/link'
import React from 'react'
import HowWorkCard from '../howWorkCard'

export default function HowWorkSection() {
  return (
    <section className='section-style how-works'>
      <div className='menu-section'>
        <Link href="">05 How it works</Link>
      </div>

      <div className='content-section'>
        <div className='heading-section'>
          <h3 className='title1 text-gradient'>Applicability across a wide variety of roles</h3>
        </div>
        <HowWorkCard />
      </div>
    </section>
  )
}
