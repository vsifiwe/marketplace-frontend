'use client'

import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from 'sonner'
import { Building2, Loader2, Phone } from 'lucide-react'
import { Form, FormMessage, FormControl, FormLabel, FormItem, FormField } from '@/components/ui/form'
import { IconInput } from '../ui/input'
import { Button } from '../ui/button'
import { Store } from '@/lib/api/seller'
import ImageUploader from './imageUploader'

interface StoreFormProps {
    store?: Store;
    onSubmit: (values: StoreFormValues) => void;
    isLoading?: boolean;
}

export interface StoreFormValues {
    name: string;
    description: string;
    phone: string;
    image: string;
}

const formSchema = z.object({
    name: z.string().min(1, { message: "Store name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    phone: z.string()
        .min(10, { message: "Phone number must be 10 digits" })
        .max(10, { message: "Phone number must be 10 digits" })
        .regex(/^\d+$/, { message: "Phone number must contain only digits" }),
    image: z.string().min(1, { message: "Store image is required" }),
})

function StoreForm({ store, onSubmit, isLoading = false }: StoreFormProps) {
    const form = useForm<StoreFormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: store?.name || "",
            description: store?.description || "",
            phone: store?.phone || "",
            image: store?.image || "",
        },
    })

    // Update form values when store prop changes
    useEffect(() => {
        if (store) {
            form.reset({
                name: store.name,
                description: store.description,
                phone: store.phone,
                image: store.image,
            })
        }
    }, [store, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Store Information</h2>
                    <div className="grid grid-cols-1 gap-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Store Name</FormLabel>
                                    <FormControl>
                                        <IconInput 
                                            placeholder="Enter store name" 
                                            {...field} 
                                            leftIcon={Building2}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <IconInput 
                                            placeholder="Enter store description" 
                                            {...field} 
                                            leftIcon={Building2}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <IconInput 
                                            placeholder="Enter phone number" 
                                            {...field} 
                                            leftIcon={Phone}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="image"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Store Image</FormLabel>
                                    <FormControl>
                                        <ImageUploader
                                            value={field.value ? [field.value] : []}
                                            onChange={(urls) => field.onChange(urls[0] || "")}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button 
                        type="submit" 
                        className="w-full md:w-auto"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>Saving...</span>
                            </div>
                        ) : (
                            <span>{store ? 'Update Store' : 'Create Store'}</span>
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    )
}

export default StoreForm 