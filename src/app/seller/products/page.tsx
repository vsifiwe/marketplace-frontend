import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import NewProductForm from '@/components/forms/newProductForm'

function Products() {
  return (
    <div>
      <Dialog>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Product</DialogTitle>
          <DialogDescription>
            Add a new product to your store.
          </DialogDescription>
        </DialogHeader>
        <NewProductForm />
      </DialogContent>
    </Dialog>

    </div>
  )
}

export default Products