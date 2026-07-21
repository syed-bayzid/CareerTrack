import AuthLayout from "@/layouts/AuthLayout";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Auth/Login";
import Home from "@/pages/homeLayouts/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    },
    {
        path: '/',

        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login
            }, 
            {
                path: ''
            }
        ]
    }
]);