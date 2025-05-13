"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ImageUploader from './imageUploader'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { createProduct, getCategories } from '@/lib/api/seller'
import { Category } from '../columns/categories'
import { toast } from 'sonner'
import { CreateProduct } from '../columns/products'

function NewProductForm() {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        getCategories((error) => {
            console.error(error)
        }).then((response) => {
            setCategories(response.data || [])
        })
    }, [])

    const formSchema = z.object({
        name: z.string().min(1, {
            message: "Please enter a valid name.",
        }),
        price: z.coerce.number().min(1, {
            message: "Please enter a valid price.",
        }),
        sale_price: z.coerce.number().min(1, {
            message: "Please enter a valid sale price.",
        }),
        description: z.string().min(1, {
            message: "Please enter a valid description.",
        }),
        images: z.array(z.string()).min(1, {
            message: "Please enter a valid image.",
        }),
        categoryId: z.coerce.number().min(1, {
            message: "Please enter a valid category.",
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            price: 0,
            sale_price: 0,
            description: "",
            images: [],
            categoryId: 0,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        

        const product: CreateProduct = {
            name: values.name,
            price: values.price,
            salePrice: values.sale_price,
            description: values.description,
            images: values.images,
            categoryId: values.categoryId,
        }

        const onSuccess = () => {
            toast.success("Product created successfully")
            form.reset()
        }

        const onError = (error: string) => {
            toast.error(error)
        }

        createProduct(product, onSuccess, onError)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    min="0"
                                    step="1"
                                    {...field}
                                    onChange={e => field.onChange(e.target.valueAsNumber)}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="sale_price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Sale Price</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    min="0"
                                    step="1"
                                    {...field}
                                    onChange={e => field.onChange(e.target.valueAsNumber)}
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
                            <FormLabel>Product Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="images"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Product Images</FormLabel>
                            <FormControl>
                                <ImageUploader
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="categoryId"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {categories.map((category) => (
                                        <SelectItem key={category.id} value={category.id.toString()}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Add Product</Button>
            </form>
        </Form>
    )
}

export default NewProductForm