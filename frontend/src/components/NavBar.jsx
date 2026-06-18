import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible, setVisible] = useState(false)
  const { getCartCount, setShowSearch, setToken, token, setCartItems, name } = useContext(ShopContext)
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <Link to='/'>
      <h1 className='text-3xl tracking-wide font-display text-charcoal'>Lumière <span className='text-gold'>Jewels</span></h1>
      </Link>

      <ul className='hidden gap-5 text-sm font-medium tracking-wider text-charcoal sm:flex'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img 
          onClick={() => { setShowSearch(true); navigate('/collection') }} 
          src={assets.search_icon} 
          className='w-5 cursor-pointer' 
          alt='search' 
        />
        
        <div className='relative group'>
          <div className='relative'>
            <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt='profile' />
            {token && <span className='absolute text-xs -top-2 -right-2'>✨</span>}
          </div>
          {/* Dropdown Menu */}
          {token && 
          <div className='absolute right-0 z-10 hidden pt-4 group-hover:block'>
            <div className='flex flex-col gap-1 px-5 py-4 text-gray-600 rounded-lg shadow-lg w-44 bg-[#FDF8F0] border border-[#C9A84C]/30'>
              <p className='pb-2 mb-2 text-sm border-b border-[#C9A84C]/20 font-display text-charcoal'>
                Hello, <span className='text-gold'>{name || 'there'}</span> 🌸
              </p>
              <p onClick={() => navigate('/profile')} className='py-1 text-sm transition-colors cursor-pointer hover:text-[#C9A84C]'>My Profile</p>
              <p onClick={() => navigate('/orders')} className='py-1 text-sm transition-colors cursor-pointer hover:text-[#C9A84C]'>Orders</p>
              <p onClick={logout} className='py-1 text-sm transition-colors cursor-pointer hover:text-[#C9A84C]'>Logout</p>
            </div>
          </div>}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt='cart' />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>

        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt='menu' />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
        </div>
      </div>

    </div>
  )
}

export default NavBar