'use client'
import React, { useEffect, useState } from 'react'
import TopNavBar from '@/components/layout/topNavBar'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ArrowLeft } from 'lucide-react'
import ProductItemLayout from '@/components/layout/productItemLayout'
import { useParams } from 'next/navigation'
import { getProduct } from '@/lib/api/shop'
import { Product as ProductType } from '@/components/columns/products'


function Product() {
    const { id } = useParams()
    const [product, setProduct] = useState<ProductType>()

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(id as string)
            setProduct(product)
        }
        fetchProduct()
    }, [id])

    return (
        <div>
            <TopNavBar />
            {/* breadcrumb */}
            <div className='flex flex-row gap-4 mx-8 mt-4'>
                <ArrowLeft />
                <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/shop">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/stores">Stores</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Product</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            </div>

            <div className='w-full h-full flex flex-row gap-4 p-4'>
                {/* if product is not null, show the product item layout */}
                {product && <ProductItemLayout product={product} />}
                {/* if product is null, show the loading state */}
                {!product && <div>Loading...</div>}
            </div>
        </div>
    )
}

export default Product