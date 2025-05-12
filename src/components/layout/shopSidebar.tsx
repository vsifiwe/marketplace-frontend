import React from 'react'
import { SlidersVertical, Maximize2, Search, Store } from 'lucide-react'
import { IconInput } from '../ui/input'
import ShopListCard from '../ui/shopListCard'

const shops = [
  {
    id: 1,
    name: 'Shop 1',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },{
    id: 2,
    name: 'Shop 2',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },{
    id: 3,
    name: 'Shop 3',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },{
    id: 4,
    name: 'Shop 4',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },{
    id: 5,
    name: 'Shop 5',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },{
    id: 6,
    name: 'Shop 6',
    totalProducts: 10,
    image: 'https://placehold.co/100x100'
  },
]

function shopSidebar() {
  return (
    <div className='border rounded-lg py-4 my-8 mr-8'>
      <div className=''>
        {/* top section */}
        <div className='flex flex-row items-center justify-between gap-2 px-4'>
          <div className='flex flex-row justify-center items-center gap-2'>
            <Store color='#C1CF16' size={20} strokeWidth={1.5} />
            <p className='text-lg font-bold ml-2'>Top 10 Stores</p>
          </div>
          <Maximize2 className='w-4 h-4 cursor-pointer' />
        </div>

        {/* search section */}
        <div className='flex flex-row items-center justify-center mt-4 h-24 bg-gray-100 px-4'>
          <IconInput placeholder='Search a store' leftIcon={Search} rightIcon={SlidersVertical} className='bg-white' />
        </div>
        <div>
          <ShopListCard image='https://placehold.co/100x100' name='Shop 1' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 2' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 3' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 4' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 5' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 6' totalProducts={10} />
          <ShopListCard image='https://placehold.co/100x100' name='Shop 7' totalProducts={10} />
        </div>
      </div>
    </div>
  )
}

export default shopSidebar