
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
import { LockKeyhole, LogIn, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { login } from '@/lib/api/auth'
import { toast } from 'sonner'

function LoginForm() {
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    login(values, () => {
      toast.success("Logged in successfully")
      router.push('/shop')
    }, (error) => {
      toast.error(error)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <IconInput placeholder="Enter email" {...field} leftIcon={Mail}/>
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
                <IconInput placeholder="Enter password" {...field} type="password" leftIcon={LockKeyhole}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex flex-row justify-between items-center'>
          <Link href="/forgot-password" className='text-sm underline font-bold'>Forgot password?</Link>
          <Button type="submit">
            Login
            <LogIn />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default LoginForm