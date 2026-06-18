import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const statusSteps = ['Order Placed', 'Packing', 'Shipped', 'Out for delivery', 'Delivered']

const statusDotColors = {
  'Order Placed': 'bg-gray-400',
  'Packing': 'bg-amber-500',
  'Shipped': 'bg-blue-500',
  'Out for delivery': 'bg-purple-500',
  'Delivered': 'bg-green-500'
}

const OrderTracker = ({ currentStatus }) => {
  const currentIndex = statusSteps.indexOf(currentStatus)
  return (
    <div className='flex items-start w-full py-5 px-2 bg-[#FDF8F0] rounded-lg border border-[#C9A84C]/20'>
      {statusSteps.map((step, i) => (
        <React.Fragment key={step}>
          <div className='flex flex-col items-center text-center' style={{ minWidth: '60px' }}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${i <= currentIndex ? 'bg-[#C9A84C]' : 'bg-gray-200'}`}>
              {i < currentIndex && (
                <svg className='w-2.5 h-2.5 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='3'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                </svg>
              )}
            </div>
            <p className={`mt-2 text-[11px] sm:text-xs leading-tight ${i <= currentIndex ? 'text-gray-800 font-medium' : 'text-gray-400'}`}>{step}</p>
          </div>
          {i < statusSteps.length - 1 && (
            <div className={`flex-1 h-0.5 mt-2 ${i < currentIndex ? 'bg-[#C9A84C]' : 'bg-gray-200'}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
  const [expandedIndex, setExpandedIndex] = useState(null)

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTracking = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='pt-16 border-t'>
      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {orderData.map((item, index) => (
          <div key={index} className='py-4 text-gray-700 border-t border-b'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt='' />
                <div>
                  <p className='font-medium sm:text-base'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-1'>Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                  <p className='mt-1'>Payment: <span className='text-gray-400'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='flex justify-between md:w-1/2'>
                <div className='flex items-center gap-2'>
                  <p className={`h-2 rounded-full min-w-2 ${statusDotColors[item.status] || 'bg-gray-400'}`}></p>
                  <p className='text-sm md:text-base'>{item.status}</p>
                </div>
                <button onClick={() => toggleTracking(index)} className='px-4 py-2 text-sm font-medium border rounded-sm hover:bg-[#FDF8F0] transition-colors'>
                  {expandedIndex === index ? 'Hide Tracking' : 'Track Order'}
                </button>
              </div>
            </div>
            {expandedIndex === index && (
              <div className='mt-4'>
                <OrderTracker currentStatus={item.status} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders