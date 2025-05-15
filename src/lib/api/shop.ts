import axios from 'axios'
import { SHOP_ROUTES } from './config'
import { CartResponse } from '@/components/ui/cart'

interface Item {
    productId: number
    quantity: number
}
export interface Order {
    street: string
    city: string
    phone: string
    email: string
    items: Item[]
}

const getProducts = async () => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(SHOP_ROUTES.GET_PRODUCTS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return []
    }
}

const getShops = async (onError: (error: string) => void) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(SHOP_ROUTES.GET_SHOPS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.status === 200) {
            console.log(res.data)
            return res.data
        } else {
            onError(res.data.message || 'Failed to fetch shops')
            return []
        }
    } catch (error) {
        console.log(error)
        return []
    }
}

const getProduct = async (id: string) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${SHOP_ROUTES.GET_PRODUCT}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const addToCart = async (productId: string, quantity: number, onSuccess: () => void) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`${SHOP_ROUTES.ADD_TO_CART}`, {
            productId,
            quantity
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        onSuccess()
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const getCart = async (): Promise<CartResponse> => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${SHOP_ROUTES.GET_CART}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return {
            id: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
            items: [],
            total: 0
        }
    }
}

const deleteCart = async (productId: string, onSuccess: () => void) => {
    try {
        const token = localStorage.getItem('token')
        const url = `${SHOP_ROUTES.DELETE_CART}/${productId}`

        console.log(url)
        console.log(productId)
        const res = await axios.delete(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        onSuccess()
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}

const placeOrder = async (order: Order, onSuccess: () => void) => {
    try {
        const token = localStorage.getItem('token')
        const res = await axios.post(`${SHOP_ROUTES.PLACE_ORDER}`, order, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        onSuccess()
        return res.data
    } catch (error) {
        console.log(error)
        return null
    }
}
export { getProducts, getProduct, addToCart, getCart, deleteCart, placeOrder, getShops }