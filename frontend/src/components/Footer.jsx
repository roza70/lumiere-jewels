import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Left section */}
        <div>
          <Link to='/' className='inline-block mb-5'>
            <h2 className='text-3xl tracking-wide font-display text-charcoal'>Lumière <span className='text-gold'>Jewels</span></h2>
          </Link>
          <p className='w-full text-gray-600 md:w-2/3'>
            Timeless pieces, crafted with light and grace — Lumière Jewels
            brings elegance to every moment you cherish.
          </p>
        </div>

        {/* Middle section */}
        <div>
          <p className='mb-5 text-sm font-medium tracking-[0.2em] text-gray-800 uppercase'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><Link to='/' className='transition-colors hover:text-[#C9A84C]'>Home</Link></li>
            <li><Link to='/collection' className='transition-colors hover:text-[#C9A84C]'>Collections</Link></li>
            <li><Link to='/about' className='transition-colors hover:text-[#C9A84C]'>About Us</Link></li>
            <li><Link to='/contact' className='transition-colors hover:text-[#C9A84C]'>Contact</Link></li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='mb-5 text-sm font-medium tracking-[0.2em] text-gray-800 uppercase'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href='tel:+880123456789' className='transition-colors hover:text-[#C9A84C]'>+880-123-456-789</a></li>
            <li><a href='mailto:hello@lumierejewels.com' className='transition-colors hover:text-[#C9A84C]'>hello@lumierejewels.com</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div>
        <hr className='border-[#C9A84C]/20' />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2026 &copy; Lumière Jewels — All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer