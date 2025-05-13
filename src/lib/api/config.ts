const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
}

export const SHOP_ROUTES = {
    GET_PRODUCTS: `${API_URL}/shoppers`,
    GET_PRODUCT: `${API_URL}/shop/products/:id`
}