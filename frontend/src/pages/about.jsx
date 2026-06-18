import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='pt-8 text-2xl text-center border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='flex flex-col gap-16 my-10 md:flex-row'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 text-gray-600 md:w-2/4'>
          <p>Lumière Jewels was born from a simple belief: that every woman deserves to carry a little light with her, wherever she goes. Our name, drawn from the French word for "light," reflects the radiance we hope each piece brings to the moments that matter most.</p>
          <p>From delicate everyday studs to statement pieces meant for the most memorable nights, every design in our collection is chosen for its ability to catch the light and hold it — a quiet kind of luxury that speaks softly, but stays with you.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>We believe timeless elegance shouldn't be out of reach. Our mission is to craft jewelry that feels personal and luxurious, while staying true to honest pricing, quality materials, and designs you'll want to wear for years to come.</p>
        </div>
      </div>

      <div className='py-4 text-xl'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col mb-20 text-sm md:flex-row'>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Every piece is carefully inspected before it reaches you, from the polish of the setting to the clarity of every stone, so what you see is exactly what you receive.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Browse, choose, and check out in just a few clicks. We've made it simple to find the right piece for any occasion, with sizing and styling guidance along the way.</p>
        </div>
        <div className='flex flex-col gap-5 px-10 py-8 border md:px-16 sm:py-20'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team is here for you before, during, and after your purchase, whether you have a question about a piece or need help finding the perfect gift.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default About