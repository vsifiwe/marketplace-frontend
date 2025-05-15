'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Product } from '@/components/columns/products'
import { getProducts } from '@/lib/api/seller'
import { Loader2, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import NewProductForm from '@/components/forms/newProductForm'

function Products() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const fetchProducts = async () => {
        const onError = (error: string) => {
            toast.error(error)
        }
        const response = await getProducts(onError)
        if (response.data) {
            setProducts(response.data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    // const handleProductCreated = () => {
    //     fetchProducts()
    //     setIsDialogOpen(false)
    // }

    if (isLoading) {
        return (
            <div className='flex flex-col items-center justify-center h-[50vh]'>
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="mt-2 text-sm text-gray-500">Loading products...</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col m-8 w-full'>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-2xl font-bold'>Products</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Product
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Add New Product</DialogTitle>
                        </DialogHeader>
                        <NewProductForm />
                    </DialogContent>
                </Dialog>
            </div>
            <DataTable 
                columns={columns} 
                data={products}
            />
        </div>
    )
}

export default Products