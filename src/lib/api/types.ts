export type ApiResponse<T> = {
    data?: T;
    message?: string;
    error?: string;
} 

export interface ShopApiResponse {
    id:          number;
    name:        string;
    description: string;
    image:       string;
    phone:       string;
    userId:      number;
    reviewCount: number;
    products:    Product[];
    user:        User;
    categories:  Category[];
}

export interface Category {
    id:   number;
    name: string;
}

export interface Product {
    id:          number;
    name:        string;
    description: string;
    price:       number;
    salePrice:   number;
    images:      string[];
    reviewCount: number;
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