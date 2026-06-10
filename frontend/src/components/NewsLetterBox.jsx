import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send email to backend)
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='mt-3 text-gray-400'>Join our mailing list to get updates to your email inbox.</p>
        <form onSubmit={onSubmitHandler} className='flex items-center justify-center w-full gap-3 gap-4 mt-5 sm:w-1/2 sm:flex-row'>
            <input className='w-full outline-none sm:flex-1'type="email" placeholder='Enter your email' />
            <button className='px-6 py-2 text-white transition duration-300 bg-gray-800 rounded-md hover:bg-gray-700'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox
