import React from 'react'
import TopNavBar from '@/components/layout/topNavBar'
import CheckOutForm from '@/components/forms/checkoutForm'

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavBar />
      <CheckOutForm />
    </div>
  )
}

export default Checkout