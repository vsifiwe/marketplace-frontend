import React from 'react'
import ShopCard from '../ui/shopCard'

const shops = [
    {
        id: 1,
        name: 'Shop 1',
        totalProducts: 10,
        image: 'https://placehold.co/100x100',
        products: [
            {
                id: 1,
                name: 'Product 1',
                price: 100,
                image: 'https://placehold.co/100x100',
            }
        ]
    }, {
        id: 2,
        name: 'Shop 2',
        totalProducts: 10,
        image: 'https://placehold.co/100x100',
        products: [
            {
                id: 2,
                name: 'Product 2',
                price: 100,
                image: 'https://placehold.co/100x100',
            },
            {
                id: 3,
                name: 'Product 3',
                price: 100,
                image: 'https://placehold.co/100x100',
            }
        ]
    }
]

function ShopLayout() {
    return (
        <div>
            {shops.map((shop) => (
                <div key={shop.id}>
                    <ShopCard />
                </div>
            ))}
        </div>
    )
}

export default ShopLayout