import axios from 'axios'
import { SHOP_ROUTES } from './config'
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

const getCart = async () => {
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
        return null
    }
}

export { getProducts, getProduct, addToCart, getCart }