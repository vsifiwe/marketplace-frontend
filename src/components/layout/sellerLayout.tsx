import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./appSidebar"
import { Bookmark, ClipboardCopy, Package, ShoppingBagIcon, Store, UserIcon } from "lucide-react"

export default function SellerLayout({ children }: { children: React.ReactNode }) {

    const items = [
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
            <AppSidebar items={items} title="Seller Dashboard" />
            <div>
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    )
}
