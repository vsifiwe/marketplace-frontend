import { Category } from "@/components/columns/categories";
import { SELLER_ROUTES } from "./config";
import axios from "axios";
import { CreateProduct, Product } from "@/components/columns/products";

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

export async function getCategories(onError: (error: string) => void): Promise<ApiResponse<Category[]>> {
    return makeAuthenticatedRequest<Category[]>(SELLER_ROUTES.GET_CATEGORIES, onError);
}

export async function getProducts(onError: (error: string) => void): Promise<ApiResponse<Product[]>> {
    return makeAuthenticatedRequest<Product[]>(SELLER_ROUTES.GET_PRODUCTS, onError);
}

export async function createProduct(data: CreateProduct, onSuccess: () => void, onError: (error: string) => void): Promise<ApiResponse<Product[]>> {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.post(SELLER_ROUTES.CREATE_PRODUCT, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 201) {
            onSuccess();
            return {data: response.data as Product[]};
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
