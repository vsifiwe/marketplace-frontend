import { Category } from "@/components/columns/categories";
import { SELLER_ROUTES } from "./config";
import axios from "axios";
import { CreateProduct, Product } from "@/components/columns/products";
import { Order } from "@/components/columns/orders";
import type { ApiResponse } from "./types";

export interface Store {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    phone:       string;
    userId:      number;
    reviewCount: number;
    user:        User;
}

export interface User {
    id:        number;
    name:      string;
    email:     string;
    isApplied: boolean;
    createdAt: Date;
    updatedAt: Date;
    password:  string;
    role:      string;
}

export interface CreateStore {
    name: string;
    description: string;
    image: string;
    phone: string;
}

export interface CreateCategory {
    name: string;
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

export const getCategories = async (onError?: (error: string) => void) => {
    try {
        const response = await fetch(`${SELLER_ROUTES.GET_CATEGORIES}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            const error = await response.text();
            onError?.(error);
            return { data: null, error };
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch categories';
        onError?.(errorMessage);
        return { data: null, error: errorMessage };
    }
};

export const createCategory = async (category: CreateCategory, onError?: (error: string) => void) => {
    try {
        const response = await fetch(`${SELLER_ROUTES.CREATE_CATEGORY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            body: JSON.stringify(category),
        });

        if (!response.ok) {
            const error = await response.text();
            onError?.(error);
            return { data: null, error };
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to create category';
        onError?.(errorMessage);
        return { data: null, error: errorMessage };
    }
};

export async function getProducts(onError: (error: string) => void): Promise<ApiResponse<Product[]>> {
    return makeAuthenticatedRequest<Product[]>(SELLER_ROUTES.GET_PRODUCTS, onError);
}

export async function getStore(onError: (error: string) => void): Promise<ApiResponse<Store>> {
    return makeAuthenticatedRequest<Store>(SELLER_ROUTES.GET_STORE, onError);
}

export async function createStore(
    data: CreateStore,
    onSuccess: () => void,
    onError: (error: string) => void
): Promise<void> {
    try {
        const response = await fetch(SELLER_ROUTES.CREATE_STORE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to create store');
        }

        onSuccess();
    } catch (error) {
        onError(error instanceof Error ? error.message : 'Failed to create store');
    }
}

export async function updateStore(id: number, data: Partial<Store>, onSuccess: () => void, onError: (error: string) => void): Promise<void> {
    try {
        const response = await fetch(`${SELLER_ROUTES.UPDATE_STORE}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to update store');
        }

        onSuccess();
    } catch (error) {
        onError(error instanceof Error ? error.message : 'Failed to update store');
    }
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
            return { data: response.data as Product[] };
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

export const getOrders = async (onError?: (error: string) => void) => {
    try {
        const response = await fetch(`${SELLER_ROUTES.GET_ORDERS}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        });

        if (!response.ok) {
            const error = await response.text();
            onError?.(error);
            return { data: null, error };
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to fetch orders';
        onError?.(errorMessage);
        return { data: null, error: errorMessage };
    }
};