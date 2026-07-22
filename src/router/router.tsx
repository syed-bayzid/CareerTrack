import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import AllApplications from "@/pages/Dashboard/AllApplications";
import Dashboard from "@/pages/Dashboard/Dashboard";
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
                path: 'register', 
                Component: Register
            }
        ]
    }, 
    {
        path: '/dashboard', 
        Component: DashboardLayout, 
        children: [
            {
                index: true,
                Component: Dashboard,
            },
            {
                path: '/dashboard/applications', 
                Component: AllApplications,
            }
        ]
    }
]);