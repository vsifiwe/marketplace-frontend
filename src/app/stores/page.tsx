import React from 'react'
import StoresHeader from '@/components/layout/storesHeader'
import TopNavBar from '@/components/layout/topNavBar'
import ShopLayout from '@/components/layout/shopLayout'
import Footer from '@/components/layout/footer'

function Stores() {
  return (
    <div>
      <TopNavBar />
      <StoresHeader />
      <ShopLayout />
      <Footer />
    </div>
  )
}

export default Stores