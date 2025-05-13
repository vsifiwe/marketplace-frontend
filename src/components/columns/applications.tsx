import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Check, Pencil, Trash, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export type Application = {
    id: number
    name: string
    email: string
    isApplied: boolean
    createdAt: string
}

const humanReadableDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
}

export const columns: ColumnDef<Application>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "createdAt",
        header: "Time of application",
        cell: ({ row }) => {
            const createdAt = row.getValue("createdAt") as string
            return <span className="text-sm text-gray-500">{humanReadableDate(createdAt)}</span>
        }
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
                  onClick={() => console.log('Approve user:', user.id)}
                  className="flex items-center gap-2 text-green-600"
                >
                  <Check className="h-4 w-4" />
                  Approve
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log('Delete user:', user.id)}
                  className="flex items-center gap-2 text-red-600"
                >
                  <X className="h-4 w-4" />
                  Reject
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]