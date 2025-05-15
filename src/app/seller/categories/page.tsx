'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Category } from '@/components/columns/categories'
import { getCategories, createCategory } from '@/lib/api/seller'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import CategoryForm from '@/components/forms/categoryForm'

function Categories() {
    const [categories, setCategories] = useState<Category[]>([])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const fetchCategories = async () => {
        const onError = (error: string) => {
            toast.error(error)
        }
        const response = await getCategories(onError)
        if (response.data) {
            setCategories(response.data)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const handleSubmit = async (values: { name: string }) => {
        setIsLoading(true)
        try {
            const response = await createCategory(values, (error) => {
                toast.error(error)
            })
            if (response.data) {
                toast.success("Category created successfully")
                fetchCategories()
                setIsDialogOpen(false)
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to create category")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex flex-col m-8 w-full'>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-2xl font-bold'>Categories</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Category
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Create New Category</DialogTitle>
                        </DialogHeader>
                        <CategoryForm 
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                        />
                    </DialogContent>
                </Dialog>
            </div>
            <DataTable columns={columns} data={categories} />
        </div>
    )
}

export default Categories