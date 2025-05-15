'use client'
import { getStore, Store as StoreType, createStore, updateStore } from '@/lib/api/seller'
import { Button } from '@/components/ui/button'
import { Pencil, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import StoreForm, { StoreFormValues } from '@/components/forms/storeForm'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

function Store() {
    const [store, setStore] = useState<StoreType | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const fetchStore = async () => {
        const onError = (error: string) => {
            toast.error(error)
        }
        const res = await getStore(onError)
        if (res.data) {
            setStore(res.data)
        }
    }

    useEffect(() => {
        fetchStore()
    }, [])

    const handleSubmit = async (values: StoreFormValues) => {
        setIsLoading(true)
        try {
            if (store) {
                // Update existing store
                await updateStore(store.id, values, () => {
                    toast.success("Store updated successfully")
                    fetchStore()
                    setIsDialogOpen(false)
                }, (error: string) => {
                    toast.error(error)
                })
            } else {
                // Create new store
                await createStore(values, () => {
                    toast.success("Store created successfully")
                    fetchStore()
                    setIsDialogOpen(false)
                }, (error: string) => {
                    toast.error(error)
                })
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='flex flex-col m-8 w-full'>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-2xl font-bold'>My Store</h1>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            {store ? (
                                <>
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Edit Store
                                </>
                            ) : (
                                <>
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create Store
                                </>
                            )}
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>{store ? 'Edit Store' : 'Create Store'}</DialogTitle>
                        </DialogHeader>
                        <StoreForm
                            store={store || undefined}
                            onSubmit={handleSubmit}
                            isLoading={isLoading}
                        />
                    </DialogContent>
                </Dialog>
            </div>

            {store ? (
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 border-2 border-gray-200 p-4 rounded-md'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-lg font-bold'>{store.name}</h2>
                            <p className='text-sm text-gray-500'>Description: {store.description}</p>
                            <p className='text-sm text-gray-500'>Phone: {store.phone}</p>
                            {store.image && (
                                <div className="mt-2">
                                    <Image
                                        src={store.image}
                                        alt={store.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Store Found</h3>
                    <p className="text-gray-500 mb-4">Create your store to start selling products</p>
                    <Button onClick={() => setIsDialogOpen(true)}>
                        <Plus className="mr-2 h-4 w-4" />
                        Create Store
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Store