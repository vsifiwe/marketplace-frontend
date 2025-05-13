const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
}

export const SHOP_ROUTES = {
    GET_PRODUCTS: `${API_URL}/shoppers`,
    GET_PRODUCT: `${API_URL}/shop/products/:id`
}

export const ADMIN_ROUTES = {
    GET_USERS: `${API_URL}/admin/users`,
    GET_APPLICATIONS: `${API_URL}/admin/sellers/applications`,
}