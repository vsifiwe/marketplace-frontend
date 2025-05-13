import React from 'react'
import ProductCarousel from '../ui/productCarousel'
import ProductInfoCard from '../ui/productInfoCard'

function ProductItemLayout() {
  return (
    <div className='w-full h-full flex flex-row gap-4 p-4'>

        <div className='w-2/5'>
            <ProductCarousel />
        </div>

        <div className='w-3/5'>
            <ProductInfoCard />
        </div>

    </div>
  )
}

export default ProductItemLayout