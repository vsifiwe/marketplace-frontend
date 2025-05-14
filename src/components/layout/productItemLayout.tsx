import React from 'react'
import ProductCarousel from '../ui/productCarousel'
import ProductInfoCard from '../ui/productInfoCard'
import { Product as ProductType } from '../columns/products'

function ProductItemLayout({ product }: { product: ProductType }) {
  return (
    <div className='w-full h-full flex flex-col md:flex-row gap-4 p-4'>

        <div className='w-2/5'>
            <ProductCarousel images={product.images} />
        </div>

        <div className='w-3/5'>
            <ProductInfoCard product={product} />
        </div>

    </div>
  )
}

export default ProductItemLayout