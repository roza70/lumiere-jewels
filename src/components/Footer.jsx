import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Left section */}
        <div>
          <img src={assets.logo} className='w-32 mb-5' alt='logo' />
          <p className='w-full text-gray-600 md:w-2/3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Donec suscipit auctor dui, sed efficitur nisi.
          </p>
        </div>

        {/* Middle section */}
        <div>
          <p className='mb-5 text-xl font-medium'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div>
          <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center text-gray-500'>
          Copyright 2024@ forever.com - All Right Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer