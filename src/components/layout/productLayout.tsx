import React from 'react'
import ProductCard from '../ui/productCard'

const products = [
    {
        name: 'Product 1',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 2',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 3',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 4',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 5',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 6',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 7',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 8',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 9',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 10',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
    {
        name: 'Product 11',
        price: 10000,
        salePrice: 8000,
        image: 'https://placehold.co/300x300'
    },
]

function ProductLayout() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {products.map((product) => (
                <ProductCard key={product.name} {...product} />
            ))}
        </div>
    )
}

export default ProductLayout