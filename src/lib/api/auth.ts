import router from "next/router";
import { AUTH_ROUTES } from "./config";
import axios from "axios";

type AuthResponse = {
    message: string;
    access_token?: string;
}

type RegisterData = {
    name: string;
    email: string;
    password: string;
    role: string;
}

type LoginData = {
    email: string;
    password: string;
}

async function makeAuthRequest(
    url: string,
    data: RegisterData | LoginData,
    onSuccess: (role: string) => void,
    onError: (error: string) => void
): Promise<AuthResponse> {
    try {
        const response = await axios.post(url, data);
        const msg = response.data.message;

        if (response.status === 201) {
            if ('access_token' in response.data) {
                localStorage.setItem('token', response.data.access_token);
            }
            try {
                const userRole = response.data.user.role;
                onSuccess(userRole);
                localStorage.setItem('role', userRole); 
            } catch (error) {
                onSuccess('user');
            }
            return { message: msg || "Success" };
        } else {
            onError(msg);
            return { message: msg };
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || "Request failed";
        onError(errorMessage);
        return { message: errorMessage };
    }
}

export async function register(data: RegisterData, onSuccess: (role: string) => void, onError: (error: string) => void) {
    return makeAuthRequest(AUTH_ROUTES.REGISTER, data, onSuccess, onError);
}

export async function login(data: LoginData, onSuccess: (role: string) => void, onError: (error: string) => void) {
    return makeAuthRequest(AUTH_ROUTES.LOGIN, data, onSuccess, onError);
}