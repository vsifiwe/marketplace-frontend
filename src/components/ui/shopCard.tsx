import React from 'react'
import { Button } from './button'
import { Heart, Phone, ShoppingBag, Star, User } from 'lucide-react'
import Image from 'next/image'
import CategorySelector from './categorySelector'
import ProductCard from './productCard'

function ShopCard() {
    return (
        <div className='border rounded-2xl pt-4 m-8'>
            {/* Header section */}
            <div className='flex flex-row items-center justify-between border-b border-gray-200 px-4 pb-4'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src='https://placehold.co/100x100' alt='shop' width={75} height={75} className='rounded-3xl' />
                    <div>
                        <p>Shop Name</p>
                        <p>Shop Description</p>
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
                        <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>
                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>Categories</p>
                        <div className='flex flex-row items-center gap-2 m-2'>
                            <CategorySelector
                                name='Category 1'
                            />
                            <CategorySelector
                                name='Category 2'
                            />
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
                    <ProductCard name='Product 1' price={100} salePrice={100} image='https://placehold.co/100x100' />
                    <ProductCard name='Product 2' price={100} salePrice={100} image='https://placehold.co/100x100' />
                    <ProductCard name='Product 3' price={100} salePrice={100} image='https://placehold.co/100x100' />
                </div>
            </div>
        </div>
    )
}

export default ShopCard