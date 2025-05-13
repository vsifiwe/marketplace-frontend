import { AUTH_ROUTES } from "./config";
import axios from "axios";
import { toast } from "sonner";

type registerData = {
    name: string;
    email: string;
    password: string;
    role: string;
}

type loginData = {
    email: string;
    password: string;
}

export async function register(data: registerData, onSuccess: () => void, onError: (error: string) => void) {
    try {
        const url = `${AUTH_ROUTES.REGISTER}`;
        const response = await axios.post(url, data);
        const msg = response.data.message;

        if (response.status === 201) {
            onSuccess();
            return { message: "Registered successfully" };
        } else {
            onError(msg);
            return { message: msg };
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || "Registration failed";
        onError(errorMessage);
        return { message: errorMessage };
    }
}

export async function login(data: loginData, onSuccess: () => void, onError: (error: string) => void) {
    try {
        const url = `${AUTH_ROUTES.LOGIN}`;
        const response = await axios.post(url, data);
        const msg = response.data.message;
        console.log("response", response);

        if (response.status === 201) {
            localStorage.setItem('token', response.data.access_token);
            onSuccess();
            return { message: "Logged in successfully" };
        } else {
            onError(msg);
            return { message: msg };
        }
    } catch (error: any) {
        const errorMessage = error.response?.data?.message || error.message || "Login failed";
        onError(errorMessage);
        return { message: errorMessage };
    }
}