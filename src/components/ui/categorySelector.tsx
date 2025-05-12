import React from 'react'

function CategorySelector({ name }: { name: string }) {
    return (
        <div className='flex flex-row items-center justify-center gap-2 px-6 border border-gray-200 rounded-3xl py-2'>
            <p className='text-sm font-medium'>{name}</p>
        </div>
    )
}

export default CategorySelector