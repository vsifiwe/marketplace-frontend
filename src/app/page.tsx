'use client'
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { role, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      if (role === 'admin') {
        router.push('/admin')
      } else if (role === 'seller') {
        router.push('/seller')
      } else {
        router.push('/shop')
      }
    } else {
      router.push('/auth')
    }
  }, [isAuthenticated, role, router])
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Loading</h1>
      <Loader2 className=" animate-spin  ml-4" />
    </div>
  );
}
