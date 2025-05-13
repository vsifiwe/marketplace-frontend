import { ColumnDef } from "@tanstack/react-table";

export interface Product {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    salePrice:   number;
    images:      string[];
    reviewCount: number;
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "price",
        header: "Price",
    },
    {
        accessorKey: "salePrice",
        header: "Sale Price",
    },
    {
        accessorKey: "reviewCount",
        header: "Review Count",
    }
]