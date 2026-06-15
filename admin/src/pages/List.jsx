import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const COLLECTIONS = [
    { value: 'signature', label: '✦ Signature' },
    { value: 'flora', label: '💐 Flora' },
    { value: 'luna', label: '🌙 Luna' },
    { value: 'pearl', label: '🐚 Pearl' },
]

const List = ({ token }) => {
    const [list, setList] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [editingCollections, setEditingCollections] = useState([])

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

    const startEditing = (item) => {
        setEditingId(item._id)
        const cols = Array.isArray(item.collection) ? item.collection : [item.collection || 'signature']
        setEditingCollections(cols)
    }

    const toggleCollection = (value) => {
        setEditingCollections(prev =>
            prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
        )
    }

    const saveCollections = async (id) => {
        try {
            console.log('Saving:', id, editingCollections)
            const response = await axios.post(
                backendUrl + '/api/product/update',
                { id, collection: editingCollections },
                { headers: { token } }
            )
            console.log('Response:', response.data)
            if (response.data.success) {
                toast.success('Collections updated!')
                setEditingId(null)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log('Error:', error)
            toast.error(error.message)
        }
    }

    useEffect(() => { fetchList() }, [])

    return (
        <>
            <p className='mb-2'>All Products List</p>
            <div className='flex flex-col gap-2'>
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_2fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Collections</b><b className='text-center'>⭐</b><b className='text-center'>Delete</b>
                </div>
                {list.map((item, index) => {
                    const cols = Array.isArray(item.collection) ? item.collection : [item.collection || 'signature']
                    return (
                        <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_2fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
                            <img className='w-12' src={item.image[0]} alt='' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            <div onClick={(e) => e.stopPropagation()}>
                                {editingId === item._id ? (
                                    <div className='flex flex-col gap-1'>
                                        {COLLECTIONS.map(col => (
                                            <label key={col.value} className='flex items-center gap-1 text-xs cursor-pointer'>
                                                <input
                                                    type='checkbox'
                                                    checked={editingCollections.includes(col.value)}
                                                    onChange={() => toggleCollection(col.value)}
                                                />
                                                {col.label}
                                            </label>
                                        ))}
                                        <button
                                            onClick={() => saveCollections(item._id)}
                                            className='mt-1 px-2 py-0.5 bg-black text-white text-xs rounded'
                                        >
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <span
                                        onClick={() => startEditing(item)}
                                        className='px-2 py-1 text-xs bg-gray-100 rounded cursor-pointer hover:bg-gray-200'
                                    >
                                        {cols.map(c =>
                                            c === 'flora' ? '💐' : c === 'luna' ? '🌙' : c === 'pearl' ? '🐚' : '✦'
                                        ).join(' ')} {cols.join(', ')}
                                    </span>
                                )}
                            </div>
                            <p onClick={() => toggleBestseller(item._id, item.bestseller)} className='text-center cursor-pointer'>
                                {item.bestseller ? '⭐' : '☆'}
                            </p>
                            <p onClick={() => removeProduct(item._id)} className='text-lg text-right cursor-pointer md:text-center'>X</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List