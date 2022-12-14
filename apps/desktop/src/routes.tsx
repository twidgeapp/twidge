import { RouteObject } from "react-router-dom"
import IndexRoute from "./routes/index"
import RootLayout from "./routes/__layout"
import "./styles.css"
import "@twidge/config/colors.css"
import SetupIndex from "./routes/setup"
import HomeLayout from "./routes/home/__layout"
import HomePage from "./routes/home"

const final_routes: RouteObject[] = [
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <IndexRoute />,
            },
            {
                path: "/setup",
                element: <SetupIndex />
            },
            {
                path: "/home",
                element: <HomeLayout />,
                children: [
                    {
                        path: "/home",
                        element: <HomePage />
                    }
                ]
            }
        ]
    }
]

export default final_routes