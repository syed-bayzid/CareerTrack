import { createContext } from "react";
import type { User, UserCredential } from "firebase/auth";

export type AuthContextType = {
    user: User | null;
    loading: boolean;

    createUser: (
        email: string,
        password: string
    ) => Promise<UserCredential>;

    signIn: (
        email: string,
        password: string
    ) => Promise<UserCredential>;

    logout: () => Promise<void>;
};      

export const AuthContext = createContext<AuthContextType | null>(null);