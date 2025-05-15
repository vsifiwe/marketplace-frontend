const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
    REGISTER_SELLER: `${API_URL}/auth/apply`
}

export const SHOP_ROUTES = {
    GET_PRODUCTS: `${API_URL}/shoppers`,
    GET_PRODUCT: `${API_URL}/shoppers`,
    ADD_TO_CART: `${API_URL}/shoppers/cart`,
    GET_CART: `${API_URL}/shoppers/cart`,
    DELETE_CART: `${API_URL}/shoppers/cart`,
    PLACE_ORDER: `${API_URL}/shoppers/orders`,
    GET_SHOPS: `${API_URL}/shoppers/stores`
}

export const ADMIN_ROUTES = {
    GET_USERS: `${API_URL}/admin/users`,
    GET_APPLICATIONS: `${API_URL}/admin/sellers/applications`,
    GET_SHOPS: `${API_URL}/admin/stores`,
    GET_CATEGORIES: `${API_URL}/admin/categories`,
    GET_PRODUCTS: `${API_URL}/admin/products`,
    APPROVE_SELLER: (id: number) => `${API_URL}/admin/sellers/${id}/approve`,
    REJECT_SELLER: (id: number) => `${API_URL}/admin/sellers/${id}/reject`
}

export const SELLER_ROUTES = {
    GET_CATEGORIES: `${API_URL}/sellers/categories`,
    CREATE_CATEGORY: `${API_URL}/sellers/categories`,
    GET_PRODUCTS: `${API_URL}/sellers/products`,
    CREATE_PRODUCT: `${API_URL}/sellers/products`,
    GET_STORE: `${API_URL}/sellers/store`,
    CREATE_STORE: `${API_URL}/sellers/store`,
    UPDATE_STORE: `${API_URL}/sellers/store`,
    GET_ORDERS: `${API_URL}/sellers/orders`
} as const;