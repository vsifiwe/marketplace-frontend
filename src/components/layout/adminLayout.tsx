import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./appSidebar"
import { Bookmark, ClipboardCopy, Package, ShoppingBagIcon, Store, UserIcon } from "lucide-react"

export default function Layout({ children }: { children: React.ReactNode }) {

    const items = [
        {
            title: "Users",
            url: "/admin/users",
            icon: UserIcon
        },
        {
            title: "Seller Applications",
            url: "/admin/applications",
            icon: ClipboardCopy
        },
        {
            title: "Shops",
            url: "/admin/shops",
            icon: Store
        },
        {
            title: "Categories",
            url: "/admin/categories",
            icon: Bookmark
        },
        {
            title: "Products",
            url: "/admin/products",
            icon: Package
        },
        {
            title: "Orders",
            url: "/admin/orders",
            icon: ShoppingBagIcon
        }
    ]
    
    return (
        <SidebarProvider>
            <AppSidebar items={items} />
            <div>
                <SidebarTrigger />
                {children}
            </div>
        </SidebarProvider>
    )
}
