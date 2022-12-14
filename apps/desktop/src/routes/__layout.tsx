import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div
            className="w-screen h-screen bg-bg-accent/50">
            <Outlet />
        </div>
    )
}

export default RootLayout