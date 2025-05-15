import React from 'react'
import { Button } from './button'
import { Heart, Phone, ShoppingBag, Star, User } from 'lucide-react'
import Image from 'next/image'
import CategorySelector from './categorySelector'
import ProductCard from './productCard'
import { ShopApiResponse } from '@/lib/api/types'

function ShopCard({ shop }: { shop: ShopApiResponse }) {
    return (
        <div className='border rounded-2xl pt-4 m-8'>
            {/* Header section */}
            <div className='flex flex-row items-center justify-between border-b border-gray-200 px-4 pb-4'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src={shop.image} alt='shop' width={75} height={75} className='rounded-3xl' />
                    <div>
                        <p>{shop.name}</p>
                        <p>{shop.products.length} product(s)</p>
                    </div>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <Button>
                        <User /> View profile
                    </Button>
                    <Button size='icon' variant='outline'>
                        <Phone />
                    </Button>
                    <Button size='icon' variant='outline'>
                        <Heart />
                    </Button>
                </div>
            </div>

            {/* Body section */}
            <div className='flex flex-row items-center justify-between px-4'>
                <div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>About</p>
                        <p className='text-sm text-gray-500'>{shop.description}</p>
                    </div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>Categories</p>
                        <div className='flex flex-row items-center gap-2 m-2'>
                            {shop.categories.map((category) => (
                                <CategorySelector
                                    key={category.id}
                                    name={category.name}
                                />
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>Reviews</p>
                        <div className='flex flex-row items-center gap-2'>
                            <Star color='#C1CF16' /> 4.9 (14 reviews)
                        </div>
                    </div>

                    <Button variant='outline' className='mt-4'>
                        <ShoppingBag color='#C1CF16'/> <span className='ml-2 font-semibold'>Explore products</span>
                    </Button>
                </div>

                <div className='flex flex-row'>
                    {shop.products.map((product) => (
                        <div key={product.id}>
                            <ProductCard name={product.name} price={product.price} salePrice={product.salePrice} images={product.images} id={product.id} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ShopCard