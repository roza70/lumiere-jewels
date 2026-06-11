import React from 'react'

const Navbar = ({ setToken }) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <p className='text-2xl font-semibold'>Lumière Admin</p>
      <button onClick={() => setToken('')} className='px-5 py-1 text-xs text-white bg-gray-600 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar