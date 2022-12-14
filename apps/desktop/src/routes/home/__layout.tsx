import { Outlet } from "react-router-dom"

const HomeLayout = () => {
    return (
        <div className="text-white h-full w-full">
            <Outlet />
        </div>
    )
}

export default HomeLayout