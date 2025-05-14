'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Product } from '@/components/columns/products'
import { getProducts } from '@/lib/api/admin'

function Products() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getProducts(onError)
            if (response.data) {
                setProducts(response.data)
            }
        }
        fetchProducts()
    }, [])

    const onError = (error: string) => {
        toast.error(error)
    }

  return (
    <div className='flex flex-col m-8 w-full'>
        <h1 className='text-2xl font-bold mb-8'>Products</h1>
        <DataTable columns={columns} data={products} />
    </div>
  )
}

export default Products