import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
//for notifications

const COLLECTIONS = ['signature', 'flora', 'luna', 'pearl']

const List = ({ token }) => {
    const [list, setList] = useState([])
    const [editingItem, setEditingItem] = useState(null)
    const [editingCollections, setEditingCollections] = useState([])

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const removeProduct = async (id) => {
        try {
            const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { token } })
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList()
            }
        } catch (error) {
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

    const openEdit = (item) => {
        setEditingItem(item)
        const cols = Array.isArray(item.collection) ? item.collection : ['signature']
        setEditingCollections([...cols])
    }

    const toggleCol = (val) => {
        setEditingCollections(prev =>
            prev.includes(val) ? prev.filter(c => c !== val) : [...prev, val]
        )
    }

    const handleSave = async () => {
        if (!editingItem) return
        try {
            const response = await axios.post(
                backendUrl + '/api/product/update',
                { id: editingItem._id, collection: editingCollections },
                { headers: { token } }
            )
            if (response.data.success) {
                toast.success('Collections saved!')
                setEditingItem(null)
                await fetchList()
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => { fetchList() }, [])

    return (
        <>
            {/* Edit Modal */}
            {editingItem && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
                    <div className='p-6 bg-white rounded-lg w-80'>
                        <h3 className='mb-1 font-semibold'>{editingItem.name}</h3>
                        <p className='mb-4 text-xs text-gray-500'>Select collections:</p>
                        <div className='flex flex-col gap-2 mb-4'>
                            {COLLECTIONS.map(col => (
                                <label key={col} className='flex items-center gap-2 cursor-pointer'>
                                    <input
                                        type='checkbox'
                                        checked={editingCollections.includes(col)}
                                        onChange={() => toggleCol(col)}
                                    />
                                    <span className='text-sm'>
                                        {col === 'flora' ? '💐 Flora' : col === 'luna' ? '🌙 Luna' : col === 'pearl' ? '🐚 Pearl & Sea' : '✦ Signature'}
                                    </span>
                                </label>
                            ))}
                        </div>
                        <div className='flex gap-2'>
                            <button onClick={handleSave} className='flex-1 py-2 text-sm text-white bg-black rounded'>
                                Save
                            </button>
                            <button onClick={() => setEditingItem(null)} className='flex-1 py-2 text-sm border rounded'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Product List */}
            <p className='mb-2'>All Products List</p>
            <div className='flex flex-col gap-2'>
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Collections</b><b className='text-center'>⭐</b><b className='text-center'>Delete</b>
                </div>
                {list.map((item, index) => {
                    const cols = Array.isArray(item.collection) ? item.collection : ['signature']
                    return (
                        <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
                            <img className='w-12' src={item.image[0]} alt='' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            <span
                                onClick={() => openEdit(item)}
                                className='px-2 py-1 text-xs bg-gray-100 rounded cursor-pointer hover:bg-gray-200'
                            >
                                {cols.map(c => c === 'flora' ? '💐' : c === 'luna' ? '🌙' : c === 'pearl' ? '🐚' : '✦').join('')}
                            </span>
                            <p onClick={() => toggleBestseller(item._id, item.bestseller)} className='text-center cursor-pointer'>
                                {item.bestseller ? '⭐' : '☆'}
                            </p>
                            <p onClick={() => removeProduct(item._id)} className='text-lg text-center cursor-pointer'>X</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default List