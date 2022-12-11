import { Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <div className="w-screen h-screen bg-bg-accent">
            <Outlet />
        </div>
    )
}

export default RootLayout