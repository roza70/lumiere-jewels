import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { name, setToken, setCartItems } = useContext(ShopContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='pt-16 pb-20 border-t'>
      <div className='relative px-6 py-20 mb-10 overflow-hidden text-center rounded-3xl bg-gradient-to-br from-[#FDF8F0] via-[#FBE8EE] to-[#FBF1E0] border border-[#C9A84C]/30'>
        <span className='absolute text-2xl text-pink-300 top-6 left-10'>✧</span>
        <span className='absolute text-lg top-12 right-16 text-[#C9A84C]'>✦</span>
        <span className='absolute text-3xl text-pink-200 bottom-10 left-1/4'>✦</span>
        <span className='absolute text-sm bottom-16 right-12 text-[#C9A84C]'>✧</span>
        <span className='absolute text-xl text-pink-300 top-1/2 right-8'>✦</span>
        <span className='absolute text-base bottom-6 left-12 text-[#C9A84C]'>✧</span>

        <p className='mb-3 text-sm tracking-[0.35em] uppercase text-[#C9A84C]'>✧ Welcome Back ✧</p>
        <h1 className='text-5xl font-display text-charcoal sm:text-6xl md:text-7xl'>
          Hello, <span className='text-gold'>{name || 'Beautiful'}</span>
        </h1>
        <p className='mt-4 text-base text-gray-600 sm:text-lg'>You're shining bright today, just like the jewels you love ✨</p>
      </div>

      <div className='max-w-md mx-auto'>
        <div className='p-6 mb-4 border border-gray-200 rounded-xl'>
          <p className='mb-1 text-sm text-gray-500'>Account Name</p>
          <p className='text-lg font-medium text-charcoal'>{name || '—'}</p>
        </div>

        <div className='flex flex-col gap-3'>
          <button onClick={() => navigate('/orders')} className='py-3 font-medium transition-colors border rounded-lg border-[#C9A84C] text-charcoal hover:bg-[#FDF8F0]'>
            View My Orders
          </button>
          <button onClick={logout} className='py-3 font-medium text-white transition-colors rounded-lg bg-charcoal hover:opacity-90'>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile