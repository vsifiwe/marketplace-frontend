'use client'

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Tag } from 'lucide-react'
import { Form, FormMessage, FormControl, FormLabel, FormItem, FormField } from '@/components/ui/form'
import { IconInput } from '../ui/input'
import { Button } from '../ui/button'

interface CategoryFormProps {
    onSubmit: (values: CategoryFormValues) => void;
    isLoading?: boolean;
}

export interface CategoryFormValues {
    name: string;
}

const formSchema = z.object({
    name: z.string().min(1, { message: "Category name is required" }),
})

function CategoryForm({ onSubmit, isLoading = false }: CategoryFormProps) {
    const form = useForm<CategoryFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category Name</FormLabel>
                            <FormControl>
                                <IconInput 
                                    placeholder="Enter category name" 
                                    {...field} 
                                    leftIcon={Tag}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end">
                    <Button 
                        type="submit" 
                        className="w-full md:w-auto"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Creating...</span>
                            </div>
                        ) : (
                            <span>Create Category</span>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default CategoryForm 