'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ui/productCard'
import { getProducts } from '@/lib/api/shop'
import { Product } from '@/lib/api/types'

function ProductLayout() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts()
            setProducts(products)
        }
        fetchProducts()
    }, [])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}

export default ProductLayout