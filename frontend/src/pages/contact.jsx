import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className='pt-10 text-2xl text-center border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center gap-10 my-10 md:flex-row mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
        <div className='flex flex-col items-start justify-center gap-6'>
          <p className='text-xl font-semibold text-gray-600'>Our Boutique</p>
          <p className='text-gray-500'>House 12, Road 4 <br /> Gulshan, Dhaka, Bangladesh</p>
          <p className='text-gray-500'>Tel: +880-123-456-789 <br /> Email: hello@lumierejewels.com</p>
          <p className='text-xl font-semibold text-gray-600'>Bespoke & Custom Pieces</p>
          <p className='text-gray-500'>Have something special in mind? Our team can help bring a custom design to life, from engagement pieces to one-of-a-kind gifts.</p>
          <button className='px-8 py-4 text-sm transition-all duration-500 border border-[#C9A84C] text-charcoal hover:bg-[#C9A84C] hover:text-white'>Request a Consultation</button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  )
}

export default Contact
