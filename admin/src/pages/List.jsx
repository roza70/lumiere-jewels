import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {
    const [list, setList] = useState([])
    const [editingItem, setEditingItem] = useState(null)
    const [editingCollections, setEditingCollections] = useState([])

    const collectionOptions = ['signature', 'flora', 'luna', 'pearl']

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setList(response.data.products)
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
                await fetchList()
                toast.success('Updated!')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const openEdit = (item) => {
        setEditingItem(item)
        if (Array.isArray(item.collection)) {
            setEditingCollections(item.collection)
        } else if (item.collection) {
            setEditingCollections([item.collection])
        } else {
            setEditingCollections(['signature'])
        }
    }

    const toggleCol = (val) => {
        if (editingCollections.indexOf(val) > -1) {
            setEditingCollections(editingCollections.filter(function (c) { return c !== val }))
        } else {
            setEditingCollections(editingCollections.concat([val]))
        }
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
                await fetchList()
                setEditingItem(null)
                toast.success('Saved!')
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(function () {
        fetchList()
    }, [])

    const getEmoji = function (c) {
        if (c === 'flora') return '\uD83D\uDC90'
        if (c === 'luna') return '\uD83C\uDF19'
        if (c === 'pearl') return '\uD83D\uDC1A'
        return '\u2726'
    }

    const getLabel = function (c) {
        if (c === 'flora') return 'Flora'
        if (c === 'luna') return 'Luna'
        if (c === 'pearl') return 'Pearl & Sea'
        return 'Signature'
    }

    return (
        <div>
            {editingItem ? (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '8px', width: '320px' }}>
                        <h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{editingItem.name}</h3>
                        <p style={{ fontSize: '12px', color: '#888', marginBottom: '16px' }}>Select collections:</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                            {collectionOptions.map(function (col) {
                                return (
                                    <label key={col} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                        <input
                                            type='checkbox'
                                            checked={editingCollections.indexOf(col) > -1}
                                            onChange={function () { toggleCol(col) }}
                                        />
                                        <span style={{ fontSize: '14px' }}>{getEmoji(col)} {getLabel(col)}</span>
                                    </label>
                                )
                            })}
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <button onClick={handleSave} style={{ flex: 1, padding: '8px', background: 'black', color: 'white', fontSize: '14px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
                                Save
                            </button>
                            <button onClick={function () { setEditingItem(null) }} style={{ flex: 1, padding: '8px', border: '1px solid #ccc', fontSize: '14px', borderRadius: '4px', background: 'white', cursor: 'pointer' }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}

            <p className='mb-2'>All Products List</p>
            <div className='flex flex-col gap-2'>
                <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
                    <b>Image</b><b>Name</b><b>Category</b><b>Price</b><b>Collections</b><b className='text-center'>Bestseller</b><b className='text-center'>Delete</b>
                </div>
                {list.map(function (item, index) {
                    let cols = []
                    if (Array.isArray(item.collection)) {
                        cols = item.collection
                    } else if (item.collection) {
                        cols = [item.collection]
                    } else {
                        cols = ['signature']
                    }
                    return (
                        <div key={index} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
                            <img className='w-12' src={item.image[0]} alt='' />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p>{currency}{item.price}</p>
                            <span
                                onClick={function () { openEdit(item) }}
                                className='px-2 py-1 text-xs bg-gray-100 rounded cursor-pointer hover:bg-gray-200'
                            >
                                {cols.map(getEmoji).join(' ')}
                            </span>
                            <p onClick={function () { toggleBestseller(item._id, item.bestseller) }} className='text-lg text-center cursor-pointer'>
                                {item.bestseller ? '\u2B50' : '\u2606'}
                            </p>
                            <p onClick={function () { removeProduct(item._id) }} className='text-lg text-center cursor-pointer'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List