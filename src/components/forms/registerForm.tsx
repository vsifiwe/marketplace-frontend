
'use client'

import React from 'react'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { IconInput } from "@/components/ui/input"
import { Button } from '../ui/button'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from 'next/link'
import { LockKeyhole, LogIn, Mail, User } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { register } from '@/lib/api/auth'

function RegisterForm() {
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 8 characters.",
    }),
    name: z.string().min(3, {
      message: "Name must be at least 3 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      role: "user"
    }
    register(data, () => {
      toast.success("Registered successfully")
      router.push('/auth')
    }, (error: string) => {
      toast.error(error)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <IconInput placeholder="Enter your name" {...field} leftIcon={User} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <IconInput placeholder="Enter email" {...field} leftIcon={Mail} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <IconInput placeholder="Enter password" {...field} type="password" leftIcon={LockKeyhole} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-row justify-between items-center'>
          {/* <Link href="/forgot-password" className='text-sm underline font-bold'>Forgot password?</Link> */}
          <Button type="submit">
            Register
            <LogIn />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default RegisterForm