
'use client'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./appSidebar"
import { Bookmark, Package, ShoppingBagIcon, Store } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SellerLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const items = [
        {
            title: "My Store",
            url: "/seller/store",
            icon: Store
        },
        {
            title: "Categories",
            url: "/seller/categories",
            icon: Bookmark
        },
        {
            title: "Products",
            url: "/seller/products",
            icon: Package
        },
        {
            title: "Orders",
            url: "/seller/orders",
            icon: ShoppingBagIcon
        }
    ]
    
    return (
        <SidebarProvider>
            <AppSidebar items={items} title="Seller Dashboard" action={() => {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                router.push('/')
            }}/>
            <div>
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    )
}
