
'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Category } from '@/components/columns/categories'
import { getCategories } from '@/lib/api/admin'

function Categories() {
    const [categories, setCategories] = useState<Category[]>([])


  const onError = (error: string) => {
    toast.error(error)
}
    const fetchCategories = async () => {
      const response = await getCategories(onError)
      console.log("response", response)
      if (response.data) {
        console.log("response.data", response.data)
        setCategories(response.data)
      }
  }

    useEffect(() => {
        fetchCategories()
    }, [])
    
  return (
    <div className='flex flex-col m-8 w-full'>
        <h1 className='text-2xl font-bold mb-8'>Categories</h1>
        <DataTable columns={columns} data={categories} />
    </div>
  )
}

export default Categories