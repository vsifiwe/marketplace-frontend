import { ColumnDef } from "@tanstack/react-table";

export interface Shop {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    phone:       string;
    userId:      number;
    reviewCount: number;
    user:        Owner;
}

export interface Owner {
    id:        number;
    name:      string;
    email:     string;
    isApplied: boolean;
    createdAt: Date;
    updatedAt: Date;
    password:  string;
    role:      string;
}

export const columns: ColumnDef<Shop>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "image",
        header: "Image",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "reviewCount",
        header: "Review Count",
    },
    {
        accessorKey: "user.name",
        header: "Owner",
        cell: ({ row }) => {
            const user = row.original.user
            return <span className="text-sm text-gray-500">{user.name}</span>
        }
    },
    
    
]