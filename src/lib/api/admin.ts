import { ADMIN_ROUTES } from "./config";
import axios from "axios";

export async function getUsers( onError: (error: string) => void) {
    try {
        const url = `${ADMIN_ROUTES.GET_USERS}`;
        const token = localStorage.getItem('token')
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const msg = response.data.message;
        console.log("response", response);

        if (response.status === 200) {
            return response.data;
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

export async function getApplications( onError: (error: string) => void) {
    try {
        const url = `${ADMIN_ROUTES.GET_APPLICATIONS}`;
        const token = localStorage.getItem('token')
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const msg = response.data.message;
        console.log("response", response);

        if (response.status === 200) {
            return response.data;
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
