const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const AUTH_ROUTES = {
    LOGIN: `${API_URL}/auth/login`,
    REGISTER: `${API_URL}/auth/register`,
}