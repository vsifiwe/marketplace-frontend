import React from 'react'
import Image from 'next/image'
import { Button } from './button';
import { Heart, ShoppingCart } from 'lucide-react';

function ProductCard(
    {
        name,
        price,
        salePrice,
        image,
    }: {
        name: string,
        price: number,
        salePrice: number,
        image: string,
    }
) {
    function formatCurrency(amount: number, currency: string = 'RWF') {
        return new Intl.NumberFormat('en-UG').format(amount) + ' ' + currency;
    }

    return (
        <div className='border rounded-lg m-8 overflow-hidden'>
            <div className=''>
                <Image src={image} alt={name} width={300} height={300} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-row items-center justify-between gap-2 p-4'>
                <div>
                    <p className='text-sm font-medium mb-2'>{name}</p>
                    <div className='flex flex-row items-center justify-center gap-2'>
                        <p className='text-sm font-medium text-[#C1CF16]'>{formatCurrency(salePrice)}</p>
                        <p className='text-sm font-medium text-gray-500 line-through'>{formatCurrency(price)}</p>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <Button size='icon' variant='outline'>
                        <ShoppingCart />
                    </Button>
                    <Button size='icon' variant='outline'>
                        <Heart />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard