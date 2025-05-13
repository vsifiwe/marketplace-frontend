"use client"
import React, { useState, useEffect } from 'react'
import { DataTable } from '@/components/ui/dataTable'
import { columns, User } from '@/components/columns/users'
import { getUsers } from '@/lib/api/admin'
import {toast } from 'sonner'

function Users() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const onError = (error: string) => {
        toast.error(error)
      }
      const usersResponse = await getUsers(onError)
      setUsers(usersResponse)
    }
    fetchUsers()
  }, [])

  return (
    <div className='flex flex-col m-8 w-full'>
      <h1 className='text-2xl font-bold mb-8'>Users</h1>
      <DataTable columns={columns} data={users} />
    </div>
  )
}

export default Users