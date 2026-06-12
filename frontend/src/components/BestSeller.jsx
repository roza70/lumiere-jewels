import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-10'>
      <div className='py-8 text-3xl text-center'>
        <Title text1={'SIGNATURE'} text2={'PIECES'} />
        <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
         Our most coveted designs, cherished by those who appreciate timeless beauty.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
        {bestSeller.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default BestSeller