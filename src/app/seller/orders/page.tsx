'use client'

import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Order } from '@/components/columns/orders'
import { getOrders } from '@/lib/api/seller'
import { Loader2 } from 'lucide-react'

function Orders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchOrders = async () => {
        const onError = (error: string) => {
            toast.error(error)
        }
        const response = await getOrders(onError)
        if (response.data) {
            setOrders(response.data)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchOrders()
    }, [])

    if (isLoading) {
        return (
            <div className='flex flex-col items-center justify-center h-[50vh]'>
                <Loader2 className="h-8 w-8 animate-spin" />
                <p className="mt-2 text-sm text-gray-500">Loading orders...</p>
            </div>
        )
    }

    return (
        <div className='flex flex-col m-8 w-full'>
            <div className="flex justify-between items-center mb-8">
                <h1 className='text-2xl font-bold'>Orders</h1>
            </div>
            <DataTable 
                columns={columns} 
                data={orders}
            />
        </div>
    )
}

export default Orders