import { Outlet } from 'react-router'

export default function RootLayout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
