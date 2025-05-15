'use client'
import React, { useEffect, useState } from 'react'
import ShopCard from '../ui/shopCard'
import { Shop } from '../columns/sellers'
import { toast } from 'sonner'
import { getShops } from '@/lib/api/shop'
import { ShopApiResponse } from '@/lib/api/types'
function ShopLayout() {
    const [shops, setShops] = useState<ShopApiResponse[]>([])

    useEffect(() => {
        const fetchShops = async () => {
            const onError = (error: string) => {
                toast.error(error)
            }
            const response = await getShops(onError)
            if (response) {
                setShops(response)
            }
        }
        fetchShops()
    }, [])

    return (
        <div>
            {shops.map((shop) => (
                <div key={shop.id}>
                    <ShopCard shop={shop} />
                </div>
            ))}
        </div>
    )
}

export default ShopLayout