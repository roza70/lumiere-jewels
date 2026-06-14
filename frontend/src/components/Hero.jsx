import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'

const slides = [
  { img: assets.hero1, label: 'LUMIÈRE COLLECTION', title: 'Where Light Meets Elegance' },
  { img: assets.hero2, label: 'SIGNATURE PIECES', title: 'Crafted to Captivate' },
  { img: assets.hero3, label: 'NEW ARRIVALS', title: 'Discover Your Sparkle' },
]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='relative flex flex-col overflow-hidden rounded-lg sm:flex-row'>

      {/* Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 min-h-[400px]'>
        <div className='text-[#414141] p-4'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-gold'></p>
            <p className='text-sm font-medium tracking-widest transition-all duration-500 md:text-base text-gold'>{slides[current].label}</p>
          </div>
          <h1 className='text-3xl leading-relaxed transition-all duration-500 sm:py-3 lg:text-5xl font-display'>{slides[current].title}</h1>
          <div className='flex items-center gap-2'>
            <p className='text-sm font-semibold md:text-base text-charcoal'>SHOP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-gold'></p>
          </div>
        </div>
      </div>

      {/* Right side - sliding images */}
      <div className='relative w-full sm:w-1/2 min-h-[400px] overflow-hidden'>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt=''
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Dots */}
        <div className='absolute z-10 flex gap-2 -translate-x-1/2 bottom-4 left-1/2'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-gold w-6' : 'bg-white/60'}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
          className='absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full left-3 top-1/2 bg-white/70 hover:bg-white text-charcoal'
        >‹</button>
        <button
          onClick={() => setCurrent((current + 1) % slides.length)}
          className='absolute z-10 flex items-center justify-center w-8 h-8 -translate-y-1/2 rounded-full right-3 top-1/2 bg-white/70 hover:bg-white text-charcoal'
        >›</button>
      </div>

    </div>
  )
}

export default Hero