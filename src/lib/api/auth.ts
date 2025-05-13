import { AUTH_ROUTES } from "./config";
import axios from "axios";
import { toast } from "sonner";

type registerData = {
    name: string;
    email: string;
    password: string;
    role: string;
}

export async function register(data: registerData, onSuccess: () => void, onError: (error: string) => void) {
    try {
        const url = `${AUTH_ROUTES.REGISTER}`;
        const response = await axios.post(url, data);
        console.log("response", response);
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