'use client'
import { Heart, Info, Minus, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { deleteCart, getCart } from '@/lib/api/shop'
import Image from 'next/image'
import { toast } from 'sonner'

export interface CartResponse {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    items: Item[];
    total: number;
}

export interface Item {
    id: number;
    quantity: number;
    price: string;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    salePrice: number;
    images: string[];
    reviewCount: number;
}

function Cart() {
    const [cart, setCart] = useState<Item[]>([])
    const [quantity, setQuantity] = useState(1)

    const handleQuantityChange = (value: number) => {
        if (value > 0) {
            setQuantity(value)
        }
    }

    const handleDelete = async (id: number) => {
        const onSuccess = () => {
            toast.success('Item removed from cart')
            setCart(cart.filter((item) => item.id !== id))
        }
        await deleteCart(id.toString(), onSuccess)
    }

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCart()
            setCart(cart.items)
        }
        fetchCart()
    }, [])
    return (
        <div className='w-full'>
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                <p className='font-bold'>My Cart</p>
                <div className='flex flex-col md:flex-row gap-2'>
                    <Button variant="outline">
                        <Heart /> Save Cart For Later
                    </Button>

                    <Button>
                        <Trash />
                    </Button>
                </div>
            </div>

                <div className='bg-gray-100 h-10 w-full flex items-center justify-center mt-4'>
                    <div className='flex flex-row gap-2 items-center'>
                        <Info />
                        <p className='text-sm'>By proceeding you won't be charged yet.</p>
                    </div>
            </div>

            <div className='flex flex-col gap-4 p-4 border border-gray-200 rounded-2xl mt-4'>
                {cart.length > 0 && cart.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col md:flex-row gap-2'>
                            <div className='w-1/2'>
                                <Image src={item.product.images[0]} alt={item.product.name} width={100} height={100} />
                            </div>
                            <div className='w-1/2'>
                                <p className='text-sm font-bold'>{item.product.name}</p>
                                <p className='text-sm text-gray-500'>{item.product.price}</p>
                            </div>

                            <div className='flex flex-row gap-2 items-center mb-4'>
                                <Button variant='outline' onClick={() => handleQuantityChange(quantity - 1)}>
                                    <Minus />
                                </Button>

                                <span className='text-sm font-bold bg-gray-100 rounded-md w-20 h-10 flex items-center justify-center'>{quantity}</span>

                                <Button variant='outline' onClick={() => handleQuantityChange(quantity + 1)}>
                                    <Plus />
                                </Button>

                                <Button size='icon' onClick={() => handleDelete(item.id)}>
                                    <Trash />
                                </Button>
                            </div>
                        </div>
                    )
                })}
                {cart.length === 0 && <p>No items in cart</p>}
            </div>
        </div>
    )
}

export default Cart