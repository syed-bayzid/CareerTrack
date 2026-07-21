import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/homeLayouts/Home";
import Home from "@/pages/homeLayouts/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                component: Home
            }
        ]
    },
]);