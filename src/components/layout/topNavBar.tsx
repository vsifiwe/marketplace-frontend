
'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Store, Heart, ShoppingCart, Search, House, ChevronDown, User, LogOut } from 'lucide-react'
import Cart from '@/components/ui/cart'
import { useRouter } from 'next/navigation'

function TopNavBar() {
    const router = useRouter()
    return (
        <div className='flex justify-between items-center p-4 bg-white border-b border-gray-200'>
            <div className='flex items-center gap-4'>
                <div>
                    <Image src="/images/mark8.png" alt="logo" width={50} height={50} />
                </div>
                <div className='flex flex-col items-start justify-center mr-4'>
                    <p className='text-xl font-bold'>Mark8</p>
                    <p className='text-xs text-gray-500'>By Awesomity Lab</p>
                </div>
                <Button variant="ghost" onClick={() => router.push('/')}>
                    <House /> Home
                </Button>
                <Button variant="ghost" onClick={() => router.push('/stores')}>
                    <Store /> Stores
                </Button>

            </div>
            <div className='flex items-center gap-4'>
                <Button variant="ghost" size='icon'>
                    <Search />
                </Button>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="ghost">
                            <ShoppingCart /> My Cart
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-full'>
                        <Cart />
                    </PopoverContent>
                </Popover>
                <Button variant="ghost">
                    <Heart /> Saved
                </Button>
                <Button variant="outline">
                    Open A Store <Store color='#C1CF16' />
                </Button>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button variant="outline" className='flex items-center gap-2'>
                            <User /> <ChevronDown />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-full'>
                        <div>
                            <Button variant="ghost" onClick={() => {
                                localStorage.removeItem('token')
                                localStorage.removeItem('role')
                                router.push('/')
                            }}>
                                <LogOut /> Logout
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}

export default TopNavBar