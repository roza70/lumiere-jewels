import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='text-center'>
            <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off your first order</p>
            <p className='mt-3 text-gray-400'>Join our mailing list to get updates delivered straight to your inbox.</p>
            <form className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2' onSubmit={onSubmitHandler}>
                <input className='w-full outline-none sm:flex-1' type="email" placeholder='Enter your email' required />
                <button type='submit' className='px-10 py-2 text-xs text-white bg-black rounded-md hover:bg-gray-800'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox