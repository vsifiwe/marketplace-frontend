'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from './button'

const images = [
    'https://placehold.co/300x301',
    'https://placehold.co/300x302',
    'https://placehold.co/300x303',
    'https://placehold.co/300x304',
]

function ProductCarousel() {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className='flex flex-col gap-4 rounded-2xl overflow-hidden w-7/8 h-full border-2 border-gray-200'>
            <Image src={images[currentImage]} alt='product-carousel' width={50} height={50} className='object-cover w-full' />
            <div className='flex flex-row gap-2 overflow-x-auto w-full p-4'>
                {images.map((image, index) => (
                    <Button key={index} variant='ghost' className='p-0 w-20 h-20 rounded-lg overflow-hidden' onClick={() => setCurrentImage(index)}>
                        <Image src={image} alt='product-carousel' width={50} height={50} className='object-cover w-full' />
                    </Button>
                ))}
            </div>

        </div>
    )
}

export default ProductCarousel