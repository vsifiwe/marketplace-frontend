"use client"
import React, { useState, useEffect } from 'react'
import { DataTable } from '@/components/ui/dataTable'
import { columns, Application } from '@/components/columns/applications'
import { getApplications } from '@/lib/api/admin'
import { toast } from 'sonner'

function Applications() {
    const [applications, setApplications] = useState<Application[]>([])

    useEffect(() => {
        const fetchApplications = async () => {
            const onError = (error: string) => {
                toast.error(error)
            }
            const applicationsResponse = await getApplications(onError)
            if (applicationsResponse.data) {
                setApplications(applicationsResponse.data)
            }
        }
        fetchApplications()
    }, [])
    return (
        <div className='flex flex-col m-8 w-full'>
            <h1 className='text-2xl font-bold mb-8'>Applications</h1>
            <DataTable columns={columns} data={applications} />
        </div>
    )
}

export default Applications