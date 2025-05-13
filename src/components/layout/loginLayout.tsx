import React from 'react'
import Image from 'next/image'
import LoginForm from '../forms/loginForm'

function LoginLayout() {
  return (
    <div className='flex flex-row w-full h-full'>
      {/* Branding section - hidden on small screens */}
      <div className='hidden md:flex w-1/2 bg-gray-100 rounded-l-lg p-8 flex-col justify-between min-h-[400px]'>
        <Image src="/images/mark8.png" alt="logo" width={75} height={75} className='mb-4' />
        <div>
          <div className='flex flex-col items-start justify-center'>
            <h2 className='text-2xl font-bold'>Mark8</h2>
            <p className='text-sm text-gray-500'>By Awesomity Lab</p>
          </div>
        </div>
        <div className='text-sm text-gray-500'>
          © 2024 Awesomity Lab
        </div>
      </div>

      {/* Login form - full width on small screens, half width on medium and up */}
      <div className='w-full md:w-1/2 bg-white p-4 md:p-8 rounded-lg md:rounded-l-none md:rounded-r-lg'>
        {/* Show logo on small screens */}
        <div className='md:hidden flex items-center gap-2 mb-6'>
          <Image src="/images/mark8.png" alt="logo" width={40} height={40} />
          <div>
            <h2 className='text-xl font-bold'>Mark8</h2>
            <p className='text-xs text-gray-500'>By Awesomity Lab</p>
          </div>
        </div>
        <h2 className='text-2xl font-bold mb-8'>Login</h2>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginLayout