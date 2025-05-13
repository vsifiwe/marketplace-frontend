import React from 'react'
import SellerLayout from '@/components/layout/sellerLayout'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <SellerLayout>
      {children}
    </SellerLayout>
  )
}

export default layout