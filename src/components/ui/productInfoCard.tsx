'use client'
import React, { useState } from 'react'
import { Button } from './button'
import { EllipsisVertical, Heart, Minus, Phone, Plus, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'

function ProductInfoCard() {
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (value: number) => {
        if (value > 0) {
            setQuantity(value)
        }
    }

    function formatCurrency(amount: number, currency: string = 'Rwf') {
        return new Intl.NumberFormat('en-UG').format(amount) + ' ' + currency;
    }

    return (
        <div className='w-full h-full border border-gray-200 rounded-2xl overflow-hidden flex flex-col'>
            {/* header */}
            <div className='flex flex-row justify-between items-center border-b border-gray-200 pb-4 px-4 pt-4'>
                <div className='flex flex-row gap-2 items-center gap-8'>
                    <h2 className='text-lg font-bold'>Product Details</h2>
                    <span className='font-bold text-xs bg-gray-200 rounded-md px-2 py-1'>IN STOCK</span>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Button variant='outline'>
                        <Heart color='#C1CF16' /> Save
                    </Button>
                    <EllipsisVertical />
                </div>
            </div>

            {/* product info */}
            <div className='flex flex-row gap-4 p-4 flex-grow'>
                <div className='w-1/2 h-full flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>Product 5</h1>
                    <div className='flex flex-row gap-2 mb-4'>
                        <span className='font-bold text-[#C1CF16]'>{formatCurrency(10000)}</span>
                        <span className='font-bold text-gray-300 line-through'>{formatCurrency(15000)}</span>
                    </div>

                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>Description</p>
                        <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </div>


                    <div className='flex flex-col gap-2 mb-4'>
                        <p className='text-lg font-semibold'>Reviews</p>
                        <div className='flex flex-row items-center gap-2'>
                            <Star color='#C1CF16' /> 4.9 (14 reviews)
                        </div>
                    </div>

                    {/* quantity selector */}
                    <div className='flex flex-row gap-2 items-center mb-4'>
                        <Button variant='outline' onClick={() => handleQuantityChange(quantity - 1)}>
                            <Minus />
                        </Button>

                        <span className='text-sm font-bold bg-gray-100 rounded-md w-20 h-10 flex items-center justify-center'>{quantity}</span>

                        <Button variant='outline' onClick={() => handleQuantityChange(quantity + 1)}>
                            <Plus />
                        </Button>

                        <Button>
                            <ShoppingCart /> Add to cart
                        </Button>
                    </div>
                </div>
            </div>
            {/* Store info section that sticks to bottom of the card */}
            <div className='flex flex-row gap-2 border-t border-gray-200 p-6'>
                <div className='flex flex-row gap-2 items-center'>
                    <p className='text-lg font-semibold'>Store info</p>
                    <Image src='https://placehold.co/100x100' alt='store' width={50} height={50} className='rounded-full' />
                    <p>Store Name</p>
                </div>
                <Button variant='outline' className='ml-auto'>
                    <Phone color='#C1CF16' /> <span className='font-bold'>Contact Store</span>
                </Button>
            </div>
        </div>
    )
}

export default ProductInfoCard