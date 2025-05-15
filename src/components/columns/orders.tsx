import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
// import { format } from "date-fns";
import { humanReadableDate } from "@/lib/utils";

export interface Order {
    id: string;
    street: string;
    city: string;
    phone: string;
    email: string;
    status: 'pending' | 'processing' | 'completed' | 'cancelled';
    total: number;
    createdAt: string;
    updatedAt: string;
    items: {
        productId: number;
        quantity: number;
        product: {
            name: string;
            price: number;
        };
    }[];
}

const statusColors = {
    pending: "bg-yellow-100 text-yellow-800",
    processing: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
} as const;

export const columns: ColumnDef<Order>[] = [
    {
        accessorKey: "id",
        header: "Order ID",
    },
    {
        accessorKey: "email",
        header: "Customer Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status;
            return (
                <Badge className={statusColors[status]}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                </Badge>
            );
        },
    },
    {
        accessorKey: "total",
        header: "Total",
        cell: ({ row }) => {
            const amount = row.original.total;
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'RWF',
                minimumFractionDigits: 0,
            }).format(amount);
        },
    },
    {
        accessorKey: "createdAt",
        header: "Order Date",
        cell: ({ row }) => {
            // return format(new Date(row.original.createdAt), 'MMM d, yyyy');
            return humanReadableDate(row.original.createdAt);
        },
    },
    {
        accessorKey: "items",
        header: "Items",
        cell: ({ row }) => {
            const items = row.original.items;
            return (
                <div className="flex flex-col gap-1">
                    {items.map((item, index) => (
                        <div key={index} className="text-sm">
                            {item.quantity}x {item.product.name}
                        </div>
                    ))}
                </div>
            );
        },
    },
]; 