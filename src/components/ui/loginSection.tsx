'use client'

import React from 'react'
import { MoveRight } from 'lucide-react'
import { Button } from './button'
import { useRouter } from 'next/navigation'

function LoginSection() {
    const router = useRouter()

    return (
        <div className='flex flex-col justify-between items-center w-1/2 p-8 bg-white rounded-lg'>
            <div className='flex flex-col items-start justify-center'>
                <h3 className='text-2xl font-bold'>New Here?</h3>
                <p className='text-sm text-gray-500'>Create an account to get started</p>
            </div>
            <div>
                <Button variant="secondary" onClick={() => router.push('/auth')}>
                    Login Here <MoveRight color='#C1CF16' />
                </Button>
            </div>
        </div>
    )
}

export default LoginSection  