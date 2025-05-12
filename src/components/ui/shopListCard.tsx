import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

function ShopListCard({ image, name, totalProducts }: { image: string, name: string, totalProducts: number }) {
    return (
        <div className='flex flex-row items-center justify-between px-4 py-2'>
            <div className='flex flex-row items-center justify-center gap-2'>
                <Image src={image} alt='shop' width={75} height={75} className='rounded-3xl' />
                <div className='flex flex-col ml-2'>
                    <p className='text-md font-semibold'>{name}</p>
                    <p className='text-xs text-gray-500'>{totalProducts} Products</p>
                </div>
            </div>
            <ChevronRight />
        </div>
    )
}

export default ShopListCard