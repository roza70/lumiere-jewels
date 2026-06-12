import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      
      {/* Left side */}
      <div className='flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0'>
        <div className='text-[#414141] p-4'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='text-sm font-medium tracking-widest md:text-base text-gold'>LUMIÈRE COLLECTION</p>
          </div>
          <h1 className='text-3xl leading-relaxed sm:py-3 lg:text-5xl font-display'>Where Light Meets Elegance</h1>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold md:text-base'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
          </div>
        </div>
      </div>

      {/* Right side - Hero image */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt='hero' />

    </div>
  )
}

export default Hero