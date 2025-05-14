const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
}

export const SHOP_ROUTES = {
    GET_PRODUCTS: `${API_URL}/shoppers`,
    GET_PRODUCT: `${API_URL}/shoppers`,
    ADD_TO_CART: `${API_URL}/shoppers/cart`,
    GET_CART: `${API_URL}/shoppers/cart`
}

export const ADMIN_ROUTES = {
    GET_USERS: `${API_URL}/admin/users`,
    GET_APPLICATIONS: `${API_URL}/admin/sellers/applications`,
    GET_SHOPS: `${API_URL}/admin/stores`,
    GET_CATEGORIES: `${API_URL}/admin/categories`,
    GET_PRODUCTS: `${API_URL}/admin/products`,
}

export const SELLER_ROUTES = {
    GET_CATEGORIES: `${API_URL}/sellers/categories`,
    GET_PRODUCTS: `${API_URL}/sellers/products`,
    CREATE_PRODUCT: `${API_URL}/sellers/products`,
}