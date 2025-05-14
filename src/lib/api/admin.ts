import { ADMIN_ROUTES } from "./config";
import axios from "axios";
import { Product } from "@/components/columns/products";
import { Category } from "@/components/columns/categories";
import { Shop } from "@/components/columns/sellers";
import { Application } from "@/components/columns/applications";
import { User } from "@/components/columns/users";

type ApiResponse<T> = {
    data?: T;
    message?: string;
}

async function makeAuthenticatedRequest<T>(
    url: string,
    onError: (error: string) => void
): Promise<ApiResponse<T>> {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
            console.log("response", response.data)
            return {data: response.data as T};
        } else {
            const msg = response.data.message;
            onError(msg);
            return { message: msg };
        }
    } catch (error) {
        console.log("error", error)
        const errorMessage = "Request failed";
        onError(errorMessage);
        return { message: errorMessage };
    }
}

export async function getUsers(onError: (error: string) => void): Promise<ApiResponse<User[]>> {
    return makeAuthenticatedRequest<User[]>(ADMIN_ROUTES.GET_USERS, onError);
}

export async function getApplications(onError: (error: string) => void): Promise<ApiResponse<Application[]>> {
    return makeAuthenticatedRequest<Application[]>(ADMIN_ROUTES.GET_APPLICATIONS, onError);
}

export async function getShops(onError: (error: string) => void): Promise<ApiResponse<Shop[]>> {
    return makeAuthenticatedRequest<Shop[]>(ADMIN_ROUTES.GET_SHOPS, onError);
}

export async function getCategories(onError: (error: string) => void): Promise<ApiResponse<Category[]>> {
    return makeAuthenticatedRequest<Category[]>(ADMIN_ROUTES.GET_CATEGORIES, onError);
}

export async function getProducts(onError: (error: string) => void): Promise<ApiResponse<Product[]>> {
    return makeAuthenticatedRequest<Product[]>(ADMIN_ROUTES.GET_PRODUCTS, onError);
}