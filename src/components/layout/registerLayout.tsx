import React from 'react'
import Image from 'next/image'
import RegisterForm from '../forms/registerForm'

function RegisterLayout() {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='w-1/2 bg-gray-100 rounded-l-lg p-8 flex flex-col justify-between min-h-[400px]'>
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
      <div className='w-1/2 bg-white p-8 rounded-r-lg'>
        <h2 className='text-2xl font-bold mb-8'>Register</h2>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterLayout