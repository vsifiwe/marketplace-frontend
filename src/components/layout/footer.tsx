import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ArrowRight, Instagram, Linkedin, Mail, X, Youtube } from 'lucide-react'
import { IconInput } from '../ui/input'

function Footer() {
    return (
        <div>
            {/* shop registration section */}
            <div className='flex flex-col md:flex-row justify-between items-center p-8 bg-gray-100 rounded-3xl m-8 gap-4'>
                <h1 className='text-2xl font-bold'><span className='text-[#C1CF16]'>Open</span> your Store</h1>

                <div className='flex flex-row items-center gap-4 w-1/2'>
                    <IconInput placeholder='Enter your email' leftIcon={Mail} className='w-full'/>
                    <Button>
                        Register <ArrowRight />
                    </Button>
                </div>
            </div>

            {/* footer links */}
            <div className='flex flex-row items-center justify-between bg-gray-100 p-8 w-full'>
                <div className='flex flex-row items-center gap-2'>
                    <Image src='/images/mark8.png' alt='logo' width={50} height={50} />
                    <p className='text-xl font-bold'>Mark8</p>
                </div>
                <p className='font-light text-gray-800'><span className='font-bold'>© 2025. Mark8 </span>By Awesomity Ltd</p>
                <div className='flex flex-row items-center gap-2'>
                    <X />
                    <Instagram />
                    <Youtube />
                    <Linkedin />
                </div>
            </div>
        </div>
    )
}

export default Footer