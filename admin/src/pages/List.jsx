import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])
  const [editingId, setEditingId] = useState(null)

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const toggleBestseller = async (id, current) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/update', { id, bestseller: !current }, { headers: { token } })
      if (response.data.success) {
        toast.success('Updated!')
        await fetchList()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const updateCollection = async (id, collection) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/update', { id, collection }, { headers: { token } })
      if (response.data.success) {
        toast.success('Collection updated!')
        setEditingId(null)
        await fetchList()
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => { fetchList() }, [])

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Collection</b><b className='text-center'>⭐</b><b className='text-center'>Delete</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
            <img className='w-12' src={item.image[0]} alt='' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <div>
              {editingId === item._id ? (
                <select
                  defaultValue={item.collection || 'signature'}
                  onChange={(e) => updateCollection(item._id, e.target.value)}
                  className='border px-1 py-0.5 text-xs rounded'
                >
                  <option value='signature'>✦ Signature</option>
                  <option value='flora'>💐 Flora</option>
                  <option value='luna'>🌙 Luna</option>
                  <option value='pearl'>🐚 Pearl</option>
                </select>
              ) : (
                <span
                  onClick={() => setEditingId(item._id)}
                  className='px-2 py-1 text-xs bg-gray-100 rounded cursor-pointer hover:bg-gray-200'
                >
                  {item.collection === 'flora' ? '💐' : item.collection === 'luna' ? '🌙' : item.collection === 'pearl' ? '🐚' : '✦'} {item.collection || 'signature'}
                </span>
              )}
            </div>
            <p onClick={() => toggleBestseller(item._id, item.bestseller)} className='text-center cursor-pointer'>
              {item.bestseller ? '⭐' : '☆'}
            </p>
            <p onClick={() => removeProduct(item._id)} className='text-lg text-right cursor-pointer md:text-center'>X</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default List