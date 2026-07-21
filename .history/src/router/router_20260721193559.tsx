import RootLayout from "@/layouts/RootLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [0
    },
]);