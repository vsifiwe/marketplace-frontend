import React from 'react'
import RegisterSection from '@/components/ui/registerSection'
import LoginLayout from '@/components/layout/loginLayout'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 bg-[url("/images/login-bg.png")] bg-cover bg-center bg-no-repeat'>
            <div className='flex flex-col items-center justify-center w-1/2 pb-4 h-1/2'>
                <LoginLayout />
            </div>
            <RegisterSection />
        </div>
    )
}

export default page