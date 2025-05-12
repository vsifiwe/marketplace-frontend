import React from 'react'
import TopNavBar from '@/components/layout/topNavBar'
import Header from '@/components/layout/header'
import ProductLayout from '@/components/layout/productLayout'
import ShopLayout from '@/components/layout/shopLayout'

function page() {
  return (
    <div>
      <TopNavBar />
      <Header />
      <div className='flex flex-row'>
        <div className='w-3/4'>
          <ProductLayout />
        </div>
        <div className='w-1/4'>
          <ShopLayout />
        </div>
      </div>
    </div>
  )
}

export default page