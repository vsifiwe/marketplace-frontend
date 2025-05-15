import { ColumnDef } from "@tanstack/react-table";

export interface Category { 
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: "Name",
    }
]
