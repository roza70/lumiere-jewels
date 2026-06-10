import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email to backend)
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-2 mb-5 text-gray-500 text sm'>Join our mailing list to get updates to your email inbox.</p>
        <div className='flex justify-center gap-2'>
            <input className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400' type='email' placeholder='Enter your email' />
            <button className='px-6 py-2 text-white transition duration-300 bg-gray-800 rounded-md hover:bg-gray-700'>Subscribe</button>
        </div>
      
    </div>
  )
}

export default NewsLetterBox
