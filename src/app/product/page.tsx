import React from 'react'
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


function Product() {
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
                <ProductItemLayout />
            </div>
        </div>
    )
}

export default Product