'use client'
import { Heart, Info, Minus, Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Button } from './button'
import { deleteCart, getCart } from '@/lib/api/shop'
import Image from 'next/image'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { humanReadableAmount } from '@/lib/utils'

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
    const router = useRouter()

    const handleQuantityChange = (id: number, action: 'increment' | 'decrement') => {
        if (cart.find((item) => item.product.id === id)?.quantity === 0 && action === 'decrement') {
            return
        }
        const newCart = cart.map((item) => item.product.id === id ? { ...item, quantity: action === 'increment' ? item.quantity + 1 : item.quantity - 1 } : item)
        setCart(newCart)
    }

    const handleDelete = async (id: number) => {
        const onSuccess = () => {
            toast.success('Item removed from cart')
            setCart(cart.filter((item) => item.product.id !== id))
        }
        await deleteCart(id.toString(), onSuccess)
    }

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCart()
            console.log(cart)
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
                                <p className='text-sm text-gray-500'>{humanReadableAmount(item.product.price)} Rwf</p>
                            </div>

                            <div className='flex flex-row gap-2 items-center mb-4'>
                                <Button variant='outline' onClick={() => handleQuantityChange(item.product.id, 'decrement')}>
                                    <Minus />
                                </Button>

                                <span className='text-sm font-bold bg-gray-100 rounded-md w-20 h-10 flex items-center justify-center'>{item.quantity}</span>

                                <Button variant='outline' onClick={() => handleQuantityChange(item.product.id, 'increment')}>
                                    <Plus />
                                </Button>

                                <Button size='icon' onClick={() => handleDelete(item.product.id)}>
                                    <Trash />
                                </Button>
                            </div>
                        </div>
                    )
                })}
                {cart.length === 0 && <p>No items in cart</p>}
            </div>

            <div className='flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-2xl mt-4 justify-between'>
                <div>
                    <p className='text-sm'>Total</p>
                    <p className='font-bold text-lg'>{humanReadableAmount(cart.reduce((acc, item) => acc + Number(item.product.price) * item.quantity, 0))} Rwf</p>
                </div>
                <Button onClick={() => router.push('/shop/checkout')}>Checkout</Button>
            </div>
        </div>
    )
}

export default Cart