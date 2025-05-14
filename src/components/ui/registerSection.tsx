'use client'

import React from 'react'
import { MoveRight } from 'lucide-react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

function RegisterSection() {
    const router = useRouter()

    return (
        <div className='flex flex-col md:flex-row justify-between items-center w-1/2 p-8 bg-white rounded-lg'>
            <div className='flex flex-col items-start justify-center'>
                <h3 className='text-2xl font-bold'>Already have an account?</h3>
                <p className='text-sm text-gray-500'>Login to your account</p>
            </div>
            <div>
                <Button variant="secondary" onClick={() => router.push('/auth/register')}>
                    Register Here <MoveRight color='#C1CF16' />
                </Button>
            </div>
        </div>
    )
}

export default RegisterSection  