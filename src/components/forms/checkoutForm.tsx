'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner'
import { Loader2, Phone, ShoppingCart } from 'lucide-react'
import { LockKeyhole } from 'lucide-react'
import { Form, FormMessage, FormControl, FormLabel, FormItem, FormField } from '@/components/ui/form'
import { IconInput } from '../ui/input'
import { Mail } from 'lucide-react'
import { Button } from '../ui/button'
import { getCart, Order, placeOrder } from '@/lib/api/shop'
import { CartResponse } from '../ui/cart'
import { humanReadableAmount } from '@/lib/utils'

function CheckOutForm() {

    const [cart, setCart] = useState<CartResponse>({
        id: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [],
        total: 0
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formSchema = z.object({
        street: z.string().min(1, { message: "Street is required" }),
        city: z.string().min(1, { message: "City is required" }),
        phone: z.string().min(10, { message: "Phone number must be 10 digits" }).max(10, { message: "Phone number must be 10 digits" }).regex(/^\d+$/, { message: "Phone number must be numbers only" }),
        email: z.string().email({ message: "Invalid email address" }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            street: "",
            city: "",
            phone: "",
            email: "",
        },
    })

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCart()
            setCart(cart)
        }
        fetchCart()
    }, [])

    function onSubmit(values: z.infer<typeof formSchema>) {
        // load for 10 seconds before responding to mock payment
        setIsLoading(true)

        const order: Order = {
            street: values.street,
            city: values.city,
            phone: values.phone,
            email: values.email,
            items: cart.items.map((item) => ({
                productId: item.product.id,
                quantity: item.quantity
            })),
        }

        console.log(order)

        setTimeout(() => {
            placeOrder(order, () => {
                toast.success("Order placed successfully")
                setCart({
                    id: 0,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    items: [],
                    total: 0
                })
                setIsLoading(false)
            })
        }, 2000)
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-semibold text-gray-900 mb-8">Checkout</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Address Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="street"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Street</FormLabel>
                                            <FormControl>
                                                <IconInput placeholder="Enter your street address" {...field} leftIcon={Mail} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <IconInput placeholder="Enter city" {...field} leftIcon={LockKeyhole} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <IconInput placeholder="Enter phone number" {...field} leftIcon={Phone} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <IconInput placeholder="Enter email" {...field} leftIcon={Mail} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end items-center gap-4">
                            <p className='text-lg font-bold text-gray-500'>Total: {humanReadableAmount(cart.total)} Rwf</p>
                            <Button type="submit" className="w-full md:w-auto" disabled={isLoading}>
                                {isLoading ?
                                    <div className='flex items-center gap-2'>
                                        <Loader2 className="animate-spin" />
                                        <p>Confirm payment...</p>
                                    </div> :
                                    <div className='flex items-center gap-2'>
                                        <p>Place Order</p>
                                        <ShoppingCart className="ml-2 h-4 w-4" />
                                    </div>
                                }
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default CheckOutForm