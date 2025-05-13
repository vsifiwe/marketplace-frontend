import { ColumnDef } from "@tanstack/react-table";

export interface Category { 
    id: number
    name: string
}

export const columns: ColumnDef<Category>[] = [
    {
        accessorKey: "name",
        header: "Name",
    }
]
