import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const ParcelIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
    <path d="M21 8L12 3 3 8v8l9 5 9-5V8z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 13v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const statusColors = {
  'Order Placed': 'bg-gray-100 text-gray-700',
  'Packing': 'bg-amber-100 text-amber-700',
  'Shipped': 'bg-blue-100 text-blue-700',
  'Out for delivery': 'bg-purple-100 text-purple-700',
  'Delivered': 'bg-green-100 text-green-700'
}

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return null
    try {
      const response = await axios.post(backendUrl + '/api/order/list', {}, { headers: { token } })
      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } })
      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const deleteHandler = async (orderId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this order? This cannot be undone.')
    if (!confirmDelete) return
    try {
      const response = await axios.post(backendUrl + '/api/order/remove', { orderId }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchAllOrders()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => { fetchAllOrders() }, [token])

  return (
    <div>
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-gray-800'>Orders</h3>
        <span className='text-sm text-gray-500'>{orders.length} total</span>
      </div>
      <div>
        {orders.map((order, index) => (
          <div key={index} className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700'>
            <div className='flex items-start justify-center pt-1'>
              <div className='bg-[#FDF8F0] p-2 rounded-full'>
                <ParcelIcon />
              </div>
            </div>
            <div>
              <p className='mb-2'>{order.items.map((item, i) => i === order.items.length - 1 ? `${item.name} x ${item.quantity}` : `${item.name} x ${item.quantity}, `)}</p>
              <p className='mt-3 mb-1 font-medium text-gray-900'>{order.address.firstName + ' ' + order.address.lastName}</p>
              <p>{order.address.street}</p>
              <p>{order.address.city + ', ' + order.address.state}</p>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p>Items: {order.items.length}</p>
              <p className='mt-3'>Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className='font-medium text-gray-900'>{currency}{order.amount}</p>
            <div className='flex flex-col gap-2'>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className={`p-2 rounded-md font-semibold border-0 outline-none cursor-pointer ${statusColors[order.status] || 'bg-gray-100 text-gray-700'}`}>
                <option value='Order Placed'>Order Placed</option>
                <option value='Packing'>Packing</option>
                <option value='Shipped'>Shipped</option>
                <option value='Out for delivery'>Out for delivery</option>
                <option value='Delivered'>Delivered</option>
              </select>
              <button onClick={() => deleteHandler(order._id)} className='py-2 text-xs font-semibold text-white transition-colors bg-red-500 rounded hover:bg-red-600'>
                Delete Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders