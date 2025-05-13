"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "../ui/button"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type User = {
  id: number
  name: string
  email: string
  role: string
  isApplied: boolean
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "isApplied",
    header: "Status",
    cell: ({ row }) => {
      const isApplied = row.getValue("isApplied") as boolean
      return (
        <span className={`px-2 py-1 rounded-sm text-xs font-medium ${
          isApplied 
            ? "bg-green-100 text-green-700" 
            : "bg-yellow-100 text-yellow-700"
        }`}>
          {isApplied ? "Applied" : "Pending"}
        </span>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => console.log('Edit user:', user.id)}
              className="flex items-center gap-2"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log('Delete user:', user.id)}
              className="flex items-center gap-2 text-red-600"
            >
              <Trash className="h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
