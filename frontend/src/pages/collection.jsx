import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { useSearchParams } from 'react-router-dom'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relevant')
  const [searchParams] = useSearchParams()
  const theme = searchParams.get('theme')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (theme) {
      productsCopy = productsCopy.filter(item => {
        const cols = Array.isArray(item.collection) ? item.collection : [item.collection]
        return cols.includes(theme)
      })
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    // Apply Sorting
    switch (sortType) {
      case 'low-high':
        productsCopy.sort((a, b) => a.price - b.price)
        break
      case 'high-low':
        productsCopy.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    setFilterProducts(productsCopy)
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, products, search, showSearch, theme, sortType])

  return (
    <div className='flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10'>
      {/* Filter sidebar */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='flex items-center gap-2 my-2 text-xl cursor-pointer'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        {/* Theme indicator */}
        {theme && (
          <div className='px-3 py-2 mb-4 text-sm font-medium rounded-lg' style={{
            background: theme === 'luna' ? '#1A1A2E' : theme === 'flora' ? '#FFF0F5' : '#E0F4F8',
            color: theme === 'luna' ? '#C9A84C' : theme === 'flora' ? '#7B3F4E' : '#0D4F5C'
          }}>
            {theme === 'flora' ? '💐 Flora Collection' : theme === 'luna' ? '🌙 Luna Collection' : '🐚 Pearl & Sea'}
          </div>
        )}

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Rings'} checked={category.includes('Rings')} onChange={toggleCategory} /> Rings</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Necklaces'} checked={category.includes('Necklaces')} onChange={toggleCategory} /> Necklaces</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Earrings'} checked={category.includes('Earrings')} onChange={toggleCategory} /> Earrings</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Bangles'} checked={category.includes('Bangles')} onChange={toggleCategory} /> Bangles</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Bracelets'} checked={category.includes('Bracelets')} onChange={toggleCategory} /> Bracelets</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Anklets'} checked={category.includes('Anklets')} onChange={toggleCategory} /> Anklets</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Pendants'} checked={category.includes('Pendants')} onChange={toggleCategory} /> Pendants</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Bouquets'} checked={category.includes('Bouquets')} onChange={toggleCategory} /> Jewelry Bouquets</label>
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Gold'} checked={subCategory.includes('Gold')} onChange={toggleSubCategory} /> Gold</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Silver'} checked={subCategory.includes('Silver')} onChange={toggleSubCategory} /> Silver</label>
            <label className='flex gap-2 cursor-pointer'><input className='w-3' type='checkbox' value={'Rose Gold'} checked={subCategory.includes('Rose Gold')} onChange={toggleSubCategory} /> Rose Gold</label>
          </div>
        </div>
      </div>

      {/* Products section */}
      <div className='flex-1'>
        <div className='flex justify-between mb-4 text-base sm:text-2xl'>
          <Title text1={'ALL'} text2={theme ? theme.toUpperCase() : 'TREASURES'} />
          <select onChange={(e) => setSortType(e.target.value)} className='px-2 text-sm border-2 border-gray-300'>
            <option value='relevant'>Sort by: Relevant</option>
            <option value='low-high'>Sort by: Low to High</option>
            <option value='high-low'>Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>

        {filterProducts.length === 0 && (
          <div className='py-20 text-center text-gray-400'>
            <p className='mb-4 text-4xl'>✦</p>
            <p className='text-xl font-display'>No pieces found in this collection yet</p>
            <p className='mt-2 text-sm'>Check back soon as we add more treasures</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Collection
