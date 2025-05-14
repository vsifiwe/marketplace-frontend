import { useEffect, useState } from 'react'

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [role, setRole] = useState<string | null>(null)

    useEffect(() => {
        // Check if token exists in localStorage
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        setRole(role)
        setIsAuthenticated(!!token)
    }, [])

    return {
        isAuthenticated,
        setIsAuthenticated,
        role,
        setRole
    }
} 