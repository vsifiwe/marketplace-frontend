
'use client'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Shop } from '@/components/columns/sellers'
import { getShops } from '@/lib/api/admin'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'

function Shops() {
    const [shops, setShops] = useState<Shop[]>([])

        const fetchShops = async () => {
            const shopsResponse = await getShops(onError)
            setShops(shopsResponse)
        }
        useEffect(() => {
            fetchShops()
        }, [])

        const onError = (error: string) => {
            toast.error(error)
        }

    return (
        <div className='flex flex-col m-8 w-full'>
            <h1 className='text-2xl font-bold mb-8'>Shops</h1>
            <DataTable columns={columns} data={shops} />
        </div>
    )
}

export default Shops