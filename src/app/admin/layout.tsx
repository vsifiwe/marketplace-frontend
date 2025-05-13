import React from 'react'
import AdminLayout from '@/components/layout/adminLayout'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <AdminLayout>
      {children}
    </AdminLayout>
  )
}

export default layout