import React from 'react'
import TopNavBar from '@/components/layout/topNavBar'
import Header from '@/components/layout/header'
import ProductLayout from '@/components/layout/productLayout'
import ShopSidebar from '@/components/layout/shopSidebar'
import Footer from '@/components/layout/footer'

function page() {
  return (
    <div>
      <TopNavBar />
      <Header />
      <div className='flex flex-col md:flex-row'>
        <div className='w-3/4'>
          <ProductLayout />
        </div>
        <div className='w-1/4'>
          <ShopSidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page