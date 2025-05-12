import React from 'react'
import { IconInput } from '../ui/input'
import { Search, SlidersVertical } from 'lucide-react'
import CategorySelector from '../ui/categorySelector'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center h-full m-8 p-12 bg-[#1C2834] rounded-3xl'>
        <div className='flex flex-col items-center justify-center text-white w-1/2'>
            <h1 className='text-2xl font-bold'>Welcome to <span className='text-[#C1CF16]'>Mark8</span></h1>
            <p className='text-lg mt-4 pb-4'>12,345 Products</p>
            <IconInput placeholder='What are you looking for?' leftIcon={Search} rightIcon={SlidersVertical}/>
            <div className='flex flex-row items-center justify-center gap-4 mt-8'>
                <CategorySelector name='All' />
                <CategorySelector name='Vectors' />
                <CategorySelector name='Icons' />
                <CategorySelector name='Backgrounds' />
            </div>
        </div>
    </div>
  )
}

export default Header